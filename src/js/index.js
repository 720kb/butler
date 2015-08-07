/*global window annyang document*/
/*eslint-disable*/
//jscs:disable
/*
 * highlighter.js - v0.1.7
 *
 * Highlighter.js is a tiny (pure javascript) library to allow you to navigate, select and highlight DOM elements.
 * https://github.com/720kb/highlighter.js
 * MIT license
 * 2015-08-05T08:25:50.791Z
 */
Element.prototype.isVisible=function(){"use strict";function t(n,s,o,h,r,l,a){var d=n.parentNode,m=2;return i(n)?9===d.nodeType?!0:"0"===e(n,"opacity")||"none"===e(n,"display")||"hidden"===e(n,"visibility")?!1:(("undefined"==typeof s||"undefined"==typeof o||"undefined"==typeof h||"undefined"==typeof r||"undefined"==typeof l||"undefined"==typeof a)&&(s=n.offsetTop,r=n.offsetLeft,h=s+n.offsetHeight,o=r+n.offsetWidth,l=n.offsetWidth,a=n.offsetHeight),d?"hidden"!==e(d,"overflow")&&"scroll"!==e(d,"overflow")||!(r+m>d.offsetWidth+d.scrollLeft||r+l-m<d.scrollLeft||s+m>d.offsetHeight+d.scrollTop||s+a-m<d.scrollTop)?(n.offsetParent===d&&(r+=d.offsetLeft,s+=d.offsetTop),t(d,s,o,h,r,l,a)):!1:!0):!1}function e(t,e){return window.getComputedStyle?document.defaultView.getComputedStyle(t,null)[e]:t.currentStyle?t.currentStyle[e]:void 0}function i(t){for(;t=t.parentNode;)if(t==document)return!0;return!1}return t(this)},window.smoothScroll=function(){if(void 0!==document.querySelectorAll&&void 0!==window.pageYOffset&&void 0!==history.pushState){var t=function(t){return"HTML"===t.nodeName?-window.pageYOffset:t.getBoundingClientRect().top+window.pageYOffset},e=function(t){return.5>t?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},i=function(t,i,n,s){return n>s?i:t+(i-t)*e(n/s)},n=function(e,n,s){n=n||500;var o=window.pageYOffset;if("number"==typeof e)var h=parseInt(e);else var h=t(e);var r=Date.now(),l=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(t){window.setTimeout(t,15)},a=function(){var t=Date.now()-r;window.scroll(0,i(o,h,t,n)),t>n?"function"==typeof s&&s(e):l(a)};a()},s=function(t){t.preventDefault(),location.hash!==this.hash&&window.history.pushState(null,null,this.hash),n(document.getElementById(this.hash.substring(1)),500,function(t){location.replace("#"+t.id)})};return document.addEventListener("DOMContentLoaded",function(){for(var t,e=document.querySelectorAll('a[href^="#"]:not([href="#"])'),i=e.length;t=e[--i];)t.addEventListener("click",s,!1)}),n}}(),function(t){"use strict";var e=function(e){var i=[],n=0;if(this.onSelectedEvent=new t.CustomEvent("Highlighter:selected"),this.onUnderlinedEvent=new t.CustomEvent("Highlighter:underlined"),this.onErasedEvent=new t.CustomEvent("Highlighter:erased"),this.onSkippedEvent=new t.CustomEvent("Highlighter:skipped"),this.onScrolledEvent=new t.CustomEvent("Highlighter:scrolled"),this.onRestartEvent=new t.CustomEvent("Highlighter:restart"),this.position=0,this.dom=t.document.body.getElementsByTagName("*"),this.element=this.dom[this.position],this.scroll=!1,this.scrollDuration=500,this.classAliasList=[],this.identifierClassArray=[],e&&(e.scroll&&(this.scroll=!0),e.scrollDuration&&(this.scrollDuration=Number(e.scrollDuration)),e.viewable)){for(n;n<=this.dom.length;n+=1)this.dom[n]&&this.dom[n].isVisible()&&i.push(this.dom[n]);this.dom=i}};e.prototype.scroller=function(e){this.scroll&&(t.smoothScroll(e,this.scrollDuration),this.onScrolledEvent.eventData={element:e},t.dispatchEvent(this.onScrolledEvent))},e.prototype.underline=function(){this.scroller(this.element,500),this.element&&this.element.style&&(this.element.style.transition="outline 0.55s linear",this.element.style.outline="3px inset #08FD31",this.element.style.outlineOffset="-2px",this.onUnderlinedEvent.eventData={element:this.element},t.dispatchEvent(this.onUnderlinedEvent))},e.prototype.erase=function(){this.element&&this.element.style&&(this.element.style.transition="outline none",this.element.style.outline="none",this.onErasedEvent.eventData={element:this.element},t.dispatchEvent(this.onErasedEvent))},e.prototype.select=function(e){this.position=0,this.element=this.dom[this.position],this.next(e),this.onSelectedEvent.eventData={element:this.element},t.dispatchEvent(this.onSelectedEvent)},e.prototype.point=function(e){var i=0;if(e&&this.dom&&this.dom.length>0){for(i;i<=this.dom.length;i+=1)if(this.dom[i]===e){this.position=i,this.element=this.dom[i],t.console.log("Highlighter pointing to element:",this.element);break}}else t.console.error("Unable to retrieve starting element")},e.prototype.arrayCompared=function(t,e){return t.filter(function(t){return e.indexOf(t)>-1})},e.prototype.next=function(e){var i=this.position;if(e)if(-1!==e.indexOf("#"))for(i;i<=this.dom.length;i+=1){if(this.dom[i]&&this.dom[i].id&&this.dom[i].id.toString()===e.replace("#","")){this.element=this.dom[i],this.position=i+1,this.onSelectedEvent.eventData={element:this.element},t.dispatchEvent(this.onSelectedEvent);break}if(i>=this.dom.length){this.position=0,t.dispatchEvent(this.onRestartEvent),t.console.info("No next elements, restarting from the first element in page");break}}else if(-1!==e.indexOf("."))for(this.identifierClassArray=e.toString().replace(".","").split(" "),i;i<=this.dom.length;i+=1){if(this.dom[i]&&this.dom[i].classList&&-1!==e.indexOf(".")&&(this.classAliasList=this.dom[i].classList.toString().split(" "),this.arrayCompared(this.classAliasList,this.identifierClassArray).length>0)){this.element=this.dom[i],this.position=i+1,this.onSelectedEvent.eventData={element:this.element},t.dispatchEvent(this.onSelectedEvent);break}if(i>=this.dom.length){this.position=0,t.dispatchEvent(this.onRestartEvent),t.console.info("No next elements, restarting from the first element in page");break}}else if(e.indexOf("<")>-1)for(i;i<=this.dom.length;i+=1){if(this.dom[i]&&this.dom[i].tagName&&this.dom[i].tagName.toString().toLowerCase()===e.replace("<","").replace(">","")){this.element=this.dom[i],this.position=i+1,this.onSelectedEvent.eventData={element:this.element},t.dispatchEvent(this.onSelectedEvent);break}if(i>=this.dom.length){this.position=0,t.dispatchEvent(this.onRestartEvent),t.console.info("No next elements, restarting from the first element in page");break}}else t.console.error("Please set a correct #id or .class or <tag> identifier");else this.position+=1,this.position>this.dom.length&&(this.position=0,this.element=this.dom[this.position],t.dispatchEvent(this.onRestartEvent),t.console.info("No next elements, restarting from the first element in page")),this.element=this.dom[this.position],this.onSelectedEvent.eventData={element:this.element},t.dispatchEvent(this.onSelectedEvent)},e.prototype.previous=function(e){var i=this.position;if(e)if(-1!==e.indexOf("#"))for(i<=this.position;i>=0;i-=1){if(this.dom[i]&&this.dom[i].id&&this.dom[i].id.toString()===e.replace("#","")){this.element=this.dom[i],this.position=i-1,this.onSelectedEvent.eventData={element:this.element},t.dispatchEvent(this.onSelectedEvent);break}if(i<this.dom.length){this.position=0,t.dispatchEvent(this.onRestartEvent),t.console.info("No previous elements, restarting from the first element in page");break}}else if(e.indexOf(".")>-1)for(this.identifierClassArray=e.toString().replace(".","").split(" "),i<=this.position;i>=0;i-=1){if(this.dom[i]&&this.dom[i].classList&&-1!==e.indexOf(".")&&(this.classAliasList=this.dom[i].classList.toString().split(" "),this.arrayCompared(this.classAliasList,this.identifierClassArray).length>0)){this.element=this.dom[i],this.position=i-1,this.onSelectedEvent.eventData={element:this.element},t.dispatchEvent(this.onSelectedEvent);break}if(i<this.dom.length){this.position=0,t.dispatchEvent(this.onRestartEvent),t.console.info("No previous elements, restarting from the first element in page");break}}else if(e.indexOf("<")>-1)for(i<=this.position;i>=0;i-=1){if(this.dom[i]&&this.dom[i].tagName&&this.dom[i].tagName.toString().toLowerCase()===e.replace("<","").replace(">","")){this.element=this.dom[i],this.position=i-1,this.onSelectedEvent.eventData={element:this.element},t.dispatchEvent(this.onSelectedEvent);break}if(i<this.dom.length){this.position=0,t.dispatchEvent(this.onRestartEvent),t.console.info("No previous elements, restarting from the first element in page");break}}else t.console.error("You must set a correct #id or .class or <tag> parameter");else this.position-=1,this.position<0&&(this.position=0,t.dispatchEvent(this.onRestartEvent),t.console.info("No previous elements, restarting from the first element in page")),this.element=this.dom[this.position],this.onSelectedEvent.eventData={element:this.element},t.dispatchEvent(this.onSelectedEvent)},e.prototype.skipNext=function(e){Number(e)>0&&(this.position+=e,this.onSkippedEvent.eventData={element:this.dom[this.position]},t.dispatchEvent(this.onSkippedEvent)),Number(e)>this.dom.length&&(this.position=0,this.element=this.dom[this.position],t.dispatchEvent(this.onRestartEvent),t.console.log("No next elements, restarting from the first DOM element"))},e.prototype.skipPrev=function(e){Number(e)>0&&(this.position-=e,this.onSkippedEvent.eventData={element:this.dom[this.position]},t.dispatchEvent(this.onSkippedEvent)),this.position<0&&(this.position=0,this.element=this.dom[this.position],t.dispatchEvent(this.onRestartEvent),t.console.log("No previous elements, restarting from the first DOM element"))},t.Highlighter=e}(window);
//# sourceMappingURL=highlighter.min.js.map
//! annyang
//! version : 1.6.0
//! author  : Tal Ater @TalAter
//! license : MIT
//! https://www.TalAter.com/annyang/
(function(a){"use strict";var b=this,c=b.SpeechRecognition||b.webkitSpeechRecognition||b.mozSpeechRecognition||b.msSpeechRecognition||b.oSpeechRecognition;if(!c)return b.annyang=null,a;var d,e,f=[],g={start:[],error:[],end:[],result:[],resultMatch:[],resultNoMatch:[],errorNetwork:[],errorPermissionBlocked:[],errorPermissionDenied:[]},h=0,i=!1,j="font-weight: bold; color: #00f;",k=!1,l=/\s*\((.*?)\)\s*/g,m=/(\(\?:[^)]+\))\?/g,n=/(\(\?)?:\w+/g,o=/\*\w+/g,p=/[\-{}\[\]+?.,\\\^$|#]/g,q=function(a){return a=a.replace(p,"\\$&").replace(l,"(?:$1)?").replace(n,function(a,b){return b?a:"([^\\s]+)"}).replace(o,"(.*?)").replace(m,"\\s*$1?\\s*"),new RegExp("^"+a+"$","i")},r=function(a){a.forEach(function(a){a.callback.apply(a.context)})},s=function(){t()||b.annyang.init({},!1)},t=function(){return d!==a};b.annyang={init:function(l,m){m=m===a?!0:!!m,d&&d.abort&&d.abort(),d=new c,d.maxAlternatives=5,d.continuous="http:"===b.location.protocol,d.lang="en-US",d.onstart=function(){r(g.start)},d.onerror=function(a){switch(r(g.error),a.error){case"network":r(g.errorNetwork);break;case"not-allowed":case"service-not-allowed":e=!1,r((new Date).getTime()-h<200?g.errorPermissionBlocked:g.errorPermissionDenied)}},d.onend=function(){if(r(g.end),e){var a=(new Date).getTime()-h;1e3>a?setTimeout(b.annyang.start,1e3-a):b.annyang.start()}},d.onresult=function(a){if(k)return i&&b.console.log("Speech heard, but annyang is paused"),!1;r(g.result);for(var c,d=a.results[a.resultIndex],e=0;e<d.length;e++){c=d[e].transcript.trim(),i&&b.console.log("Speech recognized: %c"+c,j);for(var h=0,l=f.length;l>h;h++){var m=f[h].command.exec(c);if(m){var n=m.slice(1);return i&&(b.console.log("command matched: %c"+f[h].originalPhrase,j),n.length&&b.console.log("with parameters",n)),f[h].callback.apply(this,n),r(g.resultMatch),!0}}}return r(g.resultNoMatch),!1},m&&(f=[]),l.length&&this.addCommands(l)},start:function(c){k=!1,s(),c=c||{},e=c.autoRestart!==a?!!c.autoRestart:!0,c.continuous!==a&&(d.continuous=!!c.continuous),h=(new Date).getTime();try{d.start()}catch(f){i&&b.console.log(f.message)}},abort:function(){e=!1,t&&d.abort()},pause:function(){k=!0},resume:function(){b.annyang.start()},debug:function(a){i=arguments.length>0?!!a:!0},setLanguage:function(a){s(),d.lang=a},addCommands:function(a){var c,d;s();for(var e in a)if(a.hasOwnProperty(e)){if(c=b[a[e]]||a[e],"function"!=typeof c)continue;d=q(e),f.push({command:d,callback:c,originalPhrase:e})}i&&b.console.log("Commands successfully loaded: %c"+f.length,j)},removeCommands:function(b){return b===a?void(f=[]):(b=Array.isArray(b)?b:[b],void(f=f.filter(function(a){for(var c=0;c<b.length;c++)if(b[c]===a.originalPhrase)return!1;return!0})))},addCallback:function(c,d,e){if(g[c]!==a){var f=b[d]||d;"function"==typeof f&&g[c].push({callback:f,context:e||this})}}}}).call(this);
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

    var that = this
    , onStartEvent = new window.CustomEvent('Butler:start')
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
    //create audio alerts for Butler
    this.Voice = new window.Audio('data:audio/ogg;base64,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');
    this.Voice.volume = 0;
    this.Commands = {
      'butler speak': function butlerAudioOn() {
        that.Voice.volume = 0.25;
        that.Voice.play();
      },
      'butler shut up': function butlerAudioOff() {
        that.Voice.volume = 0;
      },
      'selector on': function selectorOn() {
        that.Highlighter.erase();
        that.Highlighter.underline();
        window.console.info('Turned selector on');
      },
      'selector off': function selectorOff() {
        that.Highlighter.erase();
        window.console.info('Turned selector off');
      },
      'selector next': function selectorNext() {
        that.Highlighter.erase();
        that.Highlighter.next();
        that.Highlighter.underline();
        window.console.info('Selected next element');
      },
      'selector back': function selectorBack() {
        that.Highlighter.erase();
        that.Highlighter.previous();
        that.Highlighter.underline();
        window.console.info('Selected next element');
      },
      'selector next id *detect': function selectorNextById(detection) {
        if (Array.isArray(detection)) {

          detection = detection.join('');
        }
        that.Highlighter.erase();
        that.Highlighter.next('#' + detection);
        that.Highlighter.underline();
        window.console.info('Selected next element by id: #' + detection);
      },
      'selector next tag *detect': function selectorNextByTag(detection) {
        that.Highlighter.erase();
        if (Array.isArray(detection)) {

          detection = detection.join('');
        }
        that.Highlighter.next('<' + detection + '>');
        that.Highlighter.underline();
        window.console.info('Selected next element by id: #' + detection);
      },
      'selector next class *detect': function selectorNextByClass(detection) {
        that.Highlighter.erase();
        that.Highlighter.next('.' + detection.replace('.', ''));
        that.Highlighter.underline();
        window.console.info('Selected next element by class: .' + detection);
      },
      'selector back id *detect': function selectorBackById(detection) {
        if (Array.isArray(detection)) {

          detection = detection.join('');
        }
        that.Highlighter.erase();
        that.Highlighter.next('#' + detection);
        that.Highlighter.underline();
        window.console.info('Selected next element by id: #' + detection);
      },
      'selector back tag *detect': function selectorBackByTag(detection) {
        if (Array.isArray(detection)) {

          detection = detection.join('');
        }
        that.Highlighter.erase();
        that.Highlighter.next('<' + detection.replace('<', '').replace('>', '') + '>');
        that.Highlighter.underline();
        window.console.info('Selected next element by id: .' + detection);
      },
      'selector back class *detect': function selectorBackByClass(detection) {
        that.Highlighter.erase();
        that.Highlighter.next('.' + detection.replace('.', ''));
        that.Highlighter.underline();
        window.console.info('Selected next element by class: .' + detection);
      },
      'selector add class *detection': function selectorAddClass(detection) {
        try {
          that.Highlighter.element.classList.add(detection);
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
          that.Highlighter.element.id = detection;
          window.console.info('Added id: #' + detection);
        } catch(e) {

          window.alert(e);
        }
      },
      'selector put value *detection': function selectorPutValue(detection) {
        try {
          that.Highlighter.element.value = detection;
          window.console.info('Added value: ' + detection);
        } catch(e) {

          window.alert(e);
        }
      },
      'selector insert text *detection': function selectorInsertText(detection) {
        try {
          that.Highlighter.element.innerText = detection;
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
          that.Highlighter.element.classElement.remove(detection);
          window.console.info('Removed class: .' + detection);
        } catch(e) {

          window.alert(e);
        }
      },
      'selector empty text': function selectorRemoveText() {
        try {
          that.Highlighter.element.innerText = '';
          window.console.info('Removed text');
        } catch(e) {

          window.alert(e);
        }
      },
      'selector clone': function selectorClone() {
        try {
          that.Clipboard.clone = that.Highlighter.element;
          window.console.info('Cloned element');
        } catch(e) {

          window.alert(e);
        }
      },
      'selector append clone': function selectorAppendClone() {
        try {
          if (that.Clipboard && that.Clipboard.clone) {

            that.Highlighter.element.appendChild(that.Clipboard.clone);
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
          if (that.Clipboard && that.Clipboard.clone) {

            that.Highlighter.element.insertBefore(that.Clipboard.clone);
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
          that.Clipboard.text = that.Highlighter.element.innerText || that.Highlighter.element.value;
          window.console.info('Copied text');
        } catch(e) {

          window.alert(e);
        }
      },
      'selector paste text': function selectorPasteText() {
        try {
          if (that.Clipboard && that.Clipboard.text) {
            if (that.Highlighter.element.nodeName.toLowerCase() === 'input'
            || that.Highlighter.element.nodeName.toLowerCase() === 'textarea') {

              that.Highlighter.element.value = that.Clipboard.text;
              window.console.info('Pasted text as value');
            } else {
              try {

                that.Highlighter.element.innerText = that.Clipboard.text;
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
        that.Highlighter.element.setAttribute('contentEditable', 'true');
        window.console.info('Made editable element:', that.Highlighter.element);
      },
      'selector not editable': function selectorRemoveEditable() {
        that.Highlighter.element.removeAttribute('contentEditable');
        window.console.info('Made not editable element:', that.Highlighter.element);
      },
      'selector make disabled': function selectorAttrDisable() {
        that.Highlighter.element.setAttribute('disabled', 'disabled');
        window.console.info('Disabled element:', that.Highlighter.element);
      },
      'selector not disabled': function selectorRemoveAttrDisable() {
        that.Highlighter.element.removeAttribute('disabled');
        window.console.info('Enabled element:', that.Highlighter.element);
      },
      'selector delete': function selectorDeleteElement() {
        window.console.info('Deleted element:', that.Highlighter.element);
        that.Highlighter.element.delete();
      },
      'selector hide': function selectorHideElement() {
        that.Highlighter.element.style.display = 'none';
        window.console.info('Hidden element:', that.Highlighter.element);
      },
      'selector show': function selectorHideElement() {
        that.Highlighter.element.style.display = 'initial';
        window.console.info('Shown element:', that.Highlighter.element);
      },
      'selector let me choose': function selectorLetMeChoose() {
        //need to restart Highlighter from clicked element
        var fn = function listenClickOneTime(e) {

          that.Highlighter.erase();
          that.Highlighter.point(e.target);
          that.Highlighter.underline();
          window.removeEventListener('click', fn, false);
          window.console.info('Choosed the selector element by myself');
        };

        window.addEventListener('click', fn, false);
        window.alert('Ok do it yourself, click which element.');
      },
      'selector which': function selectorWich() {
        that.Highlighter.erase();
        that.Highlighter.underline();
        /*eslint-disable*/
        //jscs:disable
        window.alert(
          'nodename: ' + that.Highlighter.element.nodeName.toLowerCase() + '\n' +
          'classes: ' + that.Highlighter.element.classList.toString() + '\n' +
          'id: ' + that.Highlighter.element.id + '\n' + '\n' +
          'CHECK CONSOLE FOR MORE INFORMATIONS'
        );
        window.console.info('Showing which selector element', 'Element is: ', that.Highlighter.element);
        /*eslint-enable*/
        //jscs:enable
      },
      'trigger click': function triggerClick() {
        try {
          that.Highlighter.element.click();
          window.console.info('Triggered click');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger focus': function triggerFocus() {
        try {
          that.Highlighter.element.focus();
          window.console.info('Triggered focus');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger fade': function triggerFade() {
        try {
          that.Highlighter.element.fade();
          window.console.info('Triggered fade');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger blur': function triggerBlur() {
        try {
          that.Highlighter.element.blur();
          window.console.info('Triggered blur');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger submit': function triggerSubmit() {
        try {
          that.Highlighter.element.submit();
          window.console.info('Triggered submit');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger change': function triggerChange() {
        try {
          triggerEvent('change', that.Highlighter.element);
          window.console.info('Triggered change');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger close': function triggerClose() {
        try {
          triggerEvent('close', that.Highlighter.element);
          window.console.info('Triggered close');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger play': function triggerPlay() {
        try {
          that.Highlighter.element.play();
          window.console.info('Triggered play');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger pause': function triggerPause() {
        try {
          that.Highlighter.element.pause();
          window.console.info('Triggered pause');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger pin': function triggerPin() {
        try {
          that.Highlighter.element.pin();
          window.console.info('Triggered pin');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger select': function triggerSelect() {
        try {
          triggerUI('close', that.Highlighter.element);
          window.console.info('Triggered select');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger show': function triggerShow() {
        try {
          triggerUI('show', that.Highlighter.element);
          window.console.info('Triggered show');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger reset': function triggerReset() {
        try {
          triggerEvent('reset', that.Highlighter.element);
          window.console.info('Triggered reset');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger mouse over': function triggerMouseover() {
        try {
          triggerMouse('mouseover', that.Highlighter.element);
          window.console.info('Triggered mouseover');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger mouse move': function triggerMousemove() {
        try {
          triggerMouse('mousemove', that.Highlighter.element);
          window.console.info('Triggered mousemove');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger mouse enter': function triggerMouseenter() {
        try {
          triggerMouse('mouseenter', that.Highlighter.element);
          window.console.info('Triggered mouseenter');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger mouse leave': function triggerMouseleave() {
        try {
          triggerMouse('mouseleave', that.Highlighter.element);
          window.console.info('Triggered mouseleave');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger mouse out': function triggerMouseout() {
        try {
          triggerMouse('mouseout', that.Highlighter.element);
          window.console.info('Triggered mouseout');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger mouse up': function triggerMouseup() {
        try {
          triggerMouse('mouseup', that.Highlighter.element);
          window.console.info('Triggered mouseup');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger mouse down': function triggerMousedown() {
        try {
          triggerMouse('mousedown', that.Highlighter.element);
          window.console.info('Triggered mousedown');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger scroll x': function triggerScrollX() {
        try {
          that.Highlighter.element.scrollBy(35, 0);
          window.console.info('Triggered scroll X');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger scroll y': function triggerScrollY() {
        try {
          that.Highlighter.element.scrollBy(0, 35);
          window.console.info('Triggered scroll Y');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger touch start': function triggerTouchStart() {
        try {
          triggerTouch('touchstart', that.Highlighter.element);
          window.console.info('Triggered touch start');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger touch enter': function triggerTouchEnter() {
        try {
          triggerTouch('touchenter', that.Highlighter.element);
          window.console.info('Triggered touch enter');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger touch move': function triggerTouchMove() {
        try {
          triggerTouch('touchmove', that.Highlighter.element);
          window.console.info('Triggered touch move');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger touch leave': function triggerTouchLeave() {
        try {
          triggerTouch('touchleave', that.Highlighter.element);
          window.console.info('Triggered touch leave');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger touch end': function triggerTouchEnd() {
        try {
          triggerTouch('touchend', that.Highlighter.element);
          window.console.info('Triggered touch end');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger touch cancel': function triggerTouchCancel() {
        try {
          triggerTouch('touchcancel', that.Highlighter.element);
          window.console.info('Triggered touch cancel');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger drop': function triggerDrop() {
        try {
          triggerDrag('drop', that.Highlighter.element);
          window.console.info('Triggered drop');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger drag': function triggerDragg() {
        try {
          triggerDrag('drag', that.Highlighter.element);
          window.console.info('Triggered drag');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger drag start': function triggerDragStart() {
        try {
          triggerDrag('dragstart', that.Highlighter.element);
          window.console.info('Triggered drag start');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger drag end': function triggerDragEnd() {
        try {
          triggerDrag('dragend', that.Highlighter.element);
          window.console.info('Triggered drag end');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger drag enter': function triggerDragEnter() {
        try {
          triggerDrag('dragenter', that.Highlighter.element);
          window.console.info('Triggered drag enter');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger drag over': function triggerDragOver() {
        try {
          triggerDrag('dragover', that.Highlighter.element);
          window.console.info('Triggered drag over');
        } catch(e) {

          window.alert(e);
        }
      },
      'trigger drag leave': function triggerDragLeave() {
        try {
          triggerDrag('dragleave', that.Highlighter.element);
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
      'browser clean local storage': function cleanLocalStorage() {
        window.localStorage.clean();
        window.console.info('Browser cleaned localStorage');
      },
      'browser clean session storage': function cleanSessionStorage() {
        window.sessionStorage.clean();
        window.console.info('Browser cleaned sessionStorage');
      },
      'browser clean cookies': function browserCleanCookies() {
        /*eslint-disable*/
        //jscs:disable
        try {
           window.document.cookie.split(';').forEach(function forAnyCookie(c) {
             window.document.cookie = c.replace(/^ +/, '').replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/');
           });

          window.console.info('Browser cleaned cookies');
        } catch (e) {
          window.console.warn('Unable to clean cookies', e);
        }
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
      this.Voice.play();
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
