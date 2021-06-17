/*
 lazysizes - v5.2.0-beta1 */
window.lazySizesConfig=window.lazySizesConfig||{};lazySizesConfig.expFactor=3.25;
!function(d,f){var e=f(d,d.document);d.lazySizes=e;"object"==typeof module&&module.exports&&(module.exports=e)}("undefined"!=typeof window?window:{},function(d,f){var e,a;if(function(){var c,b={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,
throttleDelay:125};a=d.lazySizesConfig||d.lazysizesConfig||{};for(c in b)c in a||(a[c]=b[c])}(),!f||!f.getElementsByClassName)return{init:function(){},cfg:a,noSupport:!0};var x=f.documentElement,q=d.Date,y=d.HTMLPictureElement,t=d.addEventListener,l=d.setTimeout,aa=d.requestAnimationFrame||l,E=d.requestIdleCallback,ba=/^picture$/i,U=["load","error","lazyincluded","_lazyloaded"],u={},ja=Array.prototype.forEach,F=function(a,b){return u[b]||(u[b]=new RegExp("(\\s|^)"+b+"(\\s|$)")),u[b].test(a.getAttribute("class")||
"")&&u[b]},G=function(a,b){F(a,b)||a.setAttribute("class",(a.getAttribute("class")||"").trim()+" "+b)},V=function(a,b){var c;(c=F(a,b))&&a.setAttribute("class",(a.getAttribute("class")||"").replace(c," "))},W=function(a,b,g){var c=g?"addEventListener":"removeEventListener";g&&W(a,b);U.forEach(function(g){a[c](g,b)})},I=function(a,b,g,d,h){var c=f.createEvent("Event");return g||(g={}),g.instance=e,c.initEvent(b,!d,!h),c.detail=g,a.dispatchEvent(c),c},X=function(c,b){var g;!y&&(g=d.picturefill||a.pf)?
(b&&b.src&&!c.getAttribute("srcset")&&c.setAttribute("srcset",b.src),g({reevaluate:!0,elements:[c]})):b&&b.src&&(c.src=b.src)},J=function(c,b,g){for(g=g||c.offsetWidth;g<a.minSize&&b&&!c._lazysizesWidth;)g=b.offsetWidth,b=b.parentNode;return g},L=function(){var a,b,g=[],e=[],h=g,d=function(){var c=h;h=g.length?e:g;a=!0;for(b=!1;c.length;)c.shift()();a=!1},z=function(c,g){a&&!g?c.apply(this,arguments):(h.push(c),b||(b=!0,(f.hidden?l:aa)(d)))};return z._lsFlush=d,z}(),R=function(a,b){return b?function(){L(a)}:
function(){var b=this,c=arguments;L(function(){a.apply(b,c)})}},ka=function(c){var b,g=0,f=a.throttleDelay,h=a.ricTimeout,e=function(){b=!1;g=q.now();c()},d=E&&49<h?function(){E(e,{timeout:h});h!==a.ricTimeout&&(h=a.ricTimeout)}:R(function(){l(e)},!0);return function(a){var c;(a=!0===a)&&(h=33);b||(b=!0,c=f-(q.now()-g),0>c&&(c=0),a||9>c?d():l(d,c))}},da=function(a){var b,c,f=function(){b=null;a()},e=function(){var a=q.now()-c;99>a?l(e,99-a):(E||f)(f)};return function(){c=q.now();b||(b=l(e,99))}},
Q=function(){var c,b,g,H,h,ca,z,v,K,M,N,y,u=/^img$/i,D=/^iframe$/i,E="onscroll"in d&&!/(gle|ing)bot/.test(navigator.userAgent),S=0,w=0,C=-1,J=function(a){w--;(!a||0>w||!a.target)&&(w=0)},Q=function(a){return null==y&&(y="hidden"==(getComputedStyle(f.body,null)||{}).visibility),y||!("hidden"==(getComputedStyle(a.parentNode,null)||{}).visibility&&"hidden"==(getComputedStyle(a,null)||{}).visibility)},ea=function(){var n,g,d,h,k,l,q,O,Y,t,m=e.elements;if((H=a.loadMode)&&8>w&&(n=m.length)){var r=0;for(C++;r<
n;r++)if(m[r]&&!m[r]._lazyRace)if(!E||e.prematureUnveil&&e.prematureUnveil(m[r]))P(m[r]);else{(l=m[r].getAttribute("data-expand"))&&(h=1*l)||(h=S);O||(O=!a.expand||1>a.expand?500<x.clientHeight&&500<x.clientWidth?500:370:a.expand,e._defEx=O,Y=O*a.expFactor,t=a.hFac,y=null,S<Y&&1>w&&2<C&&2<H&&!f.hidden?(S=Y,C=0):S=1<H&&1<C&&6>w?O:0);q!==h&&(ca=innerWidth+h*t,z=innerHeight+h,k=-1*h,q=h);var p=m[r].getBoundingClientRect();if((p=(N=p.bottom)>=k&&(v=p.top)<=z&&(M=p.right)>=k*t&&(K=p.left)<=ca&&(N||M||
K||v)&&(a.loadHidden||Q(m[r])))&&!(p=b&&3>w&&!l&&(3>H||4>C))){p=void 0;var A=m[r],u=h,B=A;A=Q(A);v-=u;N+=u;K-=u;for(M+=u;A&&(B=B.offsetParent)&&B!=f.body&&B!=x;)(A=0<((getComputedStyle(B,null)||{}).opacity||1))&&"visible"!=(getComputedStyle(B,null)||{}).overflow&&(p=B.getBoundingClientRect(),A=M>p.left&&K<p.right&&N>p.top-1&&v<p.bottom+1);p=A}if(p){if(P(m[r]),d=!0,9<w)break}else!d&&b&&!g&&4>w&&4>C&&2<H&&(c[0]||a.preloadAfterLoad)&&(c[0]||!l&&(N||M||K||v||"auto"!=m[r].getAttribute(a.sizesAttr)))&&
(g=c[0]||m[r])}g&&!d&&P(g)}},k=ka(ea),ha=function(n){var b=n.target;if(b._lazyCache)return void delete b._lazyCache;J(n);G(b,a.loadedClass);V(b,a.loadingClass);W(b,fa);I(b,"lazyloaded")},U=R(ha),fa=function(a){U({target:a.target})},la=function(a,b){try{a.contentWindow.location.replace(b)}catch(pa){a.src=b}},ma=function(b){var c,n=b.getAttribute(a.srcsetAttr);(c=a.customMedia[b.getAttribute("data-media")||b.getAttribute("media")])&&b.setAttribute("media",c);n&&b.setAttribute("srcset",n)},na=R(function(b,
c,h,f,e){var d,n,k,v,z,m;(z=I(b,"lazybeforeunveil",c)).defaultPrevented||(f&&(h?G(b,a.autosizesClass):b.setAttribute("sizes",f)),n=b.getAttribute(a.srcsetAttr),d=b.getAttribute(a.srcAttr),e&&(k=b.parentNode,v=k&&ba.test(k.nodeName||"")),m=c.firesLoad||"src"in b&&(n||d||v),z={target:b},G(b,a.loadingClass),m&&(clearTimeout(g),g=l(J,2500),W(b,fa,!0)),v&&ja.call(k.getElementsByTagName("source"),ma),n?b.setAttribute("srcset",n):d&&!v&&(D.test(b.nodeName)?la(b,d):b.src=d),e&&(n||v)&&X(b,{src:d}));b._lazyRace&&
delete b._lazyRace;V(b,a.lazyClass);L(function(){var a=b.complete&&1<b.naturalWidth;m&&!a||(a&&G(b,"ls-is-cached"),ha(z),b._lazyCache=!0,l(function(){"_lazyCache"in b&&delete b._lazyCache},9));"lazy"==b.loading&&w--},!0)}),P=function(c){if(!c._lazyRace){var d,h=u.test(c.nodeName),f=h&&(c.getAttribute(a.sizesAttr)||c.getAttribute("sizes")),e="auto"==f;(!e&&b||!h||!c.getAttribute("src")&&!c.srcset||c.complete||F(c,a.errorClass)||!F(c,a.lazyClass))&&(d=I(c,"lazyunveilread").detail,e&&Z.updateElem(c,
!0,c.offsetWidth),c._lazyRace=!0,w++,na(c,d,e,f,h))}},oa=da(function(){a.loadMode=3;k()}),ia=function(){3==a.loadMode&&(a.loadMode=2);oa()},T=function(){if(!b){if(999>q.now()-h)return void l(T,999);b=!0;a.loadMode=3;k();t("scroll",ia,!0)}};return{_:function(){h=q.now();e.elements=f.getElementsByClassName(a.lazyClass);c=f.getElementsByClassName(a.lazyClass+" "+a.preloadClass);t("scroll",k,!0);t("resize",k,!0);t("pageshow",function(b){if(b.persisted){var c=f.querySelectorAll("."+a.loadingClass);c.length&&
c.forEach&&aa(function(){c.forEach(function(a){a.complete&&P(a)})})}});d.MutationObserver?(new MutationObserver(k)).observe(x,{childList:!0,subtree:!0,attributes:!0}):(x.addEventListener("DOMNodeInserted",k,!0),x.addEventListener("DOMAttrModified",k,!0),setInterval(k,999));t("hashchange",k,!0);"focus mouseover click load transitionend animationend".split(" ").forEach(function(a){f.addEventListener(a,k,!0)});/d$|^c/.test(f.readyState)?T():(t("load",T),f.addEventListener("DOMContentLoaded",k),l(T,2E4));
e.elements.length?(ea(),L._lsFlush()):k()},checkElems:k,unveil:P,_aLSL:ia}}(),Z=function(){var c,b=R(function(a,b,c,d){var e;if(a._lazysizesWidth=d,d+="px",a.setAttribute("sizes",d),ba.test(b.nodeName||"")){b=b.getElementsByTagName("source");var f=0;for(e=b.length;f<e;f++)b[f].setAttribute("sizes",d)}c.detail.dataAttr||X(a,c.detail)}),d=function(a,c,d){var e,f=a.parentNode;f&&(d=J(a,f,d),e=I(a,"lazybeforesizes",{width:d,dataAttr:!!c}),e.defaultPrevented||(d=e.detail.width)&&d!==a._lazysizesWidth&&
b(a,f,e,d))},e=da(function(){var a,b=c.length;if(b)for(a=0;a<b;a++)d(c[a])});return{_:function(){c=f.getElementsByClassName(a.autosizesClass);t("resize",e)},checkElems:e,updateElem:d}}(),D=function(){!D.i&&f.getElementsByClassName&&(D.i=!0,Z._(),Q._())};return l(function(){a.init&&D()}),e={cfg:a,autoSizer:Z,loader:Q,init:D,uP:X,aC:G,rC:V,hC:F,fire:I,gW:J,rAF:L}});$document.ready(function(){var d=function(d,e){d.hide();return console.log("! setupAjaxCarousels():",e)};window.slickCarousel=function(f){var e=$(f),a=e.data(),x=a.carouselSelector;f=e.find(x);if(!f.length)return d(e,x+" not found");var q=a.slideSelector,y=a.blockClass;a=a.slickDesktop;if(!$(q).length||!y)return d(e,x+" not found");e=y+"__arrow";e={slickFilter:q,variableWidth:!0,mobileFirst:!0,arrows:!1,dots:!1,prevArrow:'<button class="'+e+" "+e+'--prev" aria-label="previous"></button>',nextArrow:'<button class="'+
e+" "+e+'--next" aria-label="next"></button>',slidesToScroll:1,swipeToSlide:!0,infinite:!1,responsive:[{breakpoint:heb&&heb.screen?heb.screen.largeBreakpoint:1024,settings:$.extend({arrows:!0},a)}]};f.children().not(q).remove();f.slick(e)}});$document.ready(function(){var d=$(".ajax-carousel[data-ajax-url]");$.each(d,function(){var d=$(this),e=d.data();$.ajaxQueue({url:e.ajaxUrl,dataType:"html",type:"GET",async:!0,success:function(a){d.html(a);window.slickCarousel(d[0])},error:function(a){a="ajax request failed: "+a.status+" "+a.statusText+" - "+e.ajaxUrl;d.hide();return console.log("! setupAjaxCarousels():",a)}})})});$document.ready(function(){var d=$(".static-carousel");$.each(d,function(){window.slickCarousel(this)})});