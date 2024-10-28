const contents_box_RectData = document.querySelector("#contents").getBoundingClientRect();
const contents_li_sample_RectData = document.querySelector("#contents li").getBoundingClientRect();
const buttons = document.querySelectorAll(".toggleButton");
const intros = document.querySelectorAll("#contents li div");
const movingImgs = document.querySelectorAll(".moving_img");
const imgNameCheckList = ["bukken_logo", "80", "strategy", "40", "racing", "60", "others", "50"];

intros.forEach(intro => {
  intro.style.display = "none";
})
buttons.forEach((button, i) => {
  button.addEventListener('click', () => {
    next = FirstContentIndex + i;
    if (!done) {
      botherd = true;
    }
    done = !done;
    if (intros[i].style.display == "none") {
      open(current, next);
      current = next;
    } else {
      close(current);
    }
  }, false);

});

movingImgs.forEach((img, j) => {
  for(let i = 0; i < movingImgs.length + 1; i++){
    if(img.name == imgNameCheckList[i * 2]){
      img.style.height = imgNameCheckList[i * 2 + 1] + "vh";
      img.style.width = "auto"; 
    }
  }
  console.log(img)
  img.style.top = buttons[j].getBoundingClientRect().top + "px";
})



let picture;
let start, previousTimeStamp;
let done = true;
let botherd = false;
let current;
let next;
const movingPictureOffsetX = -10;
const PictureDirectionPosition = contents_li_sample_RectData.left + contents_li_sample_RectData.width + movingPictureOffsetX;
const PictureOriginPosition = contents_box_RectData.left + contents_box_RectData.width + movingPictureOffsetX;
const PictureMovingDistance = PictureOriginPosition - PictureDirectionPosition;
const PictureMoveSpeed = 0.01;
const FirstContentIndex = 0;

movingImgs.forEach(img => {
  img.style.transform = `translateX(${PictureOriginPosition}px)`;

})

function slideIn(timestamp) {
  if (start === undefined) {
    start = timestamp;
  }

  const elapsed = timestamp - start;


  if (previousTimeStamp !== timestamp) {
    const count = Math.min(PictureMovingDistance * (1 - 1 / (1 + elapsed * PictureMoveSpeed)) + 40, PictureMovingDistance);
    picture.style.transform = `translateX(${PictureOriginPosition - count}px)`;
    picture.style.opacity = `${count / PictureMovingDistance}`;

    if (count === PictureMovingDistance) {
      done = true;
    }
  }

  previousTimeStamp = timestamp;
  if (!done) {
    window.requestAnimationFrame(slideIn);
  } else {
    if (botherd) {
      done = false;
      botherd = false;
    } else {
      picture.style.transform = `translateX(${PictureDirectionPosition}px)`;
      picture.style.opacity = "1.0";
    }
  }

}

function slideOut(timestamp) {
  if (start === undefined) {
    start = timestamp;
  }
  const elapsed = timestamp - start;

  if (previousTimeStamp !== timestamp) {
    const count = Math.min(PictureMovingDistance * (1 - 1 / (1 + elapsed * PictureMoveSpeed)) + 40, PictureMovingDistance);

    picture.style.transform = `translateX(${PictureDirectionPosition + count}px)`;
    picture.style.opacity = `${(PictureMovingDistance - count) / PictureMovingDistance}`;
    if (count === PictureMovingDistance) {
      done = true;
    }
  }

  previousTimeStamp = timestamp;
  if (!done) {
    window.requestAnimationFrame(slideOut);
  } else {
    picture.style.transform = `translateX(${PictureOriginPosition}px)`;
    picture.style.opacity = "0.0";
    if (botherd) {
      done = false;
      botherd = false;
    }
  }

}

//(現在開いているコンテンツのindex,クリックしたコンテンツのindex)
function open(current, next) {
  if (current != undefined) {
    document.querySelector(`#c${current}_intro`).style.display = "none";
    document.querySelector(`li:has(#c${current}_intro)`).className = "toggleOffContent";
    picture = document.querySelector(`#c${current}_pic`);
    picture.style.transform = `translateX(${PictureOriginPosition})`;
    picture.style.opacity = "0.0";
    start = undefined;
  }
  document.querySelector(`#c${next}_intro`).style.display = "block";
  document.querySelector(`li:has(#c${next}_intro)`).className = "toggleOnContent";
  picture = document.querySelector(`#c${next}_pic`);
  window.requestAnimationFrame(slideIn);

}
//上のcurrentと同意味
function close(current) {
  document.querySelector(`#c${current}_intro`).style.display = "none";
  document.querySelector(`li:has(#c${current}_intro)`).className = "toggleOffContent";
  picture = document.querySelector(`#c${current}_pic`);
  window.requestAnimationFrame(slideOut);
  start = undefined;
}
