webpackJsonp([22],{1955:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return U});var r,o=n(15),i=n.n(o),a=n(2),s=n.n(a),c=n(3),d=n.n(c),u=n(4),l=n.n(u),p=n(5),f=n.n(p),m=n(10),g=n.n(m),h=n(6),v=n.n(h),y=n(1),b=n.n(y),E=n(0),_=n.n(E),O=n(11),I=n(13),w=n.n(I),S=n(72),j=n.n(S),P=n(18),k=n(14),C=n.n(k),A=n(698),T=n(2028),D=n(257),L=n(12),M=n(424),x=n.n(M),R=n(2001),N=n(2332),Z=n(2333),F=(n.n(Z),n(2e3)),B=n(2076),V=n(2062),K=n(2002),G=n(2105);function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var U=Object(O.connect)(function(e,t){var n=t.params.gfyId.toLowerCase(),r=Object(L.h)(e,n);return{gfyId:n,gfyItem:r,mobile:Object(L.q)(e),cleanContent:Object(V.c)(r),renderAds:Object(L.L)(e)}})(r=Object(D.a)("pageview_iframe",void 0,function(e,t){return{context:Object(G.a)(e.gfyItem.gatekeeper)}})(r=function(e){function t(e){var n;s()(this,t),n=l()(this,f()(t).call(this,e)),b()(g()(n),"enableAd",!1),b()(g()(n),"showAdCondition",!1),b()(g()(n),"firstMouseEntered",!1),b()(g()(n),"getAdConfig",function(){var e=n.props,t=e.gfyItem,r=e.isLoggedIn;return{allaudiences:Object(B.a)(t),account:r}});var r=n.props.location.query;if(n.playerProps=Object(T.b)(r),n.handleMouseEnter=n.handleMouseEnter.bind(g()(n)),n.handleMouseLeave=n.handleMouseLeave.bind(g()(n)),n.enableAd){n.showAdCondition=Math.random()<=.1}return n.state={isAdVisible:!1},n}return v()(t,e),d()(t,[{key:"componentDidMount",value:function(){this.props.cleanContent&&this.props.renderAds&&this.showAdCondition&&K.a.initAds(this.getAdConfig())}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.renderAds,r=t.cleanContent;n!==e.renderAds&&n&&r&&this.showAdCondition&&K.a.initAds(this.getAdConfig())}},{key:"componentWillUnmount",value:function(){clearTimeout(this.hideAdTimer),this.props.cleanContent&&this.props.renderAds&&this.showAdCondition&&K.a.clearAds()}},{key:"handleMouseEnter",value:function(){clearTimeout(this.hideAdTimer),this.firstMouseEntered||(this.firstMouseEntered=!0),this.setState({isAdVisible:!0})}},{key:"handleMouseLeave",value:function(){var e=this;clearTimeout(this.hideAdTimer),this.hideAdTimer=setTimeout(function(){e.setState({isAdVisible:!1})},3e3)}},{key:"render",value:function(){var e=this.props,t=e.gfyItem,n=e.mobile,r=e.renderAds,o=e.cleanContent,a=t.gfyId,s=t.hasTransparency,c=t.views,d=this.state.isAdVisible;return _.a.createElement("div",{className:w()("iframe-container",{"has-transparency":s}),onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave},_.a.createElement(j.a,Object(N.a)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach(function(t){b()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},t))),_.a.createElement(_.a.Fragment,null,_.a.createElement(T.a,i()({gfyItem:t},this.playerProps,{logo:!1})),_.a.createElement("div",{className:"iframe__bottom"},_.a.createElement(A.a,{views:c}),!n&&o&&r&&this.showAdCondition&&this.firstMouseEntered?_.a.createElement("div",{className:w()("iframe-desktop-bottom-adunit",{visible:d})},_.a.createElement(R.a,{id:F.a.DESKTOP_IFRAME_BOTTOM})):null,_.a.createElement(P.Link,{to:"/".concat(a),target:"_blank"},_.a.createElement(C.a,{className:"ic logo",svg:x.a})))))}}]),t}(E.Component))||r)||r},2000:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"c",function(){return s}),n.d(t,"a",function(){return E});var r,o=n(1),i=n.n(o),a={SIZE_300_250:"300x250",SIZE_300_100:"300x100",SIZE_320_50:"320x50",SIZE_728_90:"728x90",SIZE_400_300:"400x300"},s=(r={},i()(r,a.SIZE_300_250,[300,250]),i()(r,a.SIZE_300_100,[300,100]),i()(r,a.SIZE_320_50,[320,50]),i()(r,a.SIZE_728_90,[728,90]),i()(r,a.SIZE_400_300,[400,300]),r),c="/21732935168/gfycat_desktop",d="/21732935168/Gfycat_Desktop_728x90",u="/21732935168/Gfycat_Mobile_320x50",l="/21732935168/Gfycat_MobileSearch_320x50",p="/21732935168/Newpages_ABF",f="/21732935168/Category_page",m="div-gpt-ad-1536793174405-0",g="div-gpt-ad-1539831873986-0",h="div-gpt-ad-1557883006889-0",v="div-gpt-ad-1558157128054-0",y="div-gpt-ad-1540311296874-0",b="div-gpt-ad-1540917940531-0",E={DESKTOP_FEED_TOP:"gfy-dt-feed-top",DESKTOP_FEED_SIDE:"gfy-dt-feed-side",MOBILE_FEED_TOP:"gfy-m-feed-top",DESKTOP_DISCOVER_TOP:"gfy-dt-discover-top",MOBILE_DISCOVER_TOP:"gfy-m-discover-top",DESKTOP_SHARE_TOP:"gfy-dt-sharepage-top",DESKTOP_SHARE_SIDE:"gfy-dt-sharepage-side",MOBILE_SHARE:"gfy-m-sharepage",DESKTOP_IFRAME_BOTTOM:"gfy-player-bottom"},_="67869",O="67868",I="67871",w=605440,S=605439,j=605441,P=function(e){return{bidder:"appnexus",params:{placementId:e}}},k=function(e){return{bidder:"audienceNetwork",params:{placementId:e}}},C=function(e){return{bidder:"consumable",params:{unitId:e.unitId,unitName:e.unitName,zoneIds:e.zoneIds,siteId:"2000766",networkId:"9969"}}},A=function(e){return{bidder:"onedisplay",params:{placement:e,network:"11545.1"}}},T=function(e){return{bidder:"pubmatic",params:{publisherId:"157495",adSlot:e}}},D=function(e){return{bidder:"sovrn",params:{tagid:e}}},L=function(e){return{bidder:"emx_digital",params:{tagid:e}}};s[a.SIZE_300_250],P("13955672"),C({unitId:"5985",unitName:"cnsmbl-audio-300x250-slider",zoneIds:[2001202]}),A("4949948"),T("".concat(m,"@300x250")),D(S),L(O),s[a.SIZE_728_90],P("14183443"),C({unitId:"5986",unitName:"cnsmbl-audio-728x90-slider",zoneIds:[2001203]}),A("4979045"),T("".concat(g,"@728x90")),D(w),L(_),s[a.SIZE_300_250],P("13955672"),C({unitId:"5985",unitName:"cnsmbl-audio-300x250-slider",zoneIds:[2001202]}),A("4949948"),T("".concat(v,"@300x250")),D(S),L(O),s[a.SIZE_728_90],P("14183443"),C({unitId:"5986",unitName:"cnsmbl-audio-728x90-slider",zoneIds:[2001203]}),A("4979045"),T("".concat(h,"@728x90")),D(w),L(_),s[a.SIZE_320_50],P("14244150"),k("470011803533799_470532430148403"),C({unitId:"5987",unitName:"cnsmbl-audio-320x50-slider",zoneIds:[2001204]}),A("4985060"),T("".concat(y,"@320x50")),D(j),L(I),s[a.SIZE_320_50],P("14304874"),k("470011803533799_470532430148403"),C({unitId:"5987",unitName:"cnsmbl-audio-320x50-slider",zoneIds:[2001204]}),A("4998446"),T("".concat(b,"@320x50")),D(j),L(I),s[a.SIZE_300_250],s[a.SIZE_728_90],s[a.SIZE_728_90],s[a.SIZE_300_250],s[a.SIZE_320_50],s[a.SIZE_320_50]},2001:function(e,t,n){"use strict";n.d(t,"a",function(){return k});var r,o,i=n(2),a=n.n(i),s=n(3),c=n.n(s),d=n(4),u=n.n(d),l=n(5),p=n.n(l),f=n(10),m=n.n(f),g=n(6),h=n.n(g),v=n(1),y=n.n(v),b=n(0),E=n.n(b),_=n(9),O=(n.n(_),n(11)),I=n(2003),w=n(2004),S=n(2e3),j=n(12),P=(r={},y()(r,S.a.DESKTOP_DISCOVER_TOP,S.b.SIZE_728_90),y()(r,S.a.MOBILE_DISCOVER_TOP,S.b.SIZE_320_50),y()(r,S.a.DESKTOP_FEED_TOP,S.b.SIZE_728_90),y()(r,S.a.MOBILE_FEED_TOP,S.b.SIZE_320_50),y()(r,S.a.DESKTOP_FEED_SIDE,S.b.SIZE_300_250),y()(r,S.a.DESKTOP_SHARE_TOP,S.b.SIZE_728_90),y()(r,S.a.DESKTOP_SHARE_SIDE,S.b.SIZE_300_250),y()(r,S.a.MOBILE_SHARE,S.b.SIZE_320_50),y()(r,S.a.DESKTOP_IFRAME_BOTTOM,S.b.SIZE_320_50),r),k=Object(O.connect)(function(e){return{isNotPro:Object(j.u)(e),shouldRenderAds:Object(j.L)(e)}})(o=function(e){function t(e){var n;return a()(this,t),n=u()(this,p()(t).call(this,e)),y()(m()(n),"state",{renderAd:!1}),y()(m()(n),"updateRenderAd",function(){n.setState({renderAd:!0})}),n.props.shouldRenderAds&&n.loadAdLibraries(),n}return h()(t,e),c()(t,[{key:"componentDidMount",value:function(){this.props.isNotPro;this.props.shouldRenderAds&&this.updateRenderAd()}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.isNotPro,r=t.shouldRenderAds;r!==e.shouldRenderAds&&!0===r&&this.loadAdLibraries(),n!==e.isNotPro&&r&&this.updateRenderAd()}},{key:"loadAdLibraries",value:function(){I.a.load(),w.a.load()}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.id,r=S.c[P[n]];return this.state.renderAd?E.a.createElement("div",{className:t,"adbridg-ad-class":n,style:{width:"".concat(r[0],"px"),height:"".concat(r[1],"px")}}):null}}]),t}(b.PureComponent))||o},2002:function(e,t,n){"use strict";var r=n(2),o=n.n(r),i=n(1),a=n.n(i);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var c=function e(){var t=this;if(o()(this,e),a()(this,"_spaStart",function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={};for(var n in e)try{t[n]=e[n].toString()}catch(r){t[n]=e[n]}window.AdBridg.cmd.push({action:"spa_pv_initialize",config:{targeting:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach(function(t){a()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},{account:"false",allaudiences:"false"},{},t)}})}),a()(this,"_spaStop",function(){window.AdBridg.cmd.push({action:"spa_pv_shutdown"})}),a()(this,"initAds",function(e){t._spaStart(e)}),a()(this,"refreshAds",function(e){t._spaStop(),t._spaStart(e)}),a()(this,"clearAds",function(){t._spaStop()}),e.singletonInstance)return e.singletonInstance;"undefined"!=typeof window&&(window.AdBridg={cmd:[]}),e.singletonInstance=this};a()(c,"singletonInstance",void 0),t.a=new c},2003:function(e,t,n){"use strict";var r=n(2),o=n.n(r),i=n(3),a=n.n(i),s=n(1),c=n.n(s),d=n(692),u=function(){function e(){if(o()(this,e),c()(this,"isLoaded",!1),e.singletonInstance)return e.singletonInstance;e.singletonInstance=this}return a()(e,[{key:"load",value:function(){this.isLoaded||"undefined"!=typeof window&&(Object(d.a)({id:"google-gpt-script",src:"//www.googletagservices.com/tag/js/gpt.js"}),Object(d.a)({id:"adbridg",src:"https://prod.adspsp.com/adb.3340835.min.js"}),this.isLoaded=!0)}}]),e}();c()(u,"singletonInstance",void 0),t.a=new u},2004:function(e,t,n){"use strict";var r=n(2),o=n.n(r),i=n(3),a=n.n(i),s=n(1),c=n.n(s),d=n(692),u=function(){function e(){if(o()(this,e),c()(this,"isLoaded",!1),e.singletonInstance)return e.singletonInstance;e.singletonInstance=this}return a()(e,[{key:"load",value:function(){this.isLoaded||"undefined"!=typeof window&&(Object(d.a)({id:"blockthrough",src:"https://gfycat-com.videoplayerhub.com/galleryplayer.js"}),this.isLoaded=!0)}}]),e}();c()(u,"singletonInstance",void 0),t.a=new u},2028:function(e,t,n){"use strict";var r=n(2049);n.d(t,"b",function(){return r.b}),t.a=r.a},2049:function(e,t,n){"use strict";n.d(t,"a",function(){return K}),n.d(t,"b",function(){return G});var r,o,i,a=n(2),s=n.n(a),c=n(3),d=n.n(c),u=n(4),l=n.n(u),p=n(5),f=n.n(p),m=n(10),g=n.n(m),h=n(6),v=n.n(h),y=n(1),b=n.n(y),E=n(0),_=n.n(E),O=n(9),I=(n.n(O),n(11)),w=n(13),S=n.n(w),j=n(14),P=n.n(j),k=n(696),C=n(106),A=n(261),T=n(397),D=n(695),L=n(262),M=n(395),x=n(91),R=n(2050),N=(n.n(R),n(398)),Z=n.n(N);function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var B="play",V="pause",K=Object(I.connect)(function(e){return{mobile:e.renderConfig.mobile}})((i=o=function(e){function t(e){var n;return s()(this,t),n=l()(this,f()(t).call(this,e)),b()(g()(n),"handlePlayerClick",function(){if(n.props.controls&&!n.props.mobile){var e=Object(x.a)(n.props.gfyItem),t="https://gfycat.com/".concat(e);window.open(t,"_blank")}n.props.mobile&&n.state.muted&&n.handleShareOpen()}),b()(g()(n),"handleShareOpen",function(){n.setState({shareOpened:!0}),n.video&&n.video.pause()}),b()(g()(n),"handleShareClose",function(){n.setState({shareOpened:!1}),n.video&&n.video.play()}),b()(g()(n),"handlePlayerStateChange",function(e){var t=e.controlsVisible;n.state.userVisible!==t&&n.setState({userVisible:t})}),b()(g()(n),"getRef",function(e){n.video=e;var t=n.props.getRef;t&&t(e),n.video&&n.initEmbedlyReceiver()}),b()(g()(n),"handleWindowMessage",function(e){var t=e.data;if(t)switch(t){case B:n.video&&n.video.play();break;case V:n.video&&n.video.pause()}}),b()(g()(n),"handleSoundControlClick",function(e,t){var r=t.muted;n.video.muted=r,n.setState({muted:r})}),b()(g()(n),"initEmbedlyReceiver",function(){"undefined"!=typeof playerjs&&(n.receiver=new playerjs.Receiver,n.receiver.on("play",function(){n.video.play(),n.receiver.emit("play")}),n.receiver.on("pause",function(){n.video.pause(),n.receiver.emit("pause")}),n.receiver.on("getCurrentTime",function(e){return e(n.video.currentTime)}),n.receiver.on("setCurrentTime",function(e){n.video.currentTime=e}),n.receiver.on("getPaused",function(e){return e(n.video.paused)}),n.receiver.on("getDuration",function(e){return e(n.video.duration)}),n.receiver.on("getVolume",function(e){return e(100*n.video.volume)}),n.receiver.on("setVolume",function(e){return n.video.volume=e/100}),n.receiver.on("mute",function(){return n.video.mute=!0}),n.receiver.on("unmute",function(){return n.video.mute=!1}),n.receiver.on("getMuted",function(e){return e(n.video.mute)}),n.receiver.on("getLoop",function(e){return e(n.video.loop)}),n.receiver.on("setLoop",function(e){return n.video.loop=e}),n.video.addEventListener("ended",function(){return n.receiver.emit("ended")}),n.video.addEventListener("timeupdate",function(){n.receiver.emit("timeupdate",{seconds:n.video.currentTime,duration:n.video.duration})}),n.receiver.ready())}),b()(g()(n),"user",function(){var e=n.props,t=e.controls,r=e.gfyItem,o=n.state.userVisible,i=r.published,a=r.userData;return a&&t&&parseInt(i,10)?_.a.createElement("div",{key:"iframe-top",className:S()("iframe-top",{visible:o})},_.a.createElement(D.a,{user:a,target:"_blank"})):null}),n.state={muted:!0,userVisible:n.props.controls,shareOpened:!1},n}return v()(t,e),d()(t,[{key:"componentDidMount",value:function(){window.addEventListener("message",this.handleWindowMessage)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("message",this.handleWindowMessage)}},{key:"render",value:function(){var e=this,t=this.state,n=t.muted,r=t.shareOpened,o=this.props,i=o.autoPlay,a=o.backgroundColor,s=o.controls,c=o.forceVideo,d=o.gfyItem,u=o.hd,l=o.logo,p=o.loop,f=o.mobile,m=o.playbackRate,g=d.gfyId,h=d.hasAudio&&f?n?_.a.createElement(T.a,{gfyId:g,onClick:this.handleSoundControlClick}):_.a.createElement(P.a,{className:S()("ic ic-send",{low:!Object(M.a)()}),svg:Z.a,onClick:this.handleShareOpen}):null,v=Object(L.a)(d)?C.c:C.b,y=!c&&d.hasTransparency?f?_.a.createElement(C.a,{backgroundColor:a||"transparent",gfyItem:d,onClick:this.handlePlayerClick}):_.a.createElement(k.a,{backgroundColor:a||"transparent",gfyItem:d,controls:s,fullscreenElement:this.iframeContainer,onStateChange:this.handlePlayerStateChange,onClick:this.handlePlayerClick}):f?_.a.createElement(v,{highQuality:u,loop:p,backgroundColor:a||"#000000",getRef:this.getRef,gfyItem:d,controls:!n,onClick:this.handlePlayerClick}):_.a.createElement(k.b,{autoPlay:i,backgroundColor:a||"#000000",controls:s,fullscreenElement:this.iframeContainer,getRef:this.getRef,gfyItem:d,hd:u,loop:p,logo:l,onClick:this.handlePlayerClick,onStateChange:this.handlePlayerStateChange,show360:!0,playbackRate:m}),b=f?r?_.a.createElement(A.b,{gfyItem:d,onCloseButtonClick:this.handleShareClose}):null:this.user();return _.a.createElement("div",{className:"iframe-player-container",onClick:this.handleClick,ref:function(t){return e.iframeContainer=t}},y,b,h)}}]),t}(E.Component),b()(o,"defaultProps",{autoPlay:!0,controls:!0,forceVideo:!1,hd:!1,logo:!0,loop:!0,playbackRate:1}),r=i))||r,G=function(e){var t="0"!==e.autoplay;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(Object(n),!0).forEach(function(t){b()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},void 0!==e.autoplay&&{autoPlay:t},{},void 0!==e.controls&&t&&{controls:"0"!==e.controls,userVisible:"0"!==e.controls},{},void 0!==e.speed&&!isNaN(parseFloat(e.speed))&&{playbackRate:parseFloat(e.speed)},{},void 0!==e.loops&&!isNaN(parseInt(e.loops,10))&&{loops:parseInt(e.loops,10)},{},void 0!==e.hd&&1===parseInt(e.hd,10)&&{hd:!0})}},2050:function(e,t){e.exports={gfycatBlue:"#2475ff",gfycatLightBlue:"#3aa8ff"}},2062:function(e,t,n){"use strict";n.d(t,"e",function(){return r}),n.d(t,"d",function(){return o}),n.d(t,"a",function(){return i}),n.d(t,"c",function(){return a}),n.d(t,"f",function(){return s}),n.d(t,"b",function(){return c});var r=function(e){return 3==parseInt(e.gatekeeper,10)},o=function(e){return 4==parseInt(e.gatekeeper,10)},i=function(e){var t=parseInt(e.gatekeeper,10);return 1===parseInt(e.nsfw,10)||1===t||12===t},a=function(e){var t=parseInt(e.gatekeeper,10),n=parseInt(e.nsfw,10);return 0===t&&(1!==n||12!==n)},s=function(e){return 5===parseInt(e.gatekeeper,10)},c=function(e){return 12===parseInt(e.gatekeeper,10)}},2076:function(e,t,n){"use strict";t.a=function(e){return 0===e.gatekeeper&&-1!==["G","PG"].indexOf(e.rating)}},2105:function(e,t,n){"use strict";t.a=function(e){return r[e]};var r={0:"sfw",1:"nsfw1",3:"nsfw3",4:"other",5:"unrvd",12:"nsfw12"}},2332:function(e,t,n){"use strict";var r=n(29),o=n(391);t.a=function(e){e.createDate;var t=e.extraLemmas,n=e.frameRate,i=e.gatekeeper,a=e.gfyId,s=e.gfyName,c=e.height,d=e.languageText,u=e.max5mbGif,l=e.mobilePosterUrl,p=e.mobileUrl,f=e.nsfw,m=e.numFrames,g=e.subreddit,h=e.tags,v=void 0===h?[]:h,y=e.thumb100PosterUrl,b=e.title,E=e.userName,_=(e.views,e.width),O="0"===f&&0===parseInt(i,10)?"index":"noindex,noarchive,nosnippet,noodp,noydir,nocache",I=b&&"untitled"!=b.toLowerCase()?b:null,w="".concat(I||"Gfycat"," - Create, Discover and Share Awesome GIFs").concat(I?" on Gfycat":""),S=Object(r.q)({title:I,tags:v}),j=Object(r.v)({tags:v,languageText:d}),P=Object(r.k)({title:I,tags:j,userName:E}),k=Object(r.s)({subreddit:g,extraLemmas:t,languageText:d,tags:v}),C=_<=640?_:640,A=_<=640?c:parseInt(C/_*c,10),T="https://api.gfycat.com/v1/oembed?url=https://gfycat.com/".concat(encodeURIComponent(s)),D="https://gfycat.com/ifr/".concat(s),L="https://gfycat.com/".concat(a),M=Object(r.m)({frameRate:n,numFrames:m}),x=Object(o.a)("https://gfycat.com/ifr/".concat(s),e);return Object.freeze({htmlAttributes:{lang:"en"},title:S,meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1"},{"http-equiv":"X-UA-Compatible",content:"IE=edge, chrome=1"},{name:"robots",content:O},{name:"description",content:P},{name:"keywords",content:k},{name:"author",content:"Gfycat"},{name:"msvalidate.01",content:"2B4FF0FE01F14713C7AAC3BC41F0F777"},{name:"google-site-verification",content:"O3hEECEwrFnDhE5a1aBk2Flh3WT3cnb0PYeWWSsNfwE"},{property:"fb:app_id",content:958688167485836},{name:"p:domain_verify",content:"7e04e49a14f815cd10e520cb44c7c451"},{name:"twitter:card",content:"player"},{name:"twitter:title",content:w},{name:"twitter:url",content:D},{name:"twitter:image",content:u},{name:"twitter:image:src",content:u},{name:"twitter:player",content:D},{name:"twitter:player:width",content:_},{name:"twitter:player:height",content:c},{name:"twitter:description",content:P},{property:"og:type",content:"video"},{property:"og:url",content:u},{property:"og:title",content:w},{property:"og:description",content:P},{property:"og:image",content:u},{property:"og:image:width",content:C},{property:"og:image:height",content:A},{property:"og:image:secure_url",content:u},{property:"og:image",content:l},{property:"og:image:width",content:C},{property:"og:image:height",content:A},{property:"og:image",content:y},{property:"og:video",content:p},{property:"og:video:secure_url",content:p},{property:"og:video:type",content:"video/mp4"},{property:"og:video:width",content:C},{property:"og:video:height",content:A},{property:"og:video:duration",content:M},{property:"og:video:iframe",content:D},{name:"theme-color",content:"#2475FF"}],link:[{rel:"canonical",href:L},{rel:"alternate",type:"application/json+oembed",href:T,title:I}],script:[{type:"application/javascript",innerHTML:"(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n  })(window,document,'script','dataLayer','GTM-PNKFTN');"},{type:"application/javascript",src:"//cdn.embed.ly/player-0.1.0.min.js"},{type:"application/ld+json",innerHTML:JSON.stringify(x)}]})}},2333:function(e,t){e.exports={gfycatBlue:"#2475ff",gfycatLightBlue:"#3aa8ff"}}});