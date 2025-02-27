# rikuryo-bukken.github.io

## ページ更新の際の注意点

- 情報を追加する際は、個人情報や重要情報の映り込みに細心の注意を払うこと。
- また、制作物を公開する際は、開発に関わった人と顧問に公開許可を得ること。
- 特にゲームなどの場合は、有料のアセットなどが含まれていないかどうかを精査すること。

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

## 新たに期のページを作成するとき

期のページはトップページなどがあるレポジトリ（rikuryo-bukken.github.io）とは別のレポジトリに作成する。

期のページを作成したときは、学年ごとページ一覧（/works/）を更新する。

### 学年ごとページ一覧（/works/）の更新方法

`<div id="menu">`と`</div>`で囲まれた部分の一番上に、以下のコードを挿入する。

```html
<div>
    <input type="radio" name="grades" id="{grade}" value="{grade}" checked>
    <label for="{grade}">{grade}期</label>
    <div>
        <h2>{grade}期</h2>
        <section>
            <p>{紹介文を入力}</p>
        </section>
        <a class="to_nextPage" href="/{grade}/">
            <p>Go to Page</p>
        </a>
        <img src="./images/bukken_logo.webp" alt="">
    </div>
</div>
```

`{grade}`には卒業期の番号を、{紹介文を入力}があるsectionタグには紹介文を記述する。紹介文は、この後も適宜更新すること。

また、imgのsrc属性は期の画像のパスを設定する。期の画像はimagesフォルダの中に入れ、ファイル名は卒業期の番号から始めること。

コードを挿入した後は、1つ前のdivタグの中のinputタグについているchecked属性を削除する。これにより、ページを表示したときに最初に最新の期が選択された状態になる。

## 新たにゲームのページを作成するとき

期のトップページにゲームのページへのリンクを追加するだろうが、基本的には、ゲーム集（/games/）にもリンクを追加する。

### ゲーム集の編集方法

`<dl>`と`</dl>`で囲まれた部分の一番上に、以下のコードを挿入する。

```html
<dt>{game title}</dt>
<dd>ゲームの説明</dd>
<dd class="weak">ゲーム制作についてなど追加の説明があれば</dd>
<dd>推奨環境などあれば</dd>
<dd class="link"><a href="/{grade}/{new_game}">ゲームはこちらからプレイ可能</a></dd>
```

`{game title}`にはゲームのタイトルを、ddタグは適宜追加したり削除したりしながらゲームの説明を、aタグの`/{grade}/{new_game}`にはゲームのページへのリンクをそれぞれ入力する。

## /sitemap/

期のページを作成したりゲームのページを作成したりと、新たにページを作成したとき（削除したときも）は、サイトマップを更新する。

サイトマップは順序なしリストを使ってサイト構造を記述するだけであるから、詳しい説明は記載しない。

## /default.css

フォントの設定など、サイト内の全ページに適用するスタイルファイル。

見た目に関してはほとんど変更していないので、期ごとのページでも読み込んでおくと良いと思うが、他の設定をしたい場合は使用しなくてよい。

## /format.css

このファイルをページで読み込むと、ページの右側（画面の幅が小さいスマホなどでは下）にサイドバーを設置し、角が丸い四角で縁取るなどのデザインが可能。

### htmlファイル

このformat.cssファイルを使用する際には、以下のようにhtmlファイルを記述する。

まず、（一般的には）headタグ内に、以下のようにしてcssファイルを読み込む。

```html
<link rel="stylesheet" href="/format.css">
```

次に、bodyタグ内は以下のようにタグを構成する。

```html
<body>
    <div id="main_contents">
        <div id="contents">
            ＜ページの内容＞
        </div>
    </div>
    <div id="sub_contents">
        <nav id="pager">
            <ul>
                <li><a href="/">トップページ</a></li>
            </ul>
            <ul>
                <li><a href="/sitemap/">サイトマップ</a></li>
            </ul>
        </nav>
    </div>
</body>
```

ページの内容が記述されるのは＜ページの内容＞の部分である。

id属性がpagerのタグ内には、ulタグを追加しても削除してもよい。基本的には、1つ目のulタグにはパンくずリスト（記述の仕方は138期のページなどを参考のこと）を、2つ目のulタグにはサイトマップを記述する。なお、ulタグ以外を追加するのは不可である。