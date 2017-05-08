[English version](README_en.md)

# Mastodon.widgetについて

このJSで作られたウィジェットは自分のホームページに自分のタイムラインを表示します。

## 要件

 - jQuery
 - ステータスの表示したいマストドンのインスタンスのアクセストーケン

設定がしやすい用に、ウィザードを作りましたので、よろしければご利用下さい。  
[Azet.jpのマストドンウィジェットウィザード](https://azet.jp/mastodon.wizard/wizard_jp.html)

## 設定

1) 必要のファイルをダウンロードをして下さい(CSSファイルとJSファイルは1つずつ).

2) 下記のコードをホームページに入れてください：


	<link rel="stylesheet" href="mastodon.widget.css">
	<script type="text/javascript" src="mastodon.widget.js"></script>
	<script>
		$(document).ready(function() {
			// jQUERY is required!
			var mapi = new MastodonApi({
				target_selector  : '#myTimeline'
				,instance_uri    : '[マストドンのインスタンスURL]'
				,access_token    : '[アクセス　トーケン]'
				,account_id      : '[ユーザのアカウントID]'
				// optional parameters
				//,toots_limit     : 5
			});
		});
	</script>

以上のサンプルの中に、下記の情報を正しく設定して下さい：

 - [マストドンのインスタンスURL] => 例: https://mastodon.technology
 - [アクセス　トーケン] => マストドンのインスタンスのアクセストーケン
 - [ユーザのアカウントID]   => タイムラインの表示したいユーザのID

3) タイムラインの為に、DIVのコンテナを追加して下さい：

    <div id="myTimeline" class="mastodon-timeline mastodon-timeline-dark"></div>

## カストマイズ

以下の2つのテーマが用意されております：

 - mastodon-timeline-light
 - mastodon-timeline-dark

又は、オリジナルテーマ作成も可能です。詳しくはCSSファイルを参照下さい。

