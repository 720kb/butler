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
//jscs:enable
/*eslint-enable*/
/*global window annyang*/
(function plainOldJs(window, annyang) {
  'use strict';

  var Hey = function initHey() {
    /*eslint-disable*/
    var Highlighter = new window.Highlighter({
      'scroll':false
    })
    , i
    , that = this
    , sayHello
    /*eslint-enable*/
    , onStartEvent = new window.CustomEvent('Hey:start')
    , onEndEvent = new window.CustomEvent('Hey:end')
    , onDetectionEvent = new window.CustomEvent('Hey:detection')
    , onDetectionMatchEvent = new window.CustomEvent('Hey:detection-match')
    , onDetectionNotMatchEvent = new window.CustomEvent('Hey:detection-not-match')
    , onErrorsEvent = new window.CustomEvent('Hey:error');

    this.html = window.document.createElement('img');
    this.html.style.cssText = 'transition:opacity 1s linear;position:fixed;top:-100%;opacity:0;left:0;right:0;margin:0 auto;float:none;z-index:999999999999;';
    this.html.src = 'data:image/png;base64,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';
    window.document.body.appendChild(this.html);

    this.lang = 'en-EN';
    this.commands = {
      'hey': function helloWorld() {
        if (!sayHello) {

          sayHello = true;
          that.hello();

          window.setTimeout(function sayHelloTimeout() {
            that.goodbye();
            sayHello = false;
          }, 4500);
        }
      },
      'selector on': function selectorOn() {
        Highlighter.erase();
        Highlighter.underline();
      },
      'selector off': function selectorOff(detection) {
        Highlighter.erase();
        Highlighter = new window.Highlighter();
        window.console.info('Deselect all elements', detection);
      },
      'selector next': function selectorNext(detection) {
        Highlighter.erase();
        Highlighter.next();
        Highlighter.underline();
        window.console.info('Select next element', detection);
      },
      'selector back': function selectorBack(detection) {
        Highlighter.erase();
        Highlighter.previous();
        Highlighter.underline();
        window.console.info('Select next element', detection);
      },
      'selector next id *detect': function selectorNextById(detection) {
        Highlighter.erase();
        Highlighter.next('#' + detection);
        Highlighter.underline();
        window.console.info('Select next element by id', detection);
      },
      'selector next tag *detect': function selectorNextByTag(detection) {
        Highlighter.erase();
        Highlighter.next('<' + detection.replace('<', '').replace('>', '') + '>');
        Highlighter.underline();
        window.console.info('Select next element by id', detection);
      },
      'selector next class *detect': function selectorNextByClass(detection) {
        Highlighter.erase();
        Highlighter.next('.' + detection.replace('.', ''));
        Highlighter.underline();
        window.console.info('Select next element by class', detection);
      },
      'selector back id *detect': function selectorBackById(detection) {
        Highlighter.erase();
        Highlighter.next('#' + detection);
        Highlighter.underline();
        window.console.info('Select next element by id', detection);
      },
      'selector back tag *detect': function selectorBackByTag(detection) {
        Highlighter.erase();
        Highlighter.next('<' + detection.replace('<', '').replace('>', '') + '>');
        Highlighter.underline();
        window.console.info('Select next element by id', detection);
      },
      'selector back class *detect': function selectorBackByClass(detection) {
        Highlighter.erase();
        Highlighter.next('.' + detection.replace('.', ''));
        Highlighter.underline();
        window.console.info('Select next element by class', detection);
      },
      'selector add class :detection:': function selectorAddClass(detection) {

        Highlighter.element.classList.add(detection);
      },
      'selector add id :detection:': function selectorAddId(detection) {

        Highlighter.element.id = detection;
      },
      'selector put value :detection:': function selectorPutValue(detection) {

        Highlighter.element.value = detection;
      },
      'selector insert text :detection:': function selectorInsertText(detection) {

        Highlighter.element.innerText = detection;
      },
      'selector remove class :detection:': function selectorRemoveClass(detection) {

        Highlighter.element.classElement.remove(detection);
      },
      'selector empty text': function selectorRemoveText() {

        Highlighter.element.innerText = '';
      },
      'selector which': function selectorWich() {
        /*eslint-disable*/
        //jscs:disable
        window.alert(
          'nodename: ' + Highlighter.element.nodeName.toLowerCase() + '\n' +
          'classes: ' + Highlighter.element.classList.toString() + '\n' +
          'id:' + Highlighter.element.id
        );
        /*eslint-enable*/
        //jscs:enable
      }
    };
    //mic access allowed
    annyang.addCallback('start', function onHeyStartEvent(data) {
      onStartEvent.eventData = data;
      window.dispatchEvent(onStartEvent);
    });
    annyang.addCallback('error', function onHeyErrorEvent(data) {
      onErrorsEvent.eventData = data;
      window.dispatchEvent(onErrorsEvent);
    });
    annyang.addCallback('end', function onHeyEndEvent(data) {
      onEndEvent.eventData = data;
      window.dispatchEvent(onEndEvent);
    });
    annyang.addCallback('result', function onHeyResultEvent(data) {
      onDetectionEvent.eventData = data;
      window.dispatchEvent(onDetectionEvent);
    });
    annyang.addCallback('resultMatch', function onHeyResultMatchEvent(data) {
      onDetectionMatchEvent.eventData = data;
      window.dispatchEvent(onDetectionMatchEvent);
    });
    annyang.addCallback('resultNotMatch', function onHeyResultNotMatchEvent(data) {
      onDetectionNotMatchEvent.eventData = data;
      window.dispatchEvent(onDetectionNotMatchEvent);
    });

    annyang.setLanguage(this.lang);
    annyang.addCommands(this.commands, false);
  };

  Hey.prototype.hello = function helloMethod() {
    this.html.style.top = '15%';
    this.html.style.opacity = '1';
  };
  Hey.prototype.goodbye = function goodbyeMethod() {
    this.html.style.opacity = '0';
  };

  Hey.prototype.start = function startHey(settings) {

    if (settings
      && settings.debug) {

      annyang.debug(settings.debug);
    }

    annyang.start({
      'autoRestart': false,
      'continuous': true
    });
  };

  Hey.prototype.plug = function plugPlugin(plugin) {

    if (plugin && plugin.commands) {

      annyang.addCommands(plugin.commands);
    }
  };

  window.Hey = new Hey();
}(window, annyang));
