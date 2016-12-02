
//banner
(function(e){function t(e){if(e in u.style)return e;var t=["Moz","Webkit","O","ms"],n=e.charAt(0).toUpperCase()+e.substr(1);if(e in u.style)return e;for(e=0;e<t.length;++e){var r=t[e]+n;if(r in u.style)return r}}function n(e){"string"===typeof e&&this.parse(e);return this}function r(t,n,r,i){var s=[];e.each(t,function(t){t=e.camelCase(t);t=e.transit.propertyMap[t]||e.cssProps[t]||t;t=t.replace(/([A-Z])/g,function(e){return"-"+e.toLowerCase()});-1===e.inArray(t,s)&&s.push(t)});e.cssEase[r]&&(r=e.cssEase[r]);var u=""+o(n)+" "+r;0<parseInt(i,10)&&(u+=" "+o(i));var a=[];e.each(s,function(e,t){a.push(t+" "+u)});return a.join(", ")}function i(t,n){n||(e.cssNumber[t]=!0);e.transit.propertyMap[t]=a.transform;e.cssHooks[t]={get:function(n){return e(n).css("transit:transform").get(t)},set:function(n,r){var i=e(n).css("transit:transform");i.setFromString(t,r);e(n).css({"transit:transform":i})}}}function s(e,t){return"string"===typeof e&&!e.match(/^[\-0-9\.]+$/)?e:""+e+t}function o(t){e.fx.speeds[t]&&(t=e.fx.speeds[t]);return s(t,"ms")}e.transit={version:"0.9.9",propertyMap:{marginLeft:"margin",marginRight:"margin",marginBottom:"margin",marginTop:"margin",paddingLeft:"padding",paddingRight:"padding",paddingBottom:"padding",paddingTop:"padding"},enabled:!0,useTransitionEnd:!1};var u=document.createElement("div"),a={},f=-1<navigator.userAgent.toLowerCase().indexOf("chrome");a.transition=t("transition");a.transitionDelay=t("transitionDelay");a.transform=t("transform");a.transformOrigin=t("transformOrigin");u.style[a.transform]="";u.style[a.transform]="rotateY(90deg)";a.transform3d=""!==u.style[a.transform];var l=a.transitionEnd={transition:"transitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",msTransition:"MSTransitionEnd"}[a.transition]||null,c;for(c in a)a.hasOwnProperty(c)&&"undefined"===typeof e.support[c]&&(e.support[c]=a[c]);u=null;e.cssEase={_default:"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};e.cssHooks["transit:transform"]={get:function(t){return e(t).data("transform")||new n},set:function(t,r){var i=r;i instanceof n||(i=new n(i));t.style[a.transform]="WebkitTransform"===a.transform&&!f?i.toString(!0):i.toString();e(t).data("transform",i)}};e.cssHooks.transform={set:e.cssHooks["transit:transform"].set};"1.8">e.fn.jquery&&(e.cssHooks.transformOrigin={get:function(e){return e.style[a.transformOrigin]},set:function(e,t){e.style[a.transformOrigin]=t}},e.cssHooks.transition={get:function(e){return e.style[a.transition]},set:function(e,t){e.style[a.transition]=t}});i("scale");i("translate");i("rotate");i("rotateX");i("rotateY");i("rotate3d");i("perspective");i("skewX");i("skewY");i("x",!0);i("y",!0);n.prototype={setFromString:function(e,t){var r="string"===typeof t?t.split(","):t.constructor===Array?t:[t];r.unshift(e);n.prototype.set.apply(this,r)},set:function(e){var t=Array.prototype.slice.apply(arguments,[1]);this.setter[e]?this.setter[e].apply(this,t):this[e]=t.join(",")},get:function(e){return this.getter[e]?this.getter[e].apply(this):this[e]||0},setter:{rotate:function(e){this.rotate=s(e,"deg")},rotateX:function(e){this.rotateX=s(e,"deg")},rotateY:function(e){this.rotateY=s(e,"deg")},scale:function(e,t){void 0===t&&(t=e);this.scale=e+","+t},skewX:function(e){this.skewX=s(e,"deg")},skewY:function(e){this.skewY=s(e,"deg")},perspective:function(e){this.perspective=s(e,"px")},x:function(e){this.set("translate",e,null)},y:function(e){this.set("translate",null,e)},translate:function(e,t){void 0===this._translateX&&(this._translateX=0);void 0===this._translateY&&(this._translateY=0);null!==e&&void 0!==e&&(this._translateX=s(e,"px"));null!==t&&void 0!==t&&(this._translateY=s(t,"px"));this.translate=this._translateX+","+this._translateY}},getter:{x:function(){return this._translateX||0},y:function(){return this._translateY||0},scale:function(){var e=(this.scale||"1,1").split(",");e[0]&&(e[0]=parseFloat(e[0]));e[1]&&(e[1]=parseFloat(e[1]));return e[0]===e[1]?e[0]:e},rotate3d:function(){for(var e=(this.rotate3d||"0,0,0,0deg").split(","),t=0;3>=t;++t)e[t]&&(e[t]=parseFloat(e[t]));e[3]&&(e[3]=s(e[3],"deg"));return e}},parse:function(e){var t=this;e.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,function(e,n,r){t.setFromString(n,r)})},toString:function(e){var t=[],n;for(n in this)if(this.hasOwnProperty(n)&&(a.transform3d||!("rotateX"===n||"rotateY"===n||"perspective"===n||"transformOrigin"===n)))"_"!==n[0]&&(e&&"scale"===n?t.push(n+"3d("+this[n]+",1)"):e&&"translate"===n?t.push(n+"3d("+this[n]+",0)"):t.push(n+"("+this[n]+")"));return t.join(" ")}};e.fn.transition=e.fn.transit=function(t,n,i,s){var u=this,f=0,c=!0;"function"===typeof n&&(s=n,n=void 0);"function"===typeof i&&(s=i,i=void 0);"undefined"!==typeof t.easing&&(i=t.easing,delete t.easing);"undefined"!==typeof t.duration&&(n=t.duration,delete t.duration);"undefined"!==typeof t.complete&&(s=t.complete,delete t.complete);"undefined"!==typeof t.queue&&(c=t.queue,delete t.queue);"undefined"!==typeof t.delay&&(f=t.delay,delete t.delay);"undefined"===typeof n&&(n=e.fx.speeds._default);"undefined"===typeof i&&(i=e.cssEase._default);n=o(n);var h=r(t,n,i,f),v=e.transit.enabled&&a.transition?parseInt(n,10)+parseInt(f,10):0;if(0===v)return n=c,i=function(e){u.css(t);s&&s.apply(u);e&&e()},!0===n?u.queue(i):n?u.queue(n,i):i(),u;var m={};n=c;i=function(n){var r=0;"MozTransition"===a.transition&&25>r&&(r=25);window.setTimeout(function(){var r=!1,i=function(){r&&u.unbind(l,i);0<v&&u.each(function(){this.style[a.transition]=m[this]||null});"function"===typeof s&&s.apply(u);"function"===typeof n&&n()};0<v&&l&&e.transit.useTransitionEnd?(r=!0,u.bind(l,i)):window.setTimeout(i,v);u.each(function(){0<v&&(this.style[a.transition]=h);e(this).css(t)})},r)};!0===n?u.queue(i):n?u.queue(n,i):i();return this};e.transit.getTransitionValue=r})(jQuery);(function(e,t){jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,t,n,r,i){return jQuery.easing[jQuery.easing.def](e,t,n,r,i)},easeInQuad:function(e,t,n,r,i){return r*(t/=i)*t+n},easeOutQuad:function(e,t,n,r,i){return-r*(t/=i)*(t-2)+n},easeInOutQuad:function(e,t,n,r,i){if((t/=i/2)<1)return r/2*t*t+n;return-r/2*(--t*(t-2)-1)+n},easeInCubic:function(e,t,n,r,i){return r*(t/=i)*t*t+n},easeOutCubic:function(e,t,n,r,i){return r*((t=t/i-1)*t*t+1)+n},easeInOutCubic:function(e,t,n,r,i){if((t/=i/2)<1)return r/2*t*t*t+n;return r/2*((t-=2)*t*t+2)+n},easeInQuart:function(e,t,n,r,i){return r*(t/=i)*t*t*t+n},easeOutQuart:function(e,t,n,r,i){return-r*((t=t/i-1)*t*t*t-1)+n},easeInOutQuart:function(e,t,n,r,i){if((t/=i/2)<1)return r/2*t*t*t*t+n;return-r/2*((t-=2)*t*t*t-2)+n},easeInQuint:function(e,t,n,r,i){return r*(t/=i)*t*t*t*t+n},easeOutQuint:function(e,t,n,r,i){return r*((t=t/i-1)*t*t*t*t+1)+n},easeInOutQuint:function(e,t,n,r,i){if((t/=i/2)<1)return r/2*t*t*t*t*t+n;return r/2*((t-=2)*t*t*t*t+2)+n},easeInSine:function(e,t,n,r,i){return-r*Math.cos(t/i*(Math.PI/2))+r+n},easeOutSine:function(e,t,n,r,i){return r*Math.sin(t/i*(Math.PI/2))+n},easeInOutSine:function(e,t,n,r,i){return-r/2*(Math.cos(Math.PI*t/i)-1)+n},easeInExpo:function(e,t,n,r,i){return t==0?n:r*Math.pow(2,10*(t/i-1))+n},easeOutExpo:function(e,t,n,r,i){return t==i?n+r:r*(-Math.pow(2,-10*t/i)+1)+n},easeInOutExpo:function(e,t,n,r,i){if(t==0)return n;if(t==i)return n+r;if((t/=i/2)<1)return r/2*Math.pow(2,10*(t-1))+n;return r/2*(-Math.pow(2,-10*--t)+2)+n},easeInCirc:function(e,t,n,r,i){return-r*(Math.sqrt(1-(t/=i)*t)-1)+n},easeOutCirc:function(e,t,n,r,i){return r*Math.sqrt(1-(t=t/i-1)*t)+n},easeInOutCirc:function(e,t,n,r,i){if((t/=i/2)<1)return-r/2*(Math.sqrt(1-t*t)-1)+n;return r/2*(Math.sqrt(1-(t-=2)*t)+1)+n},easeInElastic:function(e,t,n,r,i){var s=1.70158;var o=0;var u=r;if(t==0)return n;if((t/=i)==1)return n+r;if(!o)o=i*.3;if(u<Math.abs(r)){u=r;var s=o/4}else var s=o/(2*Math.PI)*Math.asin(r/u);return-(u*Math.pow(2,10*(t-=1))*Math.sin((t*i-s)*2*Math.PI/o))+n},easeOutElastic:function(e,t,n,r,i){var s=1.70158;var o=0;var u=r;if(t==0)return n;if((t/=i)==1)return n+r;if(!o)o=i*.3;if(u<Math.abs(r)){u=r;var s=o/4}else var s=o/(2*Math.PI)*Math.asin(r/u);return u*Math.pow(2,-10*t)*Math.sin((t*i-s)*2*Math.PI/o)+r+n},easeInOutElastic:function(e,t,n,r,i){var s=1.70158;var o=0;var u=r;if(t==0)return n;if((t/=i/2)==2)return n+r;if(!o)o=i*.3*1.5;if(u<Math.abs(r)){u=r;var s=o/4}else var s=o/(2*Math.PI)*Math.asin(r/u);if(t<1)return-.5*u*Math.pow(2,10*(t-=1))*Math.sin((t*i-s)*2*Math.PI/o)+n;return u*Math.pow(2,-10*(t-=1))*Math.sin((t*i-s)*2*Math.PI/o)*.5+r+n},easeInBack:function(e,t,n,r,i,s){if(s==undefined)s=1.70158;return r*(t/=i)*t*((s+1)*t-s)+n},easeOutBack:function(e,t,n,r,i,s){if(s==undefined)s=1.70158;return r*((t=t/i-1)*t*((s+1)*t+s)+1)+n},easeInOutBack:function(e,t,n,r,i,s){if(s==undefined)s=1.70158;if((t/=i/2)<1)return r/2*t*t*(((s*=1.525)+1)*t-s)+n;return r/2*((t-=2)*t*(((s*=1.525)+1)*t+s)+2)+n},easeInBounce:function(e,t,n,r,i){return r-jQuery.easing.easeOutBounce(e,i-t,0,r,i)+n},easeOutBounce:function(e,t,n,r,i){if((t/=i)<1/2.75){return r*7.5625*t*t+n}else if(t<2/2.75){return r*(7.5625*(t-=1.5/2.75)*t+.75)+n}else if(t<2.5/2.75){return r*(7.5625*(t-=2.25/2.75)*t+.9375)+n}else{return r*(7.5625*(t-=2.625/2.75)*t+.984375)+n}},easeInOutBounce:function(e,t,n,r,i){if(t<i/2)return jQuery.easing.easeInBounce(e,t*2,0,r,i)*.5+n;return jQuery.easing.easeOutBounce(e,t*2-i,0,r,i)*.5+r*.5+n}});e.waitForImages={hasImageProperties:["backgroundImage","listStyleImage","borderImage","borderCornerImage"]};e.expr[":"].uncached=function(t){var n=document.createElement("img");n.src=t.src;return e(t).is('img[src!=""]')&&!n.complete};e.fn.waitForImages=function(t,n,r){if(e.isPlainObject(arguments[0])){n=t.each;r=t.waitForAll;t=t.finished}t=t||e.noop;n=n||e.noop;r=!!r;if(!e.isFunction(t)||!e.isFunction(n)){throw new TypeError("An invalid callback was supplied.")}return this.each(function(){var i=e(this),s=[];if(r){var o=e.waitForImages.hasImageProperties||[],u=/url\((['"]?)(.*?)\1\)/g;i.find("*").each(function(){var t=e(this);if(t.is("img:uncached")){s.push({src:t.attr("src"),element:t[0]})}e.each(o,function(e,n){var r=t.css(n);if(!r){return true}var i;while(i=u.exec(r)){s.push({src:i[2],element:t[0]})}})})}else{i.find("img:uncached").each(function(){s.push({src:this.src,element:this})})}var f=s.length,l=0;if(f==0){t.call(i[0])}e.each(s,function(r,s){var o=new Image;e(o).bind("load error",function(e){l++;n.call(s.element,l,f,e.type=="load");if(l==f){t.call(i[0]);return false}});o.src=s.src})})};e.fn.swipe=function(t){if(!this)return false;var n={fingers:1,threshold:75,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,click:null,triggerOnTouchEnd:true,allowPageScroll:"auto"};var r="left";var i="right";var s="up";var o="down";var u="none";var f="horizontal";var l="vertical";var c="auto";var h="start";var p="move";var d="end";var v="cancel";var m="ontouchstart"in window,g=m?"touchstart":"mousedown",y=m?"touchmove":"mousemove",b=m?"touchend":"mouseup",w="touchcancel";var E="start";if(t.allowPageScroll==undefined&&(t.swipe!=undefined||t.swipeStatus!=undefined))t.allowPageScroll=u;if(t)e.extend(n,t);return this.each(function(){function t(){var e=S();if(e<=45&&e>=0)return r;else if(e<=360&&e>=315)return r;else if(e>=135&&e<=225)return i;else if(e>45&&e<135)return o;else return s}function S(){var e=H.x-B.x;var t=B.y-H.y;var n=Math.atan2(t,e);var r=Math.round(n*180/Math.PI);if(r<0)r=360-Math.abs(r);return r}function x(){return Math.round(Math.sqrt(Math.pow(B.x-H.x,2)+Math.pow(B.y-H.y,2)))}function T(e,t){if(n.allowPageScroll==u){e.preventDefault()}else{var a=n.allowPageScroll==c;switch(t){case r:if(n.swipeLeft&&a||!a&&n.allowPageScroll!=f)e.preventDefault();break;case i:if(n.swipeRight&&a||!a&&n.allowPageScroll!=f)e.preventDefault();break;case s:if(n.swipeUp&&a||!a&&n.allowPageScroll!=l)e.preventDefault();break;case o:if(n.swipeDown&&a||!a&&n.allowPageScroll!=l)e.preventDefault();break}}}function N(e,t){if(n.swipeStatus)n.swipeStatus.call(_,e,t,direction||null,distance||0);if(t==v){if(n.click&&(P==1||!m)&&(isNaN(distance)||distance==0))n.click.call(_,e,e.target)}if(t==d){if(n.swipe){n.swipe.call(_,e,direction,distance)}switch(direction){case r:if(n.swipeLeft)n.swipeLeft.call(_,e,direction,distance);break;case i:if(n.swipeRight)n.swipeRight.call(_,e,direction,distance);break;case s:if(n.swipeUp)n.swipeUp.call(_,e,direction,distance);break;case o:if(n.swipeDown)n.swipeDown.call(_,e,direction,distance);break}}}function C(e){P=0;H.x=0;H.y=0;B.x=0;B.y=0;F.x=0;F.y=0}function L(e){e.preventDefault();distance=x();direction=t();if(n.triggerOnTouchEnd){E=d;if((P==n.fingers||!m)&&B.x!=0){if(distance>=n.threshold){N(e,E);C(e)}else{E=v;N(e,E);C(e)}}else{E=v;N(e,E);C(e)}}else if(E==p){E=v;N(e,E);C(e)}M.removeEventListener(y,A,false);M.removeEventListener(b,L,false)}function A(e){if(E==d||E==v)return;var r=m?e.touches[0]:e;B.x=r.pageX;B.y=r.pageY;direction=t();if(m){P=e.touches.length}E=p;T(e,direction);if(P==n.fingers||!m){distance=x();if(n.swipeStatus)N(e,E,direction,distance);if(!n.triggerOnTouchEnd){if(distance>=n.threshold){E=d;N(e,E);C(e)}}}else{E=v;N(e,E);C(e)}}function O(e){var t=m?e.touches[0]:e;E=h;if(m){P=e.touches.length}distance=0;direction=null;if(P==n.fingers||!m){H.x=B.x=t.pageX;H.y=B.y=t.pageY;if(n.swipeStatus)N(e,E)}else{C(e)}M.addEventListener(y,A,false);M.addEventListener(b,L,false)}var M=this;var _=e(this);var D=null;var P=0;var H={x:0,y:0};var B={x:0,y:0};var F={x:0,y:0};try{this.addEventListener(g,O,false);this.addEventListener(w,C)}catch(I){}})}})(jQuery)


