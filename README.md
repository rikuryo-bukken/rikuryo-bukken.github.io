# rikuryo-bukken.github.io
### サイトの構造について
```
.
│  big_poster_ch.png
│  bukken_logo.png
│  index.html (/style.css)
│  README.md
│  style.css
│  styleForGame.css
│
└─works
      138_num.png
      139_num.png
      bukken_logo.png
      index.html (/works/style.css /works/script.js)
      script.js
      style.css
```

### ver. x.y.z
サイトが期ごとに更新されていることを示すために表示する
<br>
x: メジャーバージョン 見た目や操作性に影響を及ぼすような大きな変更やページの追加など
<br>
y: マイナーバージョン 細かな機能向上や部分的な情報の追加やページの修正など
<br>
z: パッチバージョン バグ修正や誤字脱字の訂正など
<br>

### /works/script.js
このスクリプトは、紹介文の非表示と、動く画像の初期位置と大きさの設定と、
ul内の各ボタンクリック時の
<br>
    ・画像のスライドイン/アウト
    <br>
    ・liのクラス変更(animationの実行)
    <br>
    ・紹介文の表示
    <br>
を行っている
<br>
cssのanimationを使えばもっと簡単に実装できたのかもしれないが、ここではあえてそうしなかった。
煩わしく思ったら後の世代の人が変更してください

### /home/works/style.cssと/home/works/script.jsをつかったページに「コンテンツ」を増やしたいとき
```
<li id="c{n}" class="toggleOffContent">
    <p><button class="toggleButton" id="c{n}_button">...</button></p>
    <div id="c{n}_intro">
        <section>
            <p>...</p>
        </section>
        <a class="to_nextPage" href="./{...}/index.html">
            <p>Go to Page</p>
        </a>
    </div>
</li>
```
{n}には一つ前のコンテンツのnに対してn+1を入れる
<br>
```
例："c{n}_intro" => "c{n+1}_intro"
```
<br>
他に{}がついているところは空気読んで変更してね
  
画像を添付したければ、
<br>
```
  <ul id="contents">
      ...
      <img class="moving_img" id="c{n}_pic" name="{a}" src="{...}" alt="{...}">
  </ul>
```
<br>
のように、"contents"ボックスの終わりに書く
{n}は先程と同様、{a}はscript.js内での指定に使う

画像の大きさを指定したければ、
script.jsのimgNameCheckListに
a,大きさ(ビューポートheight)を記入する
どちらも""で囲うこと。


### その他
情報を追加する際は、個人情報や重要情報の映り込みに細心の注意を払うこと。
また、制作物を公開する際は、開発に関わった人と顧問に公開許可を得ること。
特にゲームなどの場合は、有料のアセットなどが含まれていないかどうかを精査すること。
各学年ごとのページは別にリポジトリを作ってつなげてください。
