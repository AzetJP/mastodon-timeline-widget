[English version](README_en.md)

# Mastodon.widgetについて

このJSで作られたウィジェットはあなたのホームページにマストドンのタイムラインを表示します。

## 要件

 - jQuery
 - ウィジェットに表示したいマストドンのインスタンスのアクセストークン

設定がしやすい用に、ウィザードを作りましたので、よろしければご利用下さい。  
[Azet.jpのマストドンウィジェットウィザード](http://www.azet.jp/mastodon.wizard/wizard_jp.html)

## 設定

1) 必要なファイルをダウンロードをして下さい(CSSファイルとJSファイル).

2) 下記のコードをホームページに入れてください：

```html
<link rel="stylesheet" href="mastodon.widget.css">
<script type="text/javascript" src="mastodon.widget.js"></script>
<script type="text/javascript" src="mastodon.widget-jp.js"></script>
<script>
	$(document).ready(function() {
		// jQUERY is required!
		var mapi = new MastodonApi({
			target_selector          : '#myTimeline'
			,instance_uri            : '[マストドンのインスタンスURL]'
			,access_token            : '[アクセストークン]'
			,account_id              : '[ユーザのアカウントID]'
			// === optional parameters ===
			//,toots_limit           : 5
			// 下記のサンプルはhttp://fontawesome.io使用
			//,pic_icon              : '<i class="fa fa-picture-o"></i>' 
			//,boosts_count_icon     : '<i class="fa fa-retweet"></i>'
			//,favourites_count_icon : '<i class="fa fa-star"></i>'
		});
	});
</script>
```

上記のサンプルコードに、下記の情報を正しく設定して下さい：

 - [マストドンのインスタンスURL] => 例: https://mastodon.technology
 - [アクセストークン] => マストドンのインスタンスのアクセストークン
 - [ユーザのアカウントID]   => タイムラインの表示したいユーザのID

3) タイムラインの為に、DIVのコンテナを追加して下さい：

```html
    <div id="myTimeline" class="mastodon-timeline mastodon-timeline-dark"></div>
```

`mastodon-timeline-dark` の代わりに、 `mastodon-timeline-light` のテーマも用意しております。

### パラメータ一覧

下記のパラメータが任意です。

| パラメータ名          | 規定         | 説明 |
|---                    |---           |---   |
| toots_limit           | 20           | 最大トゥーツ表示数 |
| pic_icon              | [picture]    | 画像のアイコン |
| boosts_count_icon     | [boost]      | ブースト数のステータスタイトル|
| favourites_count_icon | [favourite]  | お気に入り数のステータスタイトル|

`pic_icon` の場合は、`<img src="mypicicon.gif" />` のような設定ができます。  
[font-awesome](http://fontawesome.io)をご利用の方は`<i class="fa fa-picture-o"></i>` を設定もできます。  
同じく、 `boosts_count_icon` と `favourites_count_icon` の設定もできます。

## カスタマイズ

### テーマ

以下の2つのテーマが用意されております：

 - mastodon-timeline-light
 - mastodon-timeline-dark

又は、オリジナルテーマ作成も可能です。詳しくはCSSファイルを参照下さい。

### フォント

他のフォントを使いたい方にはGoogleの`Noto Sans Japanese`フォントを準備させて頂きました。  
下記のHTMLを追加して下さい：(`HEAD`タグの中に、`mastodon.widget.css`の前に)

```html
<!-- Noto Sans Japanese -->
<link rel="stylesheet" href="//fonts.googleapis.com/earlyaccess/notosansjapanese.css">
```

### 言語サポート

別JSファイルで英語以外の設定もできます。  
例えば、日本語用のファイル`mastodon.widget-jp.js`には下記の設定が含めております：

```javascript
MastodonApi.text = {
	spoilerBtnClosed  : "もっと見る"
	,spoilerBtnOpened : "隠す"
	,nsfwLabel        : "閲覧注意"
	,nsfwViewMsg      : "クリックして表示"
};
```

`mastodon.widget.js`の後で、`<script>`タグを読み込んで下さい。