$(window).load(function() {
	
	// PORTFOLIO SLIDES //
	//$('#slides').slides({
//		preload: true,
//		preloadImage: 'images/nivo-preloader.gif',
//		play: 0,
//		pause: 0,
//		effect: 'fade',
//		autoHeight: true,
//		effects: {
//		 navigation: 'fade',  // [String] Can be either "slide" or "fade"
//		 pagination: 'fade' // [String] Can be either "slide" or "fade"
//		},
//		hoverPause: true
//	});
});


// HOMEPAGE SLIDER //
var api;

jQuery(document).ready(function() {
	api =  jQuery('.fullwidthbanner').revolution(
		{
			delay:5000,
			startheight:400,
			startwidth:1120,

			hideThumbs:200,

			thumbWidth:100,							// Thumb With and Height and Amount (only if navigation Tyope set to thumb !)
			thumbHeight:50,
			thumbAmount:6,

			navigationType:"bullet",					//bullet, thumb, none, both		(No Thumbs In FullWidth Version !)
			navigationArrows:"verticalcentered",		//nexttobullets, verticalcentered, none
			navigationStyle:"round",				//round,square,navbar

			touchenabled:"on",						// Enable Swipe Function : on/off
			onHoverStop:"on",						// Stop Banner Timet at Hover on Slide on/off

			navOffsetHorizontal:0,
			navOffsetVertical:0,

			stopAtSlide:-1,
			stopAfterLoops:-1,

			shadow:0,								//0 = no Shadow, 1,2,3 = 3 Different Art of Shadows  (No Shadow in Fullwidth Version !)
			fullWidth:"on"							// Turns On or Off the Fullwidth Image Centering in FullWidth Modus
		});
  
});

//搜索框
VIVO_UIMIX = {
	init : function(){
		var headBox=$("#vivo-head"),
		navBox=headBox.find(".vivo-nav"),
		searchBox=headBox.find(".vivo-search"),
		searchInput=searchBox.find("input"),
		searchBtn=$(".search-btn"),		
		closeSearchBtn=searchBox.find("a.close"),
		isSearchClose=true,
		isMenuEnter=isCommEnter=false;

		closeSearchBtn.css({opacity:0});
		searchBox.on({
			mouseenter : function(){
				closeSearchBtn.animate({opacity:1},300);
			},
			mouseleave : function(){
				closeSearchBtn.animate({opacity:0},300);
			}
		});

		searchBtn.on("click",function(){
			if(isSearchClose){
				searchBox.children().css({opacity:0});
				searchBox.css({display:"block",height:0}).stop().animate({height:80},300);
				searchBox.children().stop().delay(300).animate({opacity:1},500);
				searchInput.focus().val("");
				$(this).addClass("current");
				isSearchClose=false;
			}else{
				searchBox.stop().animate({height:0},300,function(){
					$(this).css({display:"none"});
					isSearchClose=true;
				});
				$(this).removeClass("current");
			}
			return false;
		});
		closeSearchBtn.on("click",function(){
			searchBtn.click();
			return false;
		});
		
	}
};

$(document).ready(function() {
	VIVO_UIMIX.init();
	
	/*右边浮动*/
	$("#right-phone").hover(function(){
		$(this).find(".right-kefu").animate({
			left:'-220px',
			opacity:1
			}).show();
		},function(){
			$(this).find(".right-kefu").animate({
				left:'-300px',
				opacity:0
				}).fadeOut();
			});
	$("#rightweixin").hover(function(){
		$(this).find(".right-weixin").animate({
			left:'-220px',
			opacity:1
			}).show();
		},function(){
			$(this).find(".right-weixin").animate({
				left:'-300px',
				opacity:0
				}).fadeOut();
			})		
	/*字数限制*/
	$(".comment-btn").click(function (){ 
		var oTextArea =$(this).parents(".comment").find(".Textarea").val();
		var maxText = 200; 
		var minText = 5;
		if(oTextArea.length > maxText || oTextArea.length < minText || oTextArea==" "){  
		oTextArea= oTextArea.substring(0,maxText);
		$(this).parents(".comment").find(".Textarea").siblings("span").text("字数不够或者已超出").css("color","#f60");
		shake($('.Textarea'),'red',3);
		}else{
			$(this).parents(".comment").find(".Textarea").siblings("span").text("字数限制为5-200个").css("color","#666");
					var $this = $(this);
					var $form = $this.parent().parent('form');
					var $msg_type = $("input:checked",$form).val();
					var $Textarea = $(".Textarea",$form).val();
					var $id = $(".msgid",$form).val();
					
					/*alert($msg_type);
					alert($Textarea);
					alert($id);*/
					$.post('/messages_ajax.php?cmt=messageSubmit', {"msg_type": $msg_type,"msg_content": $Textarea, "id_value":$id}, function(txt){
						txt = eval("("+txt+")");
						if(txt.error == 0){
//<a  target="_blank" href="/user.php?act=message_list">我的账户&mdash;&mdash;我的问答</a>
							com_alert3('提交成功，我们会尽快答复您！<br>您也可以在我的账户&mdash;&mdash;我的问答中查看回复！','/user.php?act=message_list','确定');
						}else if(txt.error == 9){
							//window.location.href = '/user.php';
							$.post("/user.php", { act: "ajax_check_login" },
									function(data){
										{	
											$("body").after( data );
										}
							});
						}
						else{
							//alert(txt.message);
							com_alert2(txt.message);
						}
					});
			}
	});
});
function TextUtil(oTextArea){ 
		var oTextArea =$(oTextArea).val();
		var maxText = 200; 
		var minText = 5;
		if(oTextArea.length > maxText || oTextArea.length < minText || oTextArea==" "){  
			oTextArea= oTextArea.substring(0,maxText);
			$(oTextArea).siblings("span").text("字数不够或者已超出").css("color","#f60");
			shake($(oTextArea),'red',3);
			
		}else{
			$(oTextArea).siblings("span").text("字数限制为5-200个").css("color","#666");
		}
	}
