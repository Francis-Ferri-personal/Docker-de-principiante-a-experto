// function for twitter link
function createTwitterLink(params, productDescription) {
	var twitterURL = $('input#twitterURL').val();
	var twitterMsg = $('input#twitterMsg').val();
	var hashMsg = $('input#twitterHashTag').val();
	var twitterVia=$('input#twitterVia').val();
	var browserUrl = $('input#browserUrl').val();
	
	browserUrl = browserUrl + params;
	if(twitterURL != 'undefined' && twitterURL != "" && twitterMsg != 'undefined' && hashMsg != 'undefined')
 		{
		var tempUrl = twitterURL + encodeURI("original_referer=" + browserUrl + "&text="
						+ twitterMsg +" @"+twitterVia+" &tw_p=tweetbutton&url="
						+ browserUrl + "&hashtags=" + hashMsg);
		popup(tempUrl, 'twitter', 655, 300, true);
	}
}




//function for twitter link for articles and Videos
function createArticleTwitterLink(params, productDescription) {
	var twitterURL = $('input#twitterURL').val();
	var twitterMsg = $('input#twitterMsg').val();
	var hashMsg = $('input#twitterHashTag').val();
	var twitterVia=$('input#twitterVia').val();
	var browserUrl = $('input#browserUrl').val();
	
	browserUrl = browserUrl + params;
	if(twitterURL != 'undefined' && twitterURL != "" && twitterMsg != 'undefined' && hashMsg != 'undefined')
 	{
		var encodedURI = encodeURI("original_referer=" + browserUrl + "&tw_p=tweetbutton&url="	+ browserUrl + "&text=");
		var encodedDescription = encodeURI(productDescription +", by @"+twitterVia);
		encodedDescription = encodedDescription.replace("&", "%26");				
		var twitterURLString = encodedURI + encodedDescription		
		var tempUrl = twitterURL+twitterURLString;
		popup(tempUrl, 'twitter', 655, 300, true);
	}
}


/**************************************************************
 * Start of function for pinterest url and media***************
 *************************************************************/
function createPinterestLink(params,imageUrl,productDescription){
	var pinterestURL = $('input#pinterestURL').val();
	var pinterestVia = $('input#pinterestVia').val();	
	var browserUrl = $('input#browserUrl').val();
	
	browserUrl = browserUrl + params;
	//productDescription = "Storing Nuts & Seeds"
	if(pinterestURL != 'undefined' && pinterestURL != "" && pinterestVia!='undefined')
	{
		var encodedURI = encodeURI("url="+browserUrl+"&media="+imageUrl+"&maskuse=off&wid=1119&size=1121,1254&fit=crop&qlt=70,0&description=");
		var encodedDescription = encodeURI(productDescription +" by @"+ pinterestVia);		
		encodedDescription = encodedDescription.replace("&", "%26");
		var pinterestURLString = encodedURI + encodedDescription
		var tempUrl = pinterestURL+pinterestURLString;	
		popup(tempUrl, 'pinterest', 655, 300, true);
	}
}
/**************************************************************
 * End of function for pinterest url and media***************
 *************************************************************/



$(document).ready(function() {
	
	window.fbAsyncInit = function() {
		// init the FB JS SDK
		FB.init({
			appId : '285140601635770', // App ID from the app dashboard
			status : true, // Check Facebook Login status
			xfbml : true
		});

		// Additional initialization code such as adding Event Listeners goes here
	};

	// function for facebook like
	(function(d, s, id){
	    var js, fjs = d.getElementsByTagName(s)[0];
	    if (d.getElementById(id)) {return;}
	    js = d.createElement(s); js.id = id;
	    js.src = "//connect.facebook.net/en_US/all.js";
	    fjs.parentNode.insertBefore(js, fjs);
	  }(document, 'script', 'facebook-jssdk'));
	
});


