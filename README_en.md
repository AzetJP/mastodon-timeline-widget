# Mastodon.widget

The idea of this little script is to allow users to display their Mastodon timeline on their blog/website.

## Requirements

 - jQuery
 - access token from the mastodon instance you want to display the timeline from

You can use our wizard to generate an access token very easily. Simply follow the link below:  
[Azet.jp's Mastodon Widget Wizard](http://www.azet.jp/mastodon.wizard/wizard_en.html)

## Installation

1) Download the required files (JS and CSS files in the archive).

2) Simply paste the code bellow in you website:

```html
<link rel="stylesheet" href="mastodon.widget.css">
<script type="text/javascript" src="mastodon.widget.js"></script>
<script>
	$(document).ready(function() {
		// jQUERY is required!
		var mapi = new MastodonApi({
			target_selector          : '#myTimeline'
			,instance_uri            : '[MASTODON INSTANCE]'
			,access_token            : '[ACCESS TOKEN]'
			,account_id              : '[ACCOUNT ID]'
			// === optional parameters ===
			//,toots_limit           : 5
			// samples below require http://fontawesome.io
			//,pic_icon              : '<i class="fa fa-picture-o"></i>'
			//,boosts_count_icon     : '<i class="fa fa-retweet"></i>'
			//,favourites_count_icon : '<i class="fa fa-star"></i>'
		});
	});
</script>
```

In the sample above, you have to replace the folowing:

 - [MASTODON INSTANCE] => i.e : https://mastodon.technology
 - [ACCESS TOKEN] => token you created for your app and linked with your Mastodon instance account
 - [ACCOUNT ID]   => your user ID on Mastodon instance

3) Add a container for your timeline where you want in the body of your website:

```html
    <div id="myTimeline" class="mastodon-timeline mastodon-timeline-dark"></div>
```

Instead of the theme `mastodon-timeline-dark`, we provide a light theme `mastodon-timeline-light` as well.

### Available parameters

The parameters below are optional.

| Parameter name        | Default      | Explanation |
|---                    |----          |---          |
| toots_limit           | 20           | maximum number of visible toots |
| pic_icon              | [picture]    | icon to be displayed when medias are attached |
| boosts_count_icon     | [boost]      | boosts count status header entry |
| favourites_count_icon | [favourite]  | favourites count status header entry |

Regarding `pic_icon`, you can use an image you have on your server like so: `<img src="mypicicon.gif" />`.  
Or you can also use [font-awesome](http://fontawesome.io) and set `<i class="fa fa-picture-o"></i>`.  
Same goes for `boosts_count_icon` and `favourites_count_icon`.

## Customization

You have the choice between 2 basic themes:

 - mastodon-timeline-light
 - mastodon-timeline-dark

Or you can create your own. Please have a look in the CSS file for more details.

### Languages supported

In a separate file, you can setup the text to support a different language.  
For example, in the Japanese file `mastodon.widget-jp.js` we can find the folowing settings:

```javascript
MastodonApi.text = {
	spoilerBtnClosed  : "もっと見る"
	,spoilerBtnOpened : "隠す"
	,nsfwLabel        : "閲覧注意"
	,nsfwViewMsg      : "クリックして表示"
};
```

Please be sure to insert the translation javascript file `<script>` tag after `mastodon.widget.js`.