function shake(ele,cls,times){
	var i = 0,t= false ,o =ele.attr("class")+" ",c ="",times=times||2;
	if(t) return;
	t= setInterval(function(){
	i++;
	c = i%2 ? o+cls : o;
	ele.attr("class",c);
	if(i==2*times){
	clearInterval(t);
	ele.removeClass(cls);
	}
	},200);
}	

 $(function() {
	 /*商品详情 选项卡*/
	 $('.goods-tab .sub-naver li').hover(function(){
        var index=$('.goods-tab .sub-naver li').index(this);
        $(this).addClass('active').siblings().removeClass('active');
        $('.goods-tab .b').eq(index).addClass('on').siblings().removeClass('on');
    });
	//展开
	var box_wth = $(".row").outerWidth();
	var box_hgt = $(".row").outerHeight();
	var box_hgt1 = $(".col").outerHeight();
	
	$(".click").click(function(){
		$("body").append("<div id='background2'></div>");
		$("#background2").fadeIn();
		$(this).siblings(".all-info").css({
			"z-index":1003,
			"height":box_hgt
			}).show().parents(".col").siblings().find(".all-info").hide();
		$(this).siblings(".all-info").animate({
			width:box_wth,
			opacity:1,
			"*filter": "alpha(opacity=100)"
			},500).animate({height:box_hgt1},800);
		});
	$(".close").click(function(){
		$("#background2").remove();
		$(this).parents(".all-info").animate({
			height:box_hgt
			},500).animate({
			"z-index":-1,
			width:0,
			opacity:0,
			"*filter": "alpha(opacity=0)"
			},800);
	}).parents(".all-info").hide();	
			
	//鼠标移过
	
	$(".row,.qy-row .col").hover(function(){
		$(this).find(".arrow_left").siblings("img").addClass("img_hover2");
		$(this).find(".arrow_right").siblings("img").addClass("img_hover3");
	},function(){
		$(this).find(".arrow_left").siblings("img").removeClass("img_hover2");
		$(this).find(".arrow_right").siblings("img").removeClass("img_hover3");
		});	
	$(".beauty .row").hover(function(){
		$(this).find(".description").addClass("b-hover");
		$(this).find(".arrow_left").addClass("arrow_hover");
		$(this).find(".arrow_right").addClass("arrow_hover2");
	},function(){
		$(this).find(".description").removeClass("b-hover");
		$(this).find(".arrow_left").removeClass("arrow_hover");
		$(this).find(".arrow_right").removeClass("arrow_hover2");
		});	
		
	$(".health .row").hover(function(){
		$(this).find(".description").addClass("h-hover");
		$(this).find(".arrow_left").addClass("h-arrow_hover");
		$(this).find(".arrow_right").addClass("h-arrow_hover2");
		
	},function(){
		$(this).find(".description").removeClass("h-hover");
		$(this).find(".arrow_left").removeClass("h-arrow_hover");
		$(this).find(".arrow_right").removeClass("h-arrow_hover2");
		});	
	$(".lift .row").hover(function(){
		$(this).find(".description").addClass("l-hover");
		$(this).find(".arrow_left").addClass("l-arrow_hover");
		$(this).find(".arrow_right").addClass("l-arrow_hover2");
	},function(){
		$(this).find(".description").removeClass("l-hover");
		$(this).find(".arrow_left").removeClass("l-arrow_hover");
		$(this).find(".arrow_right").removeClass("l-arrow_hover2");
		});	
		
	var speed = 200;             // div显示速度
	 $('.Product-Menu').bind('hover', function () {
		var detail = $(this).siblings('.ProductMenu'), _this = this;
		// 图片未显示则显示，已显示则不操作
		if (detail.css('display') == 'none') {
			detail.show(speed);
			// 显示div并且给document绑定一个mouseover事件，监听鼠标移动事件。
			$(document).bind('mouseover', function (e) {
				var targ = e.target || e.srcElement;

				if (targ.nodeType == 3) targ = targ.parentNode;  // Safari
				var set = detail.offset();
				// 鼠标进入图片与div之间的间隙默认不隐藏，不然鼠标不能进入div区域。
				var inArea = e.clientX > 60
					&& e.clientX < 162;
				// 鼠标在图片，div，图片与div之间的间隙时显示div，否则隐藏。
				if (targ != _this && !inArea && targ.id != 'SubMenuContent' && targ.id != 'UserMenu' && targ.className != "SubMenuItem" && targ.className != "SubMenuLine" && targ.className != "a") {


					detail.hide(speed);
					// 隐藏div并且取消document的mouseover监听。
					$(document).unbind('mouseover');
				}
			});
		}
		else return false;
	});

	
});
		
		
/*
    Cloud Zoom 10 Site License (CZ01-10).
    Version 3.1 rev 1312051822
*/
(function(e) {
	function s(a) {
		var b = a.zoom,
		c = a.Q,
		g = a.R,
		k = a.e,
		f = a.g;
		this.data = a;
		this.U = this.b = null;
		this.za = 0;
		this.zoom = b;
		this.V = !0;
		this.r = this.interval = this.t = this.p = 0;
		var q = this,
		m;
		q.b = e("<div class='" + a.K + "' style='position:absolute;overflow:hidden'></div>");
		var p = e("<img style='-webkit-touch-callout:none;position:absolute;max-width:none' src='" + v(b.T, b.options) + "'/>");
		b.options.variableMagnification && p.bind("mousewheel",
		function(a, b) {
			q.zoom.ia(0.1 * b);
			return ! 1
		});
		q.U = p;
		p.width(q.zoom.e);
		p.height(q.zoom.g);
		d.Ja && q.U.css("-webkit-transform", "perspective(400px)");
		var l = q.b;
		l.append(p);
		var h = e("<div style='position:absolute;'></div>");
		a.caption ? ("html" == b.options.captionType ? m = a.caption: "attr" == b.options.captionType && (m = e("<div class='cloudzoom-caption'>" + a.caption + "</div>")), m.css("display", "block"), h.css({
			width: k
		}), l.append(h), h.append(m), e("body").append(l), this.r = m.outerHeight(), "bottom" == b.options.captionPosition ? h.css("top", f) : (h.css("top", 0), this.za = this.r)) : e("body").append(l);
		l.css({
			opacity: 0,
			width: k,
			height: f + this.r
		});
		this.zoom.C = "auto" === b.options.minMagnification ? Math.max(k / b.a.width(), f / b.a.height()) : b.options.minMagnification;
		this.zoom.B = "auto" === b.options.maxMagnification ? p.width() / b.a.width() : b.options.maxMagnification;
		a = l.height();
		this.V = !1;
		b.options.zoomFlyOut ? (f = b.a.offset(), f.left += b.d / 2, f.top += b.c / 2, l.offset(f), l.width(0), l.height(0), l.animate({
			left: c,
			top: g,
			width: k,
			height: a,
			opacity: 1
		},
		{
			duration: b.options.animationTime,
			complete: function() {
				q.V = !0
			}
		})) : (l.offset({
			left: c,
			top: g
		}), l.width(k), l.height(a), l.animate({
			opacity: 1
		},
		{
			duration: b.options.animationTime,
			complete: function() {
				q.V = !0
			}
		}))
	}
	function x(a, b, c) {
		this.a = a;
		this.ba = a[0];
		this.Ca = c;
		this.va = !0;
		var g = this;
		this.interval = setInterval(function() {
			0 < g.ba.width && 0 < g.ba.height && (clearInterval(g.interval), g.va = !1, g.Ca(a))
		},
		100);
		this.ba.src = b
	}
	function d(a, b) {
	function c() {
			k.update();
			window.Qa(c)
	}
	function g() {
			var c;
			c = "" != b.image ? b.image: "" + a.attr("src");
			k.sa();
			b.lazyLoadZoom ? a.bind("touchstart.preload " + k.options.mouseTriggerEvent + ".preload",
			function() {
				k.O(c, b.zoomImage)
			}) : k.O(c, b.zoomImage)
	}
	var k = this;
		b = e.extend({},e.fn.CloudZoom.defaults, b);
	var f = d.qa(a, e.fn.CloudZoom.attr);
		b = e.extend({},b, f);
		1 > b.easing && (b.easing = 1);
		f = a.parent();
		f.is("a") && "" == b.zoomImage && (b.zoomImage = f.attr("href"), f.removeAttr("href"));
		f = e("<div class='" + b.zoomClass + "'</div>");
		e("body").append(f);
		this.Z = f.width();
		this.Y = f.height();
		b.zoomWidth && (this.Z = b.zoomWidth, this.Y = b.zoomHeight);
		f.remove();
		this.options = b;
		this.a = a;
		this.g = this.e = this.d = this.c = 0;
		this.H = this.m = null;
		this.j = this.n = 0;
		this.D = {
			x: 0,
			y: 0
		};
		this.Ua = this.caption = "";
		this.ea = {
			x: 0,
			y: 0
		};
		this.k = [];
		this.pa = 0;
		this.oa = "";
		this.b = this.v = this.u = null;
		this.T = "";
		this.L = this.S = this.aa = !1;
		this.G = null;
		this.ha = this.Oa = !1;
		this.l = null;
		this.id = ++d.id;
		this.I = this.ua = this.ta = 0;
		this.o = this.h = null;
		this.wa = this.B = this.C = this.f = this.i = this.ja = 0;
		this.na(a);
		this.ma = !1;
		this.N = this.A = this.da = this.ca = 0;
		if (a.is(":hidden")) var q = setInterval(function() {
			a.is(":hidden") || (clearInterval(q), g())
		},
		100);
		else g();
		c()
	}
	function v(a, b) {
		var c = b.uriEscapeMethod;
		return "escape" == c ? escape(a) : "encodeURI" == c ? encodeURI(a) : a
	}
	function h(a) {
		for (var b = "",
		c, g = C("charCodeAt"), d = a[g](0) - 32, e = 1; e < a.length - 1; e++) c = a[g](e),
		c ^= d & 31,
		d++,
		b += String[C("fromCharCode")](c);
		a[g](e);
		return b
	}
	function C(a) {
		return a;
	}
	function y(a) {
		var b = a || window.event,
		c = [].slice.call(arguments, 1),
		g = 0,
		d = 0,
		f = 0;
		a = e.event.fix(b);
		a.type = "mousewheel";
		b.wheelDelta && (g = b.wheelDelta / 120);
		b.detail && (g = -b.detail / 3);
		f = g;
		void 0 !== b.axis && b.axis === b.HORIZONTAL_AXIS && (f = 0, d = -1 * g);
		void 0 !== b.wheelDeltaY && (f = b.wheelDeltaY / 120);
		void 0 !== b.wheelDeltaX && (d = -1 * b.wheelDeltaX / 120);
		c.unshift(a, g, d, f);
		return (e.event.dispatch || e.event.handle).apply(this, c)
	}
	var t = ["DOMMouseScroll", "mousewheel"];
	if (e.event.fixHooks) for (var n = t.length; n;) e.event.fixHooks[t[--n]] = e.event.mouseHooks;
	e.event.special.mousewheel = {
		setup: function() {
			if (this.addEventListener) for (var a = t.length; a;) this.addEventListener(t[--a], y, !1);
			else this.onmousewheel = y
		},
		teardown: function() {
			if (this.removeEventListener) for (var a = t.length; a;) this.removeEventListener(t[--a], y, !1);
			else this.onmousewheel = null
		}
	};
	e.fn.extend({
		mousewheel: function(a) {
			return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
		},
		unmousewheel: function(a) {
			return this.unbind("mousewheel", a)
		}
	});
	window.Qa = function() {
		return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
		function(a) {
			window.setTimeout(a, 20)
		}
	} ();
	var n = document.getElementsByTagName("script"),
	w = n[n.length - 1].src.lastIndexOf("/"),
	z;
	z = "undefined" != typeof window.CloudZoom ? window.CloudZoom.path: n[n.length - 1].src.slice(0, w);
	var n = window,
	D = n[h("$Bphd|`ee&")],
	u = !0,
	E = !1,
	F = h("%KISIYZ2"),
	w = h("&VRZJBJ_HJ?").length,
	A = !1,
	B = !1;
	5 == w ? B = !0 : 4 == w && (A = !0);
	d.xa = 1E9;
	e(window).bind("resize.cloudzoom",
	function() {
		d.xa = e(this).width()
	});
	e(window).trigger("resize.cloudzoom");
	d.prototype.J = function() {
		return "inside" === this.options.zoomPosition || d.xa <= this.options.autoInside ? !0 : !1
	};
	d.prototype.update = function() {
		var a = this.h;
		null != a && (this.q(this.D, 0), this.f != this.i && (this.i += (this.f - this.i) / this.options.easing, 1E-4 > Math.abs(this.f - this.i) && (this.i = this.f), this.Na()), a.update())
	};
	d.id = 0;
	d.prototype.Ha = function(a) {
		var b = this.T.replace(/^\/|\/$/g, "");
		if (0 == this.k.length) return {
			href: this.options.zoomImage,
			title: this.a.attr("title")
		};
		if (void 0 != a) return this.k;
		a = [];
		for (var c = 0; c < this.k.length && this.k[c].href.replace(/^\/|\/$/g, "") != b; c++);
		for (b = 0; b < this.k.length; b++) a[b] = this.k[c],
		c++,
		c >= this.k.length && (c = 0);
		return a
	};
	d.prototype.getGalleryList = d.prototype.Ha;
	d.prototype.P = function() {
		clearTimeout(this.ja);
		null != this.o && this.o.remove()
	};
	d.prototype.sa = function() {
		var a = this;
		this.Oa || this.a.bind("mouseover.prehov mousemove.prehov mouseout.prehov",
		function(b) {
			a.G = "mouseout" == b.type ? null: {
				pageX: b.pageX,
				pageY: b.pageY
			}
		})
	};
	d.prototype.Ea = function() {
		this.G = null;
		this.a.unbind("mouseover.prehov mousemove.prehov mouseout.prehov")
	};
	d.prototype.O = function(a, b) {
		var c = this;
		c.a.unbind("touchstart.preload " + c.options.mouseTriggerEvent + ".preload");
		c.sa();
		this.P();
		e("body").children(".cloudzoom-fade-" + c.id).remove();
		null != this.v && (this.v.cancel(), this.v = null);
		null != this.u && (this.u.cancel(), this.u = null);
		this.T = "" != b && void 0 != b ? b: a;
		this.L = this.S = !1; ! c.options.galleryFade || !c.aa || c.J() && null != c.h || (c.l = e(new Image).css({
			position: "absolute"
		}), c.l.attr("src", c.a.attr("src")), c.l.width(c.a.width()), c.l.height(c.a.height()), c.l.offset(c.a.offset()), c.l.addClass("cloudzoom-fade-" + c.id), e("body").append(c.l));
		this.Ma();
		var g = e(new Image);
		this.u = new x(g, a,
		function(a, b) {
			c.u = null;
			c.L = !0;
			c.a.attr("src", g.attr("src"));
			e("body").children(".cloudzoom-fade-" + c.id).fadeOut(c.options.fadeTime,
			function() {
				e(this).remove();
				c.l = null
			});
			void 0 !== b ? (c.P(), c.options.errorCallback({
				$element: c.a,
				type: "IMAGE_NOT_FOUND",
				data: b.Ga
			})) : c.ra()
		})
	};
	d.prototype.Ma = function() {
		var a = this;
		a.ja = setTimeout(function() {
			a.o = e("<div class='cloudzoom-ajax-loader' style='position:absolute;left:0px;top:0px'/>");
			e("body").append(a.o);
			var b = a.o.width(),
			g = a.o.height(),
			b = a.a.offset().left + a.a.width() / 2 - b / 2,
			g = a.a.offset().top + a.a.height() / 2 - g / 2;
			a.o.offset({
				left: b,
				top: g
			})
		},
		250);
		var b = e(new Image);
		this.v = new x(b, this.T,
		function(c, g) {
			a.v = null;
			a.S = !0;
			a.e = b[0].width;
			a.g = b[0].height;
			void 0 !== g ? (a.P(), a.options.errorCallback({
				$element: a.a,
				type: "IMAGE_NOT_FOUND",
				data: g.Ga
			})) : a.ra()
		})
	};
	d.prototype.loadImage = d.prototype.O;
	d.prototype.Ba = function() {
		alert("Cloud Zoom API OK")
	};
	d.prototype.apiTest = d.prototype.Ba;
	d.prototype.s = function() {
		null != this.h && (this.a.trigger("cloudzoom_end_zoom"), this.h.$());
		this.h = null
	};
	d.prototype.$ = function() {
		e(document).unbind("mousemove." + this.id);
		this.a.unbind();
		null != this.b && (this.b.unbind(), this.s());
		this.a.removeData("CloudZoom");
		e("body").children(".cloudzoom-fade-" + this.id).remove();
		this.ma = !0
	};
	d.prototype.destroy = d.prototype.$;
	d.prototype.Da = function(a) {
		if (!this.options.hoverIntentDelay) return ! 1;
		0 === this.A && (this.A = (new Date).getTime(), this.ca = a.pageX, this.da = a.pageY);
		var b = a.pageX - this.ca,
		c = a.pageY - this.da,
		b = Math.sqrt(b * b + c * c);
		this.ca = a.pageX;
		this.da = a.pageY;
		a = (new Date).getTime();
		b <= this.options.hoverIntentDistance ? this.N += a - this.A: this.A = a;
		if (this.N < this.options.hoverIntentDelay) return ! 0;
		this.N = this.A = 0;
		return ! 1
	};
	d.prototype.W = function() {
		var a = this;
		a.a.bind(a.options.mouseTriggerEvent + ".trigger",
		function(b) {
			if (!a.X() && null == a.b && !a.Da(b)) {
				var c = a.a.offset();
				b = new d.F(b.pageX - c.left, b.pageY - c.top);
				a.M();
				a.w();
				a.q(b, 0);
				a.D = b
			}
		})
	};
	d.prototype.X = function() {
		if (this.ma || !this.S || !this.L) return ! 0;
		if (!1 === this.options.disableZoom) return ! 1;
		if (!0 === this.options.disableZoom) return ! 0;
		if ("auto" == this.options.disableZoom) {
			if (!isNaN(this.options.maxMagnification) && 1 < this.options.maxMagnification) return ! 1;
			if (this.a.width() >= this.e) return ! 0
		}
		return ! 1
	};
	d.prototype.ra = function() {
		var a = this;
		if (a.S && a.L) {
			this.la();
			a.e = a.a.width() * this.i;
			a.g = a.a.height() * this.i;
			this.P();
			this.ga();
			null != a.h && (a.s(), a.w(), a.H.attr("src", v(this.a.attr("src"), this.options)), a.q(a.ea, 0));
			if (!a.aa) {
				a.aa = !0;
				e(document).bind("MSPointerUp." + this.id + " mousemove." + this.id,
				function(b) {
					if (null != a.b) {
						var c = a.a.offset(),
						g = !0,
						c = new d.F(b.pageX - Math.floor(c.left), b.pageY - Math.floor(c.top));
						if ( - 1 > c.x || c.x > a.d || 0 > c.y || c.y > a.c) g = !1,
						a.options.permaZoom || (a.b.remove(), a.s(), a.b = null);
						a.ha = !1;
						"MSPointerUp" === b.type && (a.ha = !0);
						g && (a.D = c)
					}
				});
				a.W();
				var b = 0,
				c = 0,
				g = 0,
				k = function(a, b) {
					return Math.sqrt((a.pageX - b.pageX) * (a.pageX - b.pageX) + (a.pageY - b.pageY) * (a.pageY - b.pageY))
				};
				a.a.css({
					"-ms-touch-action": "none",
					"-ms-user-select": "none"
				});
				a.a.bind("touchstart touchmove touchend",
				function(e) {
					if (a.X()) return ! 0;
					var f = a.a.offset(),
					h = e.originalEvent,
					l = {
						x: 0,
						y: 0
					},
					r = h.type;
					if ("touchend" == r && 0 == h.touches.length) return a.fa(r, l),
					!1;
					l = new d.F(h.touches[0].pageX - Math.floor(f.left), h.touches[0].pageY - Math.floor(f.top));
					a.D = l;
					if ("touchstart" == r && 1 == h.touches.length && null == a.b) return a.fa(r, l),
					!1;
					2 > b && 2 == h.touches.length && (c = a.f, g = k(h.touches[0], h.touches[1]));
					b = h.touches.length;
					2 == b && a.options.variableMagnification && (f = k(h.touches[0], h.touches[1]) / g, a.f = a.J() ? c * f: c / f, a.f < a.C && (a.f = a.C), a.f > a.B && (a.f = a.B));
					a.fa("touchmove", l);
					e.preventDefault();
					e.stopPropagation();
					return e.returnValue = !1
				});
				if (null != a.G) {
					if (this.X()) return;
					var f = a.a.offset(),
					f = new d.F(a.G.pageX - f.left, a.G.pageY - f.top);
					a.M();
					a.w();
					a.q(f, 0);
					a.D = f
				}
			}
			a.Ea();
			a.a.trigger("cloudzoom_ready")
		}
	};
	d.prototype.fa = function(a, b) {
		var c = this;
		switch (a) {
		case "touchstart":
			if (null != c.b) break;
			clearTimeout(c.interval);
			c.interval = setTimeout(function() {
				c.M();
				c.w();
				c.q(b, c.j / 2);
				c.update()
			},
			150);
			break;
		case "touchend":
			clearTimeout(c.interval);
			null == c.b ? c.ya() : c.options.permaZoom || (c.b.remove(), c.b = null, c.s());
			break;
		case "touchmove":
			null == c.b && (clearTimeout(c.interval), c.M(), c.w())
		}
	};
	d.prototype.Na = function() {
		var a = this.i;
		if (null != this.b) {
			var b = this.h;
			this.n = b.b.width() / (this.a.width() * a) * this.a.width();
			this.j = b.b.height() / (this.a.height() * a) * this.a.height();
			this.j -= b.r / a;
			this.m.width(this.n);
			this.m.height(this.j);
			this.q(this.ea, 0)
		}
	};
	d.prototype.ia = function(a) {
		this.f += a;
		this.f < this.C && (this.f = this.C);
		this.f > this.B && (this.f = this.B)
	};
	d.prototype.na = function(a) {
		this.caption = null;
		"attr" == this.options.captionType ? (a = a.attr(this.options.captionSource), "" != a && void 0 != a && (this.caption = a)) : "html" == this.options.captionType && (a = e(this.options.captionSource), a.length && (this.caption = a.clone(), a.css("display", "none")))
	};
	d.prototype.Ia = function(a, b) {
		if ("html" == b.captionType) {
			var c;
			c = e(b.captionSource);
			c.length && c.css("display", "none")
		}
	};
	d.prototype.la = function() {
		this.f = this.i = "auto" === this.options.startMagnification ? this.e / this.a.width() : this.options.startMagnification
	};
	d.prototype.w = function() {
		var a = this;
		a.a.trigger("cloudzoom_start_zoom");
		this.la();
		a.e = a.a.width() * this.i;
		a.g = a.a.height() * this.i;
		var b = this.m,
		c = a.d,
		g = a.c,
		d = a.e,
		f = a.g,
		h = a.caption;
		if (a.J()) {
			b.width(a.d / a.e * a.d);
			b.height(a.c / a.g * a.c);
			b.css("display", "none");
			var m = a.options.zoomOffsetX,
			p = a.options.zoomOffsetY;
			a.options.autoInside && (m = p = 0);
			a.h = new s({
				zoom: a,
				Q: a.a.offset().left + m,
				R: a.a.offset().top + p,
				e: a.d,
				g: a.c,
				caption: h,
				K: a.options.zoomInsideClass
			});
			a.ka(a.h.b);
			a.h.b.bind("touchmove touchstart touchend",
			function(b) {
				a.a.trigger(b);
				return ! 1
			})
		} else if (isNaN(a.options.zoomPosition)) m = e(a.options.zoomPosition),
		b.width(m.width() / a.e * a.d),
		b.height(m.height() / a.g * a.c),
		b.fadeIn(a.options.fadeTime),
		a.options.zoomFullSize || "full" == a.options.zoomSizeMode ? (b.width(a.d), b.height(a.c), b.css("display", "none"), a.h = new s({
			zoom: a,
			Q: m.offset().left,
			R: m.offset().top,
			e: a.e,
			g: a.g,
			caption: h,
			K: a.options.zoomClass
		})) : a.h = new s({
			zoom: a,
			Q: m.offset().left,
			R: m.offset().top,
			e: m.width(),
			g: m.height(),
			caption: h,
			K: a.options.zoomClass
		});
		else {
			var m = a.options.zoomOffsetX,
			p = a.options.zoomOffsetY,
			l = !1;
			if (this.options.lensWidth) {
				var r = this.options.lensWidth,
				n = this.options.lensHeight;
				r > c && (r = c);
				n > g && (n = g);
				b.width(r);
				b.height(n)
			}
			d *= b.width() / c;
			f *= b.height() / g;
			r = a.options.zoomSizeMode;
			if (a.options.zoomFullSize || "full" == r) d = a.e,
			f = a.g,
			b.width(a.d),
			b.height(a.c),
			b.css("display", "none"),
			l = !0;
			else if (a.options.zoomMatchSize || "image" == r) b.width(a.d / a.e * a.d),
			b.height(a.c / a.g * a.c),
			d = a.d,
			f = a.c;
			else if ("zoom" === r || this.options.zoomWidth) b.width(a.Z / a.e * a.d),
			b.height(a.Y / a.g * a.c),
			d = a.Z,
			f = a.Y;
			c = [[c / 2 - d / 2, -f], [c - d, -f], [c, -f], [c, 0], [c, g / 2 - f / 2], [c, g - f], [c, g], [c - d, g], [c / 2 - d / 2, g], [0, g], [ - d, g], [ - d, g - f], [ - d, g / 2 - f / 2], [ - d, 0], [ - d, -f], [0, -f]];
			m += c[a.options.zoomPosition][0];
			p += c[a.options.zoomPosition][1];
			l || b.fadeIn(a.options.fadeTime);
			a.h = new s({
				zoom: a,
				Q: a.a.offset().left + m,
				R: a.a.offset().top + p,
				e: d,
				g: f,
				caption: h,
				K: a.options.zoomClass
			})
		}
		a.h.p = void 0;
		a.n = b.width();
		a.j = b.height();
		this.options.variableMagnification && a.m.bind("mousewheel",
		function(b, c) {
			a.ia(0.1 * c);
			return ! 1
		})
	};
	d.prototype.La = function() {
		return this.h ? !0 : !1
	};
	d.prototype.isZoomOpen = d.prototype.La;
	d.prototype.Fa = function() {
		this.a.unbind(this.options.mouseTriggerEvent + ".trigger");
		var a = this;
		null != this.b && (this.b.remove(), this.b = null);
		this.s();
		setTimeout(function() {
			a.W()
		},
		1)
	};
	d.prototype.closeZoom = d.prototype.Fa;
	d.prototype.ya = function() {
		var a = this;
		this.a.unbind(a.options.mouseTriggerEvent + ".trigger");
		this.a.trigger("click");
		setTimeout(function() {
			a.W()
		},
		1)
	};
	d.prototype.ka = function(a) {
		var b = this;
		a.bind("mousedown." + b.id + " mouseup." + b.id,
		function(a) {
			"mousedown" === a.type ? b.wa = (new Date).getTime() : (b.ha && (b.b && b.b.remove(), b.s(), b.b = null), 250 >= (new Date).getTime() - b.wa && b.ya())
		})
	};
	d.prototype.M = function() {
		5 == F.length && !1 == E && (u = !0);
		var a = this,
		b;
		a.ga();
		a.m = e("<div class='" + a.options.lensClass + "' style='overflow:hidden;display:none;position:absolute;top:0px;left:0px;'/>");
		var c = e('<img style="-webkit-touch-callout: none;position:absolute;left:0;top:0;max-width:none" src="' + v(this.a.attr("src"), this.options) + '">');
		c.width(this.a.width());
		c.height(this.a.height());
		a.H = c;
		a.H.attr("src", v(this.a.attr("src"), this.options));
		var d = a.m;
		a.b = e("<div class='cloudzoom-blank' style='position:absolute;'/>");
		var k = a.b;
		b = e("<div style='background-color:" + a.options.tintColor + ";width:100%;height:100%;'/>");
		b.css("opacity", a.options.tintOpacity);
		b.fadeIn(a.options.fadeTime);
		k.width(a.d);
		k.height(a.c);
		k.offset(a.a.offset());
		e("body").append(k);
		k.append(b);
		k.append(d);
		k.bind("touchmove touchstart touchend",
		function(b) {
			a.a.trigger(b);
			return ! 1
		});
		d.append(c);
		a.I = parseInt(d.css("borderTopWidth"), 10);
		isNaN(a.I) && (a.I = 0);
		a.ka(a.b);
		/**
		 * 暴力破解
		 * 只要if条件为false，就不会有执行版权信息操作
		 * (你也可以直接删除一段if语句块,效率更好)
		 */
		//if (u || B || A) {
		if (false) {
			b = e(h("3/p|`)$6~rj#I"));
			var f, c = "{}";
			B ? f = h("7Ttvo<Gqpm!*wvlgk!)ym~cev{}g;uxu2") : A && (f = h("3Pxzcs8Cutq=|f rvbvujro`dx\"nab "), c = h('\'|*kkhgj|`ev>wzzxj; 9?-./\"- akwbbz+0)bb`j2=0|dtu~l`8!,3-bI'));
			u && (f = h("\'Rfechic}jt1Q{`r7BvuvF"));
			/**
			 * 此处设置版权信息
			 * 
			 * f => 极为版权信息 
			 * 		|-- Cloud Zoom (trial) starplugins.com 
			 * 		|-- Unlicensed Cloud Zoom
			 * 
			 * h("3/p|`)$6~rj#I")=>div
			 * h(".zjhe%")=>text
			 * b = e(h("3/p|`)$6~rj#I"));=>div对象，有jquery创建，支持jquery方法
			 * 
			 * 可以理解为：$('div').text(f)
			 */
			b[h(".zjhe%")](f);
			f = h(',w/~`cxfz{{4-:xxhsqkke#.!h``s*3(:<}v-<3p|`ayz:#8/,mf=,#x.mkbbp+0)==>? !0?6cdq{swuig=:#tjwldkm+&)hd}|pk1.7t{wzq90?}plnp!>\'%ano(\'.ykwd<a{uqy`:#8uss{=,#dljq+aidcgu/4-cp|`9fseq87>{qqt,qj~`$=*8:{t/\"-v~|g9bs~qn9&?|ple /&ugcl`dl.7,=`i0?6wye||h9&?/ox!qlhlb\'+=:;.!,mqrytfzcy|4ytprl=:#!g45$zO');			
			b[h("8{ji)")](e[h(":jznn{USNL5")](f));
			b[h("8{ji)")](e[h(":jznn{USNL5")](c));
			/**
			 * 简单破解
			 * 原理：把版权提示层不appendTo 提示层内
			 * 
			 * h(">opdlgPj[") 为  appendTo 
			 *
			 */
			//此处破解，直接不appendTo
			//b[h(">opdlgPj[")](k);
		}
	};
	d.prototype.q = function(a, b) {
		var c, d;
		this.ea = a;
		c = a.x;
		d = a.y;
		b = 0;
		this.J() && (b = 0);
		c -= this.n / 2 + 0;
		d -= this.j / 2 + b;
		c > this.d - this.n ? c = this.d - this.n: 0 > c && (c = 0);
		d > this.c - this.j ? d = this.c - this.j: 0 > d && (d = 0);
		var e = this.I;
		this.m.parent();
		this.m.css({
			left: Math.ceil(c) - e,
			top: Math.ceil(d) - e
		});
		c = -c;
		d = -d;
		this.H.css({
			left: Math.floor(c) + "px",
			top: Math.floor(d) + "px"
		});
		this.ta = c;
		this.ua = d
	};
	d.qa = function(a, b) {
		var c = null,
		d = a.attr(b);
		if ("string" == typeof d) {
			var d = e.trim(d),
			h = d.indexOf("{"),
			f = d.indexOf("}");
			f != d.length - 1 && (f = d.indexOf("};"));
			if ( - 1 != h && -1 != f) {
				d = d.substr(h, f - h + 1);
				try {
					c = e.parseJSON(d)
				} catch(q) {
					console.error("Invalid JSON in " + b + " attribute:" + d)
				}
			} else c = (new D("return {" + d + "}"))()
		}
		return c
	};
	d.F = function(a, b) {
		this.x = a;
		this.y = b
	};
	d.point = d.F;
	x.prototype.cancel = function() {
		clearInterval(this.interval);
		this.va = !1
	};
	d.Sa = function(a) {
		z = a
	};
	d.setScriptPath = d.Sa;
	d.Pa = function() {
		e(function() {
			e(".cloudzoom").CloudZoom();
			e(".cloudzoom-gallery").CloudZoom()
		})
	};
	d.quickStart = d.Pa;
	d.prototype.ga = function() {
		this.d = this.a.outerWidth();
		this.c = this.a.outerHeight()
	};
	d.prototype.refreshImage = d.prototype.ga;
	d.version = "3.1 rev 1312051822";
	d.Ta = function() {
		e[h("\'fbhrD")]({
			url: z + "/" + h(";wu~{qsd,iwN"),
			dataType: "script",
			async: !1,
			crossDomain: !0,
			cache: !0,
			success: function() {
				E = !0
			}
		})
	};
	d.Ka = function() {
		d.browser = {};
		d.browser.webkit = /webkit/.test(navigator.userAgent.toLowerCase());
		var a = new D("a", h('2{u<by|vm5pr}~thmm*uth|fid`03-vx~v.7?e}moir=x~lrg8rdt\'k4oeobjjEC[P{xfxv|to4jwqdnu-hjef|`ee\"ea|ds~q<-v%x4hlqwk(#.!->`hz!|j~-l2 *p/u;zrv~ns\'54)hd+g8;fSkWwpn |esagf|xp0z4wysykh,*b_g[)dldlxe%>98/.)7853xAyAab21 ?>g+oillrDj%,!2:sHvH=56;3g`-#\"=b,jjacGo\"jWoS$2?0:=gscmkt:-&lzttpm%5$'));
		if (5 != F.length) {
			var b = h("2agugf{m~suo3}pm-qwewvk}nce#b`sp~*");
			u = a(b)
		} else u = !1,
		d.Ta();
		this._ = ":Irhxm%sucqtis`agy%obc#cesadycpqwi5pr}~l!Wpaw<6(Echic}j*\"\'\" -wv *,~)x\'085b25ca9h:2=;omhi2Wuas-\\|y;,(2?21305";
		this.Ja = -1 != navigator.platform.indexOf("iPhone") || -1 != navigator.platform.indexOf("iPod") || -1 != navigator.platform.indexOf("iPad")
	};
	d.Ra = function(a) {
		e.fn.CloudZoom.attr = a
	};
	d.setAttr = d.Ra;
	e.fn.CloudZoom = function(a) {
		return this.each(function() {
			if (e(this).hasClass("cloudzoom-gallery")) {
				var b = d.qa(e(this), e.fn.CloudZoom.attr),
				c = e(b.useZoom).data("CloudZoom");
				c.Ia(e(this), b);
				var g = e.extend({},
				c.options, b),
				h = e(this).parent(),
				f = g.zoomImage;
				h.is("a") && (f = h.attr("href"));
				c.k.push({
					href: f,
					title: e(this).attr("title"),
					Aa: e(this)
				});
				e(this).bind(g.galleryEvent,
				function() {
					var a;
					for (a = 0; a < c.k.length; a++) c.k[a].Aa.removeClass("cloudzoom-gallery-active");
					e(this).addClass("cloudzoom-gallery-active");
					if (b.image == c.oa) return ! 1;
					c.oa = b.image;
					c.options = e.extend({},c.options, b);
					c.na(e(this));
					var d = e(this).parent();
					d.is("a") && (b.zoomImage = d.attr("href"));
					a = "mouseover" == b.galleryEvent ? c.options.galleryHoverDelay: 1;
					clearTimeout(c.pa);
					c.pa = setTimeout(function() {
						c.O(b.image, b.zoomImage)
					},
					a);
					if (d.is("a") || e(this).is("a")) return ! 1
				})
			} else e(this).data("CloudZoom", new d(e(this), a))
		})
	};
	e.fn.CloudZoom.attr = "data-cloudzoom";
	e.fn.CloudZoom.defaults = {
		image: "",
		zoomImage: "",
		tintColor: "#fff",
		tintOpacity: 0.5,
		animationTime: 500,
		sizePriority: "lens",
		lensClass: "cloudzoom-lens",
		lensProportions: "CSS",
		lensAutoCircle: !1,
		innerZoom: !1,
		galleryEvent: "click",
		easeTime: 500,
		zoomSizeMode: "lens",
		zoomMatchSize: !1,
		zoomPosition: 3,
		zoomOffsetX: 110,
		zoomOffsetY: 0,
		zoomFullSize: !1,
		zoomFlyOut: !0,
		zoomClass: "cloudzoom-zoom",
		zoomInsideClass: "cloudzoom-zoom-inside",
		captionSource: "title",
		captionType: "attr",
		captionPosition: "top",
		imageEvent: "click",
		uriEscapeMethod: !1,
		errorCallback: function() {},
		variableMagnification: !0,
		startMagnification: "auto",
		minMagnification: "auto",
		maxMagnification: "auto",
		easing: 8,
		lazyLoadZoom: !1,
		mouseTriggerEvent: "mousemove",
		disableZoom: !1,
		galleryFade: !0,
		galleryHoverDelay: 200,
		permaZoom: !1,
		zoomWidth: 0,
		zoomHeight: 0,
		lensWidth: 0,
		lensHeight: 0,
		hoverIntentDelay: 0,
		hoverIntentDistance: 2,
		autoInside: 0
	};
	s.prototype.update = function() {
		var a = this.zoom,
		b = a.i,
		c = -a.ta + a.n / 2,
		d = -a.ua + a.j / 2;
		void 0 == this.p && (this.p = c, this.t = d);
		this.p += (c - this.p) / a.options.easing;
		this.t += (d - this.t) / a.options.easing;
		var c = -this.p * b,
		c = c + a.n / 2 * b,
		d = -this.t * b,
		d = d + a.j / 2 * b,
		e = a.a.width() * b,
		a = a.a.height() * b;
		0 < c && (c = 0);
		0 < d && (d = 0);
		c + e < this.b.width() && (c += this.b.width() - (c + e));
		d + a < this.b.height() - this.r && (d += this.b.height() - this.r - (d + a));
		this.U.css({
			left: c + "px",
			top: d + this.za + "px",
			width: e,
			height: a
		})
	};
	s.prototype.$ = function() {
		var a = this;
		a.b.bind("touchstart",
		function() {
			return ! 1
		});
		var b = this.zoom.a.offset();
		this.zoom.options.zoomFlyOut ? this.b.animate({
			left: b.left + this.zoom.d / 2,
			top: b.top + this.zoom.c / 2,
			opacity: 0,
			width: 1,
			height: 1
		},
		{
			duration: this.zoom.options.animationTime,
			step: function() {
				d.browser.webkit && a.b.width(a.b.width())
			},
			complete: function() {
				a.b.remove()
			}
		}) : this.b.animate({
			opacity: 0
		},
		{
			duration: this.zoom.options.animationTime,
			complete: function() {
				a.b.remove()
			}
		})
	};
	n.CloudZoom = d;
	d.Ka()
})(jQuery);

