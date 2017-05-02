/**
 * Mastodon User Timeline Widget
 *
 * @author Azet <https://azet.jp>
 * @param object params_
 *    instance_uri    : the instance to fetch messages from
 *    access_token    : widget's application access token (can be generated from http://azet.jp/mastodon-usertimeline-widget/)
 *    account_id      : user account id to fetch messages of
 *    target_selector : HTML node selector (jquery/css style)
 */
var MastodonApi = function(params_) {
	
	// endpoint access settings
	this.INSTANCE_URI  = params_.instance_uri;
	this.ACCESS_TOKEN  = params_.access_token;
	this.ACCOUNT_ID    = params_.account_id;
	// optional parameters
	this.toots_limit   = params_.toots_limit || 20;

	// display target element
	this.widget = $(params_.target_selector);

	// build the basic widget
	this.makeWidget();
	this.listStatuses();
}


/**
 * build timeline widget
 */
MastodonApi.prototype.makeWidget = function() {
	this.widget.addClass('mastodon-timeline');
	this.widget.append($('<div class="mt-header"><h4>Toots</h4> by <span class="user-link"></span></div>'));
	this.widget.append($('<div class="mt-body"><div class="mt-loading">loading...</div></div>'));
	this.widget.append($('<div class="mt-footer"></div>'));
};


/**
 * listing function
 */
MastodonApi.prototype.listStatuses = function() {
	var mapi = this;

	// get request
	$.ajax({
		url: this.INSTANCE_URI+'/api/v1/accounts/'+this.ACCOUNT_ID+'/statuses'
		,headers: {
			Authorization : 'Bearer '+this.ACCESS_TOKEN
		}
		,method : 'GET'
		,dataType: 'json'
		,data : {
			limit : this.toots_limit
		}
		,success: function(data_) {
			// clear the loading message
			$('.mt-body', mapi.widget).html("");
			//console.log( data_ );

			// add posts
			for(var i in data_) {
				if(i==0) {
					// update user link only at first post
					var account = data_[i].account;
					setHeaderUserLink.call(mapi, account);
					setFooterLink.call(mapi, account);
				}
				appendStatus.call(mapi, data_[i]);
			}

			// fix content link target
			$('a', this.widget).attr('target', '_blank');
		}
		,error: function(d_) {
			//console.log( d_ );
			if(d_.responseJSON) {
				$('.mt-header', mapi.widget).html('ERROR');
				$('.mt-body', mapi.widget).html( '<div class="mt-error">' + d_.responseJSON.error + '</div>');
			}
		}
	});


	/**
	 * add user link
	 * @param object account_
	 */
	var setHeaderUserLink = function(account_) {
		// set user name and link
		$('.user-link', this.widget).append("<a href='"+account_.url+"'>@"+account_.username+"</a>");
	};


	/**
	 * add user link
	 * @param object account_
	 */
	var setFooterLink = function(account_) {
		var domain = this.INSTANCE_URI.replace(/https?:\/\//, '');
		$('.mt-footer', this.widget).append("View on <a href='"+account_.url+"'>"+domain+"</a>");
	};


	/**
	 * inner function to add each message in container
	 * @param object status_
	 */
	var appendStatus = function(status_) {
		//console.log( status_ );
		var content = $(status_.content);

		var date = prepareDateDisplay(status_.created_at);
		var timestamp = $("<div class='mt-date'><a href='"+status_.url+"'>" + date + "</a></div>");

		// status container
		var toot = $("<div class='mt-toot clearfix'></div>");
		// avatar
		var avatar = $("<div class='mt-avatar'></div>");
		avatar.css({
			'background' : "white url('"+status_.account.avatar+"') 50% 50% no-repeat"
			,'background-size' : 'contain'
		});
		// user name and url
		var user = $("<div class='mt-user'><a href='"+status_.account.url+"'>"+status_.account.username+"</a></div>");

		// add to HTML
		toot.append( avatar );
		toot.append( user );
		toot.append( timestamp );
		toot.append( content );
		$('.mt-body', this.widget).append(toot);
	};


	/**
	 * display toot time
	 *
	 * @author Azet
	 * @param StringDate date_ (standard time format)
	 * @return String
	 */
	var prepareDateDisplay = function(date_) {
		var displayTime = "";

		//var now  = new Date();
		var date = new Date( date_ );

		displayTime = date.getFullYear()
			+"/"+(date.getMonth()+1)
			+"/"+date.getDate()
			+" "+date.getHours()
			+":"+("0"+date.getMinutes()).replace(/0(\d{2})/, "$1")
		;

		return displayTime;
	}

};

