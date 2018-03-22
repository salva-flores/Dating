!function(t,e){"function"==typeof define&&define.amd?define([],e()):"object"==typeof exports?module.exports=e():t.iziToast=e()}("undefined"!=typeof global?global:window||this.window||this.global,function(t){"use strict";var e={},o="iziToast",n=(document.querySelector("body"),!!/Mobi/.test(navigator.userAgent)),s=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),i="undefined"!=typeof InstallTrigger,a="ontouchstart"in document.documentElement,r=["bottomRight","bottomLeft","bottomCenter","topRight","topLeft","topCenter","center"],l=568,d={},c={id:null,class:"",title:"",titleColor:"",titleSize:"",titleLineHeight:"",message:"",messageColor:"",messageSize:"",messageLineHeight:"",backgroundColor:"",theme:"light",color:"",icon:"",iconText:"",iconColor:"",image:"",imageWidth:50,maxWidth:null,zindex:null,layout:1,balloon:!1,close:!0,closeOnEscape:!1,rtl:!1,position:"bottomRight",target:"",targetFirst:!0,toastOnce:!1,timeout:5e3,animateInside:!0,drag:!0,pauseOnHover:!0,resetOnHover:!1,progressBar:!0,progressBarColor:"",progressBarEasing:"linear",overlay:!1,overlayClose:!1,overlayColor:"rgba(0, 0, 0, 0.6)",transitionIn:"fadeInUp",transitionOut:"fadeOut",transitionInMobile:"fadeInUp",transitionOutMobile:"fadeOutDown",buttons:{},onOpening:function(){},onOpened:function(){},onClosing:function(){},onClosed:function(){}};if("remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)}),"function"!=typeof window.CustomEvent){var u=function(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var o=document.createEvent("CustomEvent");return o.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),o};u.prototype=window.Event.prototype,window.CustomEvent=u}var p=function(t,e,o){if("[object Object]"===Object.prototype.toString.call(t))for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.call(o,t[n],n,t);else if(t)for(var s=0,i=t.length;i>s;s++)e.call(o,t[s],s,t)},m=function(t,e){var o={};return p(t,function(e,n){o[n]=t[n]}),p(e,function(t,n){o[n]=e[n]}),o},g=function(t){var e=document.createDocumentFragment(),o=document.createElement("div");for(o.innerHTML=t;o.firstChild;)e.appendChild(o.firstChild);return e},v={move:function(t,e,n,a){var r,l=180;0!==a&&(t.classList.add(o+"-dragged"),t.style.transform="translateX("+a+"px)",a>0?.3>(r=(l-a)/l)&&e.hide(t,m(n,{transitionOut:"fadeOutRight",transitionOutMobile:"fadeOutRight"}),"drag"):.3>(r=(l+a)/l)&&e.hide(t,m(n,{transitionOut:"fadeOutLeft",transitionOutMobile:"fadeOutLeft"}),"drag"),t.style.opacity=r,.3>r&&((s||i)&&(t.style.left=a+"px"),t.parentNode.style.opacity=.3,this.stopMoving(t,null)))},startMoving:function(t,e,o,n){n=n||window.event;var s=a?n.touches[0].clientX:n.clientX,i=t.style.transform.replace("px)",""),r=s-(i=i.replace("translateX(",""));t.classList.remove(o.transitionIn),t.classList.remove(o.transitionInMobile),t.style.transition="",a?document.ontouchmove=function(n){n.preventDefault(),n=n||window.event,v.move(t,e,o,n.touches[0].clientX-r)}:document.onmousemove=function(n){n.preventDefault(),n=n||window.event,v.move(t,e,o,n.clientX-r)}},stopMoving:function(t,e){a?document.ontouchmove=function(){}:document.onmousemove=function(){},t.style.opacity="",t.style.transform="",t.classList.contains(o+"-dragged")&&(t.classList.remove(o+"-dragged"),t.style.transition="transform 0.4s ease, opacity 0.4s ease",setTimeout(function(){t.style.transition=""},400))}};return e.destroy=function(){p(document.querySelectorAll("."+o+"-wrapper"),function(t,e){t.remove()}),p(document.querySelectorAll("."+o),function(t,e){t.remove()}),document.removeEventListener(o+"-opened",{},!1),document.removeEventListener(o+"-opening",{},!1),document.removeEventListener(o+"-closing",{},!1),document.removeEventListener(o+"-closed",{},!1),document.removeEventListener("keyup",{},!1),d={}},e.settings=function(t){e.destroy(),d=t,c=m(c,t||{})},p({info:{color:"blue",icon:"ico-info"},success:{color:"green",icon:"ico-success"},warning:{color:"orange",icon:"ico-warning"},error:{color:"red",icon:"ico-error"},question:{color:"yellow",icon:"ico-question"}},function(t,o){e[o]=function(e){var o=m(d,e||{});o=m(t,o||{}),this.show(o)}}),e.progress=function(t,e,n){var s=this,i=m(s.settings,e||{}),a=t.querySelector("."+o+"-progressbar div");return{start:function(){null!==a&&(a.style.transition="width "+i.timeout+"ms "+i.progressBarEasing,a.style.width="0%"),i.TIME.START=(new Date).getTime(),i.TIME.END=i.TIME.START+i.timeout,i.TIME.TIMER=setTimeout(function(){clearTimeout(i.TIME.TIMER),t.classList.contains(o+"-closing")||(s.hide(t,i,"timeout"),"function"==typeof n&&n.apply(s))},i.timeout)},pause:function(){if(i.TIME.REMAINING=i.TIME.END-(new Date).getTime(),clearTimeout(i.TIME.TIMER),null!==a){var t=window.getComputedStyle(a).getPropertyValue("width");a.style.transition="none",a.style.width=t}"function"==typeof n&&setTimeout(function(){n.apply(s)},10)},resume:function(){null!==a&&(a.style.transition="width "+i.TIME.REMAINING+"ms "+i.progressBarEasing,a.style.width="0%"),i.TIME.END=(new Date).getTime()+i.TIME.REMAINING,i.TIME.TIMER=setTimeout(function(){clearTimeout(i.TIME.TIMER),t.classList.contains(o+"-closing")||(s.hide(t,i,"timeout"),"function"==typeof n&&n.apply(s))},i.TIME.REMAINING)},reset:function(){clearTimeout(i.TIME.TIMER),null!==a&&(a.style.transition="none",a.style.width="100%"),"function"==typeof n&&setTimeout(function(){n.apply(s)},10)}}},e.hide=function(t,e,s){var i=m(this.settings,e||{});s=s||null,"object"!=typeof t&&(t=document.querySelector(t)),t.classList.add(o+"-closing"),i.closedBy=s,i.REF=t.getAttribute("data-iziToast-ref"),function(){var t=document.querySelector("."+o+"-overlay");if(null!==t){var e=t.getAttribute("data-iziToast-ref"),n=(e=e.split(",")).indexOf(i.REF);-1!==n&&e.splice(n,1),t.setAttribute("data-iziToast-ref",e.join()),0===e.length&&(t.classList.remove("fadeIn"),t.classList.add("fadeOut"),setTimeout(function(){t.remove()},700))}}(),(i.transitionIn||i.transitionInMobile)&&(t.classList.remove(i.transitionIn),t.classList.remove(i.transitionInMobile)),n||window.innerWidth<=l?i.transitionOutMobile&&t.classList.add(i.transitionOutMobile):i.transitionOut&&t.classList.add(i.transitionOut),t.parentNode.style.height=t.parentNode.offsetHeight+"px",t.style.pointerEvents="none",(!n||window.innerWidth>l)&&(t.parentNode.style.transitionDelay="0.2s");try{i.closedBy=s;var a=new CustomEvent(o+"-closing",{detail:i,bubbles:!0,cancelable:!0});document.dispatchEvent(a)}catch(t){console.warn(t)}setTimeout(function(){t.parentNode.style.height="0px",t.parentNode.style.overflow="",setTimeout(function(){t.parentNode.remove();try{i.closedBy=s;var e=new CustomEvent(o+"-closed",{detail:i,bubbles:!0,cancelable:!0});document.dispatchEvent(e)}catch(t){console.warn(t)}"undefined"!=typeof i.onClosed&&i.onClosed.apply(null,[i,t,s])},1e3)},200),"undefined"!=typeof i.onClosing&&i.onClosing.apply(null,[i,t,s])},e.show=function(t){var e=this,s=m(d,t||{});if((s=m(c,s)).TIME={},s.toastOnce&&s.id&&document.querySelectorAll("."+o+"#"+s.id).length>0)return!1;s.REF=(new Date).getTime()+Math.floor(1e7*Math.random()+1);var i={body:document.querySelector("body"),overlay:document.createElement("div"),toast:document.createElement("div"),toastBody:document.createElement("div"),toastTexts:document.createElement("div"),toastCapsule:document.createElement("div"),icon:document.createElement("i"),cover:document.createElement("div"),buttons:document.createElement("div"),wrapper:null};i.toast.setAttribute("data-iziToast-ref",s.REF),i.toast.appendChild(i.toastBody),i.toastCapsule.appendChild(i.toast),function(){if(i.toast.classList.add(o),i.toast.classList.add(o+"-opening"),i.toastCapsule.classList.add(o+"-capsule"),i.toastBody.classList.add(o+"-body"),i.toastTexts.classList.add(o+"-texts"),n||window.innerWidth<=l?s.transitionInMobile&&i.toast.classList.add(s.transitionInMobile):s.transitionIn&&i.toast.classList.add(s.transitionIn),s.class){var t=s.class.split(" ");p(t,function(t,e){i.toast.classList.add(t)})}s.id&&(i.toast.id=s.id),s.rtl&&i.toast.classList.add(o+"-rtl"),s.layout>1&&i.toast.classList.add(o+"-layout"+s.layout),s.balloon&&i.toast.classList.add(o+"-balloon"),s.maxWidth&&(i.toast.style.maxWidth=isNaN(s.maxWidth)?s.maxWidth:s.maxWidth+"px"),""===s.theme&&"light"===s.theme||i.toast.classList.add(o+"-theme-"+s.theme),s.color&&(function(t){return"#"==t.substring(0,1)||"rgb"==t.substring(0,3)||"hsl"==t.substring(0,3)}(s.color)?i.toast.style.background=s.color:i.toast.classList.add(o+"-color-"+s.color)),s.backgroundColor&&(i.toast.style.background=s.backgroundColor,s.balloon&&(i.toast.style.borderColor=s.backgroundColor))}(),s.image&&(i.cover.classList.add(o+"-cover"),i.cover.style.width=s.imageWidth+"px",i.cover.style.backgroundImage=function(t){try{return btoa(atob(t))==t}catch(t){return!1}}(s.image.replace(/ /g,""))?"url(data:image/png;base64,"+s.image.replace(/ /g,"")+")":"url("+s.image+")",s.rtl?i.toastBody.style.marginRight=s.imageWidth+10+"px":i.toastBody.style.marginLeft=s.imageWidth+10+"px",i.toast.appendChild(i.cover)),s.close?(i.buttonClose=document.createElement("button"),i.buttonClose.classList.add(o+"-close"),i.buttonClose.addEventListener("click",function(t){e.hide(i.toast,s,"button")}),i.toast.appendChild(i.buttonClose)):s.rtl?i.toast.style.paddingLeft="20px":i.toast.style.paddingRight="20px",s.timeout&&(s.progressBar&&(i.progressBar=document.createElement("div"),i.progressBarDiv=document.createElement("div"),i.progressBar.classList.add(o+"-progressbar"),i.progressBarDiv.style.background=s.progressBarColor,i.progressBar.appendChild(i.progressBarDiv),i.toast.appendChild(i.progressBar)),s.pauseOnHover&&!s.resetOnHover&&(i.toast.addEventListener("mouseenter",function(t){this.classList.add(o+"-paused"),e.progress(i.toast,s).pause()}),i.toast.addEventListener("mouseleave",function(t){this.classList.remove(o+"-paused"),e.progress(i.toast,s).resume()})),s.resetOnHover&&(i.toast.addEventListener("mouseenter",function(t){this.classList.add(o+"-reseted"),e.progress(i.toast,s).reset()}),i.toast.addEventListener("mouseleave",function(t){this.classList.remove(o+"-reseted"),e.progress(i.toast,s).start()}))),s.icon&&(i.icon.setAttribute("class",o+"-icon "+s.icon),s.iconText&&i.icon.appendChild(document.createTextNode(s.iconText)),s.rtl?i.toastBody.style.paddingRight="33px":i.toastBody.style.paddingLeft="33px",s.iconColor&&(i.icon.style.color=s.iconColor),i.toastBody.appendChild(i.icon)),s.title.length>0&&(i.strong=document.createElement("strong"),i.strong.classList.add(o+"-title"),i.strong.appendChild(g(s.title)),i.toastTexts.appendChild(i.strong),s.titleColor&&(i.strong.style.color=s.titleColor),s.titleSize&&(i.strong.style.fontSize=isNaN(s.titleSize)?s.titleSize:s.titleSize+"px"),s.titleLineHeight&&(i.strong.style.lineHeight=isNaN(s.titleSize)?s.titleLineHeight:s.titleLineHeight+"px")),s.message.length>0&&(i.p=document.createElement("p"),i.p.classList.add(o+"-message"),i.p.appendChild(g(s.message)),i.toastTexts.appendChild(i.p),s.messageColor&&(i.p.style.color=s.messageColor),s.messageSize&&(i.p.style.fontSize=isNaN(s.titleSize)?s.messageSize:s.messageSize+"px"),s.messageLineHeight&&(i.p.style.lineHeight=isNaN(s.titleSize)?s.messageLineHeight:s.messageLineHeight+"px")),s.title.length>0&&s.message.length>0&&(s.rtl?i.strong.style.marginLeft="10px":2===s.layout||s.rtl||(i.strong.style.marginRight="10px")),i.toastBody.appendChild(i.toastTexts),s.buttons.length>0&&(i.buttons.classList.add(o+"-buttons"),s.title.length>0&&0===s.message.length&&(s.rtl?i.strong.style.marginLeft="15px":i.strong.style.marginRight="15px"),s.message.length>0&&(s.rtl?i.p.style.marginLeft="15px":i.p.style.marginRight="15px",i.p.style.marginBottom="0"),p(s.buttons,function(t,n){i.buttons.appendChild(g(t[0]));var s=i.buttons.childNodes;s[n].classList.add(o+"-buttons-child"),t[2]&&setTimeout(function(){s[n].focus()},300),s[n].addEventListener("click",function(o){return o.preventDefault(),(0,t[1])(e,i.toast)})})),i.toastBody.appendChild(i.buttons),i.toastCapsule.style.visibility="hidden",setTimeout(function(){var t=i.toast.offsetHeight,o=i.toast.currentStyle||window.getComputedStyle(i.toast),n=o.marginTop;n=n.split("px"),n=parseInt(n[0]);var a=o.marginBottom;a=a.split("px"),a=parseInt(a[0]),i.toastCapsule.style.visibility="",i.toastCapsule.style.height=t+a+n+"px",setTimeout(function(){i.toastCapsule.style.height="auto",s.target&&(i.toastCapsule.style.overflow="visible")},500),s.timeout&&e.progress(i.toast,s).start()},100),function(){var t=s.position;if(s.target)i.wrapper=document.querySelector(s.target),i.wrapper.classList.add(o+"-target"),s.targetFirst?i.wrapper.insertBefore(i.toastCapsule,i.wrapper.firstChild):i.wrapper.appendChild(i.toastCapsule);else{if(-1==r.indexOf(s.position))return void console.warn("["+o+"] Incorrect position.\nIt can be \u203a "+r);t=n||window.innerWidth<=l?"bottomLeft"==s.position||"bottomRight"==s.position||"bottomCenter"==s.position?o+"-wrapper-bottomCenter":"topLeft"==s.position||"topRight"==s.position||"topCenter"==s.position?o+"-wrapper-topCenter":o+"-wrapper-center":o+"-wrapper-"+t,i.wrapper=document.querySelector("."+o+"-wrapper."+t),i.wrapper||(i.wrapper=document.createElement("div"),i.wrapper.classList.add(o+"-wrapper"),i.wrapper.classList.add(t),document.body.appendChild(i.wrapper)),"topLeft"==s.position||"topCenter"==s.position||"topRight"==s.position?i.wrapper.insertBefore(i.toastCapsule,i.wrapper.firstChild):i.wrapper.appendChild(i.toastCapsule)}isNaN(s.zindex)?console.warn("["+o+"] Invalid zIndex."):i.wrapper.style.zIndex=s.zindex}(),s.overlay&&(null!==document.querySelector("."+o+"-overlay.fadeIn")?(i.overlay=document.querySelector("."+o+"-overlay"),i.overlay.setAttribute("data-iziToast-ref",i.overlay.getAttribute("data-iziToast-ref")+","+s.REF),isNaN(s.zindex)||null===s.zindex||(i.overlay.style.zIndex=s.zindex-1)):(i.overlay.classList.add(o+"-overlay"),i.overlay.classList.add("fadeIn"),i.overlay.style.background=s.overlayColor,i.overlay.setAttribute("data-iziToast-ref",s.REF),isNaN(s.zindex)||null===s.zindex||(i.overlay.style.zIndex=s.zindex-1),document.querySelector("body").appendChild(i.overlay)),s.overlayClose?(i.overlay.removeEventListener("click",{}),i.overlay.addEventListener("click",function(t){e.hide(i.toast,s,"overlay")})):i.overlay.removeEventListener("click",{})),function(){if(s.animateInside){i.toast.classList.add(o+"-animateInside");var t=[200,100,300];if("bounceInLeft"==s.transitionIn&&(t=[400,200,400]),s.title.length>0&&setTimeout(function(){i.strong.classList.add("slideIn")},t[0]),s.message.length>0&&setTimeout(function(){i.p.classList.add("slideIn")},t[1]),s.icon&&setTimeout(function(){i.icon.classList.add("revealIn")},t[2]),s.buttons.length>0&&i.buttons){var e=150;p(i.buttons.childNodes,function(t,o){setTimeout(function(){t.classList.add("revealIn")},e),e+=150})}}}(),s.onOpening.apply(null,[s,i.toast]);try{var u=new CustomEvent(o+"-opening",{detail:s,bubbles:!0,cancelable:!0});document.dispatchEvent(u)}catch(t){console.warn(t)}setTimeout(function(){i.toast.classList.remove(o+"-opening"),i.toast.classList.add(o+"-opened");try{var t=new CustomEvent(o+"-opened",{detail:s,bubbles:!0,cancelable:!0});document.dispatchEvent(t)}catch(t){console.warn(t)}s.onOpened.apply(null,[s,i.toast])},1e3),s.drag&&(a?(i.toast.addEventListener("touchstart",function(t){v.startMoving(this,e,s,t)},!1),i.toast.addEventListener("touchend",function(t){v.stopMoving(this,t)},!1)):(i.toast.addEventListener("mousedown",function(t){t.preventDefault(),v.startMoving(this,e,s,t)},!1),i.toast.addEventListener("mouseup",function(t){t.preventDefault(),v.stopMoving(this,t)},!1))),s.closeOnEscape&&document.addEventListener("keyup",function(t){27==(t=t||window.event).keyCode&&e.hide(i.toast,s,"esc")}),e.toast=i.toast},e});