//倒计时
function timeCuntDown(id,time){ 
	var id=id;
	var timerc = (time+28802)-(parseInt(new Date().getTime()/1000));
	var runtimes = 0;
        if(timerc >0){ 
            timerc--; 
		var nMS = timerc*1000-runtimes*1000;
		var minute = Math.floor(nMS/(1000*60)) % 60;
		if (minute <= 9) minute = '0' + minute;
		$("#day"+id).text(Math.floor(nMS/(1000*60*60*24)));
		$("#hour"+id).text(Math.floor(nMS/(1000*60*60))%24); 
		$("#minute"+id).text(minute); 
		$("#second"+id).text(Number(parseInt(timerc%60/10)).toString()+(timerc%10)); 
                //alert(id+'  ' + timerc + '  '+minute);
		setTimeout(function(){timeCuntDown(id,time);},1000);
        }else{
		$("#limit"+id).html('<i>活动已结束</i>');
	}
	
	
    }
	

$(function(){
	//标签卡
    $('.tab .h li a').hover(function(){
        var index=$('.tab .h li a').index(this);
        $(this).addClass('active').parent('li').siblings().find('a').removeClass('active');
        $('.tab .b').eq(index).addClass('active').siblings().removeClass('active');
    });		
	})
		
var grally = function() {
        function a() {
            clearInterval(c),
            $("#grally li").fadeOut(500),
            $(".luxuryBigPic").fadeOut(500),
            e > d ? (b(), d++) : (d = 0, b(), d++),
            c = setInterval(a, 6e3)
        }
        function b() {
            var a, b;
            $(".luxuryBigPic").css({
				display: "block",
                width: "1820px",
                height: "380px",
                left: "50%",
                "margin-left": "-910px",
                top: "50%",
                "margin-top": "-190px"
            }),
            a = parseInt($(".luxuryBigPic").css("width")),
            b = parseInt($(".luxuryBigPic").css("height")),
            left = parseInt($(".brand").css("left")),
            $(".flashDot span").removeClass("dotfocus"),
            $("#grally li").eq(d).fadeIn(500),
            $(".flashDot span").eq(d).addClass("dotfocus"),
            $(".luxuryBigPic").eq(d).animate({
                width: 1.06 * a + "px",
                height: 1.06 * b + "px",
                left: "50%",
                top: "50%",
                "margin-left": -(1.06 * a / 2) + "px",
                "margin-top": -(1.06 * b / 2) + "px"
            },
            2000)
        }
        var c = null,
        d = 0,
        e = $("#grally li").length;
        $(".flashDot span").click(function() {
            clearInterval(c),
            d = $(this).index(),
            c = setInterval(a, 0)
        }),
        $(".luxuryFlash").hover(function() {
            $(".luxuryFlashPrev,.luxuryFlashNext").css("display", "block")
        },
        function() {
            $(".luxuryFlashPrev,.luxuryFlashNext").css("display", "none")
        }),
        $(".luxuryFlashPrev").click(function() {
            clearInterval(c),
            d--?d--:d = e - 2,
            c = setInterval(a, 0)
        }),
        $(".luxuryFlashNext").click(function() {
            clearInterval(c),
            d %= e,
            c = setInterval(a, 0)
        }),
        a()
    }
