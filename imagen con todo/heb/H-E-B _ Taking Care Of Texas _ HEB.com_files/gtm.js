
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"201",
  
  "macros":[{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce"
    },{
      "function":"__e"
    },{
      "function":"__dbg"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){",["escape",["macro",3],8,16],"\u0026\u0026console.log(a)}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",1],8,16],",a=void 0,e=",["escape",["macro",2],8,16],",b=void 0;if(c)try{a=JSON.parse(JSON.stringify(c));if(a.impressions)b=a.impressions;else if(a.click)b=a.click.products;else if(a.detail)b=a.detail.products;else if(a.add)b=a.add.products;else if(a.checkout)b=a.checkout.products;else if(a.purchase){b=a.purchase.products;try{a.purchase.actionField.promotion\u0026\u0026!a.purchase.actionField.coupon\u0026\u0026(a.purchase.actionField.coupon=a.purchase.actionField.promotion)}catch(d){}}b\u0026\u0026b.map(function(a){var b=\na.dimension26;if(!0===b||\"true\"===b||\"yes\"===b)a.dimension26=\"yes\";else if(!1===b||\"false\"===b||\"no\"===b)a.dimension26=\"no\";a.discount\u0026\u0026(a.metric8=Math.abs(a.discount));switch(e){case \"e_addToCart\":case \"e_addOnAddToCart\":a.quantity=1,a.metric9=a.price*a.quantity}return a})}catch(d){",["escape",["macro",4],8,16],"(\"CJ - Ecommerce error: \"+d.message)}c\u0026\u0026(c={ecommerce:a});return c})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",2],
      "vtp_map":["list",["map","key","e_productImpressions","value","Ecommerce"],["map","key","e_productClick","value","Ecommerce"],["map","key","e_productDetailView","value","Ecommerce"],["map","key","e_addToCart","value","Cart"],["map","key","e_checkoutStep","value","Ecommerce"],["map","key","e_purchase","value","Ecommerce"],["map","key","e_addOnProductImpressions","value","Addons"],["map","key","e_addOnProductClick","value","Addons"],["map","key","e_addOnProductDetailView","value","Addons"],["map","key","e_addOnAddToCart","value","Addons"],["map","key","e_addOnCheckoutStep","value","Addons"],["map","key","e_addOnPurchase","value","Addons"],["map","key","e_cartPageLoaded","value","Ecommerce"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.pageType"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{if(\"\/check-out\/secure-checkout\"==",["escape",["macro",8],8,16],")return document.location.protocol+\"\/\/\"+document.location.hostname+document.location.pathname;for(var e=\/^(([^\u003C\u003E()\\[\\]\\\\.,;:\\s@\"]+(\\.[^\u003C\u003E()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$\/i,b=document.location.pathname.split(\"\/\"),c=document.location.search.split(\"\\x26\"),f=\"email@domain.com\",a=0;a\u003Cb.length;a++)b[a]=b[a].replace(e,f);for(a=0;a\u003Cc.length;a++){var d=\nc[a].split(\"\\x3d\");2===d.length\u0026\u0026(c[a]=d[0]+\"\\x3d\"+d[1].replace(e,f))}return document.location.protocol+\"\/\/\"+document.location.hostname+b.join(\"\/\")+c.join(\"\\x26\")}catch(g){return document.location.protocol+\"\/\/\"+document.location.hostname+document.location.pathname+document.location.search}})();"]
    },{
      "function":"__uv"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){var b=void 0;try{return JSON.parse(localStorage.getItem(a))}catch(c){}return b}})();"]
    },{
      "function":"__c",
      "vtp_value":"gtm.user_id"
    },{
      "function":"__jsm",
      "convert_null_to":["macro",10],
      "vtp_javascript":["template","(function(){return ",["escape",["macro",11],8,16],"(",["escape",["macro",12],8,16],")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":["macro",13],
      "vtp_name":"customer.id"
    },{
      "function":"__c",
      "vtp_value":"11"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return function(model){model.set(\"dimension\"+",["escape",["macro",15],8,16],",model.get(\"clientId\"))}}catch(e){",["escape",["macro",4],8,16],"(\"GTM CJ - Custom Task - Set GA Client ID: \"+e.message)}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{if(document.referrer){var b=document.createElement(\"a\");b.setAttribute(\"href\",document.referrer);for(var f=\/^(([^\u003C\u003E()\\[\\]\\\\.,;:\\s@\"]+(\\.[^\u003C\u003E()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$\/i,c=b.pathname.split(\"\/\"),d=b.search.split(\"\\x26\"),g=\"email@domain.com\",a=0;a\u003Cc.length;a++)c[a]=c[a].replace(f,g);for(a=0;a\u003Cd.length;a++){var e=d[a].split(\"\\x3d\");2===e.length\u0026\u0026(d[a]=e[0]+\"\\x3d\"+e[1].replace(f,g))}var h=b.protocol+\n\"\/\/\"+b.hostname+c.join(\"\/\")+d.join(\"\\x26\");delete b;return h}return\"\"}catch(k){return document.referrer}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",17],8,16],"?\"referrer\":\"\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"searchTerm"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"searchCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"vpv"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",8],8,16],",b=",["escape",["macro",19],8,16],",c=",["escape",["macro",20],8,16],",d=",["escape",["macro",21],8,16],";try{d\u0026\u0026(a=d),b\u0026\u0026(a+=\"?q\\x3d\"+b+(c?\"\\x26searchCat\\x3d\"+c:\"\"))}catch(e){}return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.context"
    },{
      "function":"__j",
      "vtp_name":"document.title"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",7],
      "vtp_defaultValue":["template",["macro",23]," | ",["macro",24]],
      "vtp_map":["list",["map","key","search","value",["template",["macro",23]," | search results"]],["map","key","product details","value",["template",["macro",23]," | product details | ",["macro",24]]],["map","key","pdp","value",["template",["macro",23]," | product details | ",["macro",24]]],["map","key","search results","value",["template",["macro",23]," | search results"]]]
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__d",
      "vtp_elementSelector":".breadcrumb",
      "vtp_selectorType":"CSS"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.pageSubSection1"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.pageSubSection2"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.pageSubSection3"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.pageSubSection4"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"URL",
      "vtp_component":"QUERY",
      "vtp_queryKey":"int"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"storeId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"customer.registeredState"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"customer.loggedIn"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"customer.addOnFlag"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"fulfillmentMethod"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"customer.zip"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"customer.abGroup"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"searchTerm"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.createElement(\"ins\");a.className=\"AdSense\";a.style.display=\"block\";a.style.position=\"absolute\";a.style.top=\"-1px\";a.style.height=\"1px\";document.body.appendChild(a);var b=!a.clientHeight;document.body.removeChild(a);return b})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",21],
      "vtp_defaultValue":"false",
      "vtp_map":["list",["map","key","\/vpv\/addons","value","true"],["map","key","\/vpv\/addons\/review","value","true"]]
    },{
      "function":"__c",
      "vtp_value":"UA-26725300-9"
    },{
      "function":"__c",
      "vtp_value":""
    },{
      "function":"__c",
      "vtp_value":"UA-26725300-5"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",44],
      "vtp_defaultValue":["macro",45],
      "vtp_map":["list",["map","key","Dev-Stage","value",["macro",43]]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",3],
      "vtp_defaultValue":["macro",43],
      "vtp_map":["list",["map","key","true","value",["macro",43]],["map","key","false","value",["macro",46]]]
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","1","group",["macro",7]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_autoLinkDomains":"hebtoyou.com",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","location","value",["macro",9]],["map","fieldName","userId","value",["macro",14]],["map","fieldName","customTask","value",["macro",16]],["map","fieldName",["macro",18],"value",["macro",17]],["map","fieldName","useAmpClientId","value","true"],["map","fieldName","allowLinker","value","true"],["map","fieldName","page","value",["macro",22]],["map","fieldName","title","value",["macro",25]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",9]],["map","index","2","dimension",["template",["macro",26],["macro",8]]],["map","index","3","dimension",["macro",24]],["map","index","4","dimension",["macro",27]],["map","index","5","dimension",["macro",14]],["map","index","6","dimension",["macro",28]],["map","index","7","dimension",["macro",29]],["map","index","8","dimension",["macro",30]],["map","index","9","dimension",["macro",31]],["map","index","16","dimension",["macro",32]],["map","index","22","dimension",["macro",33]],["map","index","100","dimension",["macro",23]],["map","index","101","dimension",["macro",23]],["map","index","102","dimension",["macro",34]],["map","index","103","dimension",["macro",35]],["map","index","80","dimension",["macro",36]],["map","index","107","dimension",["macro",37]],["map","index","14","dimension",["macro",38]],["map","index","24","dimension",["macro",39]],["map","index","23","dimension",["macro",40]],["map","index","41","dimension",["macro",41]],["map","index","39","dimension",["macro",42]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",47],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":"cpTrackedOrders"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var a=new RegExp(\"(^|,)\"+",["escape",["macro",1],8,16],".purchase.actionField.id+\"(,|$)\"),b=",["escape",["macro",49],8,16],".match(a);return!b}catch(c){return!0}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.revenue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.shipping"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.tax"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.products"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var c=function(a){var b={};b.id=a.id;b.quantity=a.quantity;b.price=a.price;return b},d=",["escape",["macro",51],8,16],",e=",["escape",["macro",52],8,16],",f=",["escape",["macro",53],8,16],",g=",["escape",["macro",54],8,16],",h=",["escape",["macro",55],8,16],",k={ecommerce:{purchase:{actionField:{id:d,revenue:e,shipping:f,tax:g},products:h.map(c)}}};return k}catch(a){}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"orderDetails.fees"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"orderDetails.cartDiscount"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",58],8,16],";return isNaN(a)?a:Math.abs(a)})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"orderDetails.tips"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"orderDetails.fulfillmentMethod"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"orderDetails.scheduledDetails.hoursInAdvance"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"orderDetails.scheduledDetails.date"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"orderDetails.scheduledDetails.day"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"orderDetails.scheduledDetails.time"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"orderDetails.hadPreviousPurchase"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{if(-1\u003C",["escape",["macro",8],8,16],".indexOf(\"\/recipe\/landing\"))return\"recipe list page\";if(-1\u003C",["escape",["macro",8],8,16],".indexOf(\"\/recipe\/recipe-item\"))return\"recipe detail page\";if(-1\u003C",["escape",["macro",8],8,16],".indexOf(\"\/recipe\/my-recipe-box\"))return\"recipe box page\"}catch(a){}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ajax.request.method"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ajax.request.url"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return-1\u003Cdocument.querySelector(\".search-result-found\").innerText.indexOf(\"We found 0 search results for\")\u0026\u0026\/^\\?q=\/.test(location.search)}catch(a){}})();"]
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",76],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","category\/shop\/baby\/","value","hebca003"],["map","key","\/category\/shop\/clearance\/","value","hebca00-"],["map","key","\/category\/shop\/clothing\/","value","hebca008"],["map","key","\/category\/shop\/entertainment-and-electronics\/","value","hebca007"],["map","key","\/category\/shop\/flowers\/","value","hebca006"],["map","key","\/category\/shop\/food-and-drinks\/","value","hebca00"],["map","key","\/category\/shop\/health-and-beauty\/","value","hebca002"],["map","key","\/category\/shop\/home-and-kitchen\/","value","hebca000"],["map","key","\/category\/shop\/office-and-school\/","value","hebca005"],["map","key","\/category\/shop\/outdoor-and-sports","value","hebca004"],["map","key","\/category\/shop\/pet\/","value","hebca001"],["map","key","\/category\/shop\/toys\/","value","hebca009"],["map","key","static-page\/catering-and-party-planning","value","hebca0"],["map","key","static-page\/delivery","value","hebcu0"],["map","key","static-page\/heb-curbside","value","hebcu0"],["map","key","explore?exp=instoreview","value","hebex0"],["map","key","my-account\/login","value","heblo0"],["map","key","product-detail\/","value","hebpr0"],["map","key","recipe\/recipe-article","value","hebre0"],["map","key","recipe\/landing","value","hebre0"],["map","key","explore?exp=sthview","value","hebsh0"],["map","key","static-page\/online-deals","value","hebsh0"],["map","key","article-template\/top-reasons-to-shop-online","value","hebsh0"],["map","key","static-page\/christmas-holiday","value","hebho0"],["map","key","static-page\/Ham-Guide","value","hebho0"],["map","key","H-E-B-Tamale-Guide","value","hebho0"],["map","key","Cookies-for-the-holidays","value","hebho0"],["map","key","Candies-for-the-Holidays","value","hebho0"],["map","key","by-season-or-holiday\/christmas","value","hebho0"],["map","key","static-page\/Thanksgiving","value","hebho0"],["map","key","static-page\/turkey-guide","value","hebho0"]]
    },{
      "function":"__r"
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"int",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=!1,b=",["escape",["macro",2],8,16],",c=",["escape",["macro",80],8,16],";return\"gtm.linkClick\"!==b\u0026\u0026\"gtm.elementVisibility\"!==b?a:a=-1\u003Cc.indexOf(\"int\\x3d\"+",["escape",["macro",81],8,16],")?!1:!0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var a=",["escape",["macro",67],8,16],",c=",["escape",["macro",32],8,16],",b=$(a).attr(\"title\");b||(b=$(a).text());return a={ecommerce:{promoView:{promotions:[{id:c,name:c,creative:b}]}}}}catch(d){}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.elementUrl"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var a=",["escape",["macro",67],8,16],",c=",["escape",["macro",32],8,16],",b=$(a).attr(\"title\");b||(b=$(a).text());return a={ecommerce:{promoClick:{promotions:[{id:c,name:c,creative:b}]}}}}catch(d){}})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",8],
      "vtp_defaultValue":"product list",
      "vtp_map":["list",["map","key","\/search\/","value","site search"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"filterApplied.type"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"filterApplied.value"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"sortApplied"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.add.products.0.position"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.add.actionField.list"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.add.products.0.name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"searchLocation"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"coupon.title"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"coupon.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"coupon.position"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"coupon.type"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.click.products.0.position"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.click.products.0.name"
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.detail.products.0.name"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"aria-label"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cart.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cart.cartSubTotal"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=parseFloat(",["escape",["macro",105],8,16],");return a=200\u003C=a?\"200+\":150\u003C=a?\"150 - 199\":100\u003C=a?\"100 - 149\":50\u003C=a?\"50 - 99\":1\u003C=a?\"1 - 49\":\"0\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cart.cartItems"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=parseInt(",["escape",["macro",107],8,16],");return a=100\u003C=a?\"100+\":75\u003C=a?\"75 - 99\":50\u003C=a?\"50 - 74\":25\u003C=a?\"25 - 49\":1\u003C=a?\"1 - 24\":\"0\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cart.products"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=[],c=",["escape",["macro",109],8,16],";try{return c\u0026\u0026(b=c.map(function(a){return a.id})),b.join(\"|\")}catch(a){",["escape",["macro",4],8,16],"(\"CJ - Cart Product IDs List: \"+a.message)}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=[],c=",["escape",["macro",109],8,16],";try{return c\u0026\u0026(b=c.map(function(a){return a.quantity})),b.join(\"|\")}catch(a){",["escape",["macro",4],8,16],"(\"CJ - Cart Product Quantities List: \"+a.message)}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=[],c=",["escape",["macro",109],8,16],";try{return c\u0026\u0026(b=c.map(function(a){return a.price})),b.join(\"|\")}catch(a){",["escape",["macro",4],8,16],"(\"CJ - Cart Product Prices List: \"+a.message)}})();"]
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(-1==",["escape",["macro",113],8,16],".indexOf(",["escape",["macro",26],8,16],"))return ",["escape",["macro",113],8,16],"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"hoursInAdvance"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"timeSlotPosition"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"hoursBeforeFirstSlot"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"data-message-type"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pageNum"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"filters"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",120],8,16],"||[];try{return 0==a.length||1==a.length\u0026\u0026\"availability\"==a[0].type\u0026\u0026\"all\"==a[0].values?!0:!1}catch(b){",["escape",["macro",4],8,16],"(\"CJ - Search Default Filters Applied error: \"+b.message)}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"searchResults.products"
    },{
      "function":"__c",
      "vtp_value":"3"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"searchResults.total"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"searchResults.recipes"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"searchResults.content"
    },{
      "function":"__c",
      "vtp_value":"\\.(wav|mp\\d|mov|mpe*g|avi|hqx|mxp|adpp|air|zxp|flv|cptx|docx*|xlsx*|pptx*|pdf|xml|exe|dmg|zip|jar|bin|msi)$"
    },{
      "function":"__c",
      "vtp_value":"(twitter|facebook|linkedin|instagram|pinterest|youtube)"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var a=",["escape",["macro",80],8,16],";return a?\/^mailto:\/i.test(a)?\"mailto\":(new RegExp(",["escape",["macro",127],8,16],",\"i\")).test(a)?\"download\":(new RegExp(\"^[^?]+\"+location.hostname,\"i\")).test(a)?\"same\":(new RegExp(\"^[^?]+\"+",["escape",["macro",128],8,16],",\"i\")).test(a)?\"social\":\/mailto:([^?]+)\/.test(a)?\"email\":\/^https*:\\\/\\\/\/i.test(a)?\"outbound\":\"unknown\":\"none\"}catch(b){}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"sort"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"false",
      "vtp_name":"enableSearchResultsInteractions"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"searchAutoComplete.position"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"searchAutoComplete.keyword"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"searchAutoComplete.term"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"searchAutoComplete.list"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"searchAutoComplete.description"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"searchAutoComplete.id"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionfield.promotion"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionID"
    },{
      "function":"__j",
      "vtp_name":"heb.data.cart.order.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"false",
      "vtp_name":"enableCategoryPageInteractions"
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"canceledOrderReason"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"questionText"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"undefined\"!=typeof Mobify)return!0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a,b){try{localStorage.setItem(a,JSON.stringify(b))}catch(c){}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var a=",["escape",["macro",1],8,16],";if(a\u0026\u0026a.hasOwnProperty(\"purchase\")){var c=[];a.purchase.hasOwnProperty(\"actionField\")\u0026\u0026a.purchase.actionField.hasOwnProperty(\"coupon\")\u0026\u0026a.purchase.actionField.coupon\u0026\u0026c.push(a.purchase.actionField.coupon);if(a.purchase.hasOwnProperty(\"products\")\u0026\u0026a.purchase.products.length)for(var b=0;b\u003Ca.purchase.products.length;b++)a.purchase.products[b].hasOwnProperty(\"coupon\")\u0026\u0026a.purchase.products[b].coupon\u0026\u0026c.push(a.purchase.products[b].coupon);return c.length?c.join(\" | \"):\nvoid 0}}catch(d){}})();"]
    },{
      "function":"__c",
      "vtp_value":"6"
    },{
      "function":"__c",
      "vtp_value":"23"
    },{
      "function":"__c",
      "vtp_value":"19"
    },{
      "function":"__c",
      "vtp_value":"4"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"brand"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"breadcrumb"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"bundle"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"city"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"contentType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"country"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"dob"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"extendedProductPrice"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gender"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"loginMethod"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"loginStatusHit"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"paymentMethod"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"productCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"productName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"shippingMethod"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"state"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"subCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"subSubCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"tab"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userTypeHit"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userTypeSession"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"zip"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",1],8,16],";window._gtmVars=window._gtmVars||{};ecommData={ecommerce:a};if(",["escape",["macro",3],8,16],"||\/cert-selling|unata\/.test(document.location.hostname)){var b=!0;window._gtmVars.dlEcommData=a;window._gtmVars.ecommDataBefore=ecommData;window._gtmVars.checkout=a.checkout}try{a.checkout.actionField.id\u0026\u0026(ecommData.ecommerce={purchase:{actionField:a.checkout.actionField,products:a.checkout.products}},b\u0026\u0026(window._gtmVars.ecommDataAfter=ecommData,console.log(\"CJ - Ecommerce Variable:\"),\nconsole.log(window._gtmVars,ecommData)))}catch(c){b\u0026\u0026console.log(c.message,window._gtmVars,ecommData)}return ecommData})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ajax.response.statusText"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{if(-1\u003C",["escape",["macro",8],8,16],".indexOf(\"\/category\/shop\/\"))return\"product list\";if(-1\u003C",["escape",["macro",8],8,16],".indexOf(\"\/product-detail\/\"))return\"pdp\";if(-1\u003C",["escape",["macro",8],8,16],".indexOf(\"\/search\/\"))return\"search results page\"}catch(a){}})();"]
    },{
      "function":"__f",
      "vtp_component":"QUERY",
      "vtp_queryKey":"DPSLogout"
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":"gtm_login_loc"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(e,d,f,b,c){if(e\u0026\u0026void 0!=d\u0026\u0026null!=d){b=b?\"; path\\x3d\"+b:\"\";c=c?\"; domain\\x3d\"+c:\"\";var a=\"\";f\u0026\u0026(a=new Date,a.setTime(a.getTime()+f),a=\"; expires\\x3d\"+a.toUTCString());document.cookie=e+\"\\x3d\"+d+a+b+c}}})();"]
    },{
      "function":"__c",
      "vtp_value":"gtm_login_loc"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"showMessage",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"_requestid",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"DYN_USER_ID"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return-1\u003C",["escape",["macro",76],8,16],".indexOf(\"pharmacy\")?\"pharmacy \":\"\"}catch(a){}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return document.querySelector('#myCartSId [class$\\x3d\"item-count\"]').innerText.replace(\"$\",\"\")}catch(a){}})();"]
    },{
      "function":"__j",
      "vtp_name":"heb.data.user.currentStoreId"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var a=document.querySelector('#myCartdrop [class$\\x3d\"item-totals\"]').childNodes[3].innerText.match(\/\\d+\\.\\d+\/);return a.toString()}catch(b){}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var c=new Date,a=c.getDate(),b=c.getMonth()+1,d=c.getFullYear();10\u003Ea\u0026\u0026(a=\"0\"+a);10\u003Eb\u0026\u0026(b=\"0\"+b);return currentDate=a+\"\/\"+b+\"\/\"+d}catch(e){}})();"]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"q",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{if(3\u003E=",["escape",["macro",188],8,16],".length)return ",["escape",["macro",188],8,16],"}catch(a){}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.element"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"q",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"menuType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"menuItemText"
    },{
      "function":"__c",
      "vtp_value":["macro",10]
    },{
      "function":"__c",
      "vtp_value":["macro",10]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a;try{\"e_addToCart\"==",["escape",["macro",2],8,16],"\u0026\u0026(a=",["escape",["macro",1],8,16],".add.products.reduce(function(b,a){return b+a.price*a.quantity},0))}catch(b){",["escape",["macro",4],8,16],"(\"CJ - Add to Cart Product Price error: \"+b.message)}return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var a=document.querySelector(\"input#searchText.searchbox\").getAttribute(\"value\");return a}catch(b){}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){try{localStorage.removeItem(a)}catch(b){}}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"customer.email"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=CryptoJS.MD5(",["escape",["macro",202],8,16],");return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.products.0.quantity"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userBrowserLocale"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.detail.products.0.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.add.products.0.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.add.products.0.category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.add.products.0.quantity"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"customer.firstName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.remove.products.0.category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.remove.products.0.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.remove.products.0.name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.remove.products.0.quantity"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a;try{\"e_removeFromCart\"==",["escape",["macro",2],8,16],"\u0026\u0026(a=",["escape",["macro",1],8,16],".remove.products.reduce(function(b,a){return b+a.price*a.quantity},0))}catch(b){",["escape",["macro",4],8,16],"(\"CJ - Remove from Cart Product Price error: \"+b.message)}return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"env"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"orderDetails.billingAddress.city"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"orderDetails.billingAddress.state"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"orderDetails.billingAddress.postalCode"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.errorMessage",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.errorUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.errorLineNumber",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.newUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.oldUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.newHistoryState",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.oldHistoryState",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.historyChangeSource",
      "vtp_dataLayerVersion":1
    },{
      "function":"__ctv"
    },{
      "function":"__r"
    },{
      "function":"__cid"
    },{
      "function":"__hid"
    }],
  "tags":[{
      "function":"__ua",
      "priority":1,
      "metadata":["map"],
      "once_per_load":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",56],
      "vtp_eventCategory":["macro",6],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","5","metric",["macro",57]],["map","index","6","metric",["macro",59]],["map","index","7","metric",["macro",60]],["map","index","19","metric","1"],["map","index","21","metric",["macro",52]]],
      "vtp_gaSettings":["macro",48],
      "vtp_eventAction":"Transaction Complete",
      "vtp_eventLabel":"Primary Order",
      "vtp_dimension":["list",["map","index","20","dimension",["macro",61]],["map","index","13","dimension",["macro",62]],["map","index","17","dimension",["macro",63]],["map","index","18","dimension",["macro",64]],["map","index","19","dimension",["macro",65]],["map","index","42","dimension",["macro",66]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":5
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",5],
      "vtp_eventCategory":["macro",6],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",48],
      "vtp_eventAction":"Checkout Step",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":3
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":7
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"shopping list",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",48],
      "vtp_eventAction":"add to list",
      "vtp_eventLabel":"product",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":9
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"engagement",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",48],
      "vtp_eventAction":"add to recipe box",
      "vtp_eventLabel":["macro",70],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":11
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":13
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"engagement",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",48],
      "vtp_eventAction":"shop curbside",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":14
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"engagement",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",48],
      "vtp_eventAction":"shop delivery",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":15
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"shopping list",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",48],
      "vtp_eventAction":"customize",
      "vtp_eventLabel":"product",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":16
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":17
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"login",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","26","metric","1"]],
      "vtp_gaSettings":["macro",48],
      "vtp_eventAction":"logged in",
      "vtp_eventLabel":"login",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":19
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"engagement",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",48],
      "vtp_eventAction":"email newsletter signup",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":20
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"login",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",48],
      "vtp_eventAction":"create account",
      "vtp_eventLabel":"user register",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":26
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":27
    },{
      "function":"__paused",
      "vtp_originalTagType":"flc",
      "tag_id":31
    },{
      "function":"__paused",
      "vtp_originalTagType":"flc",
      "tag_id":33
    },{
      "function":"__paused",
      "vtp_originalTagType":"flc",
      "tag_id":35
    },{
      "function":"__paused",
      "vtp_originalTagType":"fls",
      "tag_id":36
    },{
      "function":"__paused",
      "vtp_originalTagType":"flc",
      "tag_id":41
    },{
      "function":"__paused",
      "vtp_originalTagType":"flc",
      "tag_id":43
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":44
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"rtgco0",
      "vtp_useImageTag":false,
      "vtp_activityTag":["macro",77],
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8185402",
      "vtp_ordinalStandard":["macro",78],
      "vtp_url":["macro",79],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":51
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",83],
      "vtp_eventCategory":"ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",48],
      "vtp_eventAction":"promo impression",
      "vtp_eventLabel":["macro",84],
      "vtp_dimension":["list",["map","index","16","dimension",["macro",32]],["map","index","23","dimension",["macro",40]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":52
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",85],
      "vtp_eventCategory":"ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",48],
      "vtp_eventAction":"promo click",
      "vtp_eventLabel":["macro",80],
      "vtp_dimension":["list",["map","index","16","dimension",["macro",32]],["map","index","23","dimension",["macro",40]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":53
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["macro",86],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","24","metric","1"]],
      "vtp_gaSettings":["macro",48],
      "vtp_eventAction":["template","filter applied - ",["macro",87]],
      "vtp_eventLabel":["macro",88],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":56
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"sort",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",48],
      "vtp_eventAction":["macro",89],
      "vtp_eventLabel":["macro",8],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":57
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":58
    },{
      "function":"__gclidw",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableCrossDomain":false,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "tag_id":59
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Shopping List",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",48],
      "vtp_eventAction":"Add To List",
      "vtp_eventLabel":"Recipe",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":63
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Shopping List",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",48],
      "vtp_eventAction":"Add To List",
      "vtp_eventLabel":"Product",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":64
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"cart",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",48],
      "vtp_eventAction":"create new",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":65
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Shopping List",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",48],
      "vtp_eventAction":"Create New",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":66
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",5],
      "vtp_eventCategory":["macro",6],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","16","metric",["macro",90]]],
      "vtp_gaSettings":["macro",48],
      "vtp_eventAction":"Add To Cart",
      "vtp_eventLabel":["macro",91],
      "vtp_dimension":["list",["map","index","10","dimension",["macro",92]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":67
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Engagement",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",48],
      "vtp_eventAction":"Find A Store",
      "vtp_eventLabel":["macro",93],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":68
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Login",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","27","metric","1"]],
      "vtp_gaSettings":["macro",48],
      "vtp_eventAction":"Log out",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":70
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Login",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",48],
      "vtp_eventAction":"Forgot Your Password",
      "vtp_eventLabel":"Start",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":71
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Shopping List",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",48],
      "vtp_eventAction":"Customize",
      "vtp_eventLabel":"Product",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":72
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Engagement",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","18","metric","1"]],
      "vtp_gaSettings":["macro",48],
      "vtp_eventAction":"Select Coupon",
      "vtp_eventLabel":["macro",94],
      "vtp_dimension":["list",["map","index","71","dimension",["macro",95]],["map","index","72","dimension",["macro",94]],["map","index","73","dimension",["macro",96]],["map","index","74","dimension",["macro",97]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":73
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Engagement",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",48],
      "vtp_eventAction":"View Coupon Details",
      "vtp_eventLabel":["macro",94],
      "vtp_dimension":["list",["map","index","71","dimension",["macro",95]],["map","index","72","dimension",["macro",94]],["map","index","73","dimension",["macro",96]],["map","index","74","dimension",["macro",97]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":74
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",5],
      "vtp_eventCategory":["macro",6],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",48],
      "vtp_eventAction":"Product Impressions",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":76
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",5],
      "vtp_eventCategory":["macro",6],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","17","metric",["macro",98]]],
      "vtp_gaSettings":["macro",48],
      "vtp_eventAction":"Product Click",
      "vtp_dimension":["list",["map","index","10","dimension",["macro",99]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":77
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Shopping List",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",48],
      "vtp_eventAction":"Check All",
      "vtp_eventLabel":"Recipe",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":78
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Engagement",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",48],
      "vtp_eventAction":"Save",
      "vtp_eventLabel":"Recipe",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":79
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",5],
      "vtp_eventCategory":["macro",6],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",48],
      "vtp_eventAction":"Product Detail Page",
      "vtp_dimension":["list",["map","index","10","dimension",["macro",101]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":81
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":83
    },{
      "function":"__flc",
      "once_per_load":true,
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"actio0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"heb_b0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8185402",
      "vtp_ordinalStandard":["macro",78],
      "vtp_url":["macro",79],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":84
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Navigation",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",48],
      "vtp_eventAction":"footer social click",
      "vtp_eventLabel":["macro",103],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":85
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_gaSettings":["macro",48],
      "vtp_dimension":["list",["map","index","108","dimension",["macro",104]],["map","index","109","dimension",["macro",106]],["map","index","110","dimension",["macro",108]],["map","index","111","dimension",["macro",110]],["map","index","112","dimension",["macro",111]],["map","index","113","dimension",["macro",112]],["map","index","116","dimension",["macro",114]],["map","index","104","dimension",["macro",115]],["map","index","105","dimension",["macro",116]],["map","index","106","dimension",["macro",117]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":88
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Errors and Alerts",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",48],
      "vtp_eventAction":["template",["macro",118]," message shown"],
      "vtp_eventLabel":["macro",100],
      "vtp_dimension":["list",["map","index","89","dimension",["macro",100]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":90
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Engagement",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",48],
      "vtp_eventAction":"Time Slot Selected",
      "vtp_eventLabel":["macro",116],
      "vtp_dimension":["list",["map","index","104","dimension",["macro",115]],["map","index","105","dimension",["macro",116]],["map","index","106","dimension",["macro",117]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":92
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"site search",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index",["macro",123],"metric","1"]],
      "vtp_gaSettings":["macro",48],
      "vtp_eventAction":"zero results",
      "vtp_eventLabel":["macro",19],
      "vtp_dimension":["list",["map","index","15","dimension",["macro",40]],["map","index","23","dimension",["macro",40]],["map","index","62","dimension",["macro",124]],["map","index","63","dimension",["macro",122]],["map","index","64","dimension",["macro",125]],["map","index","65","dimension",["macro",126]],["map","index","66","dimension",["macro",20]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":93
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Exit Link",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",48],
      "vtp_eventAction":"Click",
      "vtp_eventLabel":["macro",80],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":94
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Download",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",48],
      "vtp_eventAction":"Click",
      "vtp_eventLabel":["macro",80],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":95
    },{
      "function":"__ua",
      "once_per_load":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"site search",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","1","metric","1"]],
      "vtp_gaSettings":["macro",48],
      "vtp_eventAction":"all searches",
      "vtp_eventLabel":["macro",19],
      "vtp_dimension":["list",["map","index","23","dimension",["macro",40]],["map","index","62","dimension",["macro",124]],["map","index","63","dimension",["macro",122]],["map","index","64","dimension",["macro",125]],["map","index","65","dimension",["macro",126]],["map","index","66","dimension",["macro",20]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":96
    },{
      "function":"__ua",
      "once_per_load":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"site search",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","2","metric","1"],["map","index","12","metric",["macro",124]],["map","index","13","metric",["macro",122]],["map","index","14","metric",["macro",125]],["map","index","15","metric",["macro",126]]],
      "vtp_gaSettings":["macro",48],
      "vtp_eventAction":"with results",
      "vtp_eventLabel":["macro",19],
      "vtp_dimension":["list",["map","index","23","dimension",["macro",40]],["map","index","62","dimension",["macro",124]],["map","index","63","dimension",["macro",122]],["map","index","64","dimension",["macro",125]],["map","index","65","dimension",["macro",126]],["map","index","66","dimension",["macro",20]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":97
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"engagement",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",48],
      "vtp_eventAction":"search submitted",
      "vtp_eventLabel":["macro",72],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":98
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"site search",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","4","metric","1"]],
      "vtp_gaSettings":["macro",48],
      "vtp_eventAction":"result interaction",
      "vtp_eventLabel":["macro",19],
      "vtp_dimension":["list",["map","index","23","dimension",["macro",40]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":99
    },{
      "function":"__ua",
      "unlimited":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"site search",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","10","metric",["macro",132]],["map","index","11","metric","1"]],
      "vtp_gaSettings":["macro",48],
      "vtp_eventAction":"Typeahed click",
      "vtp_eventLabel":["macro",133],
      "vtp_dimension":["list",["map","index","60","dimension",["macro",134]],["map","index","61","dimension",["macro",133]],["map","index","67","dimension",["macro",135]],["map","index","68","dimension",["macro",136]],["map","index","69","dimension",["macro",137]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":105
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u1","value",["template",["macro",26],["macro",8]]],["map","key","u2","value",["macro",7]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"hebma0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"hebma0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9407090",
      "vtp_ordinalStandard":["macro",78],
      "vtp_url":["macro",79],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":106
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u1","value",["template",["macro",26],["macro",8]]],["map","key","u2","value",["macro",7]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"hebma0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"hebma00",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9407090",
      "vtp_ordinalStandard":["macro",78],
      "vtp_url":["macro",79],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":107
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u1","value",["template",["macro",26],["macro",8]]],["map","key","u2","value",["macro",7]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"hebma0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"hebma001",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9407090",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",78],
      "vtp_url":["macro",79],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":108
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u1","value",["template",["macro",26],["macro",8]]],["map","key","u2","value",["macro",7]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"hebma0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"hebma000",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9407090",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",78],
      "vtp_url":["macro",79],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":109
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u1","value",["template",["macro",26],["macro",8]]],["map","key","u2","value",["macro",7]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"hebma0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"hebma002",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9407090",
      "vtp_ordinalStandard":["macro",78],
      "vtp_url":["macro",79],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":110
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u1","value",["template",["macro",26],["macro",8]]],["map","key","u2","value",["macro",7]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"hebma0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"hebma003",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9407090",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",78],
      "vtp_url":["macro",79],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":111
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u1","value",["template",["macro",26],["macro",8]]],["map","key","u2","value",["macro",7]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"hebma0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"hebma005",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9407090",
      "vtp_ordinalStandard":["macro",78],
      "vtp_url":["macro",79],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":112
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u1","value",["template",["macro",26],["macro",8]]],["map","key","u2","value",["macro",7]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"hebma0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"hebma004",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9407090",
      "vtp_ordinalStandard":["macro",78],
      "vtp_url":["macro",79],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":113
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u1","value",["template",["macro",26],["macro",8]]],["map","key","u2","value",["macro",7]],["map","key","u3","value",["macro",51]],["map","key","u4","value",["macro",37]],["map","key","u5","value",["macro",33]],["map","key","u6","value",["macro",139]]],
      "vtp_revenue":"1",
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",51],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"hebma00",
      "vtp_useImageTag":false,
      "vtp_activityTag":"hebma0",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9407090",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",79],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":114
    },{
      "function":"__twitter_website_tag",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_event_type":"PageView",
      "vtp_twitter_pixel_id":"nuq7f",
      "tag_id":129
    },{
      "function":"__twitter_website_tag",
      "once_per_event":true,
      "vtp_event_type":"AddToCart",
      "vtp_twitter_pixel_id":"o21c8",
      "tag_id":130
    },{
      "function":"__twitter_website_tag",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_event_type":"Signup",
      "vtp_twitter_pixel_id":"o21c6",
      "tag_id":131
    },{
      "function":"__twitter_website_tag",
      "once_per_event":true,
      "vtp_event_type":"Purchase",
      "vtp_twitter_pixel_id":"nuq7f",
      "tag_id":132
    },{
      "function":"__pntr",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_setCustomParams":false,
      "vtp_tagId":"2614944048221",
      "vtp_eventName":"pagevisit",
      "tag_id":133
    },{
      "function":"__pntr",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_setCustomParams":false,
      "vtp_tagId":"2614944048221",
      "vtp_eventName":"addtocart",
      "tag_id":134
    },{
      "function":"__pntr",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_setCustomParams":false,
      "vtp_tagId":"2614944048221",
      "vtp_eventName":"signup",
      "tag_id":135
    },{
      "function":"__pntr",
      "once_per_event":true,
      "vtp_setCustomParams":false,
      "vtp_tagId":"2614944048221",
      "vtp_eventName":"checkout",
      "vtp_order_id":["macro",140],
      "tag_id":136
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_orderId":["macro",141],
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"944115588",
      "vtp_currencyCode":"USD",
      "vtp_conversionLabel":"VSrCCPinwrkBEISfmMID",
      "vtp_url":["macro",79],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "tag_id":137
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"944115588",
      "vtp_conversionLabel":"PL3_CMDaxaYBEISfmMID",
      "vtp_url":["macro",79],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "tag_id":138
    },{
      "function":"__sp",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableDynamicRemarketing":false,
      "vtp_conversionId":"944115588",
      "vtp_customParamsFormat":"NONE",
      "vtp_rdp":false,
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",79],
      "vtp_enableRdpCheckbox":true,
      "tag_id":139
    },{
      "function":"__baut",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_tagId":"17120247",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"PAGE_LOAD",
      "tag_id":140
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",5],
      "vtp_eventCategory":["macro",6],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","5","metric",["macro",57]],["map","index","6","metric",["macro",59]],["map","index","7","metric",["macro",60]],["map","index","20","metric","1"],["map","index","22","metric",["macro",52]]],
      "vtp_gaSettings":["macro",48],
      "vtp_eventAction":"Transaction Complete",
      "vtp_eventLabel":"Add-Ons",
      "vtp_dimension":["list",["map","index","20","dimension",["macro",61]],["map","index","13","dimension",["macro",62]],["map","index","17","dimension",["macro",63]],["map","index","18","dimension",["macro",64]],["map","index","19","dimension",["macro",65]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":141
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":143
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Errors and Alerts",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",48],
      "vtp_eventAction":"Welcome Modal Test",
      "vtp_eventLabel":"Control: Welcome to the new HEB.com!",
      "vtp_dimension":["list",["map","index","89","dimension",["macro",100]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":145
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Errors and Alerts",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",48],
      "vtp_eventAction":"Welcome Modal Test",
      "vtp_eventLabel":"Variation: Log in to get more",
      "vtp_dimension":["list",["map","index","89","dimension",["macro",100]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":146
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"login",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","25","metric","1"]],
      "vtp_gaSettings":["macro",48],
      "vtp_eventAction":"start login",
      "vtp_eventLabel":"my account page",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":147
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u1","value",["template",["macro",26],["macro",8]]],["map","key","u2","value",["macro",7]],["map","key","u3","value",["macro",51]],["map","key","u4","value",["macro",37]],["map","key","u5","value",["macro",33]],["map","key","u6","value",["macro",139]]],
      "vtp_revenue":"1",
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",51],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"hebcu00",
      "vtp_useImageTag":false,
      "vtp_activityTag":"shoph0",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9407090",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",79],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":148
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Engagement",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","28","metric","1"]],
      "vtp_gaSettings":["macro",48],
      "vtp_eventAction":"result interaction",
      "vtp_eventLabel":"Category page",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":150
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Engagement",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","29","metric","1"]],
      "vtp_gaSettings":["macro",48],
      "vtp_eventAction":"Category PageView",
      "vtp_eventLabel":["template",["macro",26],["macro",8]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":153
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Engagement",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",48],
      "vtp_eventAction":"Shopping Cart",
      "vtp_eventLabel":"Empty Cart",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":154
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",48],
      "vtp_eventAction":"Your Orders: Keep Order",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":156
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",48],
      "vtp_eventAction":"Your Orders: Cancel Order",
      "vtp_eventLabel":["macro",144],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":157
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"engagement",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",48],
      "vtp_eventAction":"vic3 interrupt",
      "vtp_eventLabel":"modal shown",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":160
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"engagement",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",48],
      "vtp_eventAction":"vic3 interrupt",
      "vtp_eventLabel":"store change",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":161
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"engagement",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",48],
      "vtp_eventAction":"vic3 interrupt",
      "vtp_eventLabel":"order placed",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":162
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":163
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":164
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":165
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":166
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":167
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"support",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",48],
      "vtp_eventAction":"FAQ Title Click",
      "vtp_eventLabel":["macro",145],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":168
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":169
    },{
      "function":"__cl",
      "tag_id":170
    },{
      "function":"__cl",
      "tag_id":171
    },{
      "function":"__cl",
      "tag_id":172
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8857370_35",
      "tag_id":173
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8857370_36",
      "tag_id":174
    },{
      "function":"__cl",
      "tag_id":175
    },{
      "function":"__fsl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"5000",
      "vtp_uniqueTriggerId":"8857370_38",
      "tag_id":176
    },{
      "function":"__cl",
      "tag_id":177
    },{
      "function":"__fsl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"5000",
      "vtp_uniqueTriggerId":"8857370_58",
      "tag_id":178
    },{
      "function":"__cl",
      "tag_id":179
    },{
      "function":"__cl",
      "tag_id":180
    },{
      "function":"__cl",
      "tag_id":181
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"a[href*=\"int=\"]",
      "vtp_firingFrequency":"ONCE_PER_ELEMENT",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"25",
      "vtp_uniqueTriggerId":"8857370_80",
      "tag_id":182
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8857370_82",
      "tag_id":183
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"2000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"8857370_99",
      "tag_id":184
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"2000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"8857370_102",
      "tag_id":185
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8857370_145",
      "tag_id":186
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8857370_147",
      "tag_id":187
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"MANY_PER_ELEMENT",
      "vtp_elementSelector":"#change-timeslot-modal",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"5",
      "vtp_uniqueTriggerId":"8857370_181",
      "tag_id":188
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"[data-message-type]",
      "vtp_firingFrequency":"MANY_PER_ELEMENT",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"8857370_182",
      "tag_id":189
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8857370_192",
      "tag_id":190
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8857370_193",
      "tag_id":191
    },{
      "function":"__cl",
      "tag_id":192
    },{
      "function":"__fsl",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8857370_332",
      "tag_id":193
    },{
      "function":"__cl",
      "tag_id":194
    },{
      "function":"__cl",
      "tag_id":195
    },{
      "function":"__cl",
      "tag_id":196
    },{
      "function":"__cl",
      "tag_id":197
    },{
      "function":"__cl",
      "tag_id":198
    },{
      "function":"__cl",
      "tag_id":199
    },{
      "function":"__cl",
      "tag_id":200
    },{
      "function":"__cl",
      "tag_id":201
    },{
      "function":"__fsl",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8857370_365",
      "tag_id":202
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1396398977117518\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u0026lt;img height=\u0026quot;1\u0026quot; width=\u0026quot;1\u0026quot; style=\u0026quot;display:none\u0026quot;\n  src=\u0026quot;https:\/\/www.facebook.com\/tr?id=1396398977117518",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":45
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Etry{fbq(\"track\",\"InitiateCheckout\")}catch(a){};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":46
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003Evar purchaseRevenue=\"0\";fbq(\"track\",\"Purchase\",{value:purchaseRevenue,currency:\"USD\"});var orderType=",["escape",["macro",61],8,16],";fbq(\"trackCustom\",\"OrderType\",{value:orderType});var OrderID=",["escape",["macro",140],8,16],";fbq(\"trackCustom\",\"OrderID\",{value:orderType});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":47
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.clickTaleTagInjected||!function(b,d,e){function c(){var a=b.createElementNS;a=a?a.call(b,\"http:\/\/www.w3.org\/1999\/xhtml\",d):b.createElement(d);var c=b.getElementsByTagName(d)[0];a.async=!0;a.crossOrigin=\"anonymous\";a.type=\"text\/javascript\";a.src=e;c.parentNode.insertBefore(a,c)}clickTaleTagInjected=!0;\"loading\"!=b.readyState?c():b.addEventListener(\"DOMContentLoaded\",function(){setTimeout(c,0)})}(document,\"script\",\"https:\/\/cdnssl.clicktale.net\/www08\/ptc\/672ab2f1-0693-4279-8d14-6f4c3247f9e6.js\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":50
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"type\/javascript\"\u003EIf(window.KAMPYLE_ONSITE_SDK\u0026\u0026\"function\"===typeof window.KAMPYLE_ONSITE_SDK.updatePageView);window.KAMPYLE_ONSITE_SDK.updatePageView();\u003C\/script\u003E ",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":55
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E!function(b){if(!window.pintrk){window.pintrk=function(){window.pintrk.queue.push(Array.prototype.slice.call(arguments))};var a=window.pintrk;a.queue=[];a.version=\"3.0\";a=document.createElement(\"script\");a.async=!0;a.src=b;b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)}}(\"https:\/\/s.pinimg.com\/ct\/core.js\");pintrk(\"load\",\"2614944048221\");pintrk(\"page\",{page_name:",["escape",["macro",24],8,16],",page_category:\"PAGE_CATEGORY\"});\u003C\/script\u003E\n  \u003Cnoscript\u003E\n    \u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/ct.pinterest.com\/v3\/?tid=2614944048221\u0026amp;noscript=1\"\u003E\n  \u003C\/noscript\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":86
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\" src=\"https:\/\/nebula-cdn.kampyle.com\/wu\/367229\/onsite\/embed.js\" async\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":87
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){dataLayer.push({event:\"e_vpv\",vpv:\"\/vpv\/reserve-timeslot\"})})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":89
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"type\/javascript\"\u003EIf(window.KAMPYLE_ONSITE_SDK\u0026\u0026\"function\"===typeof window.KAMPYLE_ONSITE_SDK.isSurveyDisplayed());window.KAMPYLE_ONSITE_SDK.isSurveyDisplayed();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":100
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{var a=",["escape",["macro",14],8,16],";a\u0026\u0026",["escape",["macro",147],8,16],"(",["escape",["macro",12],8,16],",a)}catch(b){",["escape",["macro",4],8,16],"(\"HTML - Store User ID error: \"+b.message)}})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":101
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{dataLayer.push({enableSearchResultsInteractions:!1})}catch(a){}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":103
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{dataLayer.push({enableSearchResultsInteractions:!0})}catch(a){}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":104
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"CompleteRegistration\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":117
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"AddToCart\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":118
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b,d){if(!a.snaptr){var c=a.snaptr=function(){c.handleRequest?c.handleRequest.apply(c,arguments):c.queue.push(arguments)};c.queue=[];a=\"script\";r=b.createElement(a);r.async=!0;r.src=d;b=b.getElementsByTagName(a)[0];b.parentNode.insertBefore(r,b)}})(window,document,\"https:\/\/sc-static.net\/scevent.min.js\");snaptr(\"init\",\"62a802e2-1947-4acc-b626-e01191ccfba7\",{user_email:\"\"});snaptr(\"track\",\"PAGE_VIEW\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":123
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b,d){if(!a.snaptr){var c=a.snaptr=function(){c.handleRequest?c.handleRequest.apply(c,arguments):c.queue.push(arguments)};c.queue=[];a=\"script\";r=b.createElement(a);r.async=!0;r.src=d;b=b.getElementsByTagName(a)[0];b.parentNode.insertBefore(r,b)}})(window,document,\"https:\/\/sc-static.net\/scevent.min.js\");snaptr(\"init\",\"62a802e2-1947-4acc-b626-e01191ccfba7\",{user_email:\"\"});snaptr(\"track\",\"ADD_CART\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":124
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b,d){if(!a.snaptr){var c=a.snaptr=function(){c.handleRequest?c.handleRequest.apply(c,arguments):c.queue.push(arguments)};c.queue=[];a=\"script\";r=b.createElement(a);r.async=!0;r.src=d;b=b.getElementsByTagName(a)[0];b.parentNode.insertBefore(r,b)}})(window,document,\"https:\/\/sc-static.net\/scevent.min.js\");snaptr(\"init\",\"62a802e2-1947-4acc-b626-e01191ccfba7\",{user_email:\"\"});snaptr(\"track\",\"SIGN_UP\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":125
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/javascript\"\u003E(function(a,b,d){if(!a.snaptr){var c=a.snaptr=function(){c.handleRequest?c.handleRequest.apply(c,arguments):c.queue.push(arguments)};c.queue=[];a=\"script\";r=b.createElement(a);r.async=!0;r.src=d;b=b.getElementsByTagName(a)[0];b.parentNode.insertBefore(r,b)}})(window,document,\"https:\/\/sc-static.net\/scevent.min.js\");snaptr(\"init\",\"62a802e2-1947-4acc-b626-e01191ccfba7\",{user_email:\"\"});snaptr(\"track\",\"PURCHASE\",{transaction_id:",["escape",["macro",140],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":126
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.location.search\u0026\u0026window.location.search.indexOf(\"testForm\\x3d1\")\u0026\u0026$(\".ctacontainer\").html('\\x3ciframe height\\x3d\"2400\" src\\x3d\"https:\/\/surveyaid.customernote.com\/Contact_heb.aspx?PID\\x3duzbi+BdJy08\\x3d\\x26CID\\x3dyhMjDcAypI8\\x3d\" width\\x3d\"100%\"\\x3e\\x3c\/iframe\\x3e');\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":149
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{dataLayer.push({enableCategoryPageInteractions:!0})}catch(a){}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":151
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{dataLayer.push({enableCategoryPageInteractions:!1})}catch(a){}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":152
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Epintrk(\"track\",\"lead\",{lead_type:\"Newsletter\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":155
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E$(\"#body\").attr(\"id\",\"toc-pp\").css(\"max-width\",\"1012px\").css(\"margin\",\"0 auto\").css(\"padding\",\"0 10px\");$(\"#privacyDiv\").css(\"width\",\"100%\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":159
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"e_checkoutStep"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"e_addOnCheckoutStep"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"e_cartPageLoaded"
    },{
      "function":"_eq",
      "arg0":["macro",50],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"e_purchase"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.js"
    },{
      "function":"_re",
      "arg0":["macro",26],
      "arg1":"cert-selling|retail.prod.heb.com|plnkr.co"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":".*"
    },{
      "function":"_css",
      "arg0":["macro",67],
      "arg1":"[onclick*='javascript:addToListFromCategory']"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.click"
    },{
      "function":"_css",
      "arg0":["macro",67],
      "arg1":"[onclick*='javascript:addToListFromPDP']"
    },{
      "function":"_css",
      "arg0":["macro",67],
      "arg1":"[onclick*='addToRecipeBox']"
    },{
      "function":"_sw",
      "arg0":["macro",68],
      "arg1":"addRecipeToFolderForm"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.formSubmit"
    },{
      "function":"_re",
      "arg0":["macro",69],
      "arg1":"(^$|((^|,)8857370_365($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",71],
      "arg1":"GET"
    },{
      "function":"_ew",
      "arg0":["macro",72],
      "arg1":"pageRequest=hotUserCouponSelection"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"ajaxSuccess"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"e_shopCurbside"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"e_shopDelivery"
    },{
      "function":"_css",
      "arg0":["macro",67],
      "arg1":".cat-customize-btn"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.dom"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"e_login"
    },{
      "function":"_cn",
      "arg0":["macro",73],
      "arg1":"www.heb.com\/my-account\/signup-email-form"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"e_accountRegistration"
    },{
      "function":"_re",
      "arg0":["macro",74],
      "arg1":"\/myaccount\/userregistration.jsp|\/check-out\/secure-checkout\\?_DARGS=\/checkout\/includes\/checkoutRegister.jsp.checkoutRegister"
    },{
      "function":"_re",
      "arg0":["macro",69],
      "arg1":"(^$|((^|,)8857370_38($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",74],
      "arg1":"\/myaccount\/login.jsp|\/check-out\/secure-checkout\\?_DARGS=\/checkout\/includes\/checkoutLogin.jsp"
    },{
      "function":"_re",
      "arg0":["macro",69],
      "arg1":"(^$|((^|,)8857370_58($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"\/pharmacy"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"e_addToCart"
    },{
      "function":"_eq",
      "arg0":["macro",75],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",77],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",82],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.elementVisibility"
    },{
      "function":"_re",
      "arg0":["macro",69],
      "arg1":"(^$|((^|,)8857370_80($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",67],
      "arg1":"a[href*=\"int=\"]"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",69],
      "arg1":"(^$|((^|,)8857370_82($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"e_filterApplied"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"e_sortApplied"
    },{
      "function":"_eq",
      "arg0":["macro",76],
      "arg1":"https:\/\/www.heb.com\/"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.timer"
    },{
      "function":"_re",
      "arg0":["macro",69],
      "arg1":"(^$|((^|,)8857370_99($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"e_recipeAddToList"
    },{
      "function":"_eq",
      "arg0":["macro",68],
      "arg1":"updateRecipeAddToList"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"e_productAddToList"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"e_createNewCart"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"e_createNewList"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"e_addOnAddToCart"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"e_findStoreSearch"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"e_logOut"
    },{
      "function":"_cn",
      "arg0":["macro",73],
      "arg1":"?DPSLogout=true"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"e_loginPasswordReset"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"e_customize"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"e_selectCoupon"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"e_couponDetails"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"e_productImpressions"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"e_addOnProductImpressions"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"e_productClick"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"e_addOnProductClick"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"e_recipeCheckAll"
    },{
      "function":"_eq",
      "arg0":["macro",100],
      "arg1":"Check All"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"e_addtoRecipeBox"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"e_productDetailView"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"e_addOnProductDetailView"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"e_menuNav"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"static-page\/Nutrition-Services"
    },{
      "function":"_re",
      "arg0":["macro",100],
      "arg1":"book now",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",102],
      "arg1":"btn-red"
    },{
      "function":"_re",
      "arg0":["macro",69],
      "arg1":"(^$|((^|,)8857370_145($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",67],
      "arg1":".footer__social a"
    },{
      "function":"_re",
      "arg0":["macro",69],
      "arg1":"(^$|((^|,)8857370_147($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"e_vpv"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"curbside"
    },{
      "function":"_re",
      "arg0":["macro",8],
      "arg1":"^\/(cart|checkout)"
    },{
      "function":"_sw",
      "arg0":["macro",8],
      "arg1":"\/my-account\/order-history\/add-on\/"
    },{
      "function":"_re",
      "arg0":["macro",69],
      "arg1":"(^$|((^|,)8857370_182($|,)))"
    },{
      "function":"_sw",
      "arg0":["macro",100],
      "arg1":"time slot will be held for you until"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"e_TimeSelectionModal"
    },{
      "function":"_eq",
      "arg0":["macro",7],
      "arg1":"search"
    },{
      "function":"_eq",
      "arg0":["macro",119],
      "arg1":"1"
    },{
      "function":"_eq",
      "arg0":["macro",121],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",20],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",122],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",129],
      "arg1":"outbound"
    },{
      "function":"_re",
      "arg0":["macro",69],
      "arg1":"(^$|((^|,)8857370_192($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",129],
      "arg1":"download"
    },{
      "function":"_re",
      "arg0":["macro",69],
      "arg1":"(^$|((^|,)8857370_193($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",130],
      "arg1":"best match",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",102],
      "arg1":"search-box"
    },{
      "function":"_eq",
      "arg0":["macro",72],
      "arg1":"undefined"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"search"
    },{
      "function":"_eq",
      "arg0":["macro",131],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"e_searchAutoCompleteClick"
    },{
      "function":"_eq",
      "arg0":["macro",138],
      "arg1":"createaccount-btn"
    },{
      "function":"_cn",
      "arg0":["macro",76],
      "arg1":"\/my-account\/user-register"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"in-store"
    },{
      "function":"_cn",
      "arg0":["macro",23],
      "arg1":"ship-to-home"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"e_addOnPurchase"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"e_curbsideWelcomeModal_control"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"e_curbsideWelcomeModal_test"
    },{
      "function":"_eq",
      "arg0":["macro",29],
      "arg1":"login"
    },{
      "function":"_eq",
      "arg0":["macro",28],
      "arg1":"my-account"
    },{
      "function":"_cn",
      "arg0":["macro",23],
      "arg1":"curbside"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"category"
    },{
      "function":"_eq",
      "arg0":["macro",142],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",143],
      "arg1":"Empty Cart"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"e_cancelOrderModal_keep-order"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"e_cancelOrderReason"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"e_vic3Interrupt_shown"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"e_vic3Interrupt_storeChanged"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"e_vic3Interrupt_orderPlaced"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"e_removeFromCart"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"e_faq_title_click"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"e_switchShoppingContext"
    },{
      "function":"_cn",
      "arg0":["macro",26],
      "arg1":"heb.com"
    },{
      "function":"_sw",
      "arg0":["macro",8],
      "arg1":"\/check-out\/secure-checkout\/"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"\/my-account\/forgot-password"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"\/my-account\/login"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"\/my-account\/global-reset-password"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"\/my-account\/forgot-password-success"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"\/my-account\/user-register"
    },{
      "function":"_eq",
      "arg0":["macro",146],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",69],
      "arg1":"(^$|((^|,)8857370_102($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",69],
      "arg1":"(^$|((^|,)8857370_181($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"static-page\/contact-us"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"\/check-out\/order-confirm"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"\/privacy"
    }],
  "rules":[
    [["if",0],["add",1]],
    [["if",1],["add",1]],
    [["if",2],["add",1]],
    [["if",3,4],["add",0,17,70,74,75,95,135,137,139,141,150]],
    [["if",5],["add",2,21,80,97,142,100,101,102,103,104,105,106,107,108,109,110,111,112,113,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132]],
    [["if",8,9],["add",3,15,143,153]],
    [["if",9,10],["add",3,15,143,153]],
    [["if",9,11],["add",4]],
    [["if",12,13,14],["add",4]],
    [["if",15,16,17],["add",5]],
    [["if",18],["add",6]],
    [["if",19],["add",7]],
    [["if",9,20],["add",8]],
    [["if",21],["add",9,47]],
    [["if",22],["add",10,62]],
    [["if",5,23],["add",11,63]],
    [["if",24],["add",12,76]],
    [["if",13,25,26],["add",13,18]],
    [["if",13,27,28],["add",13,19]],
    [["if",5],["unless",29],["add",14,27,58,67,71,77,78,133,138,147]],
    [["if",30],["add",16,32,64,68,72,94,143,146,148,153]],
    [["if",5,31],["add",20]],
    [["if",33,34,35],["add",22]],
    [["if",33,36,37,38],["add",23]],
    [["if",39],["add",24]],
    [["if",40],["add",25]],
    [["if",41,42,43],["add",26]],
    [["if",44],["add",28]],
    [["if",9,45],["add",28]],
    [["if",46],["add",29,65]],
    [["if",47],["add",30]],
    [["if",48],["add",31]],
    [["if",49],["add",32,64]],
    [["if",50],["add",33]],
    [["if",51],["add",34]],
    [["if",21,52],["add",34],["block",83]],
    [["if",53],["add",35]],
    [["if",54],["add",36]],
    [["if",55],["add",37]],
    [["if",56],["add",38]],
    [["if",57],["add",39]],
    [["if",58],["add",39]],
    [["if",59],["add",40,143,153]],
    [["if",60],["add",40]],
    [["if",61],["add",41]],
    [["if",9,62],["add",41]],
    [["if",63],["add",42]],
    [["if",64],["add",43,59,93]],
    [["if",65],["add",43,59]],
    [["if",66],["add",44]],
    [["if",37,67,68,69,70],["add",45]],
    [["if",37,71,72],["add",46]],
    [["if",73],["add",47]],
    [["if",34,77],["add",48]],
    [["if",79],["add",49]],
    [["if",21,80,81,82,83,84],["add",50]],
    [["if",37,85,86],["add",51]],
    [["if",37,87,88],["add",52]],
    [["if",21,80,81,82,83,89],["add",53,54,144]],
    [["if",13,90],["unless",91],["add",55]],
    [["if",59,92,93],["add",56]],
    [["if",8,9,92,93],["add",56]],
    [["if",9,10,92,93],["add",56]],
    [["if",30,92,93],["add",56]],
    [["if",94],["add",57]],
    [["if",9,95],["add",60,69,73,145,149]],
    [["if",5,96],["add",61]],
    [["if",4,97],["add",66]],
    [["if",4,98],["add",66]],
    [["if",99],["add",79]],
    [["if",100],["add",81]],
    [["if",101],["add",82]],
    [["if",5,102,103],["unless",52],["add",83]],
    [["if",4,104],["add",84]],
    [["if",30,105,106],["add",85]],
    [["if",9,10,93,105],["add",85]],
    [["if",8,9,105,106],["add",85]],
    [["if",21,105],["add",86,152]],
    [["if",9,107],["add",87]],
    [["if",108],["add",88]],
    [["if",109],["add",89]],
    [["if",110],["add",90]],
    [["if",111],["add",91]],
    [["if",112],["add",92]],
    [["if",113],["add",96]],
    [["if",114],["add",98]],
    [["if",115],["add",99]],
    [["if",5,41],["add",114]],
    [["if",5,116],["add",115]],
    [["if",5,117],["add",134]],
    [["if",5,118],["add",136]],
    [["if",5,119],["add",136]],
    [["if",5,120],["add",136]],
    [["if",5,121],["add",136]],
    [["if",5,122],["add",136]],
    [["if",42,123,124],["unless",29],["add",137,139,141]],
    [["if",34,125],["add",140]],
    [["if",21,126],["add",151]],
    [["if",5,127],["add",154]],
    [["if",21,128],["add",155]],
    [["if",6,7],["block",2,9,20]],
    [["if",5,32],["block",21]],
    [["if",21,74,75],["block",47]],
    [["if",21,74,76],["block",47]],
    [["if",21,29],["block",47]],
    [["if",9,78],["block",48,81,82]],
    [["if",21,80,84],["block",54]],
    [["if",5,29],["block",139,141,142]]]
},
"runtime":[[50,"__pntr",[46,"a"],[52,"b",["require","copyFromWindow"]],[52,"c",["require","createArgumentsQueue"]],[52,"d",["require","injectScript"]],[52,"e",["require","logToConsole"]],[52,"f",["require","makeTableMap"]],["e",[0,"GTM PTag v1.2; tagId: ",[17,[15,"a"],"tagId"]]],[52,"g",[28,["b","pintrk"]]],[52,"h",["c","pintrk","pintrk.queue"]],[22,[15,"g"],[46,[53,[52,"k",[8,"np","gtm"]],[22,[17,[15,"a"],"em"],[46,[43,[15,"k"],"em",[17,[15,"a"],"em"]]]],["h","load",[2,[17,[15,"a"],"tagId"],"toString",[7]],[15,"k"]],["h","page",[15,"k"]]]],[46,[22,[17,[15,"a"],"em"],[46,[53,[52,"k",[8,"em",[17,[15,"a"],"em"]]],["h","set",[15,"k"]]]]]]],[52,"i",[51,"",[7],[41,"k"],[3,"k",[8]],[22,[17,[15,"a"],"setCustomParams"],[46,[3,"k",["f",[17,[15,"a"],"values"],"name","value"]]]],[43,[15,"k"],"np","gtm"],[52,"l",[51,"",[7,"n"],[22,[21,[16,[15,"a"],[15,"n"]],[44]],[46,[43,[15,"k"],[15,"n"],[16,[15,"a"],[15,"n"]]]]]]],[52,"m",[51,"",[7,"n"],[22,[21,[16,[15,"a"],[15,"n"]],[44]],[46,[22,[20,[17,[15,"k"],"line_items"],[44]],[46,[43,[15,"k"],"line_items",[7,[8]]]]],[43,[16,[17,[15,"k"],"line_items"],0],[15,"n"],[16,[15,"a"],[15,"n"]]]]]]],[38,[17,[15,"a"],"eventName"],[46,"watchvideo","viewcategory","custom","signup","lead","search","addtocart","checkout","pagevisit"],[46,[5,[46]],[5,[46]],[5,[46,[4]]],[5,[46]],[5,[46,["l","lead_type"],[4]]],[5,[46,["l","search_query"],[4]]],[5,[46]],[5,[46,["l","order_id"],["l","order_quantity"],["l","value"],["l","currency"]]],[5,[46,["m","product_id"],["m","product_category"],[4]]],[9,[46,[4]]]]],[22,[21,[17,[15,"a"],"eventName"],""],[46,["e",[0,"Firing Pinterest event: ",[17,[15,"a"],"eventName"]]],["e","Event Data:"],["e",[15,"k"]],["h","track",[17,[15,"a"],"eventName"],[15,"k"]]]],[2,[15,"a"],"gtmOnSuccess",[7]]]],[52,"j",[51,"",[7],["e","Pinterest Error: Loading JS failed!"],[2,[15,"a"],"gtmOnFailure",[7]]]],["d","https://s.pinimg.com/ct/core.js",[15,"i"],[15,"j"],"PinterestJS"]],[50,"__twitter_website_tag",[46,"a"],[50,"i",[46],[41,"l"],[3,"l",["d","twq"]],[22,[15,"l"],[46,[36,[15,"l"]]]],["h","twq",[51,"",[7],[52,"n",["d","twq.exe.apply"]],[22,[15,"n"],[46,["c","twq.exe.apply",[45],[15,"arguments"]]],[46,["c","twq.queue.push",[15,"arguments"]]]]],true],["h","twq.version","1",true],["h","twq.queue",[7],true],[52,"m",[51,"",[7]]],["e","https://static.ads-twitter.com/uwt.js",[15,"m"],[15,"m"],"twitter_website_tag"],[36,["d","twq"]]],[52,"b",["require","createArgumentsQueue"]],[52,"c",["require","callInWindow"]],[52,"d",["require","copyFromWindow"]],[52,"e",["require","injectScript"]],[52,"f",["require","makeString"]],[52,"g",["require","makeTableMap"]],[52,"h",["require","setInWindow"]],[41,"j"],[3,"j",["i"]],["j","init",["f",[17,[15,"a"],"twitter_pixel_id"]]],[52,"k",["g",[30,[17,[15,"a"],"event_parameters"],[7]],"param_table_key_column","param_table_value_column"]],[22,[1,[15,"k"],[2,[15,"k"],"hasOwnProperty",[7,"content_ids"]]],[46,[53,[41,"l"],[3,"l",[16,[15,"k"],"content_ids"]],[3,"l",[2,[2,[15,"l"],"split",[7,"\""]],"join",[7,"\u0027"]]],[41,"m"],[3,"m",[2,[2,[15,"l"],"slice",[7,[2,[15,"l"],"indexOf",[7,"["]],[2,[15,"l"],"indexOf",[7,"]"]]]],"split",[7,","]]],[3,"m",[2,[15,"m"],"map",[7,[51,"",[7,"n"],[36,[30,[16,[2,[15,"n"],"split",[7,"\u0027"]],1],""]]]]]],[43,[15,"k"],"content_ids",[15,"m"]]]]],["j","track",["f",[17,[15,"a"],"event_type"]],[15,"k"]],[2,[15,"a"],"gtmOnSuccess",[7]]]]
,"permissions":{"__pntr":{"access_globals":{"keys":[{"key":"pintrk","read":true,"write":true,"execute":true},{"key":"pintrk.queue","read":true,"write":true,"execute":true}]},"logging":{"environments":"debug"},"inject_script":{"urls":["https:\/\/s.pinimg.com\/ct\/core.js"]}},"__twitter_website_tag":{"access_globals":{"keys":[{"key":"twq","read":true,"write":true,"execute":true},{"key":"twq.exe","read":true,"write":true,"execute":true},{"key":"twq.queue","read":true,"write":true,"execute":true},{"key":"twq.queue.push","read":true,"write":true,"execute":true},{"key":"twq.version","read":true,"write":true,"execute":false},{"key":"twq.exe.apply","read":true,"write":true,"execute":true}]},"inject_script":{"urls":["https:\/\/static.ads-twitter.com\/uwt.js"]}}}

,"security_groups":{
"nonGoogleScripts":["__pntr","__twitter_website_tag"]}

};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,ba="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ca;if("function"==typeof Object.setPrototypeOf)ca=Object.setPrototypeOf;else{var da;a:{var ea={Mf:!0},fa={};try{fa.__proto__=ea;da=fa.Mf;break a}catch(a){}da=!1}ca=da?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ha=ca,ia=this||self,ja=/^[\w+/_-]+[=]{0,2}$/,ka=null,ma=function(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a};var oa=function(a,b){this.a=a;this.i=b};var pa=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},qa=function(){this.m={};this.i=!1;this.s={}};qa.prototype.get=function(a){return this.m["dust."+a]};qa.prototype.set=function(a,b){this.i||(a="dust."+a,this.s.hasOwnProperty(a)||(this.m[a]=b))};qa.prototype.has=function(a){return this.m.hasOwnProperty("dust."+a)};var ra=function(a){var b=[],c;for(c in a.m)a.m.hasOwnProperty(c)&&b.push(c.substr(5));return b};var h=function(a){this.i=new qa;this.a=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(pa(b)?this.a[Number(b)]=a[Number(b)]:this.i.set(b,a[b]))};aa=h.prototype;aa.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.a.length;c++){var d=this.a[c];null===d||void 0===d?b.push(""):d instanceof h?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
aa.set=function(a,b){if("length"==a){if(!pa(b))throw Error("RangeError: Length property must be a valid integer.");this.a.length=Number(b)}else pa(a)?this.a[Number(a)]=b:this.i.set(a,b)};aa.get=function(a){return"length"==a?this.length():pa(a)?this.a[Number(a)]:this.i.get(a)};aa.length=function(){return this.a.length};aa.$b=function(){for(var a=ra(this.i),b=0;b<this.a.length;b++)a.push(b+"");return new h(a)};
var ta=function(a,b){if(pa(b))delete a.a[Number(b)];else{var c=a.i,d;d="dust."+b;c.i||c.s.hasOwnProperty(d)||delete c.m[d]}};aa=h.prototype;aa.pop=function(){return this.a.pop()};aa.push=function(a){return this.a.push.apply(this.a,Array.prototype.slice.call(arguments))};aa.shift=function(){return this.a.shift()};aa.splice=function(a,b,c){return new h(this.a.splice.apply(this.a,arguments))};aa.unshift=function(a){return this.a.unshift.apply(this.a,Array.prototype.slice.call(arguments))};
aa.has=function(a){return pa(a)&&this.a.hasOwnProperty(a)||this.i.has(a)};var ua=function(){function a(f,g){if(b[f]){if(b[f].Qb+g>b[f].max)throw Error("Quota exceeded");b[f].Qb+=g}}var b={},c=void 0,d=void 0,e={fh:function(f){c=f},qe:function(){c&&a(c,1)},hh:function(f){d=f},Ca:function(f){d&&a(d,f)},Fh:function(f,g){b[f]=b[f]||{Qb:0};b[f].max=g},Eg:function(f){return b[f]&&b[f].Qb||0},reset:function(){b={}},kg:a};e.onFnConsume=e.fh;e.consumeFn=e.qe;e.onStorageConsume=e.hh;e.consumeStorage=e.Ca;e.setMax=e.Fh;e.getConsumed=e.Eg;e.reset=e.reset;e.consume=e.kg;return e};var va=function(a,b){this.F=a;this.M=function(c,d,e){return c.apply(d,e)};this.m=b;this.i=new qa;this.a=this.s=void 0};va.prototype.add=function(a,b){xa(this,a,b,!1)};var xa=function(a,b,c,d){if(!a.i.i)if(a.F.Ca(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.i;e.set(b,c);e.s["dust."+b]=!0}else a.i.set(b,c)};
va.prototype.set=function(a,b){this.i.i||(!this.i.has(a)&&this.m&&this.m.has(a)?this.m.set(a,b):(this.F.Ca(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.i.set(a,b)))};va.prototype.get=function(a){return this.i.has(a)?this.i.get(a):this.m?this.m.get(a):void 0};va.prototype.has=function(a){return!!this.i.has(a)||!(!this.m||!this.m.has(a))};var ya=function(a){var b=new va(a.F,a);a.s&&(b.s=a.s);b.M=a.M;b.a=a.a;return b};var za=function(){},Ca=function(a){return"function"==typeof a},q=function(a){return"string"==typeof a},Da=function(a){return"number"==typeof a&&!isNaN(a)},Ea=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},C=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Fa=function(a,b){if(a&&Ea(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Ga=function(a,b){if(!Da(a)||
!Da(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Ia=function(a,b){for(var c=new Ha,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Ja=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Ka=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Ma=function(a){return Math.round(Number(a))||0},Na=function(a){return"false"==
String(a).toLowerCase()?!1:!!a},Oa=function(a){var b=[];if(Ea(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Pa=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},Qa=function(){return(new Date).getTime()},Ha=function(){this.prefix="gtm.";this.values={}};Ha.prototype.set=function(a,b){this.values[this.prefix+a]=b};Ha.prototype.get=function(a){return this.values[this.prefix+a]};
var Ra=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Sa=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ta=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ua=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Va=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},Wa=function(a){for(var b=D,c=0;c<a.length-1;c++){if(!b.hasOwnProperty(a[c]))return;b=b[a[c]]}return b},Xa=function(a,b){for(var c=
{},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},Ya=function(a){var b=[];Ja(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};var Za=function(a,b){qa.call(this);this.F=a;this.M=b};ma(Za,qa);var ab=function(a,b){for(var c,d=0;d<b.length&&!(c=$a(a,b[d]),c instanceof oa);d++);return c},$a=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof Za))throw Error("Attempting to execute non-function "+b[0]+".");return c.a.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.s;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}};Za.prototype.toString=function(){return this.F};Za.prototype.getName=function(){return this.F};
Za.prototype.$b=function(){return new h(ra(this))};Za.prototype.a=function(a,b){a.F.qe();return this.M.apply(bb(this,a),Array.prototype.slice.call(arguments,1))};var bb=function(a,b){var c=function(d,e){this.F=d;this.i=e};c.prototype.a=function(d){var e=this.i;return Ea(d)?$a(e,d):d};c.prototype.s=function(d){return ab(this.i,d)};c.prototype.getName=function(){return this.F.getName()};c.prototype.m=function(){return b.F};return new c(a,b)};
Za.prototype.Fa=function(a,b){try{return this.a.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};var cb=function(){qa.call(this)};ma(cb,qa);cb.prototype.$b=function(){return new h(ra(this))};var db=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|Map|List)$/i,eb={Fn:"function",Map:"Object",List:"Array"},F=function(a,b,c){for(var d=0;d<b.length;d++){var e=db.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],g="!"===e[2],k=e[3],l=c[d],m=typeof l;if(null===l||"undefined"===m){if(g)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==k){var n=typeof l;l instanceof Za?n="Fn":l instanceof h?n="List":l instanceof cb&&(n="Map");if(n!=k)throw Error("Error in "+
a+". Argument "+f+" has type "+n+", which does not match required type "+(eb[k]||k)+".");}}};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var fb=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,gb=function(a){if(null==a)return String(a);var b=fb.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},hb=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},ib=function(a){if(!a||"object"!=gb(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!hb(a,"constructor")&&!hb(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||hb(a,b)},G=function(a,b){var c=b||("array"==gb(a)?[]:{}),d;for(d in a)if(hb(a,d)){var e=a[d];"array"==gb(e)?("array"!=gb(c[d])&&(c[d]=[]),c[d]=G(e,c[d])):ib(e)?(ib(c[d])||(c[d]={}),c[d]=G(e,c[d])):c[d]=e}return c};var kb=function(a,b){var c=[],d=[],e=function(g,k){for(var l=ra(g),m=0;m<l.length;m++)k[l[m]]=f(g.get(l[m]))},f=function(g){var k=C(c,g);if(-1<k)return d[k];if(g instanceof h){var l=[];c.push(g);d.push(l);for(var m=g.$b(),n=0;n<m.length();n++)l[m.get(n)]=f(g.get(m.get(n)));return l}if(g instanceof cb){var r={};c.push(g);d.push(r);e(g,r);return r}if(g instanceof Za){var t=function(){for(var p=Array.prototype.slice.call(arguments,0),u=0;u<p.length;u++)p[u]=jb(p[u],b);var v=b?b.F:ua(),w=new va(v);b&&
(w.a=b.a);return f(g.a.apply(g,[w].concat(p)))};c.push(g);d.push(t);e(g,t);return t}switch(typeof g){case "boolean":case "number":case "string":case "undefined":return g;case "object":if(null===g)return null}};return f(a)},jb=function(a,b){var c=[],d=[],e=function(g,k){for(var l in g)g.hasOwnProperty(l)&&k.set(l,f(g[l]))},f=function(g){var k=C(c,g);if(-1<k)return d[k];if(Ea(g)||Ka(g)){var l=new h([]);c.push(g);d.push(l);for(var m in g)g.hasOwnProperty(m)&&l.set(m,f(g[m]));return l}if(ib(g)){var n=
new cb;c.push(g);d.push(n);e(g,n);return n}if("function"===typeof g){var r=new Za("",function(p){for(var u=Array.prototype.slice.call(arguments,0),v=0;v<u.length;v++)u[v]=kb(this.a(u[v]),b);return f((0,this.i.M)(g,g,u))});c.push(g);d.push(r);e(g,r);return r}var t=typeof g;if(null===g||"string"===t||"number"===t||"boolean"===t)return g};return f(a)};var lb={control:function(a,b){return new oa(a,this.a(b))},fn:function(a,b,c){var d=this.i,e=this.a(b);if(!(e instanceof h))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.m().Ca(a.length+f.length);return new Za(a,function(){return function(g){var k=ya(d);void 0===k.a&&(k.a=this.i.a);for(var l=Array.prototype.slice.call(arguments,0),m=0;m<l.length;m++)if(l[m]=this.a(l[m]),l[m]instanceof oa)return l[m];for(var n=e.get("length"),r=
0;r<n;r++)r<l.length?k.set(e.get(r),l[r]):k.set(e.get(r),void 0);k.set("arguments",new h(l));var t=ab(k,f);if(t instanceof oa)return"return"===t.a?t.i:t}}())},list:function(a){var b=this.m();b.Ca(arguments.length);for(var c=new h,d=0;d<arguments.length;d++){var e=this.a(arguments[d]);"string"===typeof e&&b.Ca(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.m(),c=new cb,d=0;d<arguments.length-1;d+=2){var e=this.a(arguments[d])+"",f=this.a(arguments[d+1]),g=e.length;g+="string"===
typeof f?f.length:1;b.Ca(g);c.set(e,f)}return c},undefined:function(){}};function pb(a,b){var c=$a(a,b);if(c instanceof oa||c instanceof Za||c instanceof h||c instanceof cb||null===c||void 0===c||"string"===typeof c||"number"===typeof c||"boolean"===typeof c)return c}var qb=function(){this.m=ua();this.a=new va(this.m)},rb=function(a,b,c){var d=new Za(b,c);d.i=!0;a.a.set(b,d)};qb.prototype.Xb=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.i(c)};qb.prototype.i=function(a){for(var b,c=0;c<arguments.length;c++)b=pb(this.a,arguments[c]);return b};
qb.prototype.s=function(a,b){var c=ya(this.a);c.a=a;for(var d,e=1;e<arguments.length;e++)d=pb(c,arguments[e]);return d};var sb=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b};var tb={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof h)for(var f=arguments[e],g=0;g<f.length();g++)c.push(f.get(g));else c.push(arguments[e]);return new h(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.a(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.a(a,this.get(e),e,this)&&d.push(this.get(e));return new h(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.a(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.a(a,this.get(e),e,this));return new h(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0==d)throw Error("TypeError: Reduce on List with no elements.");for(var g=0;g<d;g++)if(this.has(g)){e=this.get(g);f=g+1;break}if(g==d)throw Error("TypeError: Reduce on List with no elements.");}for(var k=f;k<d;k++)this.has(k)&&(e=b.a(a,e,this.get(k),k,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0==d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var g=1;g<=d;g++)if(this.has(d-g)){e=this.get(d-g);f=d-(g+1);break}if(g>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var k=f;0<=k;k--)this.has(k)&&(e=b.a(a,e,this.get(k),k,this));return e},reverse:function(){for(var a=sb(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):ta(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new h(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.a(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=sb(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.a(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):ta(this,d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var ub="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),vb=new oa("break"),wb=new oa("continue"),xb=function(a,b){return this.a(a)+this.a(b)},yb=function(a,b){return this.a(a)&&this.a(b)},Ab=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);if(!(c instanceof h))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");if("boolean"==typeof a||"number"==typeof a){if("toString"==b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"==typeof a){if(0<=C(ub,b))return jb(a[b].apply(a,sb(c)),this.i);throw Error("TypeError: "+b+" is not a function");}if(a instanceof h){if(a.has(b)){var d=a.get(b);if(d instanceof Za){var e=sb(c);e.unshift(this.i);return d.a.apply(d,e)}throw Error("TypeError: "+b+" is not a function");}if(0<=C(tb.supportedMethods,b)){var f=sb(c);f.unshift(this.i);
return tb[b].apply(a,f)}}if(a instanceof Za||a instanceof cb){if(a.has(b)){var g=a.get(b);if(g instanceof Za){var k=sb(c);k.unshift(this.i);return g.a.apply(g,k)}throw Error("TypeError: "+b+" is not a function");}if("toString"==b)return a instanceof Za?a.getName():a.toString();if("hasOwnProperty"==b)return a.has.apply(a,sb(c))}throw Error("TypeError: Object has no '"+b+"' property.");},Bb=function(a,b){a=this.a(a);if("string"!=typeof a)throw Error("Invalid key name given for assignment.");var c=this.i;
if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=this.a(b);c.set(a,d);return d},Cb=function(a){var b=ya(this.i),c=ab(b,Array.prototype.slice.apply(arguments));if(c instanceof oa)return c},Db=function(){return vb},Eb=function(a){for(var b=this.a(a),c=0;c<b.length;c++){var d=this.a(b[c]);if(d instanceof oa)return d}},Fb=function(a){for(var b=this.i,c=0;c<arguments.length-1;c+=2){var d=arguments[c];if("string"===typeof d){var e=this.a(arguments[c+1]);xa(b,d,e,!0)}}},Gb=function(){return wb},
Hb=function(a,b,c){var d=new h;b=this.a(b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.i.set(a,this.a(f))},Ib=function(a,b){return this.a(a)/this.a(b)},Jb=function(a,b){return this.a(a)==this.a(b)},Kb=function(a){for(var b,c=0;c<arguments.length;c++)b=this.a(arguments[c]);return b};
function Lb(a,b,c){if("string"==typeof b)for(var d=0;d<b.length;d++){var e=a(d),f=ab(e,c);if(f instanceof oa){if("break"==f.a)break;if("return"==f.a)return f}}else if(b instanceof cb||b instanceof h||b instanceof Za)for(var g=b.$b(),k=g.length(),l=0;l<k;l++){var m=a(g.get(l)),n=ab(m,c);if(n instanceof oa){if("break"==n.a)break;if("return"==n.a)return n}}}
var Mb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.i;return Lb(function(e){d.set(a,e);return d},b,c)},Nb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.i;return Lb(function(e){var f=ya(d);xa(f,a,e,!0);return f},b,c)},Pb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.i;return Lb(function(e){var f=ya(d);f.add(a,e);return f},b,c)},Qb=function(a){return this.i.get(this.a(a))},Rb=function(a,b){var c;a=this.a(a);b=this.a(b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+
a+".");a instanceof cb||a instanceof h||a instanceof Za?c=a.get(b):"string"==typeof a&&("length"==b?c=a.length:pa(b)&&(c=a[b]));return c},Sb=function(a,b){return this.a(a)>this.a(b)},Tb=function(a,b){return this.a(a)>=this.a(b)},Ub=function(a,b){return this.a(a)===this.a(b)},Vb=function(a,b){return this.a(a)!==this.a(b)},Wb=function(a,b,c){var d=[];this.a(a)?d=this.a(b):c&&(d=this.a(c));var e=this.s(d);if(e instanceof oa)return e},Xb=function(a,b){return this.a(a)<this.a(b)},Yb=function(a,b){return this.a(a)<=
this.a(b)},Zb=function(a,b){return this.a(a)%this.a(b)},$b=function(a,b){return this.a(a)*this.a(b)},ac=function(a){return-this.a(a)},bc=function(a){return!this.a(a)},dc=function(a,b){return this.a(a)!=this.a(b)},ec=function(){return null},fc=function(a,b){return this.a(a)||this.a(b)},gc=function(a,b){var c=this.a(a);this.a(b);return c},hc=function(a){return this.a(a)},ic=function(a){return Array.prototype.slice.apply(arguments)},jc=function(a){return new oa("return",this.a(a))},kc=function(a,b,c){a=
this.a(a);b=this.a(b);c=this.a(c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof Za||a instanceof h||a instanceof cb)&&a.set(b,c);return c},lc=function(a,b){return this.a(a)-this.a(b)},mc=function(a,b,c){a=this.a(a);var d=this.a(b),e=this.a(c);if(!Ea(d)||!Ea(e))throw Error("Error: Malformed switch instruction.");for(var f,g=!1,k=0;k<d.length;k++)if(g||a===this.a(d[k]))if(f=this.a(e[k]),f instanceof oa){var l=f.a;if("break"==l)return;if("return"==
l||"continue"==l)return f}else g=!0;if(e.length==d.length+1&&(f=this.a(e[e.length-1]),f instanceof oa&&("return"==f.a||"continue"==f.a)))return f},nc=function(a,b,c){return this.a(a)?this.a(b):this.a(c)},oc=function(a){a=this.a(a);return a instanceof Za?"function":typeof a},pc=function(a){for(var b=this.i,c=0;c<arguments.length;c++){var d=arguments[c];"string"!=typeof d||b.add(d,void 0)}},qc=function(a,b,c,d){var e,f=this.a(d);if(this.a(c)&&(e=this.s(f),e instanceof oa)){if("break"==e.a)return;if("return"==
e.a)return e}for(;this.a(a);){e=this.s(f);if(e instanceof oa){if("break"==e.a)break;if("return"==e.a)return e}this.a(b)}},rc=function(a){return~Number(this.a(a))},sc=function(a,b){return Number(this.a(a))<<Number(this.a(b))},tc=function(a,b){return Number(this.a(a))>>Number(this.a(b))},uc=function(a,b){return Number(this.a(a))>>>Number(this.a(b))},vc=function(a,b){return Number(this.a(a))&Number(this.a(b))},wc=function(a,b){return Number(this.a(a))^Number(this.a(b))},xc=function(a,b){return Number(this.a(a))|
Number(this.a(b))};var zc=function(){this.a=new qb;yc(this)};zc.prototype.Xb=function(a){return this.a.i(a)};
var Bc=function(a,b){return Ac.a.s(a,b)},yc=function(a){function b(e,f){var g=d.a,k=String(f);lb.hasOwnProperty(e)&&rb(g,k||e,lb[e])}function c(e,f){rb(d.a,String(e),f)}var d=a;b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);c(0,xb);c(1,yb);c(2,Ab);c(3,Bb);c(53,Cb);c(4,Db);c(5,Eb);c(52,Fb);c(6,Gb);c(9,Eb);c(50,Hb);c(10,Ib);c(12,Jb);c(13,Kb);c(47,Mb);c(54,Nb);c(55,Pb);c(15,Qb);c(16,Rb);c(17,Rb);c(18,Sb);c(19,Tb);c(20,Ub);c(21,Vb);c(22,Wb);c(23,Xb);c(24,Yb);c(25,Zb);c(26,$b);c(27,
ac);c(28,bc);c(29,dc);c(45,ec);c(30,fc);c(32,gc);c(33,gc);c(34,hc);c(35,hc);c(46,ic);c(36,jc);c(43,kc);c(37,lc);c(38,mc);c(39,nc);c(40,oc);c(41,pc);c(42,qc);c(58,rc);c(57,sc);c(60,tc);c(61,uc);c(56,vc);c(62,wc);c(59,xc)},Dc=function(){var a=Ac,b=Cc();rb(a.a,"require",b)},Ec=function(a,b){a.a.a.M=b};
var Fc=[],Gc={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Hc=function(a){return Gc[a]},Ic=/[\x00\x22\x26\x27\x3c\x3e]/g;var Mc=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Nc={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Oc=function(a){return Nc[a]};
Fc[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Mc,Oc)+"'"}};var Xc=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Yc={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Zc=function(a){return Yc[a]};Fc[16]=function(a){return a};var ad;
var bd=[],cd=[],dd=[],ed=[],fd=[],gd={},hd,id,jd,kd=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},ld=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=gd[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):ad(c,e,b)},nd=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=md(a[e],b,c));
return d},od=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=gd[b];return c?c.priorityOverride||0:0},md=function(a,b,c){if(Ea(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(md(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var g=bd[f];if(!g||b.ad(g))return;c[f]=!0;try{var k=nd(g,b,c);k.vtp_gtmEventId=b.id;d=ld(k,b);jd&&(d=jd.mg(d,k))}catch(y){b.Je&&b.Je(y,Number(f)),d=!1}c[f]=
!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[md(a[l],b,c)]=md(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var r=md(a[n],b,c);id&&(m=m||r===id.Jb);d.push(r)}return id&&m?id.pg(d):d.join("");case "escape":d=md(a[1],b,c);if(id&&Ea(a[1])&&"macro"===a[1][0]&&id.Rg(a))return id.mh(d);d=String(d);for(var t=2;t<a.length;t++)Fc[a[t]]&&(d=Fc[a[t]](d));return d;case "tag":var p=a[1];if(!ed[p])throw Error("Unable to resolve tag reference "+p+".");return d={we:a[2],
index:p};case "zb":var u={arg0:a[2],arg1:a[3],ignore_case:a[5]};u["function"]=a[1];var v=pd(u,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},pd=function(a,b,c){try{return hd(nd(a,b,c))}catch(d){JSON.stringify(a)}return 2};var qd=function(){var a=function(b){return{toString:function(){return b}}};return{Ed:a("convert_case_to"),Fd:a("convert_false_to"),Gd:a("convert_null_to"),Hd:a("convert_true_to"),Id:a("convert_undefined_to"),Zh:a("debug_mode_metadata"),xa:a("function"),nf:a("instance_name"),sf:a("live_only"),uf:a("malware_disabled"),vf:a("metadata"),$h:a("original_vendor_template_id"),zf:a("once_per_event"),Pd:a("once_per_load"),Xd:a("setup_tags"),Zd:a("tag_id"),$d:a("teardown_tags")}}();var rd=function(a,b,c){this.i=a;this.a=c};ma(rd,Error);function sd(a,b){if(Ea(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)sd(a[c],b[c])}};var td=function(a,b){this.m=a;this.i=b;this.a=[]};ma(td,Error);var ud=function(a){var b=a.a.slice();a.i&&(b=a.i(b));return b};var wd=function(){return function(a,b){a instanceof td||(a=new td(a,vd));b&&a.a.push(b);throw a;}};function vd(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)Da(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var xd=null,Ad=function(a){function b(r){for(var t=0;t<r.length;t++)d[r[t]]=!0}var c=[],d=[];xd=yd(a);for(var e=0;e<cd.length;e++){var f=cd[e],g=zd(f);if(g){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===g&&b(f.block||[])}for(var m=[],n=0;n<ed.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},zd=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=xd(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var g=xd(e[f]);if(2===g)return null;
if(1===g)return!1}return!0},yd=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=pd(dd[c],a));return b[c]}};var Bd=function(){this.a={}};function Cd(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,g="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),g+="."}catch(k){g="string"===typeof k?g+(": "+k):k instanceof Error?g+(": "+k.message):g+"."}if(!f)throw new rd(c,d,g);}}function Dd(a,b,c){return function(){var d=arguments[0];if(d){var e=a.a[d],f=a.a.all;if(e||f){var g=c.apply(void 0,Array.prototype.slice.call(arguments,0));Cd(e,b,d,g);Cd(f,b,d,g)}}}};var Hd=function(a){var b=Ed.B,c=this;this.i=new Bd;this.a={};var d={},e=Dd(this.i,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});Ja(a,function(f,g){var k={};Ja(g,function(l,m){var n=Fd(l,m);k[l]=n.assert;d[l]||(d[l]=n.K)});c.a[f]=function(l,m){var n=k[l];if(!n)throw Gd(l,{},"The requested permission "+l+" is not configured.");var r=Array.prototype.slice.call(arguments,0);n.apply(void 0,r);e.apply(void 0,r)}})},Kd=function(a){return Jd.a[a]||
function(){}};function Fd(a,b){var c=kd(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=Gd;try{return ld(c)}catch(d){return{assert:function(e){throw new rd(e,{},"Permission "+e+" is unknown.");},K:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function Gd(a,b,c){return new rd(a,b,c)};var Ld=!1;var Md={};Md.Oh=Na('');Md.xg=Na('');var Nd=Ld,Od=Md.xg,Pd=Md.Oh;
var ce=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},de=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;ce(b,"/*")&&(b=b.slice(0,-2));ce(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var g=d[f];if(g){e=a.indexOf(g,e);if(-1===e||0===f&&0!==e)return!1;e+=g.length}}if(c||e===a.length)return!0;var k=d[d.length-1];return a.lastIndexOf(k)===a.length-k.length},ee=/^[a-z0-9-]+$/i,fe=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
ge=function(a,b){var c;if(!(c="https:"!=a.protocol||a.port&&"443"!=a.port)){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!ee.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var g=0;g<b.length;g++){var k;var l=a,m=b[g];if(!fe.exec(m))throw Error("Invalid Wildcard");var n=m.slice(8),r=n.slice(0,n.indexOf("/")),t;var p=l.hostname,u=r;if(0!==u.indexOf("*."))t=p.toLowerCase()===u.toLowerCase();else{u=u.slice(2);var v=p.toLowerCase().indexOf(u.toLowerCase());
t=-1===v?!1:p.length===u.length?!0:p.length!==u.length+v?!1:"."===p[v-1]}if(t){var w=n.slice(n.indexOf("/"));k=de(l.pathname+l.search,w)?!0:!1}else k=!1;if(k)return!0}return!1};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var he,ie=function(){};(function(){function a(k,l){k=k||"";l=l||{};for(var m in b)b.hasOwnProperty(m)&&(l.$f&&(l["fix_"+m]=!0),l.ye=l.ye||l["fix_"+m]);var n={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},r={comment:function(){var p=k.indexOf("--\x3e");if(0<=p)return{content:k.substr(4,p),length:p+3}},endTag:function(){var p=k.match(d);if(p)return{tagName:p[1],length:p[0].length}},atomicTag:function(){var p=r.startTag();
if(p){var u=k.slice(p.length);if(u.match(new RegExp("</\\s*"+p.tagName+"\\s*>","i"))){var v=u.match(new RegExp("([\\s\\S]*?)</\\s*"+p.tagName+"\\s*>","i"));if(v)return{tagName:p.tagName,S:p.S,content:v[1],length:v[0].length+p.length}}}},startTag:function(){var p=k.match(c);if(p){var u={};p[2].replace(e,function(v,w,y,x,A){var B=y||x||A||f.test(w)&&w||null,z=document.createElement("div");z.innerHTML=B;u[w]=z.textContent||z.innerText||B});return{tagName:p[1],S:u,Cb:!!p[3],length:p[0].length}}},chars:function(){var p=
k.indexOf("<");return{length:0<=p?p:k.length}}},t=function(){for(var p in n)if(n[p].test(k)){var u=r[p]();return u?(u.type=u.type||p,u.text=k.substr(0,u.length),k=k.slice(u.length),u):null}};l.ye&&function(){var p=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,u=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,v=[];v.He=function(){return this[this.length-1]};v.cd=function(z){var E=this.He();return E&&E.tagName&&E.tagName.toUpperCase()===z.toUpperCase()};v.lg=
function(z){for(var E=0,H;H=this[E];E++)if(H.tagName===z)return!0;return!1};var w=function(z){z&&"startTag"===z.type&&(z.Cb=p.test(z.tagName)||z.Cb);return z},y=t,x=function(){k="</"+v.pop().tagName+">"+k},A={startTag:function(z){var E=z.tagName;"TR"===E.toUpperCase()&&v.cd("TABLE")?(k="<TBODY>"+k,B()):l.ji&&u.test(E)&&v.lg(E)?v.cd(E)?x():(k="</"+z.tagName+">"+k,B()):z.Cb||v.push(z)},endTag:function(z){v.He()?l.zg&&!v.cd(z.tagName)?x():v.pop():l.zg&&(y(),B())}},B=function(){var z=k,E=w(y());k=z;if(E&&
A[E.type])A[E.type](E)};t=function(){B();return w(y())}}();return{append:function(p){k+=p},uh:t,ri:function(p){for(var u;(u=t())&&(!p[u.type]||!1!==p[u.type](u)););},clear:function(){var p=k;k="";return p},si:function(){return k},stack:[]}}var b=function(){var k={},l=this.document.createElement("div");l.innerHTML="<P><I></P></I>";k.vi="<P><I></P></I>"!==l.innerHTML;l.innerHTML="<P><i><P></P></i></P>";k.ui=2===l.childNodes.length;return k}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,f=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.o=b;a.J=function(k){var l={comment:function(m){return"<--"+m.content+"--\x3e"},endTag:function(m){return"</"+m.tagName+">"},atomicTag:function(m){return l.startTag(m)+m.content+l.endTag(m)},startTag:function(m){var n="<"+m.tagName,r;for(r in m.S){var t=m.S[r];n+=
" "+r+'="'+(t?t.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"'}return n+(m.Cb?"/>":">")},chars:function(m){return m.text}};return l[k.type](k)};a.i=function(k){var l={},m;for(m in k){var n=k[m];l[m]=n&&n.replace(/(^|[^\\])"/g,'$1\\"')}return l};for(var g in b)a.a=a.a||!b[g]&&g;he=a})();(function(){function a(){}function b(r){return void 0!==r&&null!==r}function c(r,t,p){var u,v=r&&r.length||0;for(u=0;u<v;u++)t.call(p,r[u],u)}function d(r,t,p){for(var u in r)r.hasOwnProperty(u)&&t.call(p,u,r[u])}function e(r,
t){d(t,function(p,u){r[p]=u});return r}function f(r,t){r=r||{};d(t,function(p,u){b(r[p])||(r[p]=u)});return r}function g(r){try{return m.call(r)}catch(p){var t=[];c(r,function(u){t.push(u)});return t}}var k={Qf:a,Rf:a,Sf:a,Tf:a,ag:a,bg:function(r){return r},done:a,error:function(r){throw r;},xh:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,n=function(){function r(p,u,v){var w="data-ps-"+u;if(2===arguments.length){var y=p.getAttribute(w);return b(y)?String(y):y}b(v)&&""!==v?p.setAttribute(w,
v):p.removeAttribute(w)}function t(p,u){var v=p.ownerDocument;e(this,{root:p,options:u,Db:v.defaultView||v.parentWindow,Sa:v,nc:he("",{$f:!0}),Pc:[p],nd:"",od:v.createElement(p.nodeName),zb:[],Ia:[]});r(this.od,"proxyof",0)}t.prototype.write=function(){[].push.apply(this.Ia,arguments);for(var p;!this.Tb&&this.Ia.length;)p=this.Ia.shift(),"function"===typeof p?this.gg(p):this.xd(p)};t.prototype.gg=function(p){var u={type:"function",value:p.name||p.toString()};this.jd(u);p.call(this.Db,this.Sa);this.Oe(u)};
t.prototype.xd=function(p){this.nc.append(p);for(var u,v=[],w,y;(u=this.nc.uh())&&!(w=u&&"tagName"in u?!!~u.tagName.toLowerCase().indexOf("script"):!1)&&!(y=u&&"tagName"in u?!!~u.tagName.toLowerCase().indexOf("style"):!1);)v.push(u);this.Uh(v);w&&this.Jg(u);y&&this.Kg(u)};t.prototype.Uh=function(p){var u=this.dg(p);u.me&&(u.Zc=this.nd+u.me,this.nd+=u.qh,this.od.innerHTML=u.Zc,this.Rh())};t.prototype.dg=function(p){var u=this.Pc.length,v=[],w=[],y=[];c(p,function(x){v.push(x.text);if(x.S){if(!/^noscript$/i.test(x.tagName)){var A=
u++;w.push(x.text.replace(/(\/?>)/," data-ps-id="+A+" $1"));"ps-script"!==x.S.id&&"ps-style"!==x.S.id&&y.push("atomicTag"===x.type?"":"<"+x.tagName+" data-ps-proxyof="+A+(x.Cb?" />":">"))}}else w.push(x.text),y.push("endTag"===x.type?x.text:"")});return{wi:p,raw:v.join(""),me:w.join(""),qh:y.join("")}};t.prototype.Rh=function(){for(var p,u=[this.od];b(p=u.shift());){var v=1===p.nodeType;if(!v||!r(p,"proxyof")){v&&(this.Pc[r(p,"id")]=p,r(p,"id",null));var w=p.parentNode&&r(p.parentNode,"proxyof");
w&&this.Pc[w].appendChild(p)}u.unshift.apply(u,g(p.childNodes))}};t.prototype.Jg=function(p){var u=this.nc.clear();u&&this.Ia.unshift(u);p.src=p.S.src||p.S.ai;p.src&&this.zb.length?this.Tb=p:this.jd(p);var v=this;this.Th(p,function(){v.Oe(p)})};t.prototype.Kg=function(p){var u=this.nc.clear();u&&this.Ia.unshift(u);p.type=p.S.type||p.S.bi||"text/css";this.Vh(p);u&&this.write()};t.prototype.Vh=function(p){var u=this.fg(p);this.Og(u);p.content&&(u.styleSheet&&!u.sheet?u.styleSheet.cssText=p.content:
u.appendChild(this.Sa.createTextNode(p.content)))};t.prototype.fg=function(p){var u=this.Sa.createElement(p.tagName);u.setAttribute("type",p.type);d(p.S,function(v,w){u.setAttribute(v,w)});return u};t.prototype.Og=function(p){this.xd('<span id="ps-style"/>');var u=this.Sa.getElementById("ps-style");u.parentNode.replaceChild(p,u)};t.prototype.jd=function(p){p.ih=this.Ia;this.Ia=[];this.zb.unshift(p)};t.prototype.Oe=function(p){p!==this.zb[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.zb.shift(),this.write.apply(this,p.ih),!this.zb.length&&this.Tb&&(this.jd(this.Tb),this.Tb=null))};t.prototype.Th=function(p,u){var v=this.eg(p),w=this.Hh(v),y=this.options.Qf;p.src&&(v.src=p.src,this.Ch(v,w?y:function(){u();y()}));try{this.Ng(v),p.src&&!w||u()}catch(x){this.options.error(x),u()}};t.prototype.eg=function(p){var u=this.Sa.createElement(p.tagName);d(p.S,function(v,w){u.setAttribute(v,w)});p.content&&(u.text=p.content);return u};t.prototype.Ng=function(p){this.xd('<span id="ps-script"/>');
var u=this.Sa.getElementById("ps-script");u.parentNode.replaceChild(p,u)};t.prototype.Ch=function(p,u){function v(){p=p.onload=p.onreadystatechange=p.onerror=null}var w=this.options.error;e(p,{onload:function(){v();u()},onreadystatechange:function(){/^(loaded|complete)$/.test(p.readyState)&&(v(),u())},onerror:function(){var y={message:"remote script failed "+p.src};v();w(y);u()}})};t.prototype.Hh=function(p){return!/^script$/i.test(p.nodeName)||!!(this.options.xh&&p.src&&p.hasAttribute("async"))};
return t}();l.postscribe=function(){function r(){var w=u.shift(),y;w&&(y=w[w.length-1],y.Rf(),w.stream=t.apply(null,w),y.Sf())}function t(w,y,x){function A(H){H=x.bg(H);v.write(H);x.Tf(H)}v=new n(w,x);v.id=p++;v.name=x.name||v.id;var B=w.ownerDocument,z={close:B.close,open:B.open,write:B.write,writeln:B.writeln};e(B,{close:a,open:a,write:function(){return A(g(arguments).join(""))},writeln:function(){return A(g(arguments).join("")+"\n")}});var E=v.Db.onerror||a;v.Db.onerror=function(H,K,T){x.error({mi:H+
" - "+K+":"+T});E.apply(v.Db,arguments)};v.write(y,function(){e(B,z);v.Db.onerror=E;x.done();v=null;r()});return v}var p=0,u=[],v=null;return e(function(w,y,x){"function"===typeof x&&(x={done:x});x=f(x,k);w=/^#/.test(w)?l.document.getElementById(w.substr(1)):w.li?w[0]:w;var A=[w,y,x];w.lh={cancel:function(){A.stream?A.stream.abort():A[1]=a}};x.ag(A);u.push(A);v||r();return w.lh},{streams:{},oi:u,ei:n})}();ie=l.postscribe}})();function je(a){return""+a}
function ke(a,b){var c=[];return c};var le=function(a,b){var c=new Za(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=this.a(d[e]);return b.apply(this,d)});c.i=!0;return c},me=function(a,b){var c=new cb,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Ca(e)?c.set(d,le(a+"_"+d,e)):(Da(e)||q(e)||"boolean"==typeof e)&&c.set(d,e)}c.i=!0;return c};var ne=function(a,b){F(this.getName(),["apiName:!string","message:?string"],arguments);var c={},d=new cb;return d=me("AssertApiSubject",c)};var oe=function(a,b){F(this.getName(),["actual:?*","message:?string"],arguments);var c={},d=new cb;return d=me("AssertThatSubject",c)};function pe(a){return function(){for(var b=[],c=this.i,d=0;d<arguments.length;++d)b.push(kb(arguments[d],c));return jb(a.apply(null,b))}}var re=function(){for(var a=Math,b=qe,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=pe(a[e].bind(a)))}return c};var se=function(a){var b;return b};var te=function(a){var b;return b};var ue=function(a){F(this.getName(),["uri:!string"],arguments);return encodeURI(a)};var ve=function(a){F(this.getName(),["uri:!string"],arguments);return encodeURIComponent(a)};var we=function(a){F(this.getName(),["message:?string"],arguments);};var xe=function(a,b){F(this.getName(),["min:!number","max:!number"],arguments);return Ga(a,b)};var ye=function(){return(new Date).getTime()};var ze=function(a,b,c){var d=a.i.a;if(!d)throw Error("Missing program state.");d.Zf.apply(null,Array.prototype.slice.call(arguments,1))};var Ae=function(){ze(this,"read_container_data");var a=new cb;a.set("containerId",'GTM-MV693B9');a.set("version",'201');a.set("environmentName",'');a.set("debugMode",Nd);a.set("previewMode",Pd);a.set("environmentMode",Od);a.i=!0;return a};var Be=function(a){return null===a?"null":a instanceof h?"array":a instanceof Za?"function":typeof a};var Ce=function(a){function b(c){return function(d){try{return c(d)}catch(e){(Nd||Pd)&&a.call(this,e.message)}}}return{parse:b(function(c){return jb(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(kb(c))})}};var De=function(a){return Ma(kb(a,this.i))};var Ee=function(a){return Number(kb(a,this.i))};var Fe=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var Ge=function(a,b,c){var d=null,e=!1;F(this.getName(),["tableObj:!List","keyColumnName:!string","valueColumnName:!string"],arguments);d=new cb;for(var f=0;f<a.length();f++){var g=a.get(f);g instanceof cb&&g.has(b)&&g.has(c)&&(d.set(g.get(b),g.get(c)),e=!0)}return e?d:null};var qe="floor ceil round max min abs pow sqrt".split(" ");var He=function(){var a={};return{Fg:function(b){return a.hasOwnProperty(b)?a[b]:void 0},Gh:function(b,c){a[b]=c},reset:function(){a={}}}},Ie=function(a,b){F(this.getName(),["apiName:!string","mock:?*"],arguments);};var Je=function(){this.a={}};Je.prototype.get=function(a,b){var c=this.a.hasOwnProperty(a)?this.a[a]:void 0;return c};Je.prototype.add=function(a,b,c){if(this.a.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";this.a[a]=c?void 0:Ca(b)?le(a,b):me(a,b)};function Ke(){var a={};return a};var D=window,I=document,Le=navigator,Me=I.currentScript&&I.currentScript.src,Ne=function(a,b){var c=D[a];D[a]=void 0===c?b:c;return D[a]},Oe=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Pe=function(a,b,c){var d=I.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Oe(d,b);c&&(d.onerror=c);var e;if(null===ka)b:{var f=ia.document,g=f.querySelector&&f.querySelector("script[nonce]");
if(g){var k=g.nonce||g.getAttribute("nonce");if(k&&ja.test(k)){ka=k;break b}}ka=""}e=ka;e&&d.setAttribute("nonce",e);var l=I.getElementsByTagName("script")[0]||I.body||I.head;l.parentNode.insertBefore(d,l);return d},Qe=function(){if(Me){var a=Me.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Re=function(a,b){var c=I.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=I.body&&I.body.lastChild||
I.body||I.head;d.parentNode.insertBefore(c,d);Oe(c,b);void 0!==a&&(c.src=a);return c},Se=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Te=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Ue=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},J=function(a){D.setTimeout(a,0)},Ve=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},We=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Xe=function(a){var b=I.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Ye=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,g=0;f&&g<=c;g++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null},Ze=function(a){Le.sendBeacon&&Le.sendBeacon(a)||Se(a)},$e=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var bf=function(a){return af?I.querySelectorAll(a):null},cf=function(a,b){if(!af)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!I.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},df=!1;if(I.querySelectorAll)try{var ef=I.querySelectorAll(":root");ef&&1==ef.length&&ef[0]==I.documentElement&&(df=!0)}catch(a){}var af=df;var O={wa:"_ee",ci:"_uci",Fc:"event_callback",Ib:"event_timeout",H:"gtag.config",fa:"allow_ad_personalization_signals",Gc:"restricted_data_processing",cb:"allow_google_signals",ia:"cookie_expires",Hb:"cookie_update",eb:"session_duration",ma:"user_properties"};O.Ee=[O.fa,O.cb,O.Hb];O.Ge=[O.ia,O.Ib,O.eb];var wf=/[A-Z]+/,xf=/\s/,yf=function(a){if(q(a)&&(a=Pa(a),!xf.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(wf.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],w:d}}}}},Af=function(a){for(var b={},c=0;c<a.length;++c){var d=yf(a[c]);d&&(b[d.id]=d)}zf(b);var e=[];Ja(b,function(f,g){e.push(g)});return e};
function zf(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.w[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Ed={},Bf=null,Cf=Math.random();Ed.B="GTM-MV693B9";Ed.Nb="432";var Df={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0,__tg:!0},Ef="www.googletagmanager.com/gtm.js";var Ff=Ef,Gf=null,Hf=null,If=null,Jf="//www.googletagmanager.com/a?id="+Ed.B+"&cv=201",Kf={},Lf={},Mf=function(){var a=Bf.sequence||0;Bf.sequence=a+1;return a};var Nf={},Of=function(a,b){Nf[a]=Nf[a]||[];Nf[a][b]=!0},Pf=function(a){for(var b=[],c=Nf[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};
var Qf=function(){return"&tc="+ed.filter(function(a){return a}).length},Tf=function(){Rf||(Rf=D.setTimeout(Sf,500))},Sf=function(){Rf&&(D.clearTimeout(Rf),Rf=void 0);void 0===Uf||Vf[Uf]&&!Wf&&!Xf||(Yf[Uf]||Zf.Tg()||0>=$f--?(Of("GTM",1),Yf[Uf]=!0):(Zf.vh(),Se(ag()),Vf[Uf]=!0,bg=cg=Xf=Wf=""))},ag=function(){var a=Uf;if(void 0===a)return"";var b=Pf("GTM"),c=Pf("TAGGING");return[dg,Vf[a]?"":"&es=1",eg[a],b?"&u="+b:"",c?"&ut="+c:"",Qf(),Wf,Xf,cg,bg,"&z=0"].join("")},fg=function(){return[Jf,"&v=3&t=t",
"&pid="+Ga(),"&rv="+Ed.Nb].join("")},gg="0.005000">Math.random(),dg=fg(),hg=function(){dg=fg()},Vf={},Wf="",Xf="",bg="",cg="",Uf=void 0,eg={},Yf={},Rf=void 0,Zf=function(a,b){var c=0,d=0;return{Tg:function(){if(c<a)return!1;Qa()-d>=b&&(c=0);return c>=a},vh:function(){Qa()-d>=b&&(c=0);c++;d=Qa()}}}(2,1E3),$f=1E3,ig=function(a,b){if(gg&&!Yf[a]&&Uf!==a){Sf();Uf=a;bg=Wf="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";eg[a]="&e="+c+"&eid="+a;Tf()}},jg=function(a,b,c){if(gg&&
!Yf[a]&&b){a!==Uf&&(Sf(),Uf=a);var d,e=String(b[qd.xa]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");d=e;var f=c+d;Wf=Wf?Wf+"."+f:"&tr="+f;var g=b["function"];if(!g)throw Error("Error: No function name given for function call.");var k=(gd[g]?"1":"2")+d;bg=bg?bg+"."+k:"&ti="+k;Tf();2022<=ag().length&&Sf()}},kg=function(a,b,c){if(gg&&!Yf[a]){a!==Uf&&(Sf(),Uf=a);var d=c+b;Xf=
Xf?Xf+"."+d:"&epr="+d;Tf();2022<=ag().length&&Sf()}};var lg={},mg=new Ha,ng={},og={},rg={name:"dataLayer",set:function(a,b){G(Xa(a,b),ng);pg()},get:function(a){return qg(a,2)},reset:function(){mg=new Ha;ng={};pg()}},qg=function(a,b){if(2!=b){var c=mg.get(a);if(gg){var d=sg(a);c!==d&&Of("GTM",5)}return c}return sg(a)},sg=function(a,b,c){var d=a.split("."),e=!1,f=void 0;return e?f:ug(d)},ug=function(a){for(var b=ng,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var wg=function(a,b){og.hasOwnProperty(a)||(mg.set(a,b),G(Xa(a,b),ng),pg())},pg=function(a){Ja(og,function(b,c){mg.set(b,c);G(Xa(b,void 0),ng);G(Xa(b,c),ng);a&&delete og[b]})},xg=function(a,b,c){lg[a]=lg[a]||{};var d=1!==c?sg(b):mg.get(b);"array"===gb(d)||"object"===gb(d)?lg[a][b]=G(d):lg[a][b]=d},yg=function(a,b){if(lg[a])return lg[a][b]},zg=function(a,b){lg[a]&&delete lg[a][b]};var Ag=function(){var a=!1;return a};var R=function(a,b,c,d){return(2===Bg()||d||"http:"!=D.location.protocol?a:b)+c},Bg=function(){var a=Qe(),b;if(1===a)a:{var c=Ff;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,g=I.getElementsByTagName("script"),k=0;k<g.length&&100>k;k++){var l=g[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};var Qg=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Rg={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Sg={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Tg="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Vg=function(a){var b=qg("gtm.whitelist");b&&Of("GTM",9);var c=b&&Va(Oa(b),Rg),d=qg("gtm.blacklist");d||(d=qg("tagTypeBlacklist"))&&Of("GTM",3);
d?Of("GTM",8):d=[];Ug()&&(d=Oa(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=C(Oa(d),"google")&&Of("GTM",2);var e=d&&Va(Oa(d),Sg),f={};return function(g){var k=g&&g[qd.xa];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=Lf[k]||[],m=a(k,l);if(b){var n;if(n=m)a:{if(0>C(c,k))if(l&&0<l.length)for(var r=
0;r<l.length;r++){if(0>C(c,l[r])){Of("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var p=0<=C(e,k);if(p)t=p;else{var u=Ia(e,l||[]);u&&Of("GTM",10);t=u}}var v=!m||t;v||!(0<=C(l,"sandboxedScripts"))||c&&-1!==C(c,"sandboxedScripts")||(v=Ia(e,Tg));return f[k]=v}},Ug=function(){return Qg.test(D.location&&D.location.hostname)};var Wg={mg:function(a,b){b[qd.Ed]&&"string"===typeof a&&(a=1==b[qd.Ed]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(qd.Gd)&&null===a&&(a=b[qd.Gd]);b.hasOwnProperty(qd.Id)&&void 0===a&&(a=b[qd.Id]);b.hasOwnProperty(qd.Hd)&&!0===a&&(a=b[qd.Hd]);b.hasOwnProperty(qd.Fd)&&!1===a&&(a=b[qd.Fd]);return a}};var Xg={active:!0,isWhitelisted:function(){return!0}},Yg=function(a){var b=Bf.zones;!b&&a&&(b=Bf.zones=a());return b};var Zg=function(){};var $g=!1,ah=0,bh=[];function ch(a){if(!$g){var b=I.createEventObject,c="complete"==I.readyState,d="interactive"==I.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){$g=!0;for(var e=0;e<bh.length;e++)J(bh[e])}bh.push=function(){for(var f=0;f<arguments.length;f++)J(arguments[f]);return 0}}}function dh(){if(!$g&&140>ah){ah++;try{I.documentElement.doScroll("left"),ch()}catch(a){D.setTimeout(dh,50)}}}var eh=function(a){$g?a():bh.push(a)};var gh={},hh={},ih=function(a,b,c,d){if(!hh[a]||Df[b]||"__zone"===b)return-1;var e={};ib(d)&&(e=G(d,e));e.id=c;e.status="timeout";return hh[a].tags.push(e)-1},jh=function(a,b,c,d){if(hh[a]){var e=hh[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function kh(a){for(var b=gh[a]||[],c=0;c<b.length;c++)b[c]();gh[a]={push:function(d){d(Ed.B,hh[a])}}}
var nh=function(a,b,c){hh[a]={tags:[]};Ca(b)&&lh(a,b);c&&D.setTimeout(function(){return kh(a)},Number(c));return mh(a)},lh=function(a,b){gh[a]=gh[a]||[];gh[a].push(Sa(function(){return J(function(){b(Ed.B,hh[a])})}))};function mh(a){var b=0,c=0,d=!1;return{add:function(){c++;return Sa(function(){b++;d&&b>=c&&kh(a)})},Xf:function(){d=!0;b>=c&&kh(a)}}};var oh=function(){function a(d){return!Da(d)||0>d?0:d}if(!Bf._li&&D.performance&&D.performance.timing){var b=D.performance.timing.navigationStart,c=Da(rg.get("gtm.start"))?rg.get("gtm.start"):0;Bf._li={cst:a(c-b),cbt:a(Hf-b)}}};var sh={},th=function(){return D.GoogleAnalyticsObject&&D[D.GoogleAnalyticsObject]},uh=!1;
var vh=function(a){D.GoogleAnalyticsObject||(D.GoogleAnalyticsObject=a||"ga");var b=D.GoogleAnalyticsObject;if(D[b])D.hasOwnProperty(b)||Of("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);D[b]=c}oh();return D[b]},wh=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=th();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var yh=function(a){},xh=function(){return D.GoogleAnalyticsObject||"ga"};var Ah=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Bh=/:[0-9]+$/,Ch=function(a,b,c,d){for(var e=[],f=a.split("&"),g=0;g<f.length;g++){var k=f[g].split("=");if(decodeURIComponent(k[0]).replace(/\+/g," ")===b){var l=k.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},Fh=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Dh(a.protocol)||Dh(D.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
D.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||D.location.hostname).replace(Bh,"").toLowerCase());return Eh(a,b,c,d,e)},Eh=function(a,b,c,d,e){var f,g=Dh(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=Gh(a);break;case "protocol":f=g;break;case "host":f=a.hostname.replace(Bh,"").toLowerCase();if(c){var k=/^www\d*\./.exec(f);k&&k[0]&&(f=f.substr(k[0].length))}break;case "port":f=String(Number(a.port)||("http"==
g?80:"https"==g?443:""));break;case "path":a.pathname||a.hostname||Of("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=C(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=Ch(f,e,!1,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},Dh=function(a){return a?a.replace(":",
"").toLowerCase():""},Gh=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},Hh=function(a){var b=I.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||Of("TAGGING",1),c="/"+c);var d=b.hostname.replace(Bh,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var Mh=function(){return!1},Nh=function(){var a={};return function(b,c,d){}};function Oh(a,b,c,d){var e=ed[a],f=Ph(a,b,c,d);if(!f)return null;var g=md(e[qd.Xd],c,[]);if(g&&g.length){var k=g[0];f=Oh(k.index,{D:f,C:1===k.we?b.terminate:f,terminate:b.terminate},c,d)}return f}
function Ph(a,b,c,d){function e(){if(f[qd.uf])k();else{var w=nd(f,c,[]),y=ih(c.id,String(f[qd.xa]),Number(f[qd.Zd]),w[qd.vf]),x=!1;w.vtp_gtmOnSuccess=function(){if(!x){x=!0;var z=Qa()-B;jg(c.id,ed[a],"5");jh(c.id,y,"success",z);g()}};w.vtp_gtmOnFailure=function(){if(!x){x=!0;var z=Qa()-B;jg(c.id,ed[a],"6");jh(c.id,y,"failure",z);k()}};w.vtp_gtmTagId=f.tag_id;
w.vtp_gtmEventId=c.id;jg(c.id,f,"1");var A=function(){var z=Qa()-B;jg(c.id,f,"7");jh(c.id,y,"exception",z);x||(x=!0,k())};var B=Qa();try{ld(w,c)}catch(z){A(z)}}}var f=ed[a],g=b.D,k=b.C,l=b.terminate;if(c.ad(f))return null;var m=md(f[qd.$d],c,[]);if(m&&m.length){var n=m[0],r=Oh(n.index,{D:g,C:k,terminate:l},c,d);if(!r)return null;g=r;k=2===n.we?l:r}if(f[qd.Pd]||f[qd.zf]){var t=f[qd.Pd]?fd:c.Ih,p=g,u=k;if(!t[a]){e=Sa(e);var v=Qh(a,t,e);g=v.D;k=v.C}return function(){t[a](p,u)}}return e}
function Qh(a,b,c){var d=[],e=[];b[a]=Rh(d,e,c);return{D:function(){b[a]=Sh;for(var f=0;f<d.length;f++)d[f]()},C:function(){b[a]=Th;for(var f=0;f<e.length;f++)e[f]()}}}function Rh(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Sh(a){a()}function Th(a,b){b()};var Wh=function(a,b){for(var c=[],d=0;d<ed.length;d++)if(a.xb[d]){var e=ed[d];var f=b.add();try{var g=Oh(d,{D:f,C:f,terminate:f},a,d);g?c.push({Ye:d,Te:od(e),Xb:g}):(Uh(d,a),f())}catch(l){f()}}b.Xf();c.sort(Vh);for(var k=0;k<c.length;k++)c[k].Xb();return 0<c.length};function Vh(a,b){var c,d=b.Te,e=a.Te;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var g=a.Ye,k=b.Ye;f=g>k?1:g<k?-1:0}return f}
function Uh(a,b){if(!gg)return;var c=function(d){var e=b.ad(ed[d])?"3":"4",f=md(ed[d][qd.Xd],b,[]);f&&f.length&&c(f[0].index);jg(b.id,ed[d],e);var g=md(ed[d][qd.$d],b,[]);g&&g.length&&c(g[0].index)};c(a);}
var Xh=!1,Yh=function(a,b,c,d,e){if("gtm.js"==b){if(Xh)return!1;Xh=!0}ig(a,b);var f=nh(a,d,e);xg(a,"event",1);xg(a,"ecommerce",1);xg(a,"gtm");var g={id:a,name:b,ad:Vg(c),xb:[],Ih:[],Je:function(){Of("GTM",6)}};g.xb=Ad(g);var k=Wh(g,f);"gtm.js"!==b&&"gtm.sync"!==b||yh(Ed.B);if(!k)return k;for(var l=0;l<g.xb.length;l++)if(g.xb[l]){var m=ed[l];if(m&&!Df[String(m[qd.xa])])return!0}return!1};var Zh=[];function $h(){var a=Ne("google_tag_data",{});a.ics||(a.ics={entries:{},set:ai,update:bi,addListener:ci,notifyListeners:di,active:!1});return a.ics}function ai(a,b,c,d,e){var f=$h();f.active=!0;if(void 0!=b){var g=f.entries,k=g[a]||{},l=k.region,m=c&&q(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();m!==e&&(m===d?l===e:m||l)||(g[a]={region:m,initial:"granted"===b,update:k.update})}}
function bi(a,b){var c=$h();c.active=!0;if(void 0!=b){var d=ei(a),e=c.entries;e[a]=e[a]||{};e[a].update="granted"===b;if(ei(a)!==d)for(var f=0;f<Zh.length;++f){var g=Zh[f];Ea(g.pe)&&-1!==g.pe.indexOf(a)&&(g.Se=!0)}}}function ci(a,b){Zh.push({pe:a,Ag:b})}function di(){for(var a=0;a<Zh.length;++a){var b=Zh[a];if(b.Se){b.Se=!1;try{b.Ag.call()}catch(c){}}}}
var ei=function(a){var b=$h().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},fi=function(){return $h().active},gi=function(a,b){$h().addListener(a,b)},hi=function(a,b){if(!1===ei(b)){var c=!1;gi([b],function(){!c&&ei(b)&&(a(),c=!0)})}};var ii=[O.o,O.N],ji=function(a){var b=ei(a);return void 0!=b?b:!0},ki=function(){for(var a=[],b=0;b<ii.length;b++){var c=ei(ii[b]);a[b]=!0===c?"1":!1===c?"0":"-"}return"G1"+a.join("")},li=function(a,b){gi(a,b)};var ni=/^https?:\/\/www\.googletagmanager\.com/;function oi(){var a;return a}function qi(a,b){}
function pi(a){0!==a.indexOf("http://")&&0!==a.indexOf("https://")&&(a="https://"+a);"/"===a[a.length-1]&&(a=a.substring(0,a.length-1));return a}function ri(){var a=!1;return a};var si=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.a={};this.globalConfig={};this.D=function(){};this.C=function(){}},ti=function(a){var b=new si;b.eventModel=a;return b},ui=function(a,b){a.targetConfig=b;return a},vi=function(a,b){a.containerConfig=b;return a},wi=function(a,b){a.a=b;return a},xi=function(a,b){a.globalConfig=b;return a},yi=function(a,b){a.D=b;return a},zi=function(a,b){a.C=b;return a};
si.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.a[a])return this.a[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var Ai=function(a){function b(e){Ja(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Ja(c,function(e){d.push(e)});return d};function Bi(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var g=e[f].split("="),k=g[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=g.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var Ci={},Di=function(a){return void 0==Ci[a]?!1:Ci[a]};var Fi=function(a,b,c,d){return Ei(d)?Bi(a,String(b||document.cookie),c):[]},Ii=function(a,b,c,d,e){if(Ei(e)){var f=Gi(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=Hi(f,function(g){return g.Ub},b);if(1===f.length)return f[0].id;f=Hi(f,function(g){return g.yb},c);return f[0]?f[0].id:void 0}}};function Ji(a,b,c,d){var e=document.cookie;document.cookie=a;var f=document.cookie;return e!=f||void 0!=c&&0<=Fi(b,f,!1,d).indexOf(c)}
var Ni=function(a,b,c,d){function e(w,y,x){if(null==x)return delete k[y],w;k[y]=x;return w+"; "+y+"="+x}function f(w,y){if(null==y)return delete k[y],w;k[y]=!0;return w+"; "+y}if(!Ei(c.Ea))return!1;var g;void 0==b?g=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=Ki(b),g=a+"="+b);var k={};g=e(g,"path",c.path);var l;c.expires instanceof Date?l=c.expires.toUTCString():null!=c.expires&&(l=""+c.expires);g=e(g,"expires",l);g=e(g,"max-age",c.ah);g=e(g,"samesite",
c.zh);c.Dh&&(g=f(g,"secure"));g=f(g,c.flags);var m=c.domain;if("auto"===m){for(var n=Li(),r=void 0,t=!1,p=0;p<n.length;++p){var u="none"!==n[p]?n[p]:void 0,v=e(g,"domain",u);try{d&&d(a,k)}catch(w){r=w;continue}t=!0;if(!Mi(u,c.path)&&Ji(v,a,b,c.Ea))return!0}if(r&&!t)throw r;return!1}m&&"none"!==m&&(g=e(g,"domain",m));d&&d(a,k);return Mi(m,c.path)?!1:Ji(g,a,b,c.Ea)},Oi=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return Ni(a,b,c)};
function Hi(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var k=a[g],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}function Gi(a,b,c){for(var d=[],e=Fi(a,void 0,void 0,c),f=0;f<e.length;f++){var g=e[f].split("."),k=g.shift();if(!b||-1!==b.indexOf(k)){var l=g.shift();l&&(l=l.split("-"),d.push({id:g.join("."),Ub:1*l[0]||1,yb:1*l[1]||1}))}}return d}
var Ki=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},Pi=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Qi=/(^|\.)doubleclick\.net$/i,Mi=function(a,b){return Qi.test(document.location.hostname)||"/"===b&&Pi.test(a)},Li=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;Qi.test(e)||Pi.test(e)||a.push("none");
return a},Ei=function(a){if(!Di("gtag_cs_api")||!a||!fi())return!0;var b=ei(a);return null==b?!0:!!b};var Ri=function(){for(var a=Le.userAgent+(I.cookie||"")+(I.referrer||""),b=a.length,c=D.history.length;0<c;)a+=c--^b++;var d=1,e,f,g;if(a)for(d=0,f=a.length-1;0<=f;f--)g=a.charCodeAt(f),d=(d<<6&268435455)+g+(g<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Qa()/1E3)].join(".")},Ui=function(a,b,c,d,e){var f=Si(b);return Ii(a,f,Ti(c),d,e)},Vi=function(a,b,c,d){var e=""+Si(c),f=Ti(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},Si=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Ti=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function Wi(a,b,c){var d,e=a.wb;null==e&&(e=7776E3);0!==e&&(d=new Date((b||Qa())+1E3*e));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};function Xi(){for(var a=Yi,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Zi(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var Yi,$i;function aj(a){Yi=Yi||Zi();$i=$i||Xi();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),g=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=f>>2,m=(f&3)<<4|g>>4,n=(g&15)<<2|k>>6,r=k&63;e||(r=64,d||(n=64));b.push(Yi[l],Yi[m],Yi[n],Yi[r])}return b.join("")}
function bj(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=$i[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Yi=Yi||Zi();$i=$i||Xi();for(var c="",d=0;;){var e=b(-1),f=b(0),g=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=g&&(c+=String.fromCharCode(f<<4&240|g>>2),64!=k&&(c+=String.fromCharCode(g<<6&192|k)))}};var cj;var gj=function(){var a=dj,b=ej,c=fj(),d=function(g){a(g.target||g.srcElement||{})},e=function(g){b(g.target||g.srcElement||{})};if(!c.init){Te(I,"mousedown",d);Te(I,"keyup",d);Te(I,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},hj=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};fj().decorators.push(f)},ij=function(a,b,c){for(var d=fj().decorators,e={},f=0;f<d.length;++f){var g=
d[f],k;if(k=!c||g.forms)a:{var l=g.domains,m=a;if(l&&(g.sameHost||m!==I.location.hostname))for(var n=0;n<l.length;n++)if(l[n]instanceof RegExp){if(l[n].test(m)){k=!0;break a}}else if(0<=m.indexOf(l[n])){k=!0;break a}k=!1}if(k){var r=g.placement;void 0==r&&(r=g.fragment?2:1);r===b&&Ta(e,g.callback())}}return e},fj=function(){var a=Ne("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var jj=/(.*?)\*(.*?)\*(.*)/,kj=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,lj=/^(?:www\.|m\.|amp\.)+/,mj=/([^?#]+)(\?[^#]*)?(#.*)?/;function nj(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var pj=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(aj(String(d))))}var e=b.join("*");return["1",oj(e),e].join("*")},oj=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=cj)){for(var e=Array(256),f=0;256>f;f++){for(var g=f,k=0;8>k;k++)g=
g&1?g>>>1^3988292384:g>>>1;e[f]=g}d=e}cj=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^cj[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},rj=function(){return function(a){var b=Hh(D.location.href),c=b.search.replace("?",""),d=Ch(c,"_gl",!1,!0)||"";a.query=qj(d)||{};var e=Fh(b,"fragment").match(nj("_gl"));a.fragment=qj(e&&e[3]||"")||{}}},sj=function(){var a=rj(),b=fj();b.data||(b.data={query:{},fragment:{}},a(b.data));var c={},d=b.data;d&&(Ta(c,d.query),Ta(c,d.fragment));return c},qj=
function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=jj.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var g=c;if(g&&"1"===g[1]){var k=g[3],l;a:{for(var m=g[2],n=0;n<b;++n)if(m===oj(k,n)){l=!0;break a}l=!1}if(l){for(var r={},t=k?k.split("*"):[],p=0;p<t.length;p+=2)r[t[p]]=bj(t[p+1]);return r}}}}catch(u){}};
function tj(a,b,c,d){function e(n){var r=n,t=nj(a).exec(r),p=r;if(t){var u=t[2],v=t[4];p=t[1];v&&(p=p+u+v)}n=p;var w=n.charAt(n.length-1);n&&"&"!==w&&(n+="&");return n+m}d=void 0===d?!1:d;var f=mj.exec(c);if(!f)return"";var g=f[1],k=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):k="?"+e(k.substring(1));return""+g+k+l}
function uj(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=ij(b,1,c),e=ij(b,2,c),f=ij(b,3,c);if(Ua(d)){var g=pj(d);c?vj("_gl",g,a):wj("_gl",g,a,!1)}if(!c&&Ua(e)){var k=pj(e);wj("_gl",k,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,n=f[l],r=a;if(r.tagName){if("a"===r.tagName.toLowerCase()){wj(m,n,r,void 0);break a}if("form"===r.tagName.toLowerCase()){vj(m,n,r);break a}}"string"==typeof r&&tj(m,n,r,void 0)}}
function wj(a,b,c,d){if(c.href){var e=tj(a,b,c.href,void 0===d?!1:d);Ah.test(e)&&(c.href=e)}}
function vj(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,g=0;g<e.length;g++){var k=e[g];if(k.name===a){k.setAttribute("value",b);f=!0;break}}if(!f){var l=I.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=tj(a,b,c.action);Ah.test(m)&&(c.action=m)}}}
var dj=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||uj(e,e.hostname)}}catch(g){}},ej=function(a){try{if(a.action){var b=Fh(Hh(a.action),"host");uj(a,b)}}catch(c){}},xj=function(a,b,c,d){gj();hj(a,b,"fragment"===c?2:1,!!d,!1)},yj=function(a){gj();hj(a,[D.location.hostname],3,!0,!0)},zj=function(){var a=I.location.hostname,b=kj.exec(I.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),g=f[1];e="s"===g?decodeURIComponent(f[2]):decodeURIComponent(g)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(lj,""),l=e.replace(lj,""),m;if(!(m=k===l)){var n="."+l;m=k.substring(k.length-n.length,k.length)===n}return m},Aj=function(a,b){return!1===a?!1:a||b||zj()};var Bj=/^\w+$/,Cj=/^[\w-]+$/,Dj=/^~?[\w-]+$/,Ej={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"},Fj=function(a){var b;if(Di("gtag_cs_api")&&fi()){var c=ei("ad_storage");b=null==c?!0:!!c}else b=!0;b?a():hi(a,"ad_storage")};function Gj(a){return a&&"string"==typeof a&&a.match(Bj)?a:"_gcl"}
var Ij=function(){var a=Hh(D.location.href),b=Fh(a,"query",!1,void 0,"gclid"),c=Fh(a,"query",!1,void 0,"gclsrc"),d=Fh(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Ch(e,"gclid",!1,void 0);c=c||Ch(e,"gclsrc",!1,void 0)}return Hj(b,c,d)},Hj=function(a,b,c){var d={},e=function(f,g){d[g]||(d[g]=[]);d[g].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(Cj))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":Di("gtm_3pds")&&
e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},Kj=function(a){var b=Ij();Fj(function(){return Jj(b,a)})};
function Jj(a,b,c){function d(m,n){var r=Lj(m,e);r&&(Oi(r,n,f),g=!0)}b=b||{};var e=Gj(b.prefix);c=c||Qa();var f=Wi(b,c,!0);f.Ea="ad_storage";var g=!1,k=Math.round(c/1E3),l=function(m){return["GCL",k,m].join(".")};a.aw&&(!0===b.xi?d("aw",l("~"+a.aw[0])):d("aw",l(a.aw[0])));a.dc&&d("dc",l(a.dc[0]));a.gf&&d("gf",l(a.gf[0]));a.ha&&d("ha",l(a.ha[0]));a.gp&&d("gp",l(a.gp[0]));return g}
var Nj=function(a,b){var c=sj();Fj(function(){for(var d=Gj(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==Ej[f]){var g=Lj(f,d),k=c[g];if(k){var l=Math.min(Mj(k),Qa()),m;b:{for(var n=l,r=Fi(g,I.cookie,void 0,"ad_storage"),t=0;t<r.length;++t)if(Mj(r[t])>n){m=!0;break b}m=!1}if(!m){var p=Wi(b,l,!0);p.Ea="ad_storage";Oi(g,k,p)}}}}Jj(Hj(c.gclid,c.gclsrc),b)})},Lj=function(a,b){var c=Ej[a];if(void 0!==c)return b+c},Mj=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function Oj(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Pj=function(a,b,c,d,e){if(Ea(b)){var f=Gj(e),g=function(){for(var k={},l=0;l<a.length;++l){var m=Lj(a[l],f);if(m){var n=Fi(m,I.cookie,void 0,"ad_storage");n.length&&(k[m]=n.sort()[n.length-1])}}return k};Fj(function(){xj(g,b,c,d)})}},Qj=function(a){return a.filter(function(b){return Dj.test(b)})},Rj=function(a,b){for(var c=Gj(b.prefix),d={},e=0;e<a.length;e++)Ej[a[e]]&&(d[a[e]]=Ej[a[e]]);Fj(function(){Ja(d,function(f,g){var k=Fi(c+g,I.cookie,void 0,"ad_storage");if(k.length){var l=k[0],m=Mj(l),
n={};n[f]=[Oj(l)];Jj(n,b,m)}})})},Sj=function(){var a=["","aw.ds"],b=Ij(),c=b.gclid,d=b.gclsrc||"";c&&-1!==a.indexOf(d)&&yj(function(){var e={gclid:c};d&&(e.gclsrc=d);return e})};function Tj(){var a=!1;return a}
function Uj(a){function b(l){var m;Bf.reported_gclid||(Bf.reported_gclid={});m=Bf.reported_gclid;var n=d+(l?"gcu":"gcs");if(!m[n]){m[n]=!0;var r=[],t=function(u,v){v&&r.push(u+"="+encodeURIComponent(v))},p=d;t("gclid",p);t("gclsrc",e);Ze("https://www.google.com/pagead/landing?"+r.join("&"))}}var c=Ij(),d=c.gclid||"",e=c.gclsrc,f=!a&&
(!d||e&&"aw.ds"!==e?!1:!0),g=Tj();if(f||g){var k=""+Ri();b();}};var Vj;if(3===Ed.Nb.length)Vj="g";else{var Wj="G";Vj=Wj}
var Xj={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Vj,OPT:"o"},Yj=function(a){var b=Ed.B.split("-"),c=b[0].toUpperCase(),d=Xj[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===Ed.Nb.length){var g=void 0;f="2"+(g||"w")}else f=
"";return f+d+Ed.Nb+e};var ik=["1"],jk={},nk=function(a){var b=kk(a.prefix);jk[b]||lk(b,a.path,a.domain)||(mk(b,Ri(),a),lk(b,a.path,a.domain))};function mk(a,b,c){var d=Vi(b,"1",c.domain,c.path),e=Wi(c);e.Ea="ad_storage";Oi(a,d,e)}function lk(a,b,c){var d=Ui(a,b,c,ik,"ad_storage");d&&(jk[a]=d);return d}function kk(a){return(a||"_gcl")+"_au"};var ok=function(){for(var a=[],b=I.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({td:e[1],value:e[2]})}var f={};if(!a||!a.length)return f;for(var g=0;g<a.length;g++){var k=a[g].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(f[a[g].td]||(f[a[g].td]=[]),f[a[g].td].push({timestamp:k[1],Cg:k[2]}))}return f};var pk=/^\d+\.fls\.doubleclick\.net$/;function qk(a){ji("ad_storage")?a():hi(a,"ad_storage")}function rk(a){var b=Hh(D.location.href),c=Fh(b,"host",!1);if(c&&c.match(pk)){var d=Fh(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function sk(a,b){if("aw"==a||"dc"==a){var c=rk("gcl"+a);if(c)return c.split(".")}var d=Gj(b);if("_gcl"==d){var e;e=Ij()[a]||[];if(0<e.length)return e}var f=Lj(a,d),g;if(f){var k=[];if(I.cookie){var l=Fi(f,I.cookie,void 0,"ad_storage");if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=Oj(l[m]);n&&-1===C(k,n)&&k.push(n)}g=Qj(k)}else g=k}else g=k}else g=[];return g}
var tk=function(){var a=rk("gac");if(a)return decodeURIComponent(a);var b=ok(),c=[];Ja(b,function(d,e){for(var f=[],g=0;g<e.length;g++)f.push(e[g].Cg);f=Qj(f);f.length&&c.push(d+":"+f.join(","))});return c.join(";")},uk=function(a,b){var c=Ij().dc||[];qk(function(){nk(b);var d=jk[kk(b.prefix)],e=!1;if(d&&0<c.length){var f=Bf.joined_au=Bf.joined_au||{},g=b.prefix||"_gcl";if(!f[g])for(var k=0;k<c.length;k++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[k]+"&auiddc="+d;Ze(l);e=f[g]=!0}}null==a&&
(a=e);if(a&&d){var m=kk(b.prefix),n=jk[m];n&&mk(m,n,b)}})};
var vk=function(a){return!(void 0===a||null===a||0===(a+"").length)},wk=function(a,b){var c;if(2===b.Y)return a("ord",Ga(1E11,1E13)),!0;if(3===b.Y)return a("ord","1"),a("num",Ga(1E11,1E13)),!0;if(4===b.Y)return vk(b.sessionId)&&a("ord",b.sessionId),!0;if(5===b.Y)c="1";else if(6===b.Y)c=b.pd;else return!1;vk(c)&&a("qty",c);vk(b.Rb)&&a("cost",b.Rb);vk(b.transactionId)&&a("ord",b.transactionId);return!0},zk=function(a,b,c){function d(t,p,u){g.hasOwnProperty(t)||(p+="",f+=";"+t+"="+(u?p:yk(p)))}var e=
a.Uc,f=a.protocol;f+=a.uc?"//"+e+".fls.doubleclick.net/activityi":"//ad.doubleclick.net/activity";f+=";src="+yk(e)+(";type="+yk(a.Xc))+(";cat="+yk(a.qb));var g=a.rg||{};Ja(g,function(t,p){f+=";"+yk(t)+"="+yk(p+"")});if(wk(d,a)){vk(a.Ac)&&d("u",a.Ac);vk(a.zc)&&d("tran",a.zc);d("gtm",Yj());!1===a.Uf&&d("npa","1");var k=!0;if(a.Tc&&k){var l=sk("dc",a.Qa);l&&l.length&&d("gcldc",l.join("."));var m=sk("aw",a.Qa);m&&m.length&&d("gclaw",m.join("."));var n=tk();n&&d("gac",n);nk({prefix:a.Qa,wb:a.og,domain:a.ng,flags:a.gi});var r=jk[kk(a.Qa)];r&&d("auiddc",r)}vk(a.ld)&&d("prd",a.ld,!0);Ja(a.vd,function(t,p){d(t,p)});f+=b||"";vk(a.mc)&&d("~oref",a.mc);a.uc?Re(f+"?",a.D):Se(f+"?",a.D,a.C)}else J(a.C)},yk=encodeURIComponent,Ak=function(a,b){zk(a,b)};var pl={},ql=["G","GP"];pl.$e="";var rl=pl.$e.split(",");function sl(){var a=Bf;return a.gcq=a.gcq||new tl}
var ul=function(a,b,c){sl().register(a,b,c)},vl=function(a,b,c,d){sl().push("event",[b,a],c,d)},wl=function(a,b){sl().push("config",[a],b)},xl={},yl=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.i={};this.m=null;this.a=!1},zl=function(a,b,c,d,e){this.type=a;this.m=b;this.W=c||"";this.a=d;this.i=e},tl=function(){this.i={};this.m={};this.a=[]},Al=function(a,b){var c=yf(b);return a.i[c.containerId]=a.i[c.containerId]||new yl},Bl=function(a,b,c,d){if(d.W){var e=Al(a,d.W),
f=e.m;if(f){var g=G(c),k=G(e.targetConfig[d.W]),l=G(e.containerConfig),m=G(e.i),n=G(a.m),r=qg("gtm.uniqueEventId"),t=yf(d.W).prefix,p=zi(yi(xi(wi(vi(ui(ti(g),k),l),m),n),function(){kg(r,t,"2");}),function(){kg(r,t,"3");});try{kg(r,t,"1");f(d.W,b,d.m,p)}catch(u){
kg(r,t,"4");}}}};
tl.prototype.register=function(a,b,c){if(3!==Al(this,a).status){Al(this,a).m=b;Al(this,a).status=3;c&&(Al(this,a).i=c);var d=yf(a),e=xl[d.containerId];if(void 0!==e){var f=Bf[d.containerId].bootstrap,g=d.prefix.toUpperCase();Bf[d.containerId]._spx&&(g=g.toLowerCase());var k=qg("gtm.uniqueEventId"),l=g,m=Qa()-f;if(gg&&!Yf[k]){k!==Uf&&(Sf(),Uf=k);var n=l+"."+Math.floor(f-e)+"."+Math.floor(m);cg=cg?cg+","+n:"&cl="+n}delete xl[d.containerId]}this.flush()}};
tl.prototype.push=function(a,b,c,d){var e=Math.floor(Qa()/1E3);a:if(c){var f=yf(c),g;if(g=f){var k;if(k=1===Al(this,c).status)b:{var l=f.prefix;k=!0}g=k}if(g)if(Al(this,c).status=2,this.push("require",[],f.containerId),xl[f.containerId]=Qa(),Ag()){}else{var n=encodeURIComponent(f.containerId),r=("http:"!=D.location.protocol?"https:":"http:")+"//www.googletagmanager.com";
Pe(r+"/gtag/js?id="+n+"&l=dataLayer&cx=c")}}this.a.push(new zl(a,e,c,b,d));d||this.flush()};
tl.prototype.flush=function(a){for(var b=this;this.a.length;){var c=this.a[0];if(c.i)c.i=!1,this.a.push(c);else switch(c.type){case "require":if(3!==Al(this,c.W).status&&!a)return;break;case "set":Ja(c.a[0],function(l,m){G(Xa(l,m),b.m)});break;case "config":var d=c.a[0],e=!!d[O.oc];delete d[O.oc];var f=Al(this,c.W),g=yf(c.W),k=g.containerId===g.id;e||(k?f.containerConfig={}:f.targetConfig[c.W]={});f.a&&e||Bl(this,O.H,d,c);f.a=!0;delete d[O.wa];k?G(d,f.containerConfig):G(d,f.targetConfig[c.W]);break;
case "event":Bl(this,c.a[1],c.a[0],c)}this.a.shift()}};var Cl=function(a,b){return!0};var Dl=function(a,b){var c;F(this.getName(),["path:!string"],[a]);ze(this,"access_globals","execute",a);for(var d=a.split("."),e=D,f=e[d[0]],g=1;f&&g<d.length;g++)e=f,f=f[d[g]];if("function"!==gb(f))return;for(var k=[],l=1;l<arguments.length;l++)k.push(kb(arguments[l],this.i));c=jb((0,this.i.M)(f,e,k),this.i);return c};var El=function(a){};var Fl=function(a){var b;F(this.getName(),["path:!string"],arguments);ze(this,"access_globals","read",a);var c=a.split("."),d=D,e;for(e=0;e<c.length-1;e++)if(d=d[c[e]],null==d)return;b=d[c[e]];return jb(b,this.i)};var Gl=function(a,b){var c=null;F(this.getName(),["functionPath:!string","arrayPath:!string"],arguments);ze(this,"access_globals","readwrite",a);ze(this,"access_globals","readwrite",b);var d=a.split("."),e=Wa(d),f=d[d.length-1];if(void 0===e)throw Error("Path "+a+" does not exist.");var g=e[f];if(g&&!Ca(g))return null;if(g)return jb(g,this.i);var k;g=function(){if(!Ca(k.push))throw Error("Object at "+b+" in window is not an array.");k.push.call(k,
arguments)};e[f]=g;var l=b.split("."),m=Wa(l),n=l[l.length-1];if(void 0===m)throw Error("Path "+l+" does not exist.");k=m[n];void 0===k&&(k=[],m[n]=k);c=function(){g.apply(g,Array.prototype.slice.call(arguments,0))};return jb(c,this.i)};var Hl=function(a){var b;return jb(b,
this.i)};var Il=function(a){var b;return b};var Jl=function(a,b){b=void 0===b?!0:b;var c;return c};var Kl=function(a,b){var c;return c};var Ll=function(a,b){var c;return c};var Ml=function(a){var b="";return b};var Nl=function(a){var b="";return b};var Ol=function(a,b){};var Pl={},Ql=function(a,b,c,d){F(this.getName(),["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);ze(this,"inject_script",a);var e=this.i,f=function(){b instanceof Za&&b.Fa(e)},g=function(){c instanceof Za&&c.Fa(e)};if(!d){Pe(a,f,g);return}var k=d;Pl[k]?(Pl[k].onSuccess.push(f),Pl[k].onFailure.push(g)):(Pl[k]={onSuccess:[f],onFailure:[g]},f=function(){for(var l=Pl[k].onSuccess,m=0;m<l.length;m++)J(l[m]);l.push=function(n){J(n);
return 0}},g=function(){for(var l=Pl[k].onFailure,m=0;m<l.length;m++)J(l[m]);Pl[k]=null},Pe(a,f,g));};var Rl=function(){return!1},Sl={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};var Tl=function(){try{ze(this,"logging")}catch(c){return}if(!console)return;for(var a=Array.prototype.slice.call(arguments,0),b=0;b<a.length;b++)a[b]=kb(a[b],this.i);console.log.apply(console,a);};var Ul={},Vl={};Ul.getItem=function(a){var b=null;return b};Ul.setItem=function(a,b){};
Ul.removeItem=function(a){};Ul.clear=function(){};var Wl=function(a,b){var c=!1;return c};var Xl=function(a,b,c){};var Yl=function(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f};var Zl=function(a,b,c){F(this.getName(),["path:!string","value:?*","overrideExisting:?boolean"],arguments);ze(this,"access_globals","readwrite",a);var d=a.split("."),e=D,f;for(f=0;f<d.length-1;f++)if(e=e[d[f]],void 0===e)return!1;if(void 0===e[d[f]]||c)return e[d[f]]=kb(b,this.i),!0;return!1};var $l=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};var am=function(a,b,c){var d=this;};var bm=function(a){var b;return b};function cm(a){}
function dm(a,b){var c;return jb(c,this.i)}function em(){var a="";return a}
function fm(){var a="";return a}
var Cc=function(){var a=new Je;Ag()?(a.add("injectHiddenIframe",za),a.add("injectScript",za)):(a.add("injectHiddenIframe",Ol),a.add("injectScript",Ql));var b=Xl;a.add("addEventCallback",cm);a.add("aliasInWindow",Cl);a.add("assertThat",oe);a.add("assertApi",ne);a.add("callInWindow",Dl);a.add("callLater",El);a.add("copyFromDataLayer",
dm);a.add("copyFromWindow",Fl);a.add("createQueue",Hl);a.add("createArgumentsQueue",Gl);a.add("decodeUri",se);a.add("decodeUriComponent",te);a.add("encodeUri",ue);a.add("encodeUriComponent",ve);a.add("fail",we);a.add("generateRandom",xe);a.add("getCookieValues",Jl);a.add("getQueryParameters",Kl);a.add("getReferrerQueryParameters",Ll);a.add("getReferrerUrl",Ml);a.add("getTimestamp",ye);a.add("getType",Be);a.add("getUrl",Nl);a.add("logToConsole",Tl);a.add("makeInteger",De);a.add("makeNumber",Ee);a.add("makeString",
Fe);a.add("makeTableMap",Ge);a.add("Math",re());a.add("mock",Ie);a.add("queryPermission",Wl);a.add("readCharacterSet",em);a.add("readTitle",fm);a.add("sendPixel",b);a.add("setCookie",Yl);a.add("setInWindow",Zl);a.add("sha256",am);a.add("TestHelper",Ke());a.add("toBase64",bm,!("btoa"in D)),a.add("fromBase64",
Il,!("atob"in D));a.add("localStorage",Sl,!Rl());
return function(c){var d;if(a.a.hasOwnProperty(c))d=a.get(c,this);else throw Error(c+" is not a valid API name.");return d}};var Ac,Jd;
function gm(){var a=data.runtime||[],b=data.runtime_lines;Ac=new zc;hm();ad=function(e,f,g){im(f);var k=new cb;Ja(f,function(p,u){k.set(p,jb(u))});Ac.a.a.s=wd();var l={Zf:Kd(e),eventId:void 0!==g?g.id:void 0,Wb:e,log:function(){}};if(Mh()){var m=Nh(),n=void 0,r=void 0;l.aa={i:{},a:function(p,u,v){1===u&&(n=p);7===u&&(r=v);m(p,u,v)},m:He()};l.log=function(p,u){if(n){var v=Array.prototype.slice.call(arguments,1);m(n,4,{level:p,source:r,message:v})}}}var t=Bc(l,[e,k]);Ac.a.a.s=void 0;t instanceof oa&&
"return"===t.a&&(t=t.i);return kb(t)};Dc();for(var c=0;c<a.length;c++){var d=a[c];if(!Ea(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&sd(d,b[c]);Ac.Xb(d)}}function im(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Ca(b)&&(a.gtmOnSuccess=function(){J(b)});Ca(c)&&(a.gtmOnFailure=function(){J(c)})}
function hm(){var a=Ac;Bf.SANDBOXED_JS_SEMAPHORE=Bf.SANDBOXED_JS_SEMAPHORE||0;Ec(a,function(b,c,d){Bf.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{Bf.SANDBOXED_JS_SEMAPHORE--}})}function jm(a){void 0!==a&&Ja(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");Lf[e]=Lf[e]||[];Lf[e].push(b)}})};var km=["GP","G"],lm="G".split(/,/);lm.push("GF");lm.push("HA");var mm=!1;mm=!0;var nm=null,om={},pm={},qm;function rm(a,b){var c={event:a};b&&(c.eventModel=G(b),b[O.Fc]&&(c.eventCallback=b[O.Fc]),b[O.Ib]&&(c.eventTimeout=b[O.Ib]));return c}
var xm={config:function(a){},event:function(a){var b=a[1];if(q(b)&&!(3<a.length)){var c;if(2<a.length){if(!ib(a[2])&&void 0!=a[2])return;c=a[2]}var d=rm(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2],d=Jd.i;d.a[b]?d.a[b].push(c):d.a[b]=
[c]}},set:function(a){var b;2==a.length&&ib(a[1])?b=G(a[1]):3==a.length&&q(a[1])&&(b={},ib(a[2])||Ea(a[2])?b[a[1]]=G(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}};
var ym={policy:!0};var zm=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},Bm=function(a){var b=Am(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var Cm=!1,Dm=[];function Em(){if(!Cm){Cm=!0;for(var a=0;a<Dm.length;a++)J(Dm[a])}}var Fm=function(a){Cm?J(a):Dm.push(a)};var Wm=function(a){if(Vm(a))return a;this.a=a};Wm.prototype.Ig=function(){return this.a};var Vm=function(a){return!a||"object"!==gb(a)||ib(a)?!1:"getUntrustedUpdateValue"in a};Wm.prototype.getUntrustedUpdateValue=Wm.prototype.Ig;var Xm=[],Ym=!1,Zm=function(a){return D["dataLayer"].push(a)},$m=function(a){var b=Bf["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function an(a){var b=a._clear;Ja(a,function(f,g){"_clear"!==f&&(b&&wg(f,void 0),wg(f,g))});Gf||(Gf=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=Mf(),a["gtm.uniqueEventId"]=d,wg("gtm.uniqueEventId",d));If=c;var e=bn(a);If=null;switch(c){case "gtm.init":Of("GTM",19),e&&Of("GTM",20)}return e}
function bn(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=Bf.zones;d=e?e.checkState(Ed.B,c):Xg;return d.active?Yh(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
function cn(){for(var a=!1;!Ym&&0<Xm.length;){Ym=!0;delete ng.eventModel;pg();var b=Xm.shift();if(null!=b){var c=Vm(b);if(c){var d=b;b=Vm(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var g=e[f],k=qg(g,1);if(Ea(k)||ib(k))k=G(k);og[g]=k}}try{if(Ca(b))try{b.call(rg)}catch(u){}else if(Ea(b)){var l=b;if(q(l[0])){var m=
l[0].split("."),n=m.pop(),r=l.slice(1),t=qg(m.join("."),2);if(void 0!==t&&null!==t)try{t[n].apply(t,r)}catch(u){}}}else{if(Ka(b)){a:{if(b.length&&q(b[0])){var p=xm[b[0]];if(p&&(!c||!ym[b[0]])){b=p(b);break a}}b=void 0}if(!b){Ym=!1;continue}}a=an(b)||a}}finally{c&&pg(!0)}}Ym=!1}return!a}function dn(){var a=cn();try{zm(D["dataLayer"],Ed.B)}catch(b){}return a}
var fn=function(){var a=Ne("dataLayer",[]),b=Ne("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};eh(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Fm(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var d;if(0<Bf.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new Wm(arguments[e])}else d=[].slice.call(arguments,0);var f=c.apply(a,d);Xm.push.apply(Xm,d);if(300<
this.length)for(Of("GTM",4);300<this.length;)this.shift();var g="boolean"!==typeof f||f;return cn()&&g};Xm.push.apply(Xm,a.slice(0));en()&&J(dn)},en=function(){var a=!0;return a};var gn={};gn.Jb=new String("undefined");
var hn=function(a){this.a=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===gn.Jb?b:a[d]);return c.join("")}};hn.prototype.toString=function(){return this.a("undefined")};hn.prototype.valueOf=hn.prototype.toString;gn.If=hn;gn.Nc={};gn.pg=function(a){return new hn(a)};var jn={};gn.wh=function(a,b){var c=Mf();jn[c]=[a,b];return c};gn.se=function(a){var b=a?0:1;return function(c){var d=jn[c];if(d&&"function"===typeof d[b])d[b]();jn[c]=void 0}};gn.Rg=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};gn.mh=function(a){if(a===gn.Jb)return a;var b=Mf();gn.Nc[b]=a;return'google_tag_manager["'+Ed.B+'"].macro('+b+")"};gn.bh=function(a,b,c){a instanceof gn.If&&(a=a.a(gn.wh(b,c)),b=za);return{Zc:a,D:b}};var kn=function(a,b,c){function d(f,g){var k=f[g];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||Ve(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},ln=function(a){Bf.hasOwnProperty("autoEventsSettings")||(Bf.autoEventsSettings={});var b=Bf.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},mn=function(a,b,c){ln(a)[b]=c},nn=function(a,b,c,d){var e=ln(a),f=Ra(e,b,d);e[b]=c(f)},on=function(a,b,c){var d=ln(a);return Ra(d,b,c)};var pn=["input","select","textarea"],qn=["button","hidden","image","reset","submit"],rn=function(a){var b=a.tagName.toLowerCase();return!Fa(pn,function(c){return c===b})||"input"===b&&Fa(qn,function(c){return c===a.type.toLowerCase()})?!1:!0},sn=function(a){return a.form?a.form.tagName?a.form:I.getElementById(a.form):Ye(a,["form"],100)},tn=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var g=a.elements[e];if(rn(g)){if(g.getAttribute(c)===d)return f;
f++}}return 0};var un=!!D.MutationObserver,vn=void 0,wn=function(a){if(!vn){var b=function(){var c=I.body;if(c)if(un)(new MutationObserver(function(){for(var e=0;e<vn.length;e++)J(vn[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Te(c,"DOMNodeInserted",function(){d||(d=!0,J(function(){d=!1;for(var e=0;e<vn.length;e++)J(vn[e])}))})}};vn=[];I.body?b():J(b)}vn.push(a)};
var Hn=function(){var a=I.body,b=I.documentElement||a&&a.parentElement,c,d;if(I.compatMode&&"BackCompat"!==I.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(f,g){return f&&g?Math.min(f,g):Math.max(f,g)};Of("GTM",7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},In=function(a){var b=Hn(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,g=e.right-e.left;return f&&g?(1-Math.min((Math.max(0-e.left,
0)+Math.max(e.right-d,0))/g,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0},Jn=function(a){if(I.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!D.getComputedStyle)return!0;var c=D.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,g=e.filter;if(g){var k=g.indexOf("opacity(");0<=k&&(g=g.substring(k+8,g.indexOf(")",k)),"%"==g.charAt(g.length-1)&&(g=g.substring(0,g.length-
1)),f=Math.min(g,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=D.getComputedStyle(d,null))}return!1};var Kn=[],Ln=!(!D.IntersectionObserver||!D.IntersectionObserverEntry),Mn=function(a,b,c){for(var d=new D.IntersectionObserver(a,{threshold:c}),e=0;e<b.length;e++)d.observe(b[e]);for(var f=0;f<Kn.length;f++)if(!Kn[f])return Kn[f]=d,f;return Kn.push(d)-1},Nn=function(a,b,c){function d(k,l){var m={top:0,bottom:0,right:0,left:0,width:0,
height:0},n={boundingClientRect:k.getBoundingClientRect(),intersectionRatio:l,intersectionRect:m,isIntersecting:0<l,rootBounds:m,target:k,time:Qa()};J(function(){return a(n)})}for(var e=[],f=[],g=0;g<b.length;g++)e.push(0),f.push(-1);c.sort(function(k,l){return k-l});return function(){for(var k=0;k<b.length;k++){var l=In(b[k]);if(l>e[k])for(;f[k]<c.length-1&&l>=c[f[k]+1];)d(b[k],l),f[k]++;else if(l<e[k])for(;0<=f[k]&&l<=c[f[k]];)d(b[k],l),f[k]--;e[k]=l}}},On=function(a,b,c){for(var d=0;d<c.length;d++)1<
c[d]?c[d]=1:0>c[d]&&(c[d]=0);if(Ln){var e=!1;J(function(){e||Nn(a,b,c)()});return Mn(function(f){e=!0;for(var g={Za:0};g.Za<f.length;g={Za:g.Za},g.Za++)J(function(k){return function(){return a(f[k.Za])}}(g))},b,c)}return D.setInterval(Nn(a,b,c),1E3)},Pn=function(a){Ln?0<=a&&a<Kn.length&&Kn[a]&&(Kn[a].disconnect(),Kn[a]=void 0):D.clearInterval(a)};var Rn=D.clearTimeout,Sn=D.setTimeout,S=function(a,b,c){if(Ag()){b&&J(b)}else return Pe(a,b,c)},Tn=function(){return D.location.href},Un=function(a){return Fh(Hh(a),"fragment")},Vn=function(a){return Gh(Hh(a))},Wn=function(a,b){return qg(a,b||2)},Xn=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=Zm(a)):d=Zm(a);return d},Yn=function(a,b){D[a]=b},U=function(a,b,c){b&&(void 0===D[a]||c&&!D[a])&&(D[a]=
b);return D[a]},Zn=function(a,b,c){return Fi(a,b,void 0===c?!0:!!c)},$n=function(a,b){if(Ag()){b&&J(b)}else Re(a,b)},ao=function(a){return!!on(a,"init",!1)},bo=function(a){mn(a,"init",!0)},co=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":Ff;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";S(R("https://","http://",c))},eo=function(a,b){var c=a[b];return c};
var fo=gn.bh;var Co=new Ha;function Do(a,b){function c(g){var k=Hh(g),l=Fh(k,"protocol"),m=Fh(k,"host",!0),n=Fh(k,"port"),r=Fh(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,r]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function Eo(a){return Fo(a)?1:0}
function Fo(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Ea(c)){for(var d=0;d<c.length;d++)if(Eo({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var f=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var g=0;g<f.length;g++)if(b[f[g]]){e=b[f[g]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-
l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");return 0<=C(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var r;var t=a.ignore_case?"i":void 0;try{var p=String(c)+t,u=Co.get(p);u||(u=new RegExp(c,t),Co.set(p,u));r=u.test(b)}catch(v){r=!1}return r;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Do(b,
c)}return!1};var Go=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Ho={},Io=encodeURI,V=encodeURIComponent,Jo=Se;var Ko=function(a,b){if(!a)return!1;var c=Fh(Hh(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var Lo=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};Ho.Sg=function(){var a=!1;return a};var Yp=function(){var a=D.gaGlobal=D.gaGlobal||{};a.hid=a.hid||Ga();return a.hid};var iq=window,jq=document,kq=function(a){var b=iq._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===iq["ga-disable-"+a])return!0;try{var c=iq.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=Bi("AMP_TOKEN",String(jq.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return jq.getElementById("__gaOptOutExtension")?!0:!1};
var nq=function(a){Ja(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[O.ma]||{};Ja(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var rq=function(a,b,c){vl(b,c,a)},sq=function(a,b,c){vl(b,c,a,!0)},uq=function(a,b){};
function tq(a,b){}var Z={b:{}};
Z.b.ctv=["google"],function(){(function(a){Z.__ctv=a;Z.__ctv.g="ctv";Z.__ctv.h=!0;Z.__ctv.priorityOverride=0})(function(){return"201"})}();

Z.b.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.g="jsm";Z.__jsm.h=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=U("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Z.b.flc=[],function(){function a(b,c){c=c?c.slice(0,-1):void 0;Ak(b,c)}(function(b){Z.__flc=b;Z.__flc.g="flc";Z.__flc.h=!0;Z.__flc.priorityOverride=0})(function(b){var c=!b.hasOwnProperty("vtp_enableConversionLinker")||b.vtp_enableConversionLinker,d=Lo(b.vtp_customVariable||[],"key","value")||{},e={qb:b.vtp_activityTag,Tc:c,Qa:b.vtp_conversionCookiePrefix||void 0,Rb:void 0,Y:{UNIQUE:3,SESSION:4}[b.vtp_ordinalType]||2,Uc:b.vtp_advertiserId,Xc:b.vtp_groupTag,C:b.vtp_gtmOnFailure,D:b.vtp_gtmOnSuccess,
mc:b.vtp_useImageTag?void 0:b.vtp_url,protocol:"",pd:void 0,uc:!b.vtp_useImageTag,sessionId:b.vtp_sessionId,zc:b.vtp_transactionVariable,transactionId:void 0,Ac:b.vtp_userVariable,vd:d};if(b.vtp_enableAttribution){var f=b.vtp_attributionFields||[];if(f.length){S("//www.gstatic.com/attribution/collection/attributiontools.js",function(){a(e,U("google_attr").build([Lo(f,"key","value")||{}]))},b.vtp_gtmOnFailure);return}}a(e)})}();
Z.b.sp=["google"],function(){(function(a){Z.__sp=a;Z.__sp.g="sp";Z.__sp.h=!0;Z.__sp.priorityOverride=0})(function(a){var b=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js",c=a.vtp_gtmOnFailure;oh();S(b,function(){var d=U("google_trackConversion");if(Ca(d)){var e=
{};"DATA_LAYER"==a.vtp_customParamsFormat?e=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(e=Lo(a.vtp_customParams,"key","value"));var f={};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(e.event=a.vtp_eventName),a.vtp_eventValue&&(f.value=a.vtp_eventValue),a.vtp_eventItems&&(f.items=a.vtp_eventItems));var g={google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:e,google_gtag_event_data:f,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,
google_gtm:Yj()};a.vtp_rdp&&(g.google_restricted_data_processing=!0);a.vtp_userId&&(g.google_user_id=a.vtp_userId);d(g)||c()}else c()},c)})}();Z.b.c=["google"],function(){(function(a){Z.__c=a;Z.__c.g="c";Z.__c.h=!0;Z.__c.priorityOverride=0})(function(a){return a.vtp_value})}();
Z.b.d=["google"],function(){(function(a){Z.__d=a;Z.__d.g="d";Z.__d.h=!0;Z.__d.priorityOverride=0})(function(a){var b=null,c=null,d=a.vtp_attributeName;if("CSS"==a.vtp_selectorType){var e=bf(a.vtp_elementSelector);e&&0<e.length&&(b=e[0])}else b=I.getElementById(a.vtp_elementId);b&&(d?c=Ve(b,d):c=We(b));return Pa(String(b&&c))})}();
Z.b.e=["google"],function(){(function(a){Z.__e=a;Z.__e.g="e";Z.__e.h=!0;Z.__e.priorityOverride=0})(function(a){return String(yg(a.vtp_gtmEventId,"event"))})}();
Z.b.f=["google"],function(){(function(a){Z.__f=a;Z.__f.g="f";Z.__f.h=!0;Z.__f.priorityOverride=0})(function(a){var b=Wn("gtm.referrer",1)||I.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?Fh(Hh(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Vn(String(b)):String(b)})}();
Z.b.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=kn(c,"gtm.click");Xn(d)}}(function(b){Z.__cl=b;Z.__cl.g="cl";Z.__cl.h=!0;Z.__cl.priorityOverride=0})(function(b){if(!ao("cl")){var c=U("document");Te(c,"click",a,!0);bo("cl")}J(b.vtp_gtmOnSuccess)})}();
Z.b.j=["google"],function(){(function(a){Z.__j=a;Z.__j.g="j";Z.__j.h=!0;Z.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=U(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();Z.b.k=["google"],function(){(function(a){Z.__k=a;Z.__k.g="k";Z.__k.h=!0;Z.__k.priorityOverride=0})(function(a){return Zn(a.vtp_name,Wn("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Z.b.fls=[],function(){function a(b,c){c=c?c.slice(0,-1):void 0;Ak(b,c)}(function(b){Z.__fls=b;Z.__fls.g="fls";Z.__fls.h=!0;Z.__fls.priorityOverride=0})(function(b){var c;if(b.vtp_enableProductReporting){var d=function(r){r=r||[];for(var t=[],p=[["i","id"],["p","price"],["q","quantity"],["c","country"],["l","language"],["a","accountId"]],u=0;u<r.length;u++)for(var v=0;v<p.length;v++){var w=p[v],y=r[u][w[1]];void 0!==y&&t.push(w[0]+
(u+1)+":"+V(y))}return t.join("|")};switch(b.vtp_dataSource){case "DATA_LAYER":c=d(Wn("ecommerce.purchase.products"));break;case "JSON":c=d(b.vtp_productData);break;case "STRING":for(var e=(b.vtp_productData||"").split("|"),f=0;f<e.length;f++){var g=e[f].split(":");g[1]=g[1]&&V(g[1])||"";e[f]=g.join(":")}c=e.join("|")}}var k=!b.hasOwnProperty("vtp_enableConversionLinker")||b.vtp_enableConversionLinker,l=Lo(b.vtp_customVariable||
[],"key","value")||{},m={qb:b.vtp_activityTag,Tc:k,Qa:b.vtp_conversionCookiePrefix||void 0,Rb:b.vtp_revenue,Y:"ITEM_SOLD"===b.vtp_countingMethod?6:5,Uc:b.vtp_advertiserId,Xc:b.vtp_groupTag,C:b.vtp_gtmOnFailure,D:b.vtp_gtmOnSuccess,mc:b.vtp_useImageTag?void 0:b.vtp_url,ld:c,protocol:"",pd:b.vtp_quantity,uc:!b.vtp_useImageTag,zc:b.vtp_transactionVariable,transactionId:b.vtp_orderId,Ac:b.vtp_userVariable,vd:l};if(b.vtp_enableAttribution){var n=b.vtp_attributionFields||[];if(n.length){S("//www.gstatic.com/attribution/collection/attributiontools.js",
function(){a(m,U("google_attr").build([Lo(n,"key","value")||{}]))},b.vtp_gtmOnFailure);return}}a(m)})}();
Z.b.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid access_globals request "+c);}return e}(function(b){Z.__access_globals=b;Z.__access_globals.g="access_globals";Z.__access_globals.h=!0;Z.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],g=[],k=0;k<c.length;k++){var l=c[k],m=l.key;l.read&&e.push(m);l.write&&f.push(m);l.execute&&g.push(m)}return{assert:function(n,r,t){if(!q(t))throw d(n,{},"Key must be a string.");if("read"===r){if(-1<C(e,t))return}else if("write"===r){if(-1<C(f,t))return}else if("readwrite"===r){if(-1<C(f,t)&&-1<C(e,t))return}else if("execute"===r){if(-1<C(g,t))return}else throw d(n,{},"Operation must be either 'read', 'write', or 'execute', was "+r);throw d(n,{},"Prohibited "+r+" on global variable: "+
t+".");},K:a}})}();Z.b.r=["google"],function(){(function(a){Z.__r=a;Z.__r.g="r";Z.__r.h=!0;Z.__r.priorityOverride=0})(function(a){return Ga(a.vtp_min,a.vtp_max)})}();
Z.b.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.g="u";Z.__u.h=!0;Z.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=Wn("gtm.url",1);c=c||Tn();var d=b[a("vtp_component")];if(!d||"URL"==d)return Vn(String(c));var e=Hh(String(c)),f;if("QUERY"===d)a:{var g=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;g?Ea(k)?m=k:m=String(k).replace(/\s+/g,
"").split(","):m=[String(k)];for(var n=0;n<m.length;n++){var r=Fh(e,"QUERY",void 0,void 0,m[n]);if(void 0!=r&&(!l||""!==r)){f=r;break a}}f=void 0}else f=Fh(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.b.v=["google"],function(){(function(a){Z.__v=a;Z.__v.g="v";Z.__v.h=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=Wn(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.b.tl=["google"],function(){function a(b){return function(){if(b.dd&&b.fd>=b.dd)b.$c&&U("self").clearInterval(b.$c);else{b.fd++;var c=(new Date).getTime();Xn({event:b.ja,"gtm.timerId":b.$c,"gtm.timerEventNumber":b.fd,"gtm.timerInterval":b.interval,"gtm.timerLimit":b.dd,"gtm.timerStartTime":b.Xe,"gtm.timerCurrentTime":c,"gtm.timerElapsedTime":c-b.Xe,"gtm.triggers":b.Mh})}}}(function(b){Z.__tl=b;Z.__tl.g="tl";Z.__tl.h=!0;Z.__tl.priorityOverride=0})(function(b){J(b.vtp_gtmOnSuccess);if(!isNaN(b.vtp_interval)){var c=
{ja:b.vtp_eventName,fd:0,interval:Number(b.vtp_interval),dd:isNaN(b.vtp_limit)?0:Number(b.vtp_limit),Mh:String(b.vtp_uniqueTriggerId||"0"),Xe:(new Date).getTime()};c.$c=U("self").setInterval(a(c),0>Number(b.vtp_interval)?0:Number(b.vtp_interval))}})}();
Z.b.ua=["google"],function(){var a,b={},c=function(d){var e={},f={},g={},k={},l={},m=void 0;if(d.vtp_gaSettings){var n=d.vtp_gaSettings;G(Lo(n.vtp_fieldsToSet,"fieldName","value"),f);G(Lo(n.vtp_contentGroup,"index","group"),g);G(Lo(n.vtp_dimension,"index","dimension"),k);G(Lo(n.vtp_metric,"index","metric"),l);d.vtp_gaSettings=null;n.vtp_fieldsToSet=void 0;n.vtp_contentGroup=void 0;n.vtp_dimension=void 0;n.vtp_metric=void 0;var r=G(n);d=G(d,r)}G(Lo(d.vtp_fieldsToSet,"fieldName","value"),f);G(Lo(d.vtp_contentGroup,
"index","group"),g);G(Lo(d.vtp_dimension,"index","dimension"),k);G(Lo(d.vtp_metric,"index","metric"),l);var t=vh(d.vtp_functionName);if(Ca(t)){var p="",u="";d.vtp_setTrackerName&&"string"==typeof d.vtp_trackerName?""!==d.vtp_trackerName&&(u=d.vtp_trackerName,p=u+"."):(u="gtm"+Mf(),p=u+".");var v={name:!0,clientId:!0,sampleRate:!0,
siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0},
y=function(P){var M=[].slice.call(arguments,0);M[0]=p+M[0];t.apply(window,M)},x=function(P,M){return void 0===M?M:P(M)},A=function(P,M){if(M)for(var Aa in M)M.hasOwnProperty(Aa)&&y("set",P+Aa,M[Aa])},B=function(){var P=function(yq,xk,zq){if(!ib(xk))return!1;for(var Id=Ra(Object(xk),zq,[]),fh=0;Id&&fh<Id.length;fh++)y(yq,Id[fh]);return!!Id&&0<Id.length},M;if(d.vtp_useEcommerceDataLayer){var Aa=!1;Aa||(M=Wn("ecommerce",1))}else d.vtp_ecommerceMacroData&&(M=d.vtp_ecommerceMacroData.ecommerce);if(!ib(M))return;M=Object(M);var cc=Ra(f,"currencyCode",M.currencyCode);void 0!==cc&&y("set","&cu",cc);P("ec:addImpression",M,"impressions");if(P("ec:addPromo",M[M.promoClick?"promoClick":"promoView"],"promotions")&&M.promoClick){y("ec:setAction","promo_click",M.promoClick.actionField);return}for(var La=
"detail checkout checkout_option click add remove purchase refund".split(" "),mb="refund purchase remove checkout checkout_option add click detail".split(" "),nb=0;nb<La.length;nb++){var zb=M[La[nb]];if(zb){P("ec:addProduct",zb,"products");y("ec:setAction",La[nb],zb.actionField);if(gg)for(var Ob=0;Ob<mb.length;Ob++){var Uc=M[mb[Ob]];if(Uc){Uc!==zb&&Of("GTM",13);break}}break}}},z=function(P,M,Aa){var cc=0;if(P)for(var La in P)if(P.hasOwnProperty(La)&&
(Aa&&v[La]||!Aa&&void 0===v[La])){var mb=w[La]?Na(P[La]):P[La];"anonymizeIp"!=La||mb||(mb=void 0);M[La]=mb;cc++}return cc},E={name:u};z(f,E,!0);t("create",d.vtp_trackingId||e.trackingId,E);y("set","&gtm",Yj(!0));
d.vtp_enableRecaptcha&&y("require","recaptcha","recaptcha.js");(function(P,M){void 0!==d[M]&&y("set",P,d[M])})("nonInteraction","vtp_nonInteraction");A("contentGroup",g);A("dimension",k);A("metric",l);var H={};z(f,H,!1)&&y("set",H);var K;d.vtp_enableLinkId&&y("require","linkid","linkid.js");y("set","hitCallback",function(){var P=
f&&f.hitCallback;Ca(P)&&P();d.vtp_gtmOnSuccess()});if("TRACK_EVENT"==d.vtp_trackType){d.vtp_enableEcommerce&&(y("require","ec","ec.js"),B());var T={hitType:"event",eventCategory:String(d.vtp_eventCategory||e.category),eventAction:String(d.vtp_eventAction||e.action),eventLabel:x(String,d.vtp_eventLabel||e.label),eventValue:x(Ma,d.vtp_eventValue||e.value)};z(K,T,!1);y("send",T);}else if("TRACK_SOCIAL"==
d.vtp_trackType){}else if("TRACK_TRANSACTION"==d.vtp_trackType){}else if("TRACK_TIMING"==d.vtp_trackType){}else if("DECORATE_LINK"==d.vtp_trackType){}else if("DECORATE_FORM"==d.vtp_trackType){}else if("TRACK_DATA"==d.vtp_trackType){}else{d.vtp_enableEcommerce&&(y("require","ec","ec.js"),B());if(d.vtp_doubleClick||"DISPLAY_FEATURES"==d.vtp_advertisingFeaturesType){var wa="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require",
"displayfeatures",void 0,{cookieName:wa})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==d.vtp_advertisingFeaturesType){var na="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","adfeatures",{cookieName:na})}K?y("send","pageview",K):y("send","pageview");d.vtp_autoLinkDomains&&wh(p,d.vtp_autoLinkDomains,!!d.vtp_useHashAutoLink,!!d.vtp_decorateFormsAutoLink);}if(!a){var Ba=
d.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";d.vtp_useInternalVersion&&!d.vtp_useDebugVersion&&(Ba="internal/"+Ba);a=!0;var ob=R("https:","http:","//www.google-analytics.com/"+Ba,f&&f.forceSSL);S(ob,function(){var P=th();P&&P.loaded||d.vtp_gtmOnFailure();},d.vtp_gtmOnFailure)}}else J(d.vtp_gtmOnFailure)};
Z.__ua=c;Z.__ua.g="ua";Z.__ua.h=!0;Z.__ua.priorityOverride=0}();
Z.b.uv=["google"],function(){(function(a){Z.__uv=a;Z.__uv.g="uv";Z.__uv.h=!0;Z.__uv.priorityOverride=0})(function(){})}();

Z.b.inject_script=["google"],function(){function a(b,c){return{url:c}}(function(b){Z.__inject_script=b;Z.__inject_script.g="inject_script";Z.__inject_script.h=!0;Z.__inject_script.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!q(f))throw d(e,{},"Script URL must be a string.");try{if(ge(Hh(f),c))return}catch(g){throw d(e,{},"Invalid script URL filter.");}throw d(e,{},"Prohibited script URL: "+f);},K:a}})}();


Z.b.cid=["google"],function(){(function(a){Z.__cid=a;Z.__cid.g="cid";Z.__cid.h=!0;Z.__cid.priorityOverride=0})(function(){return Ed.B})}();

Z.b.gclidw=["google"],function(){var a=["aw","dc","gf","ha","gp"];(function(b){Z.__gclidw=b;Z.__gclidw.g="gclidw";Z.__gclidw.h=!0;Z.__gclidw.priorityOverride=100})(function(b){J(b.vtp_gtmOnSuccess);var c,d,e;b.vtp_enableCookieOverrides&&(e=b.vtp_cookiePrefix,c=b.vtp_path,d=b.vtp_domain);var f=null;b.vtp_enableCookieUpdateFeature&&(f=!0,void 0!==b.vtp_cookieUpdate&&(f=!!b.vtp_cookieUpdate));var g={prefix:e,path:c,domain:d};b.vtp_enableCrossDomainFeature&&(b.vtp_enableCrossDomain&&!1===b.vtp_acceptIncoming||
(b.vtp_enableCrossDomain||zj())&&Nj(a,g));Kj(g);Rj(["aw","dc"],g);uk(f,g);var k=e;if(b.vtp_enableCrossDomainFeature&&b.vtp_enableCrossDomain&&b.vtp_linkerDomains){var l=b.vtp_linkerDomains.toString().replace(/\s+/g,"").split(","),m=b.vtp_urlPosition,n=!!b.vtp_formDecoration;Pj(a,l,m,n,k);}Uj();})}();


Z.b.aev=["google"],function(){function a(p,u){var v=yg(p,"gtm");if(v)return v[u]}function b(p,u,v,w){w||(w="element");var y=p+"."+u,x;if(n.hasOwnProperty(y))x=n[y];else{var A=a(p,w);if(A&&(x=v(A),n[y]=x,r.push(y),35<r.length)){var B=r.shift();delete n[B]}}return x}function c(p,u,v){var w=a(p,t[u]);return void 0!==w?w:v}function d(p,u){if(!p)return!1;var v=e(Tn());Ea(u)||(u=String(u||"").replace(/\s+/g,"").split(","));for(var w=[v],y=0;y<u.length;y++)if(u[y]instanceof RegExp){if(u[y].test(p))return!1}else{var x=
u[y];if(0!=x.length){if(0<=e(p).indexOf(x))return!1;w.push(e(x))}}return!Ko(p,w)}function e(p){m.test(p)||(p="http://"+p);return Fh(Hh(p),"HOST",!0)}function f(p,u,v){switch(p){case "SUBMIT_TEXT":return b(u,"FORM."+p,g,"formSubmitElement")||v;case "LENGTH":var w=b(u,"FORM."+p,k);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(u,"id",v);case "INTERACTED_FIELD_NAME":return l(u,"name",v);case "INTERACTED_FIELD_TYPE":return l(u,"type",v);case "INTERACTED_FIELD_POSITION":var y=a(u,"interactedFormFieldPosition");
return void 0===y?v:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(u,"interactSequenceNumber");return void 0===x?v:x;default:return v}}function g(p){switch(p.tagName.toLowerCase()){case "input":return Ve(p,"value");case "button":return We(p);default:return null}}function k(p){if("form"===p.tagName.toLowerCase()&&p.elements){for(var u=0,v=0;v<p.elements.length;v++)rn(p.elements[v])&&u++;return u}}function l(p,u,v){var w=a(p,"interactedFormField");return w&&Ve(w,u)||v}var m=/^https?:\/\//i,n={},r=[],t={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(p){Z.__aev=p;Z.__aev.g="aev";Z.__aev.h=!0;Z.__aev.priorityOverride=0})(function(p){var u=p.vtp_gtmEventId,v=p.vtp_defaultValue,w=p.vtp_varType;switch(w){case "TAG_NAME":var y=a(u,"element");return y&&y.tagName||
v;case "TEXT":return b(u,w,We)||v;case "URL":var x;a:{var A=String(a(u,"elementUrl")||v||""),B=Hh(A),z=String(p.vtp_component||"URL");switch(z){case "URL":x=A;break a;case "IS_OUTBOUND":x=d(A,p.vtp_affiliatedDomains);break a;default:x=Fh(B,z,p.vtp_stripWww,p.vtp_defaultPages,p.vtp_queryKey)}}return x;case "ATTRIBUTE":var E;if(void 0===p.vtp_attribute)E=c(u,w,v);else{var H=p.vtp_attribute,K=a(u,"element");E=K&&Ve(K,H)||v||""}return E;case "MD":var T=p.vtp_mdValue,Y=b(u,"MD",Dn);return T&&Y?Gn(Y,T)||
v:Y||v;case "FORM":return f(String(p.vtp_component||"SUBMIT_TEXT"),u,v);default:return c(u,w,v)}})}();
Z.b.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.g="gas";Z.__gas.h=!0;Z.__gas.priorityOverride=0})(function(a){var b=G(a),c=b;c[qd.xa]=null;c[qd.nf]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();

Z.b.awct=["google"],function(){var a=!1,b=[],c=function(k){var l=U("google_trackConversion"),m=k.gtm_onFailure;"function"==typeof l?l(k)||m():m()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},f=function(){return function(){d();b={push:c};}},g=function(k){oh();var l={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:k.vtp_conversionId,google_conversion_label:k.vtp_conversionLabel,
google_conversion_value:k.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:k.vtp_gtmOnSuccess,gtm_onFailure:k.vtp_gtmOnFailure,google_gtm:Yj()};k.vtp_rdp&&(l.google_restricted_data_processing=!0);var m=function(v){return function(w,y,x){var A="DATA_LAYER"==v?Wn(x):k[y];A&&(l[w]=A)}},n=m("JSON");n("google_conversion_currency","vtp_currencyCode");n("google_conversion_order_id","vtp_orderId");k.vtp_enableProductReporting&&(n=m(k.vtp_productReportingDataSource),n("google_conversion_merchant_id",
"vtp_awMerchantId","aw_merchant_id"),n("google_basket_feed_country","vtp_awFeedCountry","aw_feed_country"),n("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),n("google_basket_discount","vtp_discount","discount"),n("google_conversion_items","vtp_items","items"),l.google_conversion_items&&l.google_conversion_items.map&&(l.google_conversion_items=l.google_conversion_items.map(function(v){return{value:v.price,quantity:v.quantity,item_id:v.id}})));var r=function(v,w){(l.google_additional_conversion_params=
l.google_additional_conversion_params||{})[v]=w},t=function(v){return function(w,y,x,A){var B="DATA_LAYER"==v?Wn(x):k[y];A(B)&&r(w,B)}},p=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js";k.vtp_enableNewCustomerReporting&&(n=t(k.vtp_newCustomerReportingDataSource),n("vdnc","vtp_awNewCustomer","new_customer",function(v){return void 0!=v&&""!==v}),n("vdltv","vtp_awCustomerLTV","customer_lifetime_value",
function(v){return void 0!=v&&""!==v}));!k.hasOwnProperty("vtp_enableConversionLinker")||k.vtp_enableConversionLinker?(k.vtp_conversionCookiePrefix&&(l.google_gcl_cookie_prefix=k.vtp_conversionCookiePrefix),l.google_read_gcl_cookie_opt_out=!1):l.google_read_gcl_cookie_opt_out=!0;var u=!0;u&&b.push(l);a||(a=!0,S(p,f(),e(p)))};Z.__awct=g;Z.__awct.g="awct";Z.__awct.h=!0;Z.__awct.priorityOverride=0}();Z.b.remm=["google"],function(){(function(a){Z.__remm=a;Z.__remm.g="remm";Z.__remm.h=!0;Z.__remm.priorityOverride=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",f=0;f<c.length;f++){var g=c[f].key||"";d&&(g="^"+g+"$");var k=new RegExp(g,e);if(k.test(b)){var l=c[f].value;a.vtp_replaceAfterMatch&&(l=String(b).replace(k,l));return l}}return a.vtp_defaultValue})}();

Z.b.baut=["nonGoogleScripts"],function(){var a=!1,b=function(c){var d=c.vtp_uetqName||"uetq",e=U(d,[],!0);if("VARIABLE_REVENUE"==c.vtp_eventType)e.push({gv:c.vtp_goalValue}),c.vtp_gtmOnSuccess();else if("CUSTOM"==c.vtp_eventType){var f={},g=function(k,l){void 0!==c[k]&&(f[l]=c[k])};g("vtp_goalValue","gv");g("vtp_eventCategory","ec");g("vtp_eventAction","ea");g("vtp_eventLabel","el");g("vtp_eventValue","ev");e.push(f);c.vtp_gtmOnSuccess()}else if(a)c.vtp_gtmOnSuccess();else try{S("//bat.bing.com/bat.js",
function(){var k=Go(U("UET"),{ti:c.vtp_tagId,q:e});D[d]=k;k.push("pageLoad");c.vtp_gtmOnSuccess()},c.vtp_gtmOnFailure),a=!0}catch(k){J(c.vtp_gtmOnFailure)}};Z.__baut=b;Z.__baut.g="baut";Z.__baut.h=!0;Z.__baut.priorityOverride=0}();Z.b.logging=["google"],function(){function a(){return{}}(function(b){Z.__logging=b;Z.__logging.g="logging";Z.__logging.h=!0;Z.__logging.priorityOverride=0})(function(b){var c=b.vtp_environments||"debug",d=b.vtp_createPermissionError;return{assert:function(e){if("all"!==c&&!Ho.Sg())throw d(e,{},"Logging is not enabled in all environments");},K:a}})}();
Z.b.fsl=[],function(){function a(){var e=U("document"),f=c(),g=HTMLFormElement.prototype.submit;Te(e,"click",function(k){var l=k.target;if(l&&(l=Ye(l,["button","input"],100))&&("submit"==l.type||"image"==l.type)&&l.name&&Ve(l,"value")){var m;l.form?l.form.tagName?m=l.form:m=I.getElementById(l.form):m=Ye(l,["form"],100);m&&f.store(m,l)}},!1);Te(e,"submit",function(k){var l=k.target;if(!l)return k.returnValue;var m=k.defaultPrevented||!1===k.returnValue,n=b(l)&&!m,r=f.get(l),t=!0;if(d(l,function(){if(t){var p;
r&&(p=e.createElement("input"),p.type="hidden",p.name=r.name,p.value=r.value,l.appendChild(p));g.call(l);p&&l.removeChild(p)}},m,n,r))t=!1;else return m||(k.preventDefault&&k.preventDefault(),k.returnValue=!1),!1;return k.returnValue},!1);HTMLFormElement.prototype.submit=function(){var k=this,l=b(k),m=!0;d(k,function(){m&&g.call(k)},!1,l)&&(g.call(k),m=!1)}}function b(e){var f=e.target;return f&&"_self"!==f&&"_parent"!==f&&"_top"!==f?!1:!0}function c(){var e=[],f=function(g){return Fa(e,function(k){return k.form===
g})};return{store:function(g,k){var l=f(g);l?l.button=k:e.push({form:g,button:k})},get:function(g){var k=f(g);return k?k.button:null}}}function d(e,f,g,k,l){var m=on("fsl",g?"nv.mwt":"mwt",0),n;n=g?on("fsl","nv.ids",[]):on("fsl","ids",[]);if(!n.length)return!0;var r=kn(e,"gtm.formSubmit",n),t=e.action;t&&t.tagName&&(t=e.cloneNode(!1).action);r["gtm.elementUrl"]=t;l&&(r["gtm.formSubmitElement"]=l);if(k&&m){if(!Xn(r,$m(f),m))return!1}else Xn(r,function(){},m||2E3);return!0}(function(e){Z.__fsl=e;Z.__fsl.g=
"fsl";Z.__fsl.h=!0;Z.__fsl.priorityOverride=0})(function(e){var f=e.vtp_waitForTags,g=e.vtp_checkValidation,k=Number(e.vtp_waitForTagsTimeout);if(!k||0>=k)k=2E3;var l=e.vtp_uniqueTriggerId||"0";if(f){var m=function(r){return Math.max(k,r)};nn("fsl","mwt",m,0);g||nn("fsl","nv.mwt",m,0)}var n=function(r){r.push(l);return r};nn("fsl","ids",n,[]);g||nn("fsl","nv.ids",n,[]);ao("fsl")||(a(),bo("fsl"));J(e.vtp_gtmOnSuccess)})}();Z.b.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.g="smm";Z.__smm.h=!0;Z.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=Lo(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();




Z.b.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.g="paused";Z.__paused.h=!0;Z.__paused.priorityOverride=0})(function(a){J(a.vtp_gtmOnFailure)})}();Z.b.hid=["google"],function(){(function(a){Z.__hid=a;Z.__hid.g="hid";Z.__hid.h=!0;Z.__hid.priorityOverride=0})(function(){return gn.Jb})}();
Z.b.html=["customScripts"],function(){function a(d,e,f,g){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,f,g);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=I.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,Oe(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var r=
[];k.firstChild;)r.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,r,l,g)()}else d.insertBefore(k,null),l()}else f()}catch(t){J(g)}}}var b=function(d,e,f){eh(function(){var g,k=Bf;k.postscribe||(k.postscribe=ie);g=k.postscribe;var l={done:e},m=I.createElement("div");m.style.display="none";m.style.visibility="hidden";I.body.appendChild(m);try{g(m,d,l)}catch(n){J(f)}})};var c=function(d){if(I.body){var e=
d.vtp_gtmOnFailure,f=fo(d.vtp_html,d.vtp_gtmOnSuccess,e),g=f.Zc,k=f.D;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(g,k,e):a(I.body,Xe(g),k,e)()}else Sn(function(){c(d)},
200)};Z.__html=c;Z.__html.g="html";Z.__html.h=!0;Z.__html.priorityOverride=0}();

Z.b.dbg=["google"],function(){(function(a){Z.__dbg=a;Z.__dbg.g="dbg";Z.__dbg.h=!0;Z.__dbg.priorityOverride=0})(function(){return!1})}();




Z.b.lcl=[],function(){function a(){var c=U("document"),d=0,e=function(f){var g=f.target;if(g&&3!==f.which&&!(f.Qg||f.timeStamp&&f.timeStamp===d)){d=f.timeStamp;g=Ye(g,["a","area"],100);if(!g)return f.returnValue;var k=f.defaultPrevented||!1===f.returnValue,l=on("lcl",k?"nv.mwt":"mwt",0),m;m=k?on("lcl","nv.ids",[]):on("lcl","ids",[]);if(m.length){var n=kn(g,"gtm.linkClick",m);if(b(f,g,c)&&!k&&l&&g.href){var r=String(eo(g,"rel")||""),t=!!Fa(r.split(" "),function(v){return"noreferrer"===v.toLowerCase()});
t&&Of("GTM",36);var p=U((eo(g,"target")||"_self").substring(1)),u=!0;if(Xn(n,$m(function(){var v;if(v=u&&p){var w;a:if(t){var y;try{y=new MouseEvent(f.type)}catch(x){if(!c.createEvent){w=!1;break a}y=c.createEvent("MouseEvents");y.initEvent(f.type,!0,!0)}y.Qg=!0;f.target.dispatchEvent(y);w=!0}else w=!1;v=!w}v&&(p.location.href=eo(g,"href"))}),l))u=!1;else return f.preventDefault&&f.preventDefault(),f.returnValue=!1}else Xn(n,function(){},l||2E3);return!0}}};Te(c,"click",e,!1);Te(c,"auxclick",e,!1)}
function b(c,d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var f=eo(d,"href"),g=f.indexOf("#"),k=eo(d,"target");if(k&&"_self"!==k&&"_parent"!==k&&"_top"!==k||0===g)return!1;if(0<g){var l=Vn(f),m=Vn(e.location);return l!==m}return!0}(function(c){Z.__lcl=c;Z.__lcl.g="lcl";Z.__lcl.h=!0;Z.__lcl.priorityOverride=0})(function(c){var d=void 0===c.vtp_waitForTags?!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,f=Number(c.vtp_waitForTagsTimeout);if(!f||
0>=f)f=2E3;var g=c.vtp_uniqueTriggerId||"0";if(d){var k=function(m){return Math.max(f,m)};nn("lcl","mwt",k,0);e||nn("lcl","nv.mwt",k,0)}var l=function(m){m.push(g);return m};nn("lcl","ids",l,[]);e||nn("lcl","nv.ids",l,[]);ao("lcl")||(a(),bo("lcl"));J(c.vtp_gtmOnSuccess)})}();
Z.b.evl=["google"],function(){function a(f,g){this.element=f;this.uid=g}function b(){var f=Number(Wn("gtm.start"))||0;return(new Date).getTime()-f}function c(f,g,k,l){function m(){if(!Jn(f.target)){g.has(e.Mb)||g.set(e.Mb,""+b());g.has(e.Ic)||g.set(e.Ic,""+b());var r=0;g.has(e.Ob)&&(r=Number(g.get(e.Ob)));r+=100;g.set(e.Ob,""+r);if(r>=k){var t=kn(f.target,"gtm.elementVisibility",[g.uid]),p=In(f.target);t["gtm.visibleRatio"]=Math.round(1E3*p)/10;t["gtm.visibleTime"]=k;t["gtm.visibleFirstTime"]=Number(g.get(e.Ic));
t["gtm.visibleLastTime"]=Number(g.get(e.Mb));Xn(t);l()}}}if(!g.has(e.gb)&&(0==k&&m(),!g.has(e.Ka))){var n=U("self").setInterval(m,100);g.set(e.gb,n)}}function d(f){f.has(e.gb)&&(U("self").clearInterval(Number(f.get(e.gb))),f.a(e.gb))}var e={gb:"polling-id-",Ic:"first-on-screen-",Mb:"recent-on-screen-",Ob:"total-visible-time-",Ka:"has-fired-"};a.prototype.has=function(f){return!!this.element.getAttribute("data-gtm-vis-"+f+this.uid)};a.prototype.get=function(f){return this.element.getAttribute("data-gtm-vis-"+
f+this.uid)};a.prototype.set=function(f,g){this.element.setAttribute("data-gtm-vis-"+f+this.uid,g)};a.prototype.a=function(f){this.element.removeAttribute("data-gtm-vis-"+f+this.uid)};(function(f){Z.__evl=f;Z.__evl.g="evl";Z.__evl.h=!0;Z.__evl.priorityOverride=0})(function(f){function g(){var y=!1,x=null;if("CSS"===l){try{x=bf(m)}catch(H){}y=!!x&&v.length!=x.length}else if("ID"===l){var A=I.getElementById(m);A&&(x=[A],y=1!=v.length||v[0]!==A)}x||(x=[],y=0<v.length);if(y){for(var B=0;B<v.length;B++){var z=
new a(v[B],p);d(z)}v=[];for(var E=0;E<x.length;E++)v.push(x[E]);0<=w&&Pn(w);0<v.length&&(w=On(k,v,[t]))}}function k(y){var x=new a(y.target,p);y.intersectionRatio>=t?x.has(e.Ka)||c(y,x,r,"ONCE"===u?function(){for(var A=0;A<v.length;A++){var B=new a(v[A],p);B.set(e.Ka,"1");d(B)}Pn(w);if(n&&vn)for(var z=0;z<vn.length;z++)vn[z]===g&&vn.splice(z,1)}:function(){x.set(e.Ka,"1");d(x)}):(d(x),"MANY_PER_ELEMENT"===u&&x.has(e.Ka)&&(x.a(e.Ka),x.a(e.Ob)),x.a(e.Mb))}var l=f.vtp_selectorType,m;"ID"===l?m=String(f.vtp_elementId):
"CSS"===l&&(m=String(f.vtp_elementSelector));var n=!!f.vtp_useDomChangeListener,r=f.vtp_useOnScreenDuration&&Number(f.vtp_onScreenDuration)||0,t=(Number(f.vtp_onScreenRatio)||50)/100,p=f.vtp_uniqueTriggerId,u=f.vtp_firingFrequency,v=[],w=-1;g();n&&wn(g);J(f.vtp_gtmOnSuccess)})}();


var vq={};vq.macro=function(a){if(gn.Nc.hasOwnProperty(a))return gn.Nc[a]},vq.onHtmlSuccess=gn.se(!0),vq.onHtmlFailure=gn.se(!1);vq.dataLayer=rg;vq.callback=function(a){Kf.hasOwnProperty(a)&&Ca(Kf[a])&&Kf[a]();delete Kf[a]};function wq(){Bf[Ed.B]=vq;Ta(Lf,Z.b);id=id||gn;jd=Wg}
function xq(){Ci.gtm_3pds=!0;Bf=D.google_tag_manager=D.google_tag_manager||{};if(Bf[Ed.B]){var a=Bf.zones;a&&a.unregisterChild(Ed.B)}else{for(var b=data.resource||{},c=b.macros||
[],d=0;d<c.length;d++)bd.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)ed.push(e[f]);for(var g=b.predicates||[],k=0;k<g.length;k++)dd.push(g[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],r={},t=0;t<n.length;t++)r[n[t][0]]=Array.prototype.slice.call(n[t],1);cd.push(r)}gd=Z;hd=Eo;var p=data.permissions||{},u=data.sandboxed_scripts,v=data.security_groups;gm();Jd=new Hd(p);if(void 0!==u)for(var w=["sandboxedScripts"],y=0;y<u.length;y++){var x=u[y].replace(/^_*/,"");Lf[x]=w}jm(v);wq();
fn();$g=!1;ah=0;if("interactive"==I.readyState&&!I.createEventObject||"complete"==I.readyState)ch();else{Te(I,"DOMContentLoaded",ch);Te(I,"readystatechange",ch);if(I.createEventObject&&I.documentElement.doScroll){var A=!0;try{A=!D.frameElement}catch(H){}A&&dh()}Te(D,"load",ch)}Cm=!1;"complete"===I.readyState?Em():Te(D,"load",Em);
a:{if(!gg)break a;D.setInterval(hg,864E5);}Hf=(new Date).getTime();}}xq();

})()
