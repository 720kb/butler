/*global window annyang document*/
/*eslint-disable*/
//jscs:disable
//! annyang
//! version : 1.6.0
//! author  : Tal Ater @TalAter
//! license : MIT
//! https://www.TalAter.com/annyang/
(function(a){"use strict";var b=this,c=b.SpeechRecognition||b.webkitSpeechRecognition||b.mozSpeechRecognition||b.msSpeechRecognition||b.oSpeechRecognition;if(!c)return b.annyang=null,a;var d,e,f=[],g={start:[],error:[],end:[],result:[],resultMatch:[],resultNoMatch:[],errorNetwork:[],errorPermissionBlocked:[],errorPermissionDenied:[]},h=0,i=!1,j="font-weight: bold; color: #00f;",k=!1,l=/\s*\((.*?)\)\s*/g,m=/(\(\?:[^)]+\))\?/g,n=/(\(\?)?:\w+/g,o=/\*\w+/g,p=/[\-{}\[\]+?.,\\\^$|#]/g,q=function(a){return a=a.replace(p,"\\$&").replace(l,"(?:$1)?").replace(n,function(a,b){return b?a:"([^\\s]+)"}).replace(o,"(.*?)").replace(m,"\\s*$1?\\s*"),new RegExp("^"+a+"$","i")},r=function(a){a.forEach(function(a){a.callback.apply(a.context)})},s=function(){t()||b.annyang.init({},!1)},t=function(){return d!==a};b.annyang={init:function(l,m){m=m===a?!0:!!m,d&&d.abort&&d.abort(),d=new c,d.maxAlternatives=5,d.continuous="http:"===b.location.protocol,d.lang="en-US",d.onstart=function(){r(g.start)},d.onerror=function(a){switch(r(g.error),a.error){case"network":r(g.errorNetwork);break;case"not-allowed":case"service-not-allowed":e=!1,r((new Date).getTime()-h<200?g.errorPermissionBlocked:g.errorPermissionDenied)}},d.onend=function(){if(r(g.end),e){var a=(new Date).getTime()-h;1e3>a?setTimeout(b.annyang.start,1e3-a):b.annyang.start()}},d.onresult=function(a){if(k)return i&&b.console.log("Speech heard, but annyang is paused"),!1;r(g.result);for(var c,d=a.results[a.resultIndex],e=0;e<d.length;e++){c=d[e].transcript.trim(),i&&b.console.log("Speech recognized: %c"+c,j);for(var h=0,l=f.length;l>h;h++){var m=f[h].command.exec(c);if(m){var n=m.slice(1);return i&&(b.console.log("command matched: %c"+f[h].originalPhrase,j),n.length&&b.console.log("with parameters",n)),f[h].callback.apply(this,n),r(g.resultMatch),!0}}}return r(g.resultNoMatch),!1},m&&(f=[]),l.length&&this.addCommands(l)},start:function(c){k=!1,s(),c=c||{},e=c.autoRestart!==a?!!c.autoRestart:!0,c.continuous!==a&&(d.continuous=!!c.continuous),h=(new Date).getTime();try{d.start()}catch(f){i&&b.console.log(f.message)}},abort:function(){e=!1,t&&d.abort()},pause:function(){k=!0},resume:function(){b.annyang.start()},debug:function(a){i=arguments.length>0?!!a:!0},setLanguage:function(a){s(),d.lang=a},addCommands:function(a){var c,d;s();for(var e in a)if(a.hasOwnProperty(e)){if(c=b[a[e]]||a[e],"function"!=typeof c)continue;d=q(e),f.push({command:d,callback:c,originalPhrase:e})}i&&b.console.log("Commands successfully loaded: %c"+f.length,j)},removeCommands:function(b){return b===a?void(f=[]):(b=Array.isArray(b)?b:[b],void(f=f.filter(function(a){for(var c=0;c<b.length;c++)if(b[c]===a.originalPhrase)return!1;return!0})))},addCallback:function(c,d,e){if(g[c]!==a){var f=b[d]||d;"function"==typeof f&&g[c].push({callback:f,context:e||this})}}}}).call(this);
/*
 * highlighter.js - v0.1.5
 *
 * Highlighter.js is a tiny (pure javascript) library to allow you to navigate, select and highlight DOM elements.
 * https://github.com/720kb/highlighter.js
 * MIT license
 * 2015-07-10T15:22:05.857Z
 */
Element.prototype.isVisible=function(){"use strict";function t(o,s,n,r,l,h,f){var a=o.parentNode,m=2;return i(o)?9===a.nodeType?!0:"0"===e(o,"opacity")||"none"===e(o,"display")||"hidden"===e(o,"visibility")?!1:(("undefined"==typeof s||"undefined"==typeof n||"undefined"==typeof r||"undefined"==typeof l||"undefined"==typeof h||"undefined"==typeof f)&&(s=o.offsetTop,l=o.offsetLeft,r=s+o.offsetHeight,n=l+o.offsetWidth,h=o.offsetWidth,f=o.offsetHeight),a?"hidden"!==e(a,"overflow")&&"scroll"!==e(a,"overflow")||!(l+m>a.offsetWidth+a.scrollLeft||l+h-m<a.scrollLeft||s+m>a.offsetHeight+a.scrollTop||s+f-m<a.scrollTop)?(o.offsetParent===a&&(l+=a.offsetLeft,s+=a.offsetTop),t(a,s,n,r,l,h,f)):!1:!0):!1}function e(t,e){return window.getComputedStyle?document.defaultView.getComputedStyle(t,null)[e]:t.currentStyle?t.currentStyle[e]:void 0}function i(t){for(;t=t.parentNode;)if(t==document)return!0;return!1}return t(this)},window.smoothScroll=function(){if(void 0!==document.querySelectorAll&&void 0!==window.pageYOffset&&void 0!==history.pushState){var t=function(t){return"HTML"===t.nodeName?-window.pageYOffset:t.getBoundingClientRect().top+window.pageYOffset},e=function(t){return.5>t?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},i=function(t,i,o,s){return o>s?i:t+(i-t)*e(o/s)},o=function(e,o,s){o=o||500;var n=window.pageYOffset;if("number"==typeof e)var r=parseInt(e);else var r=t(e);var l=Date.now(),h=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(t){window.setTimeout(t,15)},f=function(){var t=Date.now()-l;window.scroll(0,i(n,r,t,o)),t>o?"function"==typeof s&&s(e):h(f)};f()},s=function(t){t.preventDefault(),location.hash!==this.hash&&window.history.pushState(null,null,this.hash),o(document.getElementById(this.hash.substring(1)),500,function(t){location.replace("#"+t.id)})};return document.addEventListener("DOMContentLoaded",function(){for(var t,e=document.querySelectorAll('a[href^="#"]:not([href="#"])'),i=e.length;t=e[--i];)t.addEventListener("click",s,!1)}),o}}(),function(t){"use strict";var e=function(e){var i=[],o=0;if(this.position=0,this.dom=t.document.body.getElementsByTagName("*"),this.element=this.dom[this.position],this.scroll=!1,this.scrollDuration=500,this.classAliasList=[],this.identifierClassArray=[],e&&(e.scroll&&(this.scroll=!0),e.scrollDuration&&(this.scrollDuration=Number(e.scrollDuration)),e.viewable)){for(o;o<=this.dom.length;o+=1)this.dom[o]&&this.dom[o].isVisible()&&i.push(this.dom[o]);this.dom=i}};e.prototype.scroller=function(e){this.scroll&&t.smoothScroll(e,this.scrollDuration)},e.prototype.underline=function(){this.scroller(this.element,500),this.element&&this.element.style&&(this.element.style.transition="outline 0.55s linear",this.element.style.outline="3px inset #08FD31",this.element.style.outlineOffset="-2px")},e.prototype.erase=function(){this.element&&this.element.style&&(this.element.style.transition="outline none",this.element.style.outline="none")},e.prototype.select=function(t){this.position=0,this.element=this.dom[this.position],this.next(t)},e.prototype.arrayCompared=function(t,e){return t.filter(function(t){return e.indexOf(t)>-1})},e.prototype.next=function(e){var i=this.position;if(e)if(-1!==e.indexOf("#"))for(i;i<=this.dom.length;i+=1){if(this.dom[i]&&this.dom[i].id&&this.dom[i].id.toString()===e.replace("#","")){this.element=this.dom[i],this.position=i+1;break}if(i>=this.dom.length){this.position=0,t.console.info("No next elements, restarting from the first element in page");break}}else if(-1!==e.indexOf("."))for(this.identifierClassArray=e.toString().replace(".","").split(" "),i;i<=this.dom.length;i+=1){if(this.dom[i]&&this.dom[i].classList&&-1!==e.indexOf(".")&&(this.classAliasList=this.dom[i].classList.toString().split(" "),this.arrayCompared(this.classAliasList,this.identifierClassArray).length>0)){this.element=this.dom[i],this.position=i+1;break}if(i>=this.dom.length){this.position=0,t.console.info("No next elements, restarting from the first element in page");break}}else if(e.indexOf("<")>-1)for(i;i<=this.dom.length;i+=1){if(this.dom[i]&&this.dom[i].tagName&&this.dom[i].tagName.toString().toLowerCase()===e.replace("<","").replace(">","")){this.element=this.dom[i],this.position=i+1;break}if(i>=this.dom.length){this.position=0,t.console.info("No next elements, restarting from the first element in page");break}}else t.console.error("Please set a correct #id or .class or <tag> identifier");else this.position+=1,this.position>this.dom.length&&(this.position=0,this.element=this.dom[this.position],t.console.info("No next elements, restarting from the first element in page")),this.element=this.dom[this.position]},e.prototype.previous=function(e){var i=this.position;if(e)if(-1!==e.indexOf("#"))for(i<=this.position;i>=0;i-=1){if(this.dom[i]&&this.dom[i].id&&this.dom[i].id.toString()===e.replace("#","")){this.element=this.dom[i],this.position=i-1;break}if(i<this.dom.length){this.position=0,t.console.info("No previous elements, restarting from the first element in page");break}}else if(e.indexOf(".")>-1)for(this.identifierClassArray=e.toString().replace(".","").split(" "),i<=this.position;i>=0;i-=1){if(this.dom[i]&&this.dom[i].classList&&-1!==e.indexOf(".")&&(this.classAliasList=this.dom[i].classList.toString().split(" "),this.arrayCompared(this.classAliasList,this.identifierClassArray).length>0)){this.element=this.dom[i],this.position=i-1;break}if(i<this.dom.length){this.position=0,t.console.info("No previous elements, restarting from the first element in page");break}}else if(e.indexOf("<")>-1)for(i<=this.position;i>=0;i-=1){if(this.dom[i]&&this.dom[i].tagName&&this.dom[i].tagName.toString().toLowerCase()===e.replace("<","").replace(">","")){this.element=this.dom[i],this.position=i-1;break}if(i<this.dom.length){this.position=0,t.console.info("No previous elements, restarting from the first element in page");break}}else t.console.error("You must set a correct #id or .class or <tag> parameter");else this.position-=1,this.position<0&&(this.position=0,t.console.info("No previous elements, restarting from the first element in page")),this.element=this.dom[this.position]},e.prototype.skipNext=function(e){Number(e)>0&&(this.position+=e),Number(e)>this.dom.length&&(this.position=0,this.element=this.dom[this.position],t.console.log("No next elements, restarting from the first DOM element"))},e.prototype.skipPrev=function(e){Number(e)>0&&(this.position-=e),this.position<0&&(this.position=0,this.element=this.dom[this.position],t.console.log("No previous elements, restarting from the first DOM element"))},t.Highlighter=e}(window);
/*DOMContentLoaded promise*/
window.document.ready = new Promise(function DOMPromise(resolve) {
    if (window.document.readyState === 'complete') {
      resolve();
    } else {
      function onDOMReady() {
        resolve();
        document.removeEventListener('DOMContentLoaded', onDOMReady, true);
        window.removeEventListener('load', onDOMReady, true);
      }
      document.addEventListener('DOMContentLoaded', onDOMReady, true);
      window.addEventListener('load', onDOMReady, true);
    }
});
//jscs:enable
/*eslint-enable*/
(function plainOldJs(window, annyang) {
  'use strict';

  var Butler = function initButler() {
    /*eslint-disable*/
    var Highlighter = new window.Highlighter({
      'scroll':false
    })
    /*eslint-enable*/
    , onStartEvent = new window.CustomEvent('Butler:start')
    , onEndEvent = new window.CustomEvent('Butler:end')
    , onDetectionEvent = new window.CustomEvent('Butler:detection')
    , onDetectionMatchEvent = new window.CustomEvent('Butler:detection-match')
    , onDetectionNotMatchEvent = new window.CustomEvent('Butler:detection-not-match')
    , onErrorsEvent = new window.CustomEvent('Butler:error')
    , trigger = function triggerHandler(event, eventType, element) {

      var evObj = document.createEvent(eventType);

      evObj.initEvent(event, true, true);
      element.dispatchEvent(evObj);
    }
    , triggerMouse = function triggerMouseEvents(event, element) {
      trigger(event, 'MouseEvents', element);
    }
    , triggerEvent = function triggerEvents(event, element) {
      trigger(event, 'Events', element);
    }
    , triggerTouch = function triggerTouchEvents(event, element) {
      trigger(event, 'TouchEvents', element);
    }
    , triggerUI = function triggerUIEvents(event, element) {
      trigger(event, 'UIEvents', element);
    };

    this.lang = 'en-EN';
    this.commands = {
      'selector on': function selectorOn() {
        Highlighter.erase();
        Highlighter.underline();
        window.console.info('Turned selector on');
      },
      'selector off': function selectorOff() {
        Highlighter.erase();
        Highlighter = new window.Highlighter();
        window.console.info('Turned selector off');
      },
      'selector next': function selectorNext() {
        Highlighter.erase();
        Highlighter.next();
        Highlighter.underline();
        window.console.info('Selected next element');
      },
      'selector back': function selectorBack() {
        Highlighter.erase();
        Highlighter.previous();
        Highlighter.underline();
        window.console.info('Selected next element');
      },
      'selector next id *detect': function selectorNextById(detection) {
        Highlighter.erase();
        Highlighter.next('#' + detection);
        Highlighter.underline();
        window.console.info('Selected next element by id: #' + detection);
      },
      'selector next tag *detect': function selectorNextByTag(detection) {
        Highlighter.erase();
        Highlighter.next('<' + detection.replace('<', '').replace('>', '') + '>');
        Highlighter.underline();
        window.console.info('Selected next element by id: #' + detection);
      },
      'selector next class *detect': function selectorNextByClass(detection) {
        Highlighter.erase();
        Highlighter.next('.' + detection.replace('.', ''));
        Highlighter.underline();
        window.console.info('Selected next element by class: .' + detection);
      },
      'selector back id *detect': function selectorBackById(detection) {
        Highlighter.erase();
        Highlighter.next('#' + detection);
        Highlighter.underline();
        window.console.info('Selected next element by id: #' + detection);
      },
      'selector back tag *detect': function selectorBackByTag(detection) {
        Highlighter.erase();
        Highlighter.next('<' + detection.replace('<', '').replace('>', '') + '>');
        Highlighter.underline();
        window.console.info('Selected next element by id: .' + detection);
      },
      'selector back class *detect': function selectorBackByClass(detection) {
        Highlighter.erase();
        Highlighter.next('.' + detection.replace('.', ''));
        Highlighter.underline();
        window.console.info('Selected next element by class: .' + detection);
      },
      'selector add class *detection': function selectorAddClass(detection) {
        try {
          Highlighter.element.classList.add(detection);
          window.console.info('Added class: .' + detection);
        } catch(e) {

          window.alert(e);
        }
      },
      'selector add id *detection': function selectorAddId(detection) {
        try {
          Highlighter.element.id = detection;
          window.console.info('Added id: #' + detection);
        } catch(e) {

          window.alert(e);
        }
      },
      'selector put value *detection': function selectorPutValue(detection) {
        try {
          Highlighter.element.value = detection;
          window.console.info('Added value: ' + detection);
        } catch(e) {

          window.alert(e);
        }
      },
      'selector insert text *detection': function selectorInsertText(detection) {
        try {
          Highlighter.element.innerText = detection;
          window.console.info('Inserted text: ' + detection);
        } catch(e) {

          window.alert(e);
        }
      },
      'selector remove class *detection': function selectorRemoveClass(detection) {
        try {
          Highlighter.element.classElement.remove(detection);
          window.console.info('Removed class: .' + detection);
        } catch(e) {

          window.alert(e);
        }
      },
      'selector empty text': function selectorRemoveText() {
        try {
          Highlighter.element.innerText = '';
          window.console.info('Removed text');
        } catch(e) {

          window.alert(e);
        }
      },
      'selector which': function selectorWich() {
        /*eslint-disable*/
        //jscs:disable
        window.alert(
          'nodename: ' + Highlighter.element.nodeName.toLowerCase() + '\n' +
          'classes: ' + Highlighter.element.classList.toString() + '\n' +
          'id:' + Highlighter.element.id
        );
        window.console.info('Shown which selector element');
        /*eslint-enable*/
        //jscs:enable
      },
      'trigger click': function triggerClick() {
        try {
          Highlighter.element.click();
          window.console.info('Triggered click');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger focus': function triggerFocus() {
        try {
          Highlighter.element.focus();
          window.console.info('Triggered focus');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger fade': function triggerFade() {
        try {
          Highlighter.element.fade();
          window.console.info('Triggered fade');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger blur': function triggerBlur() {
        try {
          Highlighter.element.blur();
          window.console.info('Triggered blur');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger submit': function triggerSubmit() {
        try {
          Highlighter.element.submit();
          window.console.info('Triggered submit');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger change': function triggerChange() {
        try {
          triggerEvent('change', Highlighter.element);
          window.console.info('Triggered change');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger close': function triggerClose() {
        try {
          triggerEvent('close', Highlighter.element);
          window.console.info('Triggered close');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger play': function triggerPlay() {
        try {
          Highlighter.element.play();
          window.console.info('Triggered play');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger pause': function triggerPause() {
        try {
          Highlighter.element.pause();
          window.console.info('Triggered pause');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger pin': function triggerPin() {
        try {
          Highlighter.element.pin();
          window.console.info('Triggered pin');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger select': function triggerSelect() {
        try {
          triggerUI('close', Highlighter.element);
          window.console.info('Triggered select');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger mouse over': function triggerMouseover() {
        try {
          triggerMouse('mouseover', Highlighter.element);
          window.console.info('Triggered mouseover');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger mouse move': function triggerMousemove() {
        try {
          triggerMouse('mousemove', Highlighter.element);
          window.console.info('Triggered mousemove');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger mouse enter': function triggerMouseenter() {
        try {
          triggerMouse('mouseenter', Highlighter.element);
          window.console.info('Triggered mouseenter');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger mouse leave': function triggerMouseleave() {
        try {
          triggerMouse('mouseleave', Highlighter.element);
          window.console.info('Triggered mouseleave');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger mouse out': function triggerMouseout() {
        try {
          triggerMouse('mouseout', Highlighter.element);
          window.console.info('Triggered mouseout');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger mouse up': function triggerMouseup() {
        try {
          triggerMouse('mouseup', Highlighter.element);
          window.console.info('Triggered mouseup');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger mouse down': function triggerMousedown() {
        try {
          triggerMouse('mousedown', Highlighter.element);
          window.console.info('Triggered mousedown');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger scroll x': function triggerScrollX() {
        try {
          Highlighter.element.scrollBy(35, 0);
          window.console.info('Triggered scroll X');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger scroll y': function triggerScrollY() {
        try {
          Highlighter.element.scrollBy(0, 35);
          window.console.info('Triggered scroll Y');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger window scroll y': function triggerWindowScrollY() {
        try {
          window.scrollBy(0, 300);
          window.console.info('Triggered window scroll Y');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger window scroll x': function triggerWindowScrollX() {
        try {
          window.scrollBy(300, 0);
          window.console.info('Triggered window scroll X');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger window resize y': function triggerWindowResizeY() {
        try {
          window.resizeTo(window.innerWidth, window.innerHeight / 2);
          window.console.info('Triggered window resize Y');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger window resize x': function triggerWindowResizeX() {
        try {
          window.resizeTo(window.innerWidth / 2, window.innerHeight);
          window.console.info('Triggered window resize X');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger show': function triggerShow() {
        try {
          triggerUI('show', Highlighter.element);
          window.console.info('Triggered show');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger reset': function triggerReset() {
        try {
          triggerEvent('reset', Highlighter.element);
          window.console.info('Triggered reset');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger touch start': function triggerTouchStart() {
        try {
          triggerTouch('touchstart', Highlighter.element);
          window.console.info('Triggered touch start');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger touch enter': function triggerTouchEnter() {
        try {
          triggerTouch('touchenter', Highlighter.element);
          window.console.info('Triggered touch enter');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger touch move': function triggerTouchMove() {
        try {
          triggerTouch('touchmove', Highlighter.element);
          window.console.info('Triggered touch move');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger touch leave': function triggerTouchLeave() {
        try {
          triggerTouch('touchleave', Highlighter.element);
          window.console.info('Triggered touch leave');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger touch end': function triggerTouchEnd() {
        try {
          triggerTouch('touchend', Highlighter.element);
          window.console.info('Triggered touch end');
        } catch(e) {

          window.alert(e);
        }
      }
    };
    //mic access allowed
    annyang.addCallback('start', function onButlerStartEvent(data) {
      onStartEvent.eventData = data;
      window.dispatchEvent(onStartEvent);
    });
    annyang.addCallback('error', function onButlerErrorEvent(data) {
      onErrorsEvent.eventData = data;
      window.dispatchEvent(onErrorsEvent);
    });
    annyang.addCallback('end', function onButlerEndEvent(data) {
      onEndEvent.eventData = data;
      window.dispatchEvent(onEndEvent);
    });
    annyang.addCallback('result', function onButlerResultEvent(data) {
      onDetectionEvent.eventData = data;
      window.dispatchEvent(onDetectionEvent);
    });
    annyang.addCallback('resultMatch', function onButlerResultMatchEvent(data) {
      onDetectionMatchEvent.eventData = data;
      window.dispatchEvent(onDetectionMatchEvent);
    });
    annyang.addCallback('resultNotMatch', function onButlerResultNotMatchEvent(data) {
      onDetectionNotMatchEvent.eventData = data;
      window.dispatchEvent(onDetectionNotMatchEvent);
    });

    annyang.setLanguage(this.lang);
    annyang.addCommands(this.commands, false);
  };

  Butler.prototype.start = function startButler(settings) {

    if (settings
      && settings.debug) {

      annyang.debug(settings.debug);
    }

    annyang.start({
      'autoRestart': false,
      'continuous': true
    });
  };

  Butler.prototype.plug = function plugPlugin(plugin) {
    if (plugin
      && plugin.commands) {

      annyang.addCommands(plugin.commands);
    }
  };

  window.document.ready.then(function DOMLoadedInit() {

    window.Butler = new Butler();
  });
}(window, annyang));