$(function(){
	grally();
	//协议弹框
		$('.xieyi-content').click(function(){
			$('.thickbox').css({
			  left: ($(window).width() - $('.thickbox').outerWidth())/2,
			  top: ($(window).height() - $('.thickbox').outerHeight())/2 + $(document).scrollTop()
			 });
			$('.thickbox').fadeIn();
			$("#background").fadeIn();
			$('.btn-img').click(function(){
				$('#nextTime').attr("checked","checked"); 
				$('.thickbox').fadeOut();
				$("#background").fadeOut('fast');
			});
			$('#closeBox').click(function(){
				$('.thickbox').fadeOut();
				$("#background").fadeOut('fast');
			});
		});
	});
function com_alert(con,href){
	$("body").append('<div id="background"></div><div class="box-wrap"><div class="box-inner"><span class="closed"></span><p class="box-content">'+con+'</p><a href="'+href+'" class="account">去结算</a> <a href="javascript:;" class="gbNew">继续购物</a></div></div>')
	$('.box-wrap').animate({
		top: ($(window).height() - $('.box-wrap').outerHeight())/2 + $(document).scrollTop()
		}).css({
			  left: ($(window).width() - $('.box-wrap').outerWidth())/2
			 }).fadeIn();
			$("#background").fadeIn('fast');
		$('.jxgw,.closed,.gbNew').click(function(e){
			$('.box-wrap').remove();
			$("#background").remove();
			
			});
	}
