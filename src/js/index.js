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

    var onStartEvent = new window.CustomEvent('Butler:start')
    , onEndEvent = new window.CustomEvent('Butler:end')
    , onDetectionEvent = new window.CustomEvent('Butler:detection')
    , onDetectionMatchEvent = new window.CustomEvent('Butler:detection-match')
    , onDetectionNotMatchEvent = new window.CustomEvent('Butler:detection-not-match')
    , onErrorsEvent = new window.CustomEvent('Butler:error')
    //expose triggers!? ...
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
    , triggerDrag = function triggerDragEvents(event, element) {
      trigger(event, 'DragEvents', element);
    }
    , triggerUI = function triggerUIEvents(event, element) {
      trigger(event, 'UIEvents', element);
    }
    , triggerKeyboard = function triggerKeyboardEvents(event, keyCode) {

      var evObj = document.createEvent('HTMLEvents');

      evObj.initEvent(event, true, false);

      Object.defineProperty(evObj, 'keyCode', {
        'get': function definePropoertyKeycode() {
          return keyCode;
        }
      });
      Object.defineProperty(evObj, 'which', {
        'get': function definePropoertyWhich() {
          return keyCode;
        }
      });
      window.dispatchEvent(evObj);
    };

    this.Highlighter = new window.Highlighter({
      'scroll': false
    });
    this.Clipboard = [];
    this.Lang = 'en-EN';
    this.Commands = {
      'selector on': function selectorOn() {
        this.Highlighter.erase();
        this.Highlighter.underline();
        window.console.info('Turned selector on');
      },
      'selector off': function selectorOff() {
        this.Highlighter.erase();
        window.console.info('Turned selector off');
      },
      'selector next': function selectorNext() {
        this.Highlighter.erase();
        this.Highlighter.next();
        this.Highlighter.underline();
        window.console.info('Selected next element');
      },
      'selector back': function selectorBack() {
        this.Highlighter.erase();
        this.Highlighter.previous();
        this.Highlighter.underline();
        window.console.info('Selected next element');
      },
      'selector next id *detect': function selectorNextById(detection) {
        if (Array.isArray(detection)) {

          detection = detection.join('');
        }
        this.Highlighter.erase();
        this.Highlighter.next('#' + detection);
        this.Highlighter.underline();
        window.console.info('Selected next element by id: #' + detection);
      },
      'selector next tag *detect': function selectorNextByTag(detection) {
        this.Highlighter.erase();
        if (Array.isArray(detection)) {

          detection = detection.join('');
        }
        this.Highlighter.next('<' + detection + '>');
        this.Highlighter.underline();
        window.console.info('Selected next element by id: #' + detection);
      },
      'selector next class *detect': function selectorNextByClass(detection) {
        this.Highlighter.erase();
        this.Highlighter.next('.' + detection.replace('.', ''));
        this.Highlighter.underline();
        window.console.info('Selected next element by class: .' + detection);
      },
      'selector back id *detect': function selectorBackById(detection) {
        if (Array.isArray(detection)) {

          detection = detection.join('');
        }
        this.Highlighter.erase();
        this.Highlighter.next('#' + detection);
        this.Highlighter.underline();
        window.console.info('Selected next element by id: #' + detection);
      },
      'selector back tag *detect': function selectorBackByTag(detection) {
        if (Array.isArray(detection)) {

          detection = detection.join('');
        }
        this.Highlighter.erase();
        this.Highlighter.next('<' + detection.replace('<', '').replace('>', '') + '>');
        this.Highlighter.underline();
        window.console.info('Selected next element by id: .' + detection);
      },
      'selector back class *detect': function selectorBackByClass(detection) {
        this.Highlighter.erase();
        this.Highlighter.next('.' + detection.replace('.', ''));
        this.Highlighter.underline();
        window.console.info('Selected next element by class: .' + detection);
      },
      'selector add class *detection': function selectorAddClass(detection) {
        try {
          this.Highlighter.element.classList.add(detection);
          window.console.info('Added class: .' + detection);
        } catch(e) {

          window.alert(e);
        }
      },
      'selector add id *detection': function selectorAddId(detection) {
        if (Array.isArray(detection)) {

          detection = detection.join('');
        }
        try {
          this.Highlighter.element.id = detection;
          window.console.info('Added id: #' + detection);
        } catch(e) {

          window.alert(e);
        }
      },
      'selector put value *detection': function selectorPutValue(detection) {
        try {
          this.Highlighter.element.value = detection;
          window.console.info('Added value: ' + detection);
        } catch(e) {

          window.alert(e);
        }
      },
      'selector insert text *detection': function selectorInsertText(detection) {
        try {
          this.Highlighter.element.innerText = detection;
          window.console.info('Inserted text: ' + detection);
        } catch(e) {

          window.alert(e);
        }
      },
      'selector remove class *detection': function selectorRemoveClass(detection) {
        if (Array.isArray(detection)) {

          detection = detection.join('');
        }
        try {
          this.Highlighter.element.classElement.remove(detection);
          window.console.info('Removed class: .' + detection);
        } catch(e) {

          window.alert(e);
        }
      },
      'selector empty text': function selectorRemoveText() {
        try {
          this.Highlighter.element.innerText = '';
          window.console.info('Removed text');
        } catch(e) {

          window.alert(e);
        }
      },
      'selector clone': function selectorClone() {
        try {
          this.Clipboard.clone = this.Highlighter.element;
          window.console.info('Cloned element');
        } catch(e) {

          window.alert(e);
        }
      },
      'selector append clone': function selectorAppendClone() {
        try {
          if (this.Clipboard && this.Clipboard.clone) {

            this.Highlighter.element.appendChild(this.Clipboard.clone);
            window.console.info('Appended cloned element');
          } else {

            window.console.warn('No Clipboard.clone element to append');
          }
        } catch(e) {

          window.alert(e);
        }
      },
      'selector prepend clone': function selectorPrependClone() {
        try {
          if (this.Clipboard && this.Clipboard.clone) {

            this.Highlighter.element.insertBefore(this.Clipboard.clone);
            window.console.info('Prepended cloned element');
          } else {

            window.console.warn('No Clipboard.clone element to prepend');
          }
        } catch(e) {

          window.alert(e);
        }
      },
      'selector copy text': function selectorCopyText() {
        try {
          this.Clipboard.text = this.Highlighter.element.innerText || this.Highlighter.element.value;
          window.console.info('Copied text');
        } catch(e) {

          window.alert(e);
        }
      },
      'selector paste text': function selectorPasteText() {
        try {
          if (this.Clipboard && this.Clipboard.text) {
            if (this.Highlighter.element.nodeName.toLowerCase() === 'input'
            || this.Highlighter.element.nodeName.toLowerCase() === 'textarea') {

              this.Highlighter.element.value = this.Clipboard.text;
              window.console.info('Pasted text as value');
            } else {
              try {

                this.Highlighter.element.innerText = this.Clipboard.text;
                window.console.info('Pasted text');
              } catch(e) {

                window.alert(e);
              }
            }
          } else {
            window.console.warn('No Clipboard.text to paste');
          }
        } catch(e) {

          window.alert(e);
        }
      },
      'selector make editable': function selectorMakeEditable() {
        this.Highlighter.element.setAttribute('contentEditable', 'true');
        window.console.info('Made editable element:', this.Highlighter.element);
      },
      'selector not editable': function selectorRemoveEditable() {
        this.Highlighter.element.removeAttribute('contentEditable');
        window.console.info('Made not editable element:', this.Highlighter.element);
      },
      'selector make disabled': function selectorAttrDisable() {
        this.Highlighter.element.setAttribute('disabled', 'disabled');
        window.console.info('Disabled element:', this.Highlighter.element);
      },
      'selector not disabled': function selectorRemoveAttrDisable() {
        this.Highlighter.element.removeAttribute('disabled');
        window.console.info('Enabled element:', this.Highlighter.element);
      },
      'selector delete': function selectorDeleteElement() {
        window.console.info('Deleted element:', this.Highlighter.element);
        this.Highlighter.element.delete();
      },
      'selector hide': function selectorHideElement() {
        this.Highlighter.element.style.display = 'none';
        window.console.info('Hidden element:', this.Highlighter.element);
      },
      'selector show': function selectorHideElement() {
        this.Highlighter.element.style.display = 'initial';
        window.console.info('Shown element:', this.Highlighter.element);
      },
      'selector let me choose': function selectorLetMeChoose() {
        //need to restart Highlighter from clicked element
        var fn = function listenClickOneTime(e) {

          Butler.Highlighter.erase();
          Butler.Highlighter.element = e.target;
          Butler.Highlighter.underline();
          window.removeEventListener('click', fn, false);
          window.console.info('Choosed the selector element by myself');
        };

        window.addEventListener('click', fn, false);
      },
      'selector which': function selectorWich() {
        this.Highlighter.erase();
        this.Highlighter.underline();
        /*eslint-disable*/
        //jscs:disable
        window.alert(
          'nodename: ' + this.Highlighter.element.nodeName.toLowerCase() + '\n' +
          'classes: ' + this.Highlighter.element.classList.toString() + '\n' +
          'id: ' + this.Highlighter.element.id + '\n' + '\n' +
          'CHECK CONSOLE FOR MORE INFORMATIONS'
        );
        window.console.info('Showing which selector element', 'Element is: ', this.Highlighter.element);
        /*eslint-enable*/
        //jscs:enable
      },
      'trigger click': function triggerClick() {
        try {
          this.Highlighter.element.click();
          window.console.info('Triggered click');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger focus': function triggerFocus() {
        try {
          this.Highlighter.element.focus();
          window.console.info('Triggered focus');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger fade': function triggerFade() {
        try {
          this.Highlighter.element.fade();
          window.console.info('Triggered fade');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger blur': function triggerBlur() {
        try {
          this.Highlighter.element.blur();
          window.console.info('Triggered blur');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger submit': function triggerSubmit() {
        try {
          this.Highlighter.element.submit();
          window.console.info('Triggered submit');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger change': function triggerChange() {
        try {
          triggerEvent('change', this.Highlighter.element);
          window.console.info('Triggered change');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger close': function triggerClose() {
        try {
          triggerEvent('close', this.Highlighter.element);
          window.console.info('Triggered close');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger play': function triggerPlay() {
        try {
          this.Highlighter.element.play();
          window.console.info('Triggered play');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger pause': function triggerPause() {
        try {
          this.Highlighter.element.pause();
          window.console.info('Triggered pause');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger pin': function triggerPin() {
        try {
          this.Highlighter.element.pin();
          window.console.info('Triggered pin');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger select': function triggerSelect() {
        try {
          triggerUI('close', this.Highlighter.element);
          window.console.info('Triggered select');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger show': function triggerShow() {
        try {
          triggerUI('show', this.Highlighter.element);
          window.console.info('Triggered show');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger reset': function triggerReset() {
        try {
          triggerEvent('reset', this.Highlighter.element);
          window.console.info('Triggered reset');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger mouse over': function triggerMouseover() {
        try {
          triggerMouse('mouseover', this.Highlighter.element);
          window.console.info('Triggered mouseover');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger mouse move': function triggerMousemove() {
        try {
          triggerMouse('mousemove', this.Highlighter.element);
          window.console.info('Triggered mousemove');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger mouse enter': function triggerMouseenter() {
        try {
          triggerMouse('mouseenter', this.Highlighter.element);
          window.console.info('Triggered mouseenter');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger mouse leave': function triggerMouseleave() {
        try {
          triggerMouse('mouseleave', this.Highlighter.element);
          window.console.info('Triggered mouseleave');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger mouse out': function triggerMouseout() {
        try {
          triggerMouse('mouseout', this.Highlighter.element);
          window.console.info('Triggered mouseout');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger mouse up': function triggerMouseup() {
        try {
          triggerMouse('mouseup', this.Highlighter.element);
          window.console.info('Triggered mouseup');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger mouse down': function triggerMousedown() {
        try {
          triggerMouse('mousedown', this.Highlighter.element);
          window.console.info('Triggered mousedown');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger scroll x': function triggerScrollX() {
        try {
          this.Highlighter.element.scrollBy(35, 0);
          window.console.info('Triggered scroll X');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger scroll y': function triggerScrollY() {
        try {
          this.Highlighter.element.scrollBy(0, 35);
          window.console.info('Triggered scroll Y');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger touch start': function triggerTouchStart() {
        try {
          triggerTouch('touchstart', this.Highlighter.element);
          window.console.info('Triggered touch start');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger touch enter': function triggerTouchEnter() {
        try {
          triggerTouch('touchenter', this.Highlighter.element);
          window.console.info('Triggered touch enter');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger touch move': function triggerTouchMove() {
        try {
          triggerTouch('touchmove', this.Highlighter.element);
          window.console.info('Triggered touch move');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger touch leave': function triggerTouchLeave() {
        try {
          triggerTouch('touchleave', this.Highlighter.element);
          window.console.info('Triggered touch leave');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger touch end': function triggerTouchEnd() {
        try {
          triggerTouch('touchend', this.Highlighter.element);
          window.console.info('Triggered touch end');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger touch cancel': function triggerTouchCancel() {
        try {
          triggerTouch('touchcancel', this.Highlighter.element);
          window.console.info('Triggered touch cancel');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger drop': function triggerDrop() {
        try {
          triggerDrag('drop', this.Highlighter.element);
          window.console.info('Triggered drop');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger drag': function triggerDragg() {
        try {
          triggerDrag('drag', this.Highlighter.element);
          window.console.info('Triggered drag');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger drag start': function triggerDragStart() {
        try {
          triggerDrag('dragstart', this.Highlighter.element);
          window.console.info('Triggered drag start');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger drag end': function triggerDragEnd() {
        try {
          triggerDrag('dragend', this.Highlighter.element);
          window.console.info('Triggered drag end');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger drag enter': function triggerDragEnter() {
        try {
          triggerDrag('dragenter', this.Highlighter.element);
          window.console.info('Triggered drag enter');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger drag over': function triggerDragOver() {
        try {
          triggerDrag('dragover', this.Highlighter.element);
          window.console.info('Triggered drag over');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger drag leave': function triggerDragLeave() {
        try {
          triggerDrag('dragleave', this.Highlighter.element);
          window.console.info('Triggered drag leave');
        } catch(e) {

          window.alert(e);
        }
      },
      'window scroll y': function triggerWindowScrollY() {
        try {
          window.scrollBy(0, 300);
          window.console.info('Triggered window scroll Y');
        } catch(e) {

          window.alert(e);
        }
      },
      'window scroll x': function windowScrollX() {
        try {
          window.scrollBy(300, 0);
          window.console.info('Triggered window scroll X');
        } catch(e) {

          window.alert(e);
        }
      },
      'window size': function windowSize() {
        /*eslint-disable*/
        //jscs:disable
        window.console.info('Showing window dimensions');
        window.alert(
          'innerWidth: ' + window.innerWidth + '\n' +
          'innerHeight: ' + window.innerHeight + '\n' +
          'outerWidth: ' + window.outerWidth + '\n' +
          'outerHeight: ' + window.outerHeight
        );
        /*eslint-enable*/
        //jscs:enable
      },
      'location refresh': function routerRefresh() {
        window.location.reload();
      },
      'location back': function locationBack() {
        window.history.back();
      },
      'location forward': function locationForward() {
        window.history.forward();
      },
      'location hashbang *detect': function locationHashBang(detection) {
        window.location.hash = '#' + detection;
      },
      'navigator go offline': function navigatorOffline() {
        try {
          window.navigator.onLine = false;
          triggerEvent('offline', window);
          window.console.info('Setted navigator offline');
        } catch(e) {

          window.alert(e);
        }
      },
      'navigator go online': function navigatorOnline() {
        try {
          window.navigator.onLine = true;
          triggerEvent('online', window);
          window.console.info('Setted navigator online');
        } catch(e) {

          window.alert(e);
        }
      },
      'navigator vibrate': function navigatorVibrate() {
        try {
          window.navigator.vibrate(500);
          window.console.info('Vibrated navigator');
        } catch(e) {

          window.alert(e);
        }
      },
      'navigator which': function navigatorUserAgent() {
        /*eslint-disable*/
        //jscs:disable
        window.alert(
          'userAgent: ' + window.navigator.userAgent + '\n' +
          'appName: ' + window.navigator.appName + '\n' +
          'appVersion: ' + window.navigator.appVersion + '\n' +
          'appPlatform: ' + window.navigator.platform + '\n' +
          'vendor: ' + window.navigator.vendor + '\n' +
          'language: ' + window.navigator.language + '\n' +
          'languages: ' + window.navigator.languages.join('|') + '\n' + '\n' +
          'CHECK CONSOLE FOR MORE INFORMATIONS'
        );
        window.console.info('Showing which navigator', 'Navigator is: ', window.navigator);
        /*eslint-enable*/
        //jscs:enable
      },
      'key enter': function keyEnter() {
        triggerKeyboard('keydown', 13);
      },
      'key space': function keyspace() {
        triggerKeyboard('keydown', 8);
      },
      'key tab': function keyTab() {
        triggerKeyboard('keydown', 9);
      },
      'key shift': function keyShift() {
        triggerKeyboard('keydown', 16);
      },
      'key ctrl': function keyCtrl() {
        triggerKeyboard('keydown', 17);
      },
      'key alt': function keyAlt() {
        triggerKeyboard('keydown', 17);
      },
      'key up': function keyUp() {
        triggerKeyboard('keydown', 38);
      },
      'key down': function keyDown() {
        triggerKeyboard('keydown', 40);
      },
      'key left': function keyLeft() {
        triggerKeyboard('keydown', 37);
      },
      'key right': function keyRight() {
        triggerKeyboard('keydown', 39);
      },
      'key pause': function keyPause() {
        triggerKeyboard('keydown', 19);
      },
      'key insert': function keyInsert() {
        triggerKeyboard('keydown', 45);
      },
      'key delete': function keyDelete() {
        triggerKeyboard('keydown', 46);
      },
      'key comma': function keyComma() {
        triggerKeyboard('keydown', 188);
      },
      'key dash': function keyDash() {
        triggerKeyboard('keydown', 189);
      },
      'key equal': function keyEqual() {
        triggerKeyboard('keydown', 187);
      },
      'key period': function keyPeriod() {
        triggerKeyboard('keydown', 190);
      },
      'key semi colon': function keySemicolon() {
        triggerKeyboard('keydown', 186);
      },
      'key multiply': function keyMultiply() {
        triggerKeyboard('keydown', 106);
      },
      'key add': function keyAdd() {
        triggerKeyboard('keydown', 107);
      },
      'key subtract': function keySubtract() {
        triggerKeyboard('keydown', 109);
      },
      'key decimal point': function keyDecimalpoint() {
        triggerKeyboard('keydown', 110);
      },
      'key divide': function keyDivide() {
        triggerKeyboard('keydown', 111);
      },
      'key slash': function keySlash() {
        triggerKeyboard('keydown', 191);
      },
      'key back slash': function keyBackslash() {
        triggerKeyboard('keydown', 220);
      },
      'key close bracket': function keyClosebracket() {
        triggerKeyboard('keydown', 221);
      },
      'key open bracket': function keyOpenBracket() {
        triggerKeyboard('keydown', 219);
      },
      'key accent': function keyAccent() {
        triggerKeyboard('keydown', 192);
      },
      'key quote': function keyQuote() {
        triggerKeyboard('keydown', 222);
      },
      'key zero': function keyZero() {
        triggerKeyboard('keydown', 48);
      },
      'key one': function keyOne() {
        triggerKeyboard('keydown', 49);
      },
      'key two': function keyTwo() {
        triggerKeyboard('keydown', 50);
      },
      'key three': function keyThree() {
        triggerKeyboard('keydown', 51);
      },
      'key four': function keyFour() {
        triggerKeyboard('keydown', 52);
      },
      'key five': function keyFive() {
        triggerKeyboard('keydown', 53);
      },
      'key six': function keySix() {
        triggerKeyboard('keydown', 54);
      },
      'key seven': function keySeven() {
        triggerKeyboard('keydown', 55);
      },
      'key eight': function keyEight() {
        triggerKeyboard('keydown', 56);
      },
      'key nine': function keyNine() {
        triggerKeyboard('keydown', 57);
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

    annyang.setLanguage(this.Lang);
    annyang.addCommands(this.Commands, false);
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

  Butler.prototype.pause = function pauseButler() {

    annyang.pause();
  };

  Butler.prototype.resume = function resumeButler() {

    annyang.resume();
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
