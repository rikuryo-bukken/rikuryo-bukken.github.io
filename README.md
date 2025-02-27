# rikuryo-bukken.github.io
## サイトの構造について

```
.
├── README.md
│
├── favicon.ico
├── bukken_logo.webp
│
├── default.css
├── format.css
├── styleForGame.css
│
├── robots.txt
│
│
├── index.html (/default.css /style.css)
├── style.css
├── OGP_image.jpg
├── thumbnail.jpg
│
├── big_poster_ch.webp
│
├── _config.yml
│
├── works
│   ├── images
│   │   └── bukken_logo.webp
│   ├── index.html (/default.css /format.css /works/style.css)
│   └── style.css
│
├── games
│   ├── index.html (/default.css /format.css /games/style.css)
│   ├── style.css
│   ├── OGP_image.jpg
│   └── thumbnail.jpg
│
└── sitemap
    ├── index.html (/default.css /sitemap/style.css)
    └── style.css
```

主要なファイル以外は省略している。

## ver. x.y.z

サイトが期ごとに更新されていることを示すために表示する

x: メジャーバージョン 見た目や操作性に影響を及ぼすような大きな変更やページの追加など  
y: マイナーバージョン 細かな機能向上や部分的な情報の追加やページの修正など  
z: パッチバージョン バグ修正や誤字脱字の訂正など

## /works/script.js

このスクリプトは、紹介文の非表示と、動く画像の初期位置と大きさの設定と、
ul内の各ボタンクリック時の

- 画像のスライドイン/アウト
- liのクラス変更(animationの実行)
- 紹介文の表示

を行っていた。

現在は、javascriptが無効にされていてもページの操作に支障がないように、cssを用いて実装している。

今後複雑なアニメーションを実装したくなったときなどに参考となるよう、ファイルは残している。

## /home/works/style.cssと/home/works/script.jsをつかったページに「コンテンツ」を増やしたいとき

```html
<div>
    <input type="radio" name="grades" id="{n}" value="{n}">
    <label for="{n}">{n}期</label>
    <div>
        <h2>{n}期</h2>
        <section>
            <p>部員数は４人。<br>2024年度六稜祭で大ポスターとストラテジーゲーム・レーシングゲームを展示したほか、当サイトの制作を開始した。</p>
        </section>
        <a class="to_nextPage" href="/{n}/">
            <p>Go to Page</p>
        </a>
        <img src="./bukken_logo.webp" alt="">
    </div>
</div>
```

{n}には卒業期を入れる。
  
画像を添付したければ、

```html
  <img src="./bukken_logo.webp" alt="">
```

の部分を変更する。src属性には画像のパスを、alt属性には適切な文字列を設定する。装飾的な画像や限られた情報価値しかない画像など、意味を持たない画像を添付する場合は、alt属性には空文字列を設定する。

## その他

情報を追加する際は、個人情報や重要情報の映り込みに細心の注意を払うこと。

また、制作物を公開する際は、開発に関わった人と顧問に公開許可を得ること。

特にゲームなどの場合は、有料のアセットなどが含まれていないかどうかを精査すること。

各学年ごとのページは別にリポジトリを作ってつなげてください。