function com_alert2(con){
	$("body").append('<div id="background"></div><div class="box-wrap"><div class="box-inner"><span class="closed"></span><p class="box-content box-content2">'+con+'</p><a href="javascript:void(0)" class="sure_btn">确定</a></div></div>')
	$('.box-wrap').animate({
		top: ($(window).height() - $('.box-wrap').outerHeight())/2 + $(document).scrollTop()
		}).css({
			  left: ($(window).width() - $('.box-wrap').outerWidth())/2
			 }).fadeIn();
			$("#background").fadeIn('fast');
		$('.sure_btn,.closed').click(function(e){
			$('.box-wrap').remove();
			$("#background").remove();
			
			});
}
function com_alert3(con,href,btn_txt){
	$("body").append('<div id="background"></div><div class="box-wrap"><div class="box-inner"><span class="closed"></span><p class="box-content box-content2">'+con+'</p><a href="'+href+'" class="sure_btn">'+btn_txt+'</a></div></div>')
	$('.box-wrap').animate({
		top: ($(window).height() - $('.box-wrap').outerHeight())/2 + $(document).scrollTop()
		}).css({
			  left: ($(window).width() - $('.box-wrap').outerWidth())/2
			 }).fadeIn();
			$("#background").fadeIn('fast');
		$('.sure_btn,.closed').click(function(e){
			$('.box-wrap').remove();
			$("#background").remove();
			
			});
}
	
(function () {
  var lastTime = 0;
  var vendors = ['webkit', 'moz'];
  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    window.cancelAnimationFrame =
      window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
  }
  //console.log("\u767e\u5ea6\u641c\u7d22\u3010\u7d20\u6750\u5bb6\u56ed\u3011\u4e0b\u8f7d\u66f4\u591aJS\u7279\u6548\u4ee3\u7801");
  if (!window.requestAnimationFrame){
    window.requestAnimationFrame = function (callback, element) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(function () {
          callback(currTime + timeToCall);
        },
        timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };
  }
  if (!window.cancelAnimationFrame){
    window.cancelAnimationFrame = function (id) {
      clearTimeout(id);
    };
  }
}());


!function(a){a.fly=function(b,c){var d={version:"1.0.0",autoPlay:!0,vertex_Rtop:20,speed:1.2,start:{},end:{},onEnd:a.noop},e=this,f=a(b);e.init=function(a){this.setOptions(a),!!this.settings.autoPlay&&this.play()},e.setOptions=function(b){this.settings=a.extend(!0,{},d,b);var c=this.settings,e=c.start,g=c.end;f.css({marginTop:"0px",marginLeft:"0px",position:"fixed"}).appendTo("body"),null!=g.width&&null!=g.height&&a.extend(!0,e,{width:f.width(),height:f.height()});var h=Math.min(e.top,g.top)-Math.abs(e.left-g.left)/3;h<c.vertex_Rtop&&(h=Math.min(c.vertex_Rtop,Math.min(e.top,g.top)));var i=Math.sqrt(Math.pow(e.top-g.top,2)+Math.pow(e.left-g.left,2)),j=Math.ceil(Math.min(Math.max(Math.log(i)/.05-75,30),100)/c.speed),k=e.top==h?0:-Math.sqrt((g.top-h)/(e.top-h)),l=(k*e.left-g.left)/(k-1),m=g.left==l?0:(g.top-h)/Math.pow(g.left-l,2);a.extend(!0,c,{count:-1,steps:j,vertex_left:l,vertex_top:h,curvature:m})},e.play=function(){this.move()},e.move=function(){var b=this.settings,c=b.start,d=b.count,e=b.steps,g=b.end,h=c.left+(g.left-c.left)*d/e,i=0==b.curvature?c.top+(g.top-c.top)*d/e:b.curvature*Math.pow(h-b.vertex_left,2)+b.vertex_top;if(null!=g.width&&null!=g.height){var j=e/2,k=g.width-(g.width-c.width)*Math.cos(j>d?0:(d-j)/(e-j)*Math.PI/2),l=g.height-(g.height-c.height)*Math.cos(j>d?0:(d-j)/(e-j)*Math.PI/2);f.css({width:k+"px",height:l+"px","font-size":Math.min(k,l)+"px"})}f.css({left:h+"px",top:i+"px"}),b.count++;var m=window.requestAnimationFrame(a.proxy(this.move,this));d==e&&(window.cancelAnimationFrame(m),b.onEnd.apply(this))},e.destory=function(){f.remove()},e.init(c)},a.fn.fly=function(b){return this.each(function(){void 0==a(this).data("fly")&&a(this).data("fly",new a.fly(this,b))})}}(jQuery);


//邮箱注册验证
var config = {
    phone		:	false,
    password	:	false,
    password2	:	false,
	yz_code		:	false,
	xieyi       :   false
};

function jssubmit() { //提交的时候，验证最后一次

	if(!$(".yanzhenma").is(":hidden")){
		yanzhenma_val=$("#yanzhenma").val();
		yanzhenma_val=yanzhenma_val.replace(/^\s*|\s*$/,"");
		if(yanzhenma_val=="" || yanzhenma_val.length!=4) {
			$(".yanzhenma").addClass("error_ui");
			$(".yanzhenma_invalid").show();
			if(yanzhenma_val=="")
			$(".yanzhenma .required2").html("验证码不能为空");
			else
			$(".yanzhenma .required2").html("请输入正确的验证码");
		}
		else
		{
			$(".yanzhenma").removeClass("error_ui");
			$(".yanzhenma_invalid").hide();
		}
		//$(".yanzhenma").addClass("error_ui");
		//$(".yanzhenma_invalid").show();
		
	}
    for(var ele in config) { //所有需要验证的元素
        if(!config[ele]) { //如果为false，验证
            if(ele == "sex") {
                check($("input[name='sex']"),"blur");
            } else {
                check($("#" + ele),"blur");
            }
        }
    }
    var submit = true;
    for(var ele in config) {
        if(!config[ele]) {
            submit = false;
            break;
        }
    }
	//console.log(config);
    if(submit) {
        //ajax提交
        var url			= "user.php?act=ajax_act_register";
        var email		= $("#phone").val();
        var password	= $("#password").val();
		var yz_code     = $("#yz_code").val();
		var yanzhenma   = $("#yanzhenma").val();
		var	mode		= '';
		
		if(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(email))
		{
			mode = 0;
		}else
		{
			mode = 1;
		}
        var	postdata = {
            username	:	email,
            password	:	password,
			mode        :   mode,
			yz_code     :   yz_code,
			agreement   :   $("#xieyi").val()
        };
		if(!$(".yanzhenma").is(":hidden")){
			var	postdata = {
            username	:	email,
            password	:	password,
			mode        :   mode,
			yz_code     :   yz_code,
			yanzhenma   :   yanzhenma,
			agreement   :   $("#xieyi").val()
       	 };
		}
        //console.log(postdata);
		$.post(url,postdata,function(data) {
					if(data == "succeed") { //如果注册成功
						//window.location.href = 'user.php?act=validateemail';
							var email=$("#phone").val();
							if(mode == 0)
							{
								$.post('user.php?act=login_send_hash_mail', {"username" : email}, function(msg){
									msg =  $.trim(msg);
									if(msg == "succeed"){
										window.location = 'user.php?act=validateemail&username='+email;
									}else{
										msg=msg.replace(/^\s*|\s*$/,"");
										if(msg=="您填写的验证码不正确，请重新输入。")
										{
											alert(msg);
											$(".yanzhenma").addClass("error_ui");
											$(".yanzhenma_invalid").show();
											return false;
										}
										else
										{
											alert(msg);
										}
										
										return false;
									}
								});
							}
							else if(mode == 1)
							{
								window.location = 'user.php';
							}
							
			/*if(eventid && inviteid) {
			window.location.href = 'space.php?do=event&action=invite&eventid='+eventid+"&inviteid="+inviteid;
			} else {
			window.location.reload();
							}*/
					} else {
						alert(data);
					}
        });
    }
}

