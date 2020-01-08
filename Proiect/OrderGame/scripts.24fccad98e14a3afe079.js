!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.Sweetalert2=e()}(this,function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function o(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}function i(){return(i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t,e,n){return(s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var o=[null];o.push.apply(o,e);var i=new(Function.bind.apply(t,o));return n&&a(i,n.prototype),i}).apply(null,arguments)}function u(t,e,n){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=r(t)););return t}(t,e);if(o){var i=Object.getOwnPropertyDescriptor(o,e);return i.get?i.get.call(n):i.value}})(t,e,n||t)}function c(t){return Object.keys(t).map(function(e){return t[e]})}function l(t){return Array.prototype.slice.call(t)}function d(t){console.error("".concat(v," ").concat(t))}function p(t,e){!function(t){-1===y.indexOf(t)&&(y.push(t),b(t))}('"'.concat(t,'" is deprecated and will be removed in the next major release. Please use "').concat(e,'" instead.'))}function f(t){return t&&Promise.resolve(t)===t}function m(t){var e={};for(var n in t)e[t[n]]="swal2-"+t[n];return e}function g(t,e){return t.classList.contains(e)}function h(t,e,n){l(t.classList).forEach(function(e){-1===c(k).indexOf(e)&&-1===c(B).indexOf(e)&&t.classList.remove(e)}),e&&e[n]&&ot(t,e[n])}var v="SweetAlert2:",b=function(t){console.warn("".concat(v," ").concat(t))},y=[],w=function(t){return"function"==typeof t?t():t},C=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),k=m(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","toast","toast-shown","toast-column","fade","show","hide","noanimation","close","title","header","content","actions","confirm","cancel","footer","icon","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl"]),B=m(["success","warning","info","question","error"]),x={previousBodyPadding:null};function S(t,e){if(!e)return null;switch(e){case"select":case"textarea":case"file":return rt(t,k[e]);case"checkbox":return t.querySelector(".".concat(k.checkbox," input"));case"radio":return t.querySelector(".".concat(k.radio," input:checked"))||t.querySelector(".".concat(k.radio," input:first-child"));case"range":return t.querySelector(".".concat(k.range," input"));default:return rt(t,k.input)}}function P(t){if(t.focus(),"file"!==t.type){var e=t.value;t.value="",t.value=e}}function A(t,e,n){t&&e&&("string"==typeof e&&(e=e.split(/\s+/).filter(Boolean)),e.forEach(function(e){t.forEach?t.forEach(function(t){n?t.classList.add(e):t.classList.remove(e)}):n?t.classList.add(e):t.classList.remove(e)}))}function E(t,e,n){n||0===parseInt(n)?t.style[e]="number"==typeof n?n+"px":n:t.style.removeProperty(e)}function T(t,e){var n=1<arguments.length&&void 0!==e?e:"flex";t.style.opacity="",t.style.display=n}function L(t){t.style.opacity="",t.style.display="none"}function O(t,e,n){e?T(t,n):L(t)}function M(t){return!(!t||!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))}function V(t){var e=window.getComputedStyle(t),n=parseFloat(e.getPropertyValue("animation-duration")||"0"),o=parseFloat(e.getPropertyValue("transition-duration")||"0");return 0<n||0<o}function H(){return document.body.querySelector("."+k.container)}function j(t){var e=H();return e?e.querySelector(t):null}function q(t){return j("."+t)}function I(){return q(k.popup)}function R(){return l(I().querySelectorAll("."+k.icon))}function D(){var t=R().filter(function(t){return M(t)});return t.length?t[0]:null}function N(){return q(k.title)}function U(){return q(k.content)}function _(){return q(k.image)}function z(){return q(k["progress-steps"])}function F(){return q(k["validation-message"])}function W(){return j("."+k.actions+" ."+k.confirm)}function K(){return j("."+k.actions+" ."+k.cancel)}function Z(){return q(k.actions)}function Q(){return q(k.header)}function Y(){return q(k.footer)}function $(){return q(k.close)}function J(){var t=l(I().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function(t,e){return t=parseInt(t.getAttribute("tabindex")),(e=parseInt(e.getAttribute("tabindex")))<t?1:t<e?-1:0}),e=l(I().querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls]')).filter(function(t){return"-1"!==t.getAttribute("tabindex")});return function(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}(t.concat(e)).filter(function(t){return M(t)})}function X(){return!at()&&!document.body.classList.contains(k["no-backdrop"])}function G(){return"undefined"==typeof window||"undefined"==typeof document}function tt(t){Jt.isVisible()&&nt!==t.target.value&&Jt.resetValidationMessage(),nt=t.target.value}function et(e,n){e instanceof HTMLElement?n.appendChild(e):"object"===t(e)?ut(n,e):e&&(n.innerHTML=e)}var nt,ot=function(t,e){A(t,e,!0)},it=function(t,e){A(t,e,!1)},rt=function(t,e){for(var n=0;n<t.childNodes.length;n++)if(g(t.childNodes[n],e))return t.childNodes[n]},at=function(){return document.body.classList.contains(k["toast-shown"])},st='\n <div aria-labelledby="'.concat(k.title,'" aria-describedby="').concat(k.content,'" class="').concat(k.popup,'" tabindex="-1">\n   <div class="').concat(k.header,'">\n     <ul class="').concat(k["progress-steps"],'"></ul>\n     <div class="').concat(k.icon," ").concat(B.error,'">\n       <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>\n     </div>\n     <div class="').concat(k.icon," ").concat(B.question,'"></div>\n     <div class="').concat(k.icon," ").concat(B.warning,'"></div>\n     <div class="').concat(k.icon," ").concat(B.info,'"></div>\n     <div class="').concat(k.icon," ").concat(B.success,'">\n       <div class="swal2-success-circular-line-left"></div>\n       <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n       <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n       <div class="swal2-success-circular-line-right"></div>\n     </div>\n     <img class="').concat(k.image,'" />\n     <h2 class="').concat(k.title,'" id="').concat(k.title,'"></h2>\n     <button type="button" class="').concat(k.close,'"></button>\n   </div>\n   <div class="').concat(k.content,'">\n     <div id="').concat(k.content,'"></div>\n     <input class="').concat(k.input,'" />\n     <input type="file" class="').concat(k.file,'" />\n     <div class="').concat(k.range,'">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="').concat(k.select,'"></select>\n     <div class="').concat(k.radio,'"></div>\n     <label for="').concat(k.checkbox,'" class="').concat(k.checkbox,'">\n       <input type="checkbox" />\n       <span class="').concat(k.label,'"></span>\n     </label>\n     <textarea class="').concat(k.textarea,'"></textarea>\n     <div class="').concat(k["validation-message"],'" id="').concat(k["validation-message"],'"></div>\n   </div>\n   <div class="').concat(k.actions,'">\n     <button type="button" class="').concat(k.confirm,'">OK</button>\n     <button type="button" class="').concat(k.cancel,'">Cancel</button>\n   </div>\n   <div class="').concat(k.footer,'">\n   </div>\n </div>\n').replace(/(^|\n)\s*/g,""),ut=function(t,e){if(t.innerHTML="",0 in e)for(var n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},ct=function(){if(G())return!1;var t=document.createElement("div"),e={WebkitAnimation:"webkitAnimationEnd",OAnimation:"oAnimationEnd oanimationend",animation:"animationend"};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&void 0!==t.style[n])return e[n];return!1}();function lt(t,e,n){O(t,n["showC"+e.substring(1)+"Button"],"inline-block"),t.innerHTML=n[e+"ButtonText"],t.setAttribute("aria-label",n[e+"ButtonAriaLabel"]),t.className=k[e],h(t,n.customClass,e+"Button"),ot(t,n[e+"ButtonClass"])}function dt(t,e){t.placeholder&&!e.inputPlaceholder||(t.placeholder=e.inputPlaceholder)}var pt={promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap},ft=["input","file","range","select","radio","checkbox","textarea"],mt=function(t){if(!vt[t.input])return d('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(t.input,'"'));T(vt[t.input](t))},gt=function(t,e){var n=S(U(),t);if(n)for(var o in function(t){for(var e=0;e<t.attributes.length;e++){var n=t.attributes[e].name;-1===["type","value","style"].indexOf(n)&&t.removeAttribute(n)}}(n),e)"range"===t&&"placeholder"===o||n.setAttribute(o,e[o])},ht=function(t,e,n){t.className=e,n.inputClass&&ot(t,n.inputClass),n.customClass&&ot(t,n.customClass.input)},vt={};function bt(t,e){var n=z();if(!e.progressSteps||0===e.progressSteps.length)return L(n);T(n),n.innerHTML="";var o=parseInt(null===e.currentProgressStep?Jt.getQueueStep():e.currentProgressStep);o>=e.progressSteps.length&&b("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),e.progressSteps.forEach(function(t,i){var r=function(t){var e=document.createElement("li");return ot(e,k["progress-step"]),e.innerHTML=t,e}(t);if(n.appendChild(r),i===o&&ot(r,k["active-progress-step"]),i!==e.progressSteps.length-1){var a=function(t){var e=document.createElement("li");return ot(e,k["progress-step-line"]),t.progressStepsDistance&&(e.style.width=t.progressStepsDistance),e}(t);n.appendChild(a)}})}function yt(t,e){!function(t,e){var n=I();E(n,"width",e.width),E(n,"padding",e.padding),e.background&&(n.style.background=e.background),n.className=k.popup,e.toast?(ot([document.documentElement,document.body],k["toast-shown"]),ot(n,k.toast)):ot(n,k.modal),h(n,e.customClass,"popup"),"string"==typeof e.customClass&&ot(n,e.customClass),A(n,k.noanimation,!e.animation)}(0,e),function(t,e){var n=H();n&&(function(t,e){"string"==typeof e?n.style.background=e:e||ot([document.documentElement,document.body],k["no-backdrop"])}(0,e.backdrop),!e.backdrop&&e.allowOutsideClick&&b('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),function(t,e){e in k?ot(t,k[e]):(b('The "position" parameter is not valid, defaulting to "center"'),ot(t,k.center))}(n,e.position),function(t,e){if(e&&"string"==typeof e){var n="grow-"+e;n in k&&ot(t,k[n])}}(n,e.grow),h(n,e.customClass,"container"),e.customContainerClass&&ot(n,e.customContainerClass))}(0,e),function(t,e){h(Q(),e.customClass,"header"),bt(0,e),function(t,e){var n=pt.innerParams.get(t);if(n&&e.type===n.type&&D())h(D(),e.customClass,"icon");else if(wt(),e.type)if(Ct(),-1!==Object.keys(B).indexOf(e.type)){var o=j(".".concat(k.icon,".").concat(B[e.type]));T(o),h(o,e.customClass,"icon"),A(o,"swal2-animate-".concat(e.type,"-icon"),e.animation)}else d('Unknown type! Expected "success", "error", "warning", "info" or "question", got "'.concat(e.type,'"'))}(t,e),function(t,e){var n=_();if(!e.imageUrl)return L(n);T(n),n.setAttribute("src",e.imageUrl),n.setAttribute("alt",e.imageAlt),E(n,"width",e.imageWidth),E(n,"height",e.imageHeight),n.className=k.image,h(n,e.customClass,"image"),e.imageClass&&ot(n,e.imageClass)}(0,e),function(t,e){var n=N();O(n,e.title||e.titleText),e.title&&et(e.title,n),e.titleText&&(n.innerText=e.titleText),h(n,e.customClass,"title")}(0,e),function(t,e){var n=$();n.innerHTML=e.closeButtonHtml,h(n,e.customClass,"closeButton"),O(n,e.showCloseButton),n.setAttribute("aria-label",e.closeButtonAriaLabel)}(0,e)}(t,e),function(t,e){var n=U().querySelector("#"+k.content);e.html?(et(e.html,n),T(n,"block")):e.text?(n.textContent=e.text,T(n,"block")):L(n),function(t,e){var n=U(),o=pt.innerParams.get(t),i=!o||e.input!==o.input;ft.forEach(function(t){var o=k[t],r=rt(n,o);gt(t,e.inputAttributes),ht(r,o,e),i&&L(r)}),e.input&&i&&mt(e)}(t,e),h(U(),e.customClass,"content")}(t,e),function(t,e){var n=Z(),o=W(),i=K();e.showConfirmButton||e.showCancelButton?T(n):L(n),h(n,e.customClass,"actions"),lt(o,"confirm",e),lt(i,"cancel",e),e.buttonsStyling?function(t,e,n){ot([t,e],k.styled),n.confirmButtonColor&&(t.style.backgroundColor=n.confirmButtonColor),n.cancelButtonColor&&(e.style.backgroundColor=n.cancelButtonColor);var o=window.getComputedStyle(t).getPropertyValue("background-color");t.style.borderLeftColor=o,t.style.borderRightColor=o}(o,i,e):(it([o,i],k.styled),o.style.backgroundColor=o.style.borderLeftColor=o.style.borderRightColor="",i.style.backgroundColor=i.style.borderLeftColor=i.style.borderRightColor="")}(0,e),function(t,e){var n=Y();O(n,e.footer),e.footer&&et(e.footer,n),h(n,e.customClass,"footer")}(0,e)}vt.text=vt.email=vt.password=vt.number=vt.tel=vt.url=function(e){var n=rt(U(),k.input);return"string"==typeof e.inputValue||"number"==typeof e.inputValue?n.value=e.inputValue:f(e.inputValue)||b('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(t(e.inputValue),'"')),dt(n,e),n.type=e.input,n},vt.file=function(t){var e=rt(U(),k.file);return dt(e,t),e.type=t.input,e},vt.range=function(t){var e=rt(U(),k.range),n=e.querySelector("input"),o=e.querySelector("output");return n.value=t.inputValue,n.type=t.input,o.value=t.inputValue,e},vt.select=function(t){var e=rt(U(),k.select);if(e.innerHTML="",t.inputPlaceholder){var n=document.createElement("option");n.innerHTML=t.inputPlaceholder,n.value="",n.disabled=!0,n.selected=!0,e.appendChild(n)}return e},vt.radio=function(){var t=rt(U(),k.radio);return t.innerHTML="",t},vt.checkbox=function(t){var e=rt(U(),k.checkbox),n=S(U(),"checkbox");return n.type="checkbox",n.value=1,n.id=k.checkbox,n.checked=Boolean(t.inputValue),e.querySelector("span").innerHTML=t.inputPlaceholder,e},vt.textarea=function(t){var e=rt(U(),k.textarea);return e.value=t.inputValue,dt(e,t),e};var wt=function(){for(var t=R(),e=0;e<t.length;e++)L(t[e])},Ct=function(){for(var t=I(),e=window.getComputedStyle(t).getPropertyValue("background-color"),n=t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"),o=0;o<n.length;o++)n[o].style.backgroundColor=e};function kt(){var t=I();t||Jt.fire(""),t=I();var e=Z(),n=W(),o=K();T(e),T(n),ot([t,e],k.loading),n.disabled=!0,o.disabled=!0,t.setAttribute("data-loading",!0),t.setAttribute("aria-busy",!0),t.focus()}function Bt(t){return Object.prototype.hasOwnProperty.call(At,t)}function xt(t){return Tt[t]}var St=[],Pt={},At={title:"",titleText:"",text:"",html:"",footer:"",type:null,toast:!1,customClass:"",customContainerClass:"",target:"body",backdrop:!0,animation:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showCancelButton:!1,preConfirm:null,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:null,confirmButtonClass:"",cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:null,cancelButtonClass:"",buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusCancel:!1,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",showLoaderOnConfirm:!1,imageUrl:null,imageWidth:null,imageHeight:null,imageAlt:"",imageClass:"",timer:null,width:null,padding:null,background:null,input:null,inputPlaceholder:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputClass:"",inputAttributes:{},inputValidator:null,validationMessage:null,grow:!1,position:"center",progressSteps:[],currentProgressStep:null,progressStepsDistance:null,onBeforeOpen:null,onAfterClose:null,onOpen:null,onClose:null,scrollbarPadding:!0},Et=["title","titleText","text","html","type","customClass","showConfirmButton","showCancelButton","confirmButtonText","confirmButtonAriaLabel","confirmButtonColor","confirmButtonClass","cancelButtonText","cancelButtonAriaLabel","cancelButtonColor","cancelButtonClass","buttonsStyling","reverseButtons","imageUrl","imageWidth","imageHeigth","imageAlt","imageClass","progressSteps","currentProgressStep"],Tt={customContainerClass:"customClass",confirmButtonClass:"customClass",cancelButtonClass:"customClass",imageClass:"customClass",inputClass:"customClass"},Lt=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusCancel","heightAuto","keydownListenerCapture"],Ot=Object.freeze({isValidParameter:Bt,isUpdatableParameter:function(t){return-1!==Et.indexOf(t)},isDeprecatedParameter:xt,argsToParams:function(e){var n={};switch(t(e[0])){case"object":i(n,e[0]);break;default:["title","html","type"].forEach(function(o,i){switch(t(e[i])){case"string":n[o]=e[i];break;case"undefined":break;default:d("Unexpected type of ".concat(o,'! Expected "string", got ').concat(t(e[i])))}})}return n},isVisible:function(){return M(I())},clickConfirm:function(){return W()&&W().click()},clickCancel:function(){return K()&&K().click()},getContainer:H,getPopup:I,getTitle:N,getContent:U,getImage:_,getIcon:D,getIcons:R,getCloseButton:$,getActions:Z,getConfirmButton:W,getCancelButton:K,getHeader:Q,getFooter:Y,getFocusableElements:J,getValidationMessage:F,isLoading:function(){return I().hasAttribute("data-loading")},fire:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return s(this,e)},mixin:function(t){return function(n){function s(){return e(this,s),function(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}(this,r(s).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(s,n),o(s,[{key:"_main",value:function(e){return u(r(s.prototype),"_main",this).call(this,i({},t,e))}}]),s}(this)},queue:function(t){var e=this;function n(t,e){St=[],document.body.removeAttribute("data-swal2-queue-step"),t(e)}St=t;var o=[];return new Promise(function(t){!function i(r,a){r<St.length?(document.body.setAttribute("data-swal2-queue-step",r),e.fire(St[r]).then(function(e){void 0!==e.value?(o.push(e.value),i(r+1,a)):n(t,{dismiss:e.dismiss})})):n(t,{value:o})}(0)})},getQueueStep:function(){return document.body.getAttribute("data-swal2-queue-step")},insertQueueStep:function(t,e){return e&&e<St.length?St.splice(e,0,t):St.push(t)},deleteQueueStep:function(t){void 0!==St[t]&&St.splice(t,1)},showLoading:kt,enableLoading:kt,getTimerLeft:function(){return Pt.timeout&&Pt.timeout.getTimerLeft()},stopTimer:function(){return Pt.timeout&&Pt.timeout.stop()},resumeTimer:function(){return Pt.timeout&&Pt.timeout.start()},toggleTimer:function(){var t=Pt.timeout;return t&&(t.running?t.stop():t.start())},increaseTimer:function(t){return Pt.timeout&&Pt.timeout.increase(t)},isTimerRunning:function(){return Pt.timeout&&Pt.timeout.isRunning()}});function Mt(){var t=pt.innerParams.get(this),e=pt.domCache.get(this);t.showConfirmButton||(L(e.confirmButton),t.showCancelButton||L(e.actions)),it([e.popup,e.actions],k.loading),e.popup.removeAttribute("aria-busy"),e.popup.removeAttribute("data-loading"),e.confirmButton.disabled=!1,e.cancelButton.disabled=!1}function Vt(){return!!window.MSInputMethodContext&&!!document.documentMode}function Ht(){var t=H(),e=I();t.style.removeProperty("align-items"),e.offsetTop<0&&(t.style.alignItems="flex-start")}var jt={swalPromiseResolve:new WeakMap};function qt(t,e,n,o){n?Nt(t,o):(new Promise(function(t){var e=window.scrollX,n=window.scrollY;Pt.restoreFocusTimeout=setTimeout(function(){Pt.previousActiveElement&&Pt.previousActiveElement.focus?(Pt.previousActiveElement.focus(),Pt.previousActiveElement=null):document.body&&document.body.focus(),t()},100),void 0!==e&&void 0!==n&&window.scrollTo(e,n)}).then(function(){return Nt(t,o)}),Pt.keydownTarget.removeEventListener("keydown",Pt.keydownHandler,{capture:Pt.keydownListenerCapture}),Pt.keydownHandlerAdded=!1),e.parentNode&&e.parentNode.removeChild(e),X()&&(null!==x.previousBodyPadding&&(document.body.style.paddingRight=x.previousBodyPadding+"px",x.previousBodyPadding=null),function(){if(g(document.body,k.iosfix)){var t=parseInt(document.body.style.top,10);it(document.body,k.iosfix),document.body.style.top="",document.body.scrollTop=-1*t}}(),"undefined"!=typeof window&&Vt()&&window.removeEventListener("resize",Ht),l(document.body.children).forEach(function(t){t.hasAttribute("data-previous-aria-hidden")?(t.setAttribute("aria-hidden",t.getAttribute("data-previous-aria-hidden")),t.removeAttribute("data-previous-aria-hidden")):t.removeAttribute("aria-hidden")})),it([document.documentElement,document.body],[k.shown,k["height-auto"],k["no-backdrop"],k["toast-shown"],k["toast-column"]])}function It(t){var e=I();if(e&&!g(e,k.hide)){var n=pt.innerParams.get(this);if(n){var o=jt.swalPromiseResolve.get(this);it(e,k.show),ot(e,k.hide),function(t,e,n){var o=H(),i=ct&&V(e),r=n.onClose,a=n.onAfterClose;null!==r&&"function"==typeof r&&r(e),i?Dt(t,e,o,a):qt(t,o,at(),a)}(this,e,n),o(t||{})}}}function Rt(t){for(var e in t)t[e]=new WeakMap}var Dt=function(t,e,n,o){Pt.swalCloseEventFinishedCallback=qt.bind(null,t,n,at(),o),e.addEventListener(ct,function(t){t.target===e&&(Pt.swalCloseEventFinishedCallback(),delete Pt.swalCloseEventFinishedCallback)})},Nt=function(t,e){setTimeout(function(){null!==e&&"function"==typeof e&&e(),I()||function(t){delete t.params,delete Pt.keydownHandler,delete Pt.keydownTarget,Rt(pt),Rt(jt)}(t)})};function Ut(t,e,n){var o=pt.domCache.get(t);e.forEach(function(t){o[t].disabled=n})}function _t(t,e){if(!t)return!1;if("radio"===t.type)for(var n=t.parentNode.parentNode.querySelectorAll("input"),o=0;o<n.length;o++)n[o].disabled=e;else t.disabled=e}var zt=function(){function t(n,o){e(this,t),this.callback=n,this.remaining=o,this.running=!1,this.start()}return o(t,[{key:"start",value:function(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}},{key:"stop",value:function(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date-this.started),this.remaining}},{key:"increase",value:function(t){var e=this.running;return e&&this.stop(),this.remaining+=t,e&&this.start(),this.remaining}},{key:"getTimerLeft",value:function(){return this.running&&(this.stop(),this.start()),this.remaining}},{key:"isRunning",value:function(){return this.running}}]),t}(),Ft={email:function(t,e){return/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address")},url:function(t,e){return/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&\/=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")}};function Wt(t,e){t.removeEventListener(ct,Wt),e.style.overflowY="auto"}var Kt,Zt={select:function(t,e,n){var o=rt(t,k.select);e.forEach(function(t){var e=t[0],i=t[1],r=document.createElement("option");r.value=e,r.innerHTML=i,n.inputValue.toString()===e.toString()&&(r.selected=!0),o.appendChild(r)}),o.focus()},radio:function(t,e,n){var o=rt(t,k.radio);e.forEach(function(t){var e=t[0],i=t[1],r=document.createElement("input"),a=document.createElement("label");r.type="radio",r.name=k.radio,r.value=e,n.inputValue.toString()===e.toString()&&(r.checked=!0);var s=document.createElement("span");s.innerHTML=i,s.className=k.label,a.appendChild(r),a.appendChild(s),o.appendChild(a)});var i=o.querySelectorAll("input");i.length&&i[0].focus()}},Qt=function(t){var e=[];return"undefined"!=typeof Map&&t instanceof Map?t.forEach(function(t,n){e.push([n,t])}):Object.keys(t).forEach(function(n){e.push([n,t[n]])}),e},Yt=Object.freeze({hideLoading:Mt,disableLoading:Mt,getInput:function(t){var e=pt.innerParams.get(t||this),n=pt.domCache.get(t||this);return n?S(n.content,e.input):null},close:It,closePopup:It,closeModal:It,closeToast:It,enableButtons:function(){Ut(this,["confirmButton","cancelButton"],!1)},disableButtons:function(){Ut(this,["confirmButton","cancelButton"],!0)},enableConfirmButton:function(){p("Swal.disableConfirmButton()","Swal.getConfirmButton().removeAttribute('disabled')"),Ut(this,["confirmButton"],!1)},disableConfirmButton:function(){p("Swal.enableConfirmButton()","Swal.getConfirmButton().setAttribute('disabled', '')"),Ut(this,["confirmButton"],!0)},enableInput:function(){return _t(this.getInput(),!1)},disableInput:function(){return _t(this.getInput(),!0)},showValidationMessage:function(t){var e=pt.domCache.get(this);e.validationMessage.innerHTML=t;var n=window.getComputedStyle(e.popup);e.validationMessage.style.marginLeft="-".concat(n.getPropertyValue("padding-left")),e.validationMessage.style.marginRight="-".concat(n.getPropertyValue("padding-right")),T(e.validationMessage);var o=this.getInput();o&&(o.setAttribute("aria-invalid",!0),o.setAttribute("aria-describedBy",k["validation-message"]),P(o),ot(o,k.inputerror))},resetValidationMessage:function(){var t=pt.domCache.get(this);t.validationMessage&&L(t.validationMessage);var e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedBy"),it(e,k.inputerror))},getProgressSteps:function(){return p("Swal.getProgressSteps()","const swalInstance = Swal.fire({progressSteps: ['1', '2', '3']}); const progressSteps = swalInstance.params.progressSteps"),pt.innerParams.get(this).progressSteps},setProgressSteps:function(t){p("Swal.setProgressSteps()","Swal.update()");var e=i({},pt.innerParams.get(this),{progressSteps:t});bt(0,e),pt.innerParams.set(this,e)},showProgressSteps:function(){T(pt.domCache.get(this).progressSteps)},hideProgressSteps:function(){L(pt.domCache.get(this).progressSteps)},_main:function(e){var n=this;!function(t){for(var e in t)Bt(i=e)||b('Unknown parameter "'.concat(i,'"')),t.toast&&-1!==Lt.indexOf(o=e)&&b('The parameter "'.concat(o,'" is incompatible with toasts')),xt(n=void 0)&&p(n,xt(n));var n,o,i}(e),I()&&Pt.swalCloseEventFinishedCallback&&(Pt.swalCloseEventFinishedCallback(),delete Pt.swalCloseEventFinishedCallback),Pt.deferDisposalTimer&&(clearTimeout(Pt.deferDisposalTimer),delete Pt.deferDisposalTimer);var o=i({},At,e);(function(t){!function(t){t.inputValidator||Object.keys(Ft).forEach(function(e){t.input===e&&(t.inputValidator=Ft[e])})}(t),t.showLoaderOnConfirm&&!t.preConfirm&&b("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"),t.animation=w(t.animation),function(t){t.target&&("string"!=typeof t.target||document.querySelector(t.target))&&("string"==typeof t.target||t.target.appendChild)||(b('Target parameter is not valid, defaulting to "body"'),t.target="body")}(t),"string"==typeof t.title&&(t.title=t.title.split("\n").join("<br />")),function(t){if(function(){var t=H();t&&(t.parentNode.removeChild(t),it([document.documentElement,document.body],[k["no-backdrop"],k["toast-shown"],k["has-column"]]))}(),G())d("SweetAlert2 requires document to initialize");else{var e=document.createElement("div");e.className=k.container,e.innerHTML=st;var n=function(t){return"string"==typeof t?document.querySelector(t):t}(t.target);n.appendChild(e),function(t){var e=I();e.setAttribute("role",t.toast?"alert":"dialog"),e.setAttribute("aria-live",t.toast?"polite":"assertive"),t.toast||e.setAttribute("aria-modal","true")}(t),"rtl"===window.getComputedStyle(n).direction&&ot(H(),k.rtl),function(){var t=U(),e=rt(t,k.input),n=rt(t,k.file),o=t.querySelector(".".concat(k.range," input")),i=t.querySelector(".".concat(k.range," output")),r=rt(t,k.select),a=t.querySelector(".".concat(k.checkbox," input")),s=rt(t,k.textarea);e.oninput=tt,n.onchange=tt,r.onchange=tt,a.onchange=tt,s.oninput=tt,o.oninput=function(t){tt(t),i.value=o.value},o.onchange=function(t){tt(t),o.nextSibling.value=o.value}}()}}(t)})(o),Object.freeze(o),Pt.timeout&&(Pt.timeout.stop(),delete Pt.timeout),clearTimeout(Pt.restoreFocusTimeout);var r={popup:I(),container:H(),content:U(),actions:Z(),confirmButton:W(),cancelButton:K(),closeButton:$(),validationMessage:F(),progressSteps:z()};pt.domCache.set(this,r),yt(this,o),pt.innerParams.set(this,o);var a=this.constructor;return new Promise(function(e){function i(t){n.closePopup({value:t})}function s(t){n.closePopup({dismiss:t})}jt.swalPromiseResolve.set(n,e),o.timer&&(Pt.timeout=new zt(function(){s("timer"),delete Pt.timeout},o.timer)),o.input&&setTimeout(function(){var t=n.getInput();t&&P(t)},0);for(var u=function(t){o.showLoaderOnConfirm&&a.showLoading(),o.preConfirm?(n.resetValidationMessage(),Promise.resolve().then(function(){return o.preConfirm(t,o.validationMessage)}).then(function(e){M(r.validationMessage)||!1===e?n.hideLoading():i(void 0===e?t:e)})):i(t)},c=function(t){var e=t.target,i=r.confirmButton,c=r.cancelButton,l=i&&(i===e||i.contains(e)),d=c&&(c===e||c.contains(e));switch(t.type){case"click":if(l)if(n.disableButtons(),o.input){var p=function(){var t=n.getInput();if(!t)return null;switch(o.input){case"checkbox":return t.checked?1:0;case"radio":return t.checked?t.value:null;case"file":return t.files.length?t.files[0]:null;default:return o.inputAutoTrim?t.value.trim():t.value}}();o.inputValidator?(n.disableInput(),Promise.resolve().then(function(){return o.inputValidator(p,o.validationMessage)}).then(function(t){n.enableButtons(),n.enableInput(),t?n.showValidationMessage(t):u(p)})):n.getInput().checkValidity()?u(p):(n.enableButtons(),n.showValidationMessage(o.validationMessage))}else u(!0);else d&&(n.disableButtons(),s(a.DismissReason.cancel))}},p=r.popup.querySelectorAll("button"),m=0;m<p.length;m++)p[m].onclick=c,p[m].onmouseover=c,p[m].onmouseout=c,p[m].onmousedown=c;if(r.closeButton.onclick=function(){s(a.DismissReason.close)},o.toast)r.popup.onclick=function(){o.showConfirmButton||o.showCancelButton||o.showCloseButton||o.input||s(a.DismissReason.close)};else{var h=!1;r.popup.onmousedown=function(){r.container.onmouseup=function(t){r.container.onmouseup=void 0,t.target===r.container&&(h=!0)}},r.container.onmousedown=function(){r.popup.onmouseup=function(t){r.popup.onmouseup=void 0,t.target!==r.popup&&!r.popup.contains(t.target)||(h=!0)}},r.container.onclick=function(t){h?h=!1:t.target===r.container&&w(o.allowOutsideClick)&&s(a.DismissReason.backdrop)}}function v(t,e){for(var n=J(),o=0;o<n.length;o++)return(t+=e)===n.length?t=0:-1===t&&(t=n.length-1),n[t].focus();r.popup.focus()}o.reverseButtons?r.confirmButton.parentNode.insertBefore(r.cancelButton,r.confirmButton):r.confirmButton.parentNode.insertBefore(r.confirmButton,r.cancelButton),Pt.keydownTarget&&Pt.keydownHandlerAdded&&(Pt.keydownTarget.removeEventListener("keydown",Pt.keydownHandler,{capture:Pt.keydownListenerCapture}),Pt.keydownHandlerAdded=!1),o.toast||(Pt.keydownHandler=function(t){return function(t,e){if(e.stopKeydownPropagation&&t.stopPropagation(),"Enter"!==t.key||t.isComposing)if("Tab"===t.key){for(var o=t.target,i=J(),u=-1,c=0;c<i.length;c++)if(o===i[c]){u=c;break}v(u,t.shiftKey?-1:1),t.stopPropagation(),t.preventDefault()}else-1!==["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Left","Right","Up","Down"].indexOf(t.key)?document.activeElement===r.confirmButton&&M(r.cancelButton)?r.cancelButton.focus():document.activeElement===r.cancelButton&&M(r.confirmButton)&&r.confirmButton.focus():"Escape"!==t.key&&"Esc"!==t.key||!0!==w(e.allowEscapeKey)||(t.preventDefault(),s(a.DismissReason.esc));else if(t.target&&n.getInput()&&t.target.outerHTML===n.getInput().outerHTML){if(-1!==["textarea","file"].indexOf(e.input))return;a.clickConfirm(),t.preventDefault()}}(t,o)},Pt.keydownTarget=o.keydownListenerCapture?window:r.popup,Pt.keydownListenerCapture=o.keydownListenerCapture,Pt.keydownTarget.addEventListener("keydown",Pt.keydownHandler,{capture:Pt.keydownListenerCapture}),Pt.keydownHandlerAdded=!0),n.enableButtons(),n.hideLoading(),n.resetValidationMessage(),o.toast&&(o.input||o.footer||o.showCloseButton)?ot(document.body,k["toast-column"]):it(document.body,k["toast-column"]),"select"===o.input||"radio"===o.input?function(e,n){function o(t){return Zt[n.input](i,Qt(t),n)}var i=U();f(n.inputOptions)?(kt(),n.inputOptions.then(function(t){e.hideLoading(),o(t)})):"object"===t(n.inputOptions)?o(n.inputOptions):d("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(t(n.inputOptions)))}(n,o):-1!==["text","email","number","tel","textarea"].indexOf(o.input)&&f(o.inputValue)&&function(t,e){var n=t.getInput();L(n),e.inputValue.then(function(o){n.value="number"===e.input?parseFloat(o)||0:o+"",T(n),n.focus(),t.hideLoading()}).catch(function(e){d("Error in inputValue promise: "+e),n.value="",T(n),n.focus(),t.hideLoading()})}(n,o),function(t){var e=H(),n=I();"function"==typeof t.onBeforeOpen&&t.onBeforeOpen(n),function(t,e,n){n.animation&&(ot(e,k.show),ot(t,k.fade)),T(e),ot([document.documentElement,document.body,t],k.shown),n.heightAuto&&n.backdrop&&!n.toast&&ot([document.documentElement,document.body],k["height-auto"])}(e,n,t),function(t,e){ct&&V(e)?(t.style.overflowY="hidden",e.addEventListener(ct,Wt.bind(null,e,t))):t.style.overflowY="auto"}(e,n),X()&&function(t,e){!function(){if(/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&!g(document.body,k.iosfix)){var t=document.body.scrollTop;document.body.style.top=-1*t+"px",ot(document.body,k.iosfix),function(){var t,e=H();e.ontouchstart=function(n){t=n.target===e||!(e.scrollHeight>e.clientHeight)&&"INPUT"!==n.target.tagName},e.ontouchmove=function(e){t&&(e.preventDefault(),e.stopPropagation())}}()}}(),"undefined"!=typeof window&&Vt()&&(Ht(),window.addEventListener("resize",Ht)),l(document.body.children).forEach(function(t){t===H()||function(t,e){if("function"==typeof t.contains)return t.contains(e)}(t,H())||(t.hasAttribute("aria-hidden")&&t.setAttribute("data-previous-aria-hidden",t.getAttribute("aria-hidden")),t.setAttribute("aria-hidden","true"))}),e&&null===x.previousBodyPadding&&document.body.scrollHeight>window.innerHeight&&(x.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=x.previousBodyPadding+function(){if("ontouchstart"in window||navigator.msMaxTouchPoints)return 0;var t=document.createElement("div");t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t);var e=t.offsetWidth-t.clientWidth;return document.body.removeChild(t),e}()+"px"),setTimeout(function(){t.scrollTop=0})}(e,t.scrollbarPadding),at()||Pt.previousActiveElement||(Pt.previousActiveElement=document.activeElement),"function"==typeof t.onOpen&&setTimeout(function(){return t.onOpen(n)})}(o),o.toast||(w(o.allowEnterKey)?o.focusCancel&&M(r.cancelButton)?r.cancelButton.focus():o.focusConfirm&&M(r.confirmButton)?r.confirmButton.focus():v(-1,1):document.activeElement&&"function"==typeof document.activeElement.blur&&document.activeElement.blur()),r.container.scrollTop=0})},update:function(t){var e={};Object.keys(t).forEach(function(n){Jt.isUpdatableParameter(n)?e[n]=t[n]:b('Invalid parameter to update: "'.concat(n,'". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js'))});var n=i({},pt.innerParams.get(this),e);yt(this,n),pt.innerParams.set(this,n),Object.defineProperties(this,{params:{value:i({},this.params,t),writable:!1,enumerable:!0}})}});function $t(){if("undefined"!=typeof window){"undefined"==typeof Promise&&d("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)"),Kt=this;for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var o=Object.freeze(this.constructor.argsToParams(e));Object.defineProperties(this,{params:{value:o,writable:!1,enumerable:!0,configurable:!0}});var i=this._main(this.params);pt.promise.set(this,i)}}$t.prototype.then=function(t){return pt.promise.get(this).then(t)},$t.prototype.finally=function(t){return pt.promise.get(this).finally(t)},i($t.prototype,Yt),i($t,Ot),Object.keys(Yt).forEach(function(t){$t[t]=function(){var e;if(Kt)return(e=Kt)[t].apply(e,arguments)}}),$t.DismissReason=C,$t.version="8.14.0";var Jt=$t;return Jt.default=Jt}),void 0!==this&&this.Sweetalert2&&(this.swal=this.sweetAlert=this.Swal=this.SweetAlert=this.Sweetalert2);