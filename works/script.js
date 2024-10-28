const contents_box_RectData = document.querySelector("#contents").getBoundingClientRect();
const contents_li_sample_RectData = document.querySelector("#contents li").getBoundingClientRect();
const buttons = document.querySelectorAll(".toggleButton");
const intros = document.querySelectorAll("#contents li div");
const movingImgs = document.querySelectorAll(".moving_img");
const imgNameCheckList = ["bukken_logo", "80", "strategy", "40", "racing", "60", "others", "50"];

buttons.forEach((button, i) => {
  button.addEventListener('click', () => {
    next = FirstContentIndex + i;
    if (document.querySelector(`#c${next} details`).open == false) {
      open(current, next);
      current = next;
    }
  }, false);

});



let current;
let next;
const FirstContentIndex = 0;


//(現在開いているコンテンツのindex,クリックしたコンテンツのindex)
function open(current, next) {
  if (current != undefined) {
    document.querySelector(`#c${current} details`).open = false;
  }
}