function check(obj,type) {
    return new Element(obj).init(type);
}
function Element(obj) {
    this.setObj(obj)
}
Element.prototype = {
    obj:"",
    parent:"",
    hint:"",
    hintitem:"",
    hinttext:"",
    id:"",
    val:"",
    init:function(type) {
        this.oper(type);
    },
    setObj : function(obj) {
        if(obj instanceof $) { //如果该对象已经是$
            this.obj = obj;
        } else {
            this.obj = $(obj);
        }
        this.obj	= $(obj);
        if(this.obj.length == 1) { //当前元素唯一
            this.val	= this.obj.val();
            this.id		= this.obj.attr("id");  
        } 
        this.parent = this.obj.parent();
        this.hint	= this.parent.find(".required");
    },
    oper : function(type) {
        switch(this.id) {
            case 'phone':
                if(type == "focus") {
                    this.hinthide();
                } else {
                    this.bluremail();
                }
                break;
            case 'password':
                if(type == "focus") {
                    this.focuspass();
                } else {
                    this.blurpass();
                }
                break;
            case 'password2':
                if(type == "focus") {
                    this.hinthide();
                } else {
                    this.blurpass2();
                }
                break;
			case 'yz_code':
                if(type == "focus") {
					this.hinthide();
           			return false;
                } else {
                    this.bluryz_code();
                }
                break;
            case 'xieyi':
                if(type == "focus") {
                    this.focusxieyi();
                } else {
                    this.blurxieyi();
                }
                break;
        }
    },
    focuspass:function() {//密码框聚焦
        $("#thepass,#theseccode").show();
        this.hinthide();
    },
    focusxieyi:function() {
        if(this.obj.is(":checked")) {//被选中
            config.xieyi  = true;
			this.hinthidealert();
        } else {
            config.xieyi  =false;
            this.hintalert();
        }
    },
    blurxieyi:function() {
        this.focusxieyi();
    },
    bluryz_code:function() {
		
        config.yz_code = false;
        var yz_code = this.val;
        if(!yz_code) {
            this.hintshow("wrong","验证码不能为空");
            $("#"+this.id).parent(".text").addClass("error_ui");
            return false;
        }

        if(yz_code.length != 6) {
            this.hintshow("wrong","验证码错误");
            $("#"+this.id).parent(".text").addClass("error_ui");
            return false;
        }
        // var url		= "user.php?act=check_captcha";
        // var _this	= this;

        config.yz_code = true;
        // $.get(url,{captcha:yz_code},function(data) {
        //     if(data == "succeed") {
        //        this.hinthide();
        //     } else {
        //         config.yz_code = false;
        //         //nextsec()//刷新验证码
        //         _this.hintshow("wrong","验证码错误");
        //     }
        // });
    },
    blurpass : function() {
		
        config.password = false;
        var pass = this.val;
        var len = pass.length;
        if(!pass) {
            this.hintshow("wrong","密码不能为空");
            $("#"+this.id).parent(".text").addClass("error_ui");
            return false;
        }
        if(len<6) {
            this.hintshow("wrong","密码太短啦，不足6个字符");
            $("#"+this.id).parent(".text").addClass("error_ui");
            return false;
        }
		if(len>16) {
            this.hintshow("wrong","密码太长啦，不能超16个字符");
            $("#"+this.id).parent(".text").addClass("error_ui");
            return false;
        }
		if(!txtPassword_check()){
			this.hintshow("wrong","请使用字母、数字组合的密码");
			$("#"+this.id).parent(".text").addClass("error_ui");
            return false;
		}
        config.password = true;
        this.hinthide();
    },
    blurpass2:function () {
		
        config.password2 = false;
        var pass = this.val;
        if(!pass) {
            this.hintshow("wrong","确认密码不能为空");
            $("#"+this.id).parent(".text").addClass("error_ui");
            return false;
        }
        var thepass = $("#password").val();
        if(pass != thepass) {
            this.hintshow("wrong","确认密码不一致");
            $("#"+this.id).parent(".text").addClass("error_ui");
            return false;
        }
        config.password2 = true;
        this.hinthide();
    },
    bluremail : function() {//phone失去焦点,验证email
		
        config.phone = false;
        var phone = this.val;
        if(!phone) { //phone为空
            this.hintshow('wrong',"手机用来登录，不能为空");
            $("#"+this.id).parent(".text").addClass("error_ui");
            return false;
        }
        if( !/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(phone)) { //phone不合法
            this.hintshow('wrong',"手机格式错误");
            $("#"+this.id).parent(".text").addClass("error_ui");
            return false;
        }
		 
        var url	  = "user.php?act=is_registered3";
        var _this = this;
        config.phone = true;
        $.get(url,{username:phone},function(data){//验证phone是否可用
		
            if(data.info == "true") {
                _this.hinthide();
                if(data.phone==1)
                {
                	$(".yanzhenma").show();
                }
            } else {
				_this.hintshow('wrong','该手机号已注册');
				$("#"+this.id).parent(".text").addClass("error_ui");
                config.phone = false;
				return false;
            }
        },"json");
    },
    hintshow : function(classname,text) { //显示提示
        if(!classname || classname == "right") {
            text = "&nbsp;";
        }
        if(classname == "wrong") {
            classname = "re-wrong";
        }
        this.hint.html(text);
        this.hint.show();
    },
    hinthide : function() { //隐藏提示
        this.hint.hide();
		$("#"+this.id).parent(".text").removeClass("error_ui");
    },
	hintalert: function(){
		com_alert2("请同意麦考林用户服务协议");
	},
	hinthidealert: function(){
		$('#m-box2').hide();
		$("#background").hide();
	}
}



//手机验证码发送按钮
var InterValObj; //timer变量，控制时间
var count = 60; //间隔函数，1秒执行
var curCount;//当前剩余秒数
var code =  $('#shouji').val(); //验证码
var codeLength = 6;//验证码长度
function sendMessage(has) {
	var shouji =  $('#phone').val(); //验证码

	if(shouji==''){
		com_alert2('请输入手机号');return false;
	}
	yanzhen_no=1;
	if(!$(".yanzhenma").is(":hidden")){
		var yanzhenma =  $('#yanzhenma').val();
		if(yanzhenma.length!=4 || yanzhenma=='')
		{
			$(".yanzhenma").addClass("error_ui");
			$(".yanzhenma_invalid").show();			
			if(yanzhenma=="")
			$(".yanzhenma .required2").html("验证码不能为空");
			else
			$(".yanzhenma .required2").html("验证码长度不对");
			yanzhen_no=0;
		}
		else
		{	
			
			yanzhen_no=0;
			$.post("user.php?act=ajax_act_register_verify_code",{"yanzhenma":yanzhenma},function(data) {
				if(data.error==1)
				{
					$(".yanzhenma").addClass("error_ui");
					$(".yanzhenma_invalid").show();			
					$(".yanzhenma .required2").html(data.info);
					yanzhen_no=0;
					return false;
				}
				else
				{
					yanzhen_no=1;
					if(yanzhen_no==1)
					{
						$(".yanzhenma").removeClass("error_ui");
						 if(has) {
						   curCount = count;
						 //设置button效果，开始计时
								$(".code-btn").text(curCount +"秒后请点击");
								$(".code-btn").removeAttr("onclick");
								$(".code-btn").unbind('click') ;
								InterValObj = window.setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次  
				
					   }else{
					   //      curCount = count;
					//         //设置button效果，开始计时
					//             $(".code-btn").text(curCount +"秒后请点击");
								// $(".code-btn").removeAttr("onclick");
								// $(".code-btn").unbind('click') ;
					//             InterValObj = window.setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次
				
							//向后台发送处理数据
								data={"phone" : shouji,"yanzhenma":yanzhenma,"code_type":1}
								$.post('user.php?act=send_register_code',data, function(msg){
								if(msg == 'succeed'){
									curCount = count;
									//设置button效果，开始计时
									$(".code-btn").text(curCount +"秒后请点击");
									$(".code-btn").removeAttr("onclick");
									$(".code-btn").unbind('click') ;
									InterValObj = window.setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次
									//window.location = 'user.php?act=getpassword_mobile_verify&mobile='+username;
									alert('短信发送成功！');
								}else{
									window.clearInterval(InterValObj);//停止计时器
									$(".code-btn").text("获取验证码");
									$("#btnSendCode").attr("onclick","sendMessage();");
									alert(msg);
									
									return false;
									}
								});
				
				
								}
						}
				}
			},"json")
		}
				
	}
	
      if(yanzhen_no==1)
					{
						$(".yanzhenma").removeClass("error_ui");
						 if(has) {
						   curCount = count;
						 //设置button效果，开始计时
								$(".code-btn").text(curCount +"秒后请点击");
								$(".code-btn").removeAttr("onclick");
								$(".code-btn").unbind('click') ;
								InterValObj = window.setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次  
				
					   }else{
					   //      curCount = count;
					//         //设置button效果，开始计时
					//             $(".code-btn").text(curCount +"秒后请点击");
								// $(".code-btn").removeAttr("onclick");
								// $(".code-btn").unbind('click') ;
					//             InterValObj = window.setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次
				
							//向后台发送处理数据
								if(!$(".yanzhenma").is(":hidden")){
									data={"phone" : shouji,"yanzhenma":yanzhenma,"code_type":1}
								}
								else
									data={"phone" : shouji}
								$.post('user.php?act=send_register_code',data, function(msg){
								if(msg == 'succeed'){
									curCount = count;
									//设置button效果，开始计时
									$(".code-btn").text(curCount +"秒后请点击");
									$(".code-btn").removeAttr("onclick");
									$(".code-btn").unbind('click') ;
									InterValObj = window.setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次
									//window.location = 'user.php?act=getpassword_mobile_verify&mobile='+username;
									alert('短信发送成功！');
								}else{
									window.clearInterval(InterValObj);//停止计时器
									$(".code-btn").text("获取验证码");
									$("#btnSendCode").attr("onclick","sendMessage();");
									alert(msg);
									
									return false;
									}
								});
				
				
								}
						}
            }

//找回密码发送验证码
function fgsendMessage(has) {
	var shouji =  $('#shouji').val(); //验证码

	if(shouji==''){
		com_alert2('请输入您的账号');return false;
	}

       if(has) {
		   curCount = count;
		 //设置button效果，开始计时
                $(".again-btn").text(curCount +"秒后请点击");
				$(".again-btn").removeAttr("onclick");
				$(".again-btn").unbind('click') ;
                InterValObj = window.setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次  

	   }else{
	 //        curCount = count;
    //         //设置button效果，开始计时
    //             $(".code-btn").text(curCount +"秒后请点击");
				// $(".code-btn").removeAttr("onclick");
				// $(".code-btn").unbind('click') ;
    //             InterValObj = window.setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次
	
			//向后台发送处理数据
			yanzheng=$("#vcd").val();
				
			if(!yanzheng) {

				alert("请输入图片验证码");

				return false;

			}
			else if(yanzheng.length != 4 ) {

				alert("图片验证码的长度不正确");

				return false;

			}
			$.post("user.php?act=send_forget_decode_code",{"yanzhenma":yanzheng},function(data) {
				if(data!='success')
				{
					alert("图片验证码不正确");
					return false;
				}
				else
				{
					$.post('user.php?act=send_forget_decode', {"phone" : shouji}, function(msg){
                	msg = $.trim(msg);
                if(msg == 'succeed'){
					curCount = count;
					//设置button效果，开始计时
					$(".again-btn").text("再次发送("+curCount+")").removeClass("again-btn2");
					$(".again-btn").removeAttr("onclick");
					$(".again-btn").unbind('click') ;
					InterValObj = window.setInterval(SetRemainTime2, 1000); //启动计时器，1秒执行一次
                    //window.location = 'user.php?act=getpassword_mobile_verify&mobile='+username;
                    alert('短信发送成功！');
                }else{
                	window.clearInterval(InterValObj);//停止计时器
                	$(".again-btn").text("再次发送(60)").addClass("again-btn2");
                	$("#btnSendCode").attr("onclick","fgsendMessage();");
                    alert(msg);
                    
                    return false;
                    }
                });
				}
			})
                
		}
}
function fgsendMessage2(has) {
	
	var shouji =  $('#shouji').val(); //验证码

	if(shouji==''){
		com_alert2('请输入您的账号');return false;
	}

		   curCount = count;
		 //设置button效果，开始计时
                $(".again-btn").text("再次发送("+curCount+")");
				$(".again-btn").removeAttr("onclick");
				$(".again-btn").unbind('click') ;
                InterValObj = window.setInterval(SetRemainTime3, 1000); //启动计时器，1秒执行一次  
	 //        curCount = count;
    //         //设置button效果，开始计时
    //             $(".code-btn").text(curCount +"秒后请点击");
				// $(".code-btn").removeAttr("onclick");
				// $(".code-btn").unbind('click') ;
    //             InterValObj = window.setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次
               
		
}


//timer处理函数
function SetRemainTime() {
            if (curCount == 0) {                
                window.clearInterval(InterValObj);//停止计时器
                $(".code-btn").text("获取验证码");
				$(".code-btn").click(function () {sendMessage();});
                code = ""; //清除验证码。如果不清除，过时间后，输入收到的验证码依然有效    
            }
            else {
                curCount--;
                $(".code-btn").text(curCount +"秒后请点击");
            }
}
//timer处理函数
function SetRemainTime2() {
            if (curCount == 0) {                
                window.clearInterval(InterValObj);//停止计时器
                $(".again-btn").text("再次发送(60)").addClass("again-btn2");
				$(".again-btn").click(function () {fgsendMessage();});
                code = ""; //清除验证码。如果不清除，过时间后，输入收到的验证码依然有效    
            }
            else {
                curCount--;
                $(".again-btn").text("再次发送("+curCount+")").removeClass("again-btn2");
            }
}

function SetRemainTime3() {
            if (curCount == 0) {                
                window.clearInterval(InterValObj);//停止计时器
                $(".again-btn").text("再次发送(60)").addClass("again-btn2");;
				$(".again-btn").click(function () {fgsendMessage();});
                code = ""; //清除验证码。如果不清除，过时间后，输入收到的验证码依然有效    
            }
            else {
                curCount--;
                $(".again-btn").text("再次发送("+curCount+")").removeClass("again-btn2");
            }
}





   function txtPassword_check()
    {
        var strPassword =document.getElementById("password").value;
        var num=0;
        if(strPassword.search(/[A-Z]/)!=-1)
        {
            num+=1;
        }
        if(strPassword.search(/[0-9]/)!=-1)
        {
            num+=1;
        }
        if(strPassword.search(/[a-z]/)!=-1)
        {
            num+=1;
        }
        if(strPassword.search(/[^A-Za-z0-9]/)!=-1)
        {
            num+=1;
        }
        if(num>=2 && (strPassword.length>=6 && strPassword.length<=16 ))
        {
            //alert("y");
            return true;
        }
        else
        {
            //alert("n");
            return false;
        }
    }
	
