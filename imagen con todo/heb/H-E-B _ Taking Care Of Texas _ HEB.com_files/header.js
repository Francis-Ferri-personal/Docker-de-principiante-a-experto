$(".off-canvas-submenu-call").click(function(){var icon=$(this).parent().next(".off-canvas-submenu").is(":visible")?"+":"-";
$(this).parent().next(".off-canvas-submenu").slideToggle("fast");$(this).find("span").text(icon);});$(document).ready(function(){var NAV_HEADING_SELECTOR=".main-nav__heading--has-children";
var ITEM_NAME_SELECTOR=".main-nav__item-name--has-children";var $mainNav=$(document.getElementById("main-nav"));var navOpenClass=$mainNav.data("openClass");
var shouldLoadSubnavPromos=heb.screen.isLarge;var experienceDropdownContent=$(document.getElementsByClassName("site-header__experience-dropdown-content"));
var loadSubnavPromos=function(el){if(!shouldLoadSubnavPromos){return;}var PROMO_SRC_ATTR="data-src";var $promos=$(el).find("["+PROMO_SRC_ATTR+"]");
$promos.attr("src",function(){this.src=this.getAttribute(PROMO_SRC_ATTR);}).on("load",function(){$(this).show();});shouldLoadSubnavPromos=false;
};var toggleMobileNav=function(el,e){if(heb.screen.isLarge){return;}e.preventDefault();$(el).toggleClass("active").next(".main-nav__children-subnav").slideToggle().toggleClass("active");
};$mainNav.on("mouseenter",NAV_HEADING_SELECTOR,function(){loadSubnavPromos(this);$mainNav.toggleClass(navOpenClass);}).on("mouseleave",NAV_HEADING_SELECTOR,function(){$mainNav.toggleClass(navOpenClass);
}).on("click",ITEM_NAME_SELECTOR,function(e){toggleMobileNav(this,e);});var ticking=false;var $overflowNavItemsList=$(".js-overflow-nav-items-list");
var calculateSubNavOffset=function calculateSubNavOffset(){if(heb.screen.isLarge&&$overflowNavItemsList.length){var $itemOffset=$overflowNavItemsList.offset().top-$(document).scrollTop();
$overflowNavItemsList.css("maxHeight","calc(100vh - "+$itemOffset+"px)");}else{$overflowNavItemsList.css("maxHeight","inherit");
}};var handleSubNavOverflowScrolling=function handleSubNavOverflowScrolling(){if(!ticking){window.requestAnimationFrame(function(){calculateSubNavOffset();
ticking=false;});ticking=true;}};window.addEventListener("resize",handleSubNavOverflowScrolling,false);window.addEventListener("load",handleSubNavOverflowScrolling,false);
window.addEventListener("scroll",handleSubNavOverflowScrolling,false);$("#site-header__explore-store .fa-angle-down").click(function(event){experienceDropdownContent.toggle();
window.addEventListener("click",function(e){if(!$(e.target).closest(".site-header__experience-tabs").length){experienceDropdownContent.hide();
}});});});