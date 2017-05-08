# Mastodon.widget

The idea of this little script is to allow users to display their Mastodon timeline on their blog/website.

You can use our wizard to generate an access token very easily. Simply follow the link below:  
[Azet.jp's Mastodon Widget Generator](https://azet.jp/mastodon.wizard/wizard_en.html)

## Requirements

 - jQuery
 - access token from the mastodon instance you want to display the timeline from

To help you create a token, we'll soon provide a page on our website that will guide you through the requiered steps.

## Installation

1) Download the required files (only one JS and one CSS).

2) Simply paste the code bellow in you website:


	<link rel="stylesheet" href="mastodon.widget.css">
	<script type="text/javascript" src="mastodon.widget.js"></script>
	<script>
		$(document).ready(function() {
			// jQUERY is required!
			var mapi = new MastodonApi({
				target_selector  : '#myTimeline'
				,instance_uri    : '[MASTODON INSTANCE]'
				,access_token    : '[ACCESS TOKEN]'
				,account_id      : '[ACCOUNT ID]'
				// optional parameters
				//,toots_limit     : 5
			});
		});
	</script>

In the sample above, you have to replace the folowing:

 - [MASTODON INSTANCE] => i.e : https://mastodon.technology
 - [ACCESS TOKEN] => token you created for your app and linked with your Mastodon instance account
 - [ACCOUNT ID]   => your user ID on Mastodon instance

3) Add a container for your timeline where you want in the body of your website:

    <div id="myTimeline" class="mastodon-timeline mastodon-timeline-dark"></div>

## Customization

You have the choice between 2 basic themes:

 - mastodon-timeline-light
 - mastodon-timeline-dark

Or you can create your own. Please have a look in the CSS file for more details.