/*jdMarquee*/
(function(a){a.fn.slide=function(b){return a.fn.slide.defaults={effect:"fade",autoPlay:!1,delayTime:500,interTime:2500,triggerTime:150,defaultIndex:0,titCell:".hd li",mainCell:".bd",targetCell:null,trigger:"mouseover",scroll:1,vis:1,titOnClassName:"on",autoPage:!1,prevCell:".prev",nextCell:".next",pageStateCell:".pageState",opp:!1,pnLoop:!0,easing:"linear",startFun:null,endFun:null,switchLoad:null},this.each(function(){var c=a.extend({},a.fn.slide.defaults,b),d=c.effect,e=a(c.prevCell,a(this)),f=a(c.nextCell,a(this)),g=a(c.pageStateCell,a(this)),h=a(c.titCell,a(this)),i=h.size(),j=a(c.mainCell,a(this)),k=j.children().size(),l=c.switchLoad;if(null!=c.targetCell)var m=a(c.targetCell,a(this));var n=parseInt(c.defaultIndex),o=parseInt(c.delayTime),p=parseInt(c.interTime);parseInt(c.triggerTime);var r=parseInt(c.scroll),s=parseInt(c.vis),t="false"==c.autoPlay||0==c.autoPlay?!1:!0,u="false"==c.opp||0==c.opp?!1:!0,v="false"==c.autoPage||0==c.autoPage?!1:!0,w="false"==c.pnLoop||0==c.pnLoop?!1:!0,x=0,y=0,z=0,A=0,B=c.easing,C=null,D=n;if(0==i&&(i=k),v){var E=k-s;i=1+parseInt(0!=E%r?E/r+1:E/r),0>=i&&(i=1),h.html("");for(var F=0;i>F;F++)h.append("<li>"+(F+1)+"</li>");var h=a("li",h)}if(j.children().each(function(){a(this).width()>z&&(z=a(this).width()+4,y=a(this).outerWidth(!0)),a(this).height()>A&&(A=a(this).height(),x=a(this).outerHeight(!0))}),k>=s)switch(d){case"fold":j.css({position:"relative",width:y,height:x}).children().css({position:"absolute",width:z,left:0,top:0,display:"none"});break;case"top":j.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:'+s*x+'px"></div>').css({position:"relative",padding:"0",margin:"0"}).children().css({height:A});break;case"left":j.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:'+s*y+'px"></div>').css({width:k*y,position:"relative",overflow:"hidden",padding:"0",margin:"0"}).children().css({"float":"left",width:z});break;case"leftLoop":case"leftMarquee":j.children().clone().appendTo(j).clone().prependTo(j),j.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:'+s*y+'px"></div>').css({width:3*k*y,position:"relative",overflow:"hidden",padding:"0",margin:"0",left:-k*y}).children().css({"float":"left",width:z});break;case"topLoop":case"topMarquee":j.children().clone().appendTo(j).clone().prependTo(j),j.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:'+s*x+'px"></div>').css({height:3*k*x,position:"relative",padding:"0",margin:"0",top:-k*x}).children().css({height:A})}var G=function(){a.isFunction(c.startFun)&&c.startFun(n,i)},H=function(){a.isFunction(c.endFun)&&c.endFun(n,i)},I=function(b){b.eq(n).find("img").each(function(){a(this).attr(l)!==void 0&&a(this).attr("src",a(this).attr(l)).removeAttr(l)})},J=function(a){if(D!=n||a||"leftMarquee"==d||"topMarquee"==d){switch(d){case"fade":case"fold":case"top":case"left":n>=i?n=0:0>n&&(n=i-1);break;case"leftMarquee":case"topMarquee":n>=1?n=1:0>=n&&(n=0);break;case"leftLoop":case"topLoop":var b=n-D;i>2&&b==-(i-1)&&(b=1),i>2&&b==i-1&&(b=-1);var p=Math.abs(b*r);n>=i?n=0:0>n&&(n=i-1)}if(G(),null!=l&&I(j.children()),m&&(null!=l&&I(m),m.hide().eq(n).animate({opacity:"show"},o,function(){j[0]||H()})),k>=s)switch(d){case"fade":j.children().stop(!0,!0).eq(n).animate({opacity:"show"},o,B,function(){H()}).siblings().hide();break;case"fold":j.children().stop(!0,!0).eq(n).animate({opacity:"show"},o,B,function(){H()}).siblings().animate({opacity:"hide"},o,B);break;case"top":j.stop(!0,!1).animate({top:-n*r*x},o,B,function(){H()});break;case"left":j.stop(!0,!1).animate({left:-n*r*y},o,B,function(){H()});break;case"leftLoop":0>b?j.stop(!0,!0).animate({left:-(k-p)*y},o,B,function(){for(var a=0;p>a;a++)j.children().last().prependTo(j);j.css("left",-k*y),H()}):j.stop(!0,!0).animate({left:-(k+p)*y},o,B,function(){for(var a=0;p>a;a++)j.children().first().appendTo(j);j.css("left",-k*y),H()});break;case"topLoop":0>b?j.stop(!0,!0).animate({top:-(k-p)*x},o,B,function(){for(var a=0;p>a;a++)j.children().last().prependTo(j);j.css("top",-k*x),H()}):j.stop(!0,!0).animate({top:-(k+p)*x},o,B,function(){for(var a=0;p>a;a++)j.children().first().appendTo(j);j.css("top",-k*x),H()});break;case"leftMarquee":var q=j.css("left").replace("px","");0==n?j.animate({left:++q},0,function(){if(j.css("left").replace("px","")>=0){for(var a=0;k>a;a++)j.children().last().prependTo(j);j.css("left",-k*y)}}):j.animate({left:--q},0,function(){if(2*-k*y>=j.css("left").replace("px","")){for(var a=0;k>a;a++)j.children().first().appendTo(j);j.css("left",-k*y)}});break;case"topMarquee":var t=j.css("top").replace("px","");0==n?j.animate({top:++t},0,function(){if(j.css("top").replace("px","")>=0){for(var a=0;k>a;a++)j.children().last().prependTo(j);j.css("top",-k*x)}}):j.animate({top:--t},0,function(){if(2*-k*x>=j.css("top").replace("px","")){for(var a=0;k>a;a++)j.children().first().appendTo(j);j.css("top",-k*x)}})}h.removeClass(c.titOnClassName).eq(n).addClass(c.titOnClassName),D=n,0==w&&(f.removeClass("nextStop"),e.removeClass("prevStop"),0==n?e.addClass("prevStop"):n==i-1&&f.addClass("nextStop")),g.html("<span>"+(n+1)+"</span>/"+i)}};J(!0),t&&("leftMarquee"==d||"topMarquee"==d?(u?n--:n++,C=setInterval(J,p),j.hover(function(){t&&clearInterval(C)},function(){t&&(clearInterval(C),C=setInterval(J,p))})):(C=setInterval(function(){u?n--:n++,J()},p),a(this).hover(function(){t&&clearInterval(C)},function(){t&&(clearInterval(C),C=setInterval(function(){u?n--:n++,J()},p))})));var K;"mouseover"==c.trigger?h.hover(function(){n=h.index(this),K=window.setTimeout(J,c.triggerTime)},function(){clearTimeout(K)}):h.click(function(){n=h.index(this),J()}),f.click(function(){(1==w||n!=i-1)&&(n++,J())}),e.click(function(){(1==w||0!=n)&&(n--,J())})})}})(jQuery),jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){return 1>(b/=e/2)?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){return 1>(b/=e/2)?d/2*b*b*b+c:d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){return 1>(b/=e/2)?d/2*b*b*b*b+c:-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){return 1>(b/=e/2)?d/2*b*b*b*b*b+c:d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return 0==b?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){return 0==b?c:b==e?c+d:1>(b/=e/2)?d/2*Math.pow(2,10*(b-1))+c:d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){return 1>(b/=e/2)?-d/2*(Math.sqrt(1-b*b)-1)+c:d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(1==(b/=e))return c+d;if(g||(g=.3*e),Math.abs(d)>h){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(1==(b/=e))return c+d;if(g||(g=.3*e),Math.abs(d)>h){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(2==(b/=e/2))return c+d;if(g||(g=e*.3*1.5),Math.abs(d)>h){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return 1>b?-.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c:.5*h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),1>(b/=e/2)?d/2*b*b*(((f*=1.525)+1)*b-f)+c:d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){return 1/2.75>(b/=e)?d*7.5625*b*b+c:2/2.75>b?d*(7.5625*(b-=1.5/2.75)*b+.75)+c:2.5/2.75>b?d*(7.5625*(b-=2.25/2.75)*b+.9375)+c:d*(7.5625*(b-=2.625/2.75)*b+.984375)+c},easeInOutBounce:function(a,b,c,d,e){return e/2>b?.5*jQuery.easing.easeInBounce(a,2*b,0,d,e)+c:.5*jQuery.easing.easeOutBounce(a,2*b-e,0,d,e)+.5*d+c}});



//设置激活密码验证
var config3 = {
   customer_coding : false,
   a_mobile		:	false
};

function checksubmit() { //提交的时候，验证最后一次
    for(var ele in config3) { //所有需要验证的元素
        if(!config3[ele]) { //如果为false，验证
            if(ele == "sex") {
                check3($("input[name='sex']"),"blur");
            } else {
                check3($("#" + ele),"blur");
            }
        }
    }
    var submit = true;
    for(var ele in config3) {
        if(!config3[ele]) {
            submit = false;
            break;
        }
    }
    if(submit) {
        //ajax提交
        var url3			= "user.php?act=ajax_act_register2";

        var	postdata3 = {
			customer_coding	: $("#customer_coding").val(),
			a_mobile		: $("#a_mobile").val()
        };
$.post(url3,postdata3,function(data) {
            if(data == "succeed") { //如果重置成功
			//alert('贵宾账户激活成功');
			window.location.href = 'user.php?act=VIPvalidatephone&username='+$("#a_mobile").val();
            //window.location.href = 'user.php?act=getVIPpassword_action';
/*if(eventid && inviteid) {
window.location.href = 'space.php?do=event&action=invite&eventid='+eventid+"&inviteid="+inviteid;
} else {
window.location.reload();
            	}*/
} else {
                alert(data);
            }
        });
    }
}

function check3(obj,type) {
    return new Element3(obj).init(type);
}
function Element3(obj) {
    this.setObj3(obj)
}
Element3.prototype = {
    obj:"",
    parent:"",
    hint:"",
    hintitem:"",
    hinttext:"",
    id:"",
    val:"",
    init:function(type) {
        this.oper3(type);
    },
    setObj3 : function(obj) {
        if(obj instanceof $) { //如果该对象已经是$
            this.obj = obj;
        } else {
            this.obj = $(obj);
        }
        this.obj	= $(obj);
        if(this.obj.length == 1) { //当前元素唯一
            this.val	= this.obj.val();
            this.id		= this.obj.attr("id");  
        } 
        this.parent = this.obj.parent();
        this.hint	= this.parent.next();
        //if(this.id == 'seccode') {
			//this.parent.find("span").addClass("re-wrong");
           // this.hint = this.parent.find("span");
        //}
    },
    oper3 : function(type) {
        switch(this.id) {
			case 'customer_coding':
                if(type == "focus") {
                    this.focuscustomer_coding();
                } else {
                    this.blurcustomer_coding();
                }
                break;
			case 'a_mobile':
			if(type == "focus") {
				this.focusa_mobile();
			} else {
				this.blura_mobile();
			}
			break;
        }
    },
	 focuscustomer_coding:function() {
        this.hinthide3("hint","");
    },
    blurcustomer_coding:function() {
       config3.customer_coding = false;
        var customer_coding = this.val;
        if(!customer_coding) {
            this.hintshow3("wrong","客户编号不能为空");
            return false;
        }
        if(customer_coding.length > 20) {
            this.hintshow3("wrong","客户编号错误");
            return false;
        }
		config3.customer_coding = true;
        this.hinthide3();
    },
	 focusa_mobile:function() {
        this.hinthide3("hint","");
    },
    blura_mobile:function() {
        config3.a_mobile = false;
        var mobile  = this.val;
        if(!mobile || !/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(mobile)) {
            this.hintshow3("wrong","手机号不能为空或者格式不正确");
			return false;
        } else {
            config3.a_mobile = true;
            this.hinthide3();
        }
    },
    hintshow3 : function(classname,text) { //显示提示
        if(!classname || classname == "right") {
            text = "&nbsp;";
        }
        if(classname == "wrong") {
            classname = "re-wrong";
        }
        this.hint.html(text);
        this.hint.show();
    },
    hinthide3 : function() { //隐藏提示
        this.hint.hide();
    }
	
}


































