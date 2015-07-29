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
    , that = this
    , sayHello
    /*eslint-enable*/
    , onStartEvent = new window.CustomEvent('Butler:start')
    , onEndEvent = new window.CustomEvent('Butler:end')
    , onDetectionEvent = new window.CustomEvent('Butler:detection')
    , onDetectionMatchEvent = new window.CustomEvent('Butler:detection-match')
    , onDetectionNotMatchEvent = new window.CustomEvent('Butler:detection-not-match')
    , onErrorsEvent = new window.CustomEvent('Butler:error');

    this.html = window.document.createElement('div');
    this.html.style.cssText = '-webkit-transition:opacity 0.3s linear;text-align:center;margin:0 auto;z-index:99999999999999999;opacity:0;position:fixed;top:0;width:100%;min-height:100%;background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2VkZWRlZCIgc3RvcC1vcGFjaXR5PSIwLjc1Ii8+CiAgICA8c3RvcCBvZmZzZXQ9IjU0JSIgc3RvcC1jb2xvcj0iIzVlNWU1ZSIgc3RvcC1vcGFjaXR5PSIwLjUiLz4KICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzVlNWU1ZSIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgPC9saW5lYXJHcmFkaWVudD4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI2dyYWQtdWNnZy1nZW5lcmF0ZWQpIiAvPgo8L3N2Zz4=);';
    this.html.innerHTML += '<img style="position:fixed;left:0;right:0;bottom:10%;margin:0 auto;z-index:999999999" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL8AAADTCAYAAADQ3MInAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpGNzdGMTE3NDA3MjA2ODExQUU4REY4NDkwNEEwMTBBOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQzM3QzEzRjJEMzAxMUU1OUY0N0M3Q0RGMkRDM0YwQSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQzM3QzEzRTJEMzAxMUU1OUY0N0M3Q0RGMkRDM0YwQSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IE1hY2ludG9zaCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkZBN0YxMTc0MDcyMDY4MTE4QTk5Qzg0RTJBRDMxNUZCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkY3N0YxMTc0MDcyMDY4MTFBRThERjg0OTA0QTAxMEE5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+rrDm1wAARLtJREFUeNrsfQeAHNWRdnVP3hwVkFBCZCGBRA5GYCywEdE4GxtssDns4+xzxPadE9z5/Dtin88YY5OTAZGEsRBIgFAWIISM4q7iSpvj5Jl+f9Xr7tnZmc7Ts0nzRDOzPR3f+6reV/Xq1RMYY1AqpXIkFrFUBaVSAn+plEoJ/KVSKqVSKqVSKqVSKqVSKqVSKqVSKqVSKqVSKqVSKqVSKqUyRopQqoIxVa+lWJQS+Ev1VxKKEvhL9VUShhL4R3H9CKMAyCVhGI3gf23d25CIDcC8uXOhsaZq2O67q6MT9u7fD36vAImBIHgS3QCV5XDRgrmCm3X58NNLawJlwRrR4wkm+3tDocqKo3z+0NGMCSFJoAISiELSJ4o9UjpxIBZL9eBp0WQy1tdy8HD3v938+bhbgF616S2WlERggjDkgRl+EyQGgVS4+F2SKEISPMDSaRDKQrDwtHkjhj1vSf7lctHCcwQ3wP7QKysbG7yBs5kA0/GQE3Gbh0fOYozVhYJBHyJPhht+eNSTEHhpKQ0UZxgMBvEUIRoMBfcdX1W7c/maDdtSaakpKaW3PPnII2vv/+PvJZ37mwrD+QvmZ855dePmI743OOI1/yXzTxMKratnXn2tobKs4uJ4KLDYE0ucDsnkLEliPo5IPllIAMFGTQ/OL5K/CCKdL3QLorjH4/Fswks9tX/v3lU3fPyaSKG9wgoUgiNV8x+x4OeEo4A6evTZFyrmz513zoG29o8hpbkOd1UTgDilwP8kScpspNlJCGRBYDIymfadBC4o9EXgN+bAR8B4RI8sQJnHFnZJ6dQTLJF86Z4nH1/z+G9/JRUiCCvWb2Yl8I9z8FsEvd4xwl8e/1vV9OmzvoCAX5xmbKFHFM3uJwOfC4AE6rRRVbsLCjrVp6LjM+BXPsFgqqnAsPoC/pcSkvTIlaee/KQJ2E0FYfXq1awE/nEG/kJB/9DTz9VOnDr1Y17R83X8+1iHD5FlZOaAP3u/zXnVAu9QWFoS2DupqOd/Nq5/Y+n3vvmVuAHYR0wIRhP4x/1MLkEpFkAv6OwT0Oj8+JSjpy1H4P/BMfAVUGfoj7KxrM/MfruXpc5BFDyCIC7wl7Enzr7wvMf/sWbDQp33AoP9mXLuueeOeze4ON6BXwDo4dkVq457df3bj3h8/ofwYvPGwjvLFEpY7Pf5n8Fnv+vxJ5+qMxECQwEYz0IgHuHA1wT952680fPc8pW3VFdXv47G5sfHaD1V4LPf2jj9mOXL1my8xIqwH2m9gDgeQW8CfD0A8HL/35Y03njrbfdU1db9nklSwzioj7len++5lWs33fG9H/3I51QIxmMvII434DvV9lReeG31qUfPmPksCOLnxlMyL3xBv+T1fveSy69+5L4nlkywqgjGey8gHiHAz23kvL//vvyNxeXl5UvxMmeOSxoo19E102fMWPLsq2+crFEftnqBEvjHDvD1/uaN/OKqjdcGa2ruw+8TXXiWom6Ft7h4VmVl5bMvvL7mzByQ2+oFxoMAiEc48OGVdRu/GAr67geQagp5Dh+y6apKCYIBCQL+4myhoMTv4fUUXGczykKhx198fc0FevVyJAiAd/SA2FXgm4Kec/zV6z4lir7fEXYL0fR+nwRNe/2wfF0FtPR6gSIasgetJKbSDuejinQdL6qq6Q1JWHRuP0yamIZEoiABmBoMhe5/7tXXP3nlxR9YD4PjbZDzXevvIQJQ7FHhYlLBES3qCO+cOXOgvrrS8nl+r7cg4L/1/o5FHX0Dj/k8nspCnj8YYLB6Ywi+8dQUgLRveCrNH4N7rm+BOcfHIRoToBA2hIb9rq7Oziuvu+yDO3Nkzez7kGJVAErhDTngZ8koVkQliH5rLOyCOScXAnzh+VdXLaiorHgSUTOlUOBv2xWAG++dhsDP70Qr6gCumA5wyjQBYqilt7cweHY/QKzLHQF45t/2Q31dGlKpwi7FJFi15Z23r/23L93QkwVwI9AzpwJQCm/Q6db56D4Yb4UC/+6HHq0vr6j4U6HAp3i2RFKA379Qlwf8mnqApd/2QO8DfnjkjiR88pL34cbLt8Fj/5WC/vv88MK3kLTXFlhhiSDc/0IN2hqsYENYEOH8OafO+8PMmTNzDWBbdsBYswFGl8GrEmSd7QMFAv/sCy4Qjz3xpJ8hWE4p9FF9XgY7dvthU8vQYLwrTwJo/6sf5s7aDl/60udhytTj4LQFH4BT51+A34+Fr371Jph3zPuQQsG44sTCnmHJjmrYe8DHn6VwJ5B43d0PPv7V3DpzIgAxfwD0toQvBKNl9uzoAL9SF+l4CqSw9vaBuXPsAj9Pi/3oZ7+8SWBwvRt1T/L4xubyIVV4+tEAz/7CD88++wiC/QNw770PQEtLC/T29vKNvt99970oDBfB0hceh6f/xw8nHVXAQ6T9sGVbAIHrjr3pCwa///TLK86xIQDaOozCuPW2UTRtfPS5OnmEohKpmLU5AH72PuGJZ186LhAI3OHWO6fTIjy0s3yI3+yBb3lh/brX4HOfuxk6Ozt1z+3o6IBPffqLsH79SnjmB96CnmjVtnLk/G4BitVV19T+8ie/+HWVRQHQvPEHF8wXiNvnbgLyK8HYbj5ywU8VEwuI0Fvmhf5yX2a76OxT7cTi5wF/7ulniA2TJv4X0XFXnhM1WDKJ2n8gkNl37QkAJ85Owle++g2IRCKm14hEwvD97/8IjpkWh2sKoD8r2wKQSoM7A2AECEE4/azzLviqRn3aEoBLTjtVdkNlb6MsWcioHORiIqU0YHy78hRLPN8wZv1Hv7nrauS0H3Gt0pA7dXSh0coGR5s+uVBErb8aNm9+1/J11q5dh+esg5sXFzBqFfODJLkLKp/Xe9uDzy49tmABOHWe4JFEUDejLvyIBz/jEVgAFbE4lMfjcPUpc+wCP4/v3/XX+xurA6Hv4rVdG9AjJdY/IA6564KTRVi9ZgP2CEnruI3FYPv2bXDybJ3XpDm1iS4zTQHxhLugwl6kbsrkKd+fdNQUsVABEFEw+UYDfaMsWHDUaX6qIA9Wlke/G7cMfPqcfczsj4puT0TBq6dI22aNh1aUC9Dfb38CeDgcQYM1/12vOPQo/L3tatjQeyn8at9XAKL7dK9BnF9wWakKonD1PQ8+eoGW48CAv+Ttv/D0OYIkpUBi0qhjGKOS9pBhdHFWjhmnfP+m2/6tLBgq/4rrPRSCPhRgQ2IYWjsYHDV5gu1rNTY2QDQ+VCOe37YU7qv8IZxVtReOCfXCDXUvw4Md30aUD2heIxSQoAhKNRSqqLhZz3NmQRAy5aIzTx2V/v/RGdim35KCAeDzNP81n/jMZ1AnHleMx6utSg96LfDjtQ0SXHzxRVBWVm75OvX19XDKKXPhjQ1DteJnYk/nIery2rdQ++/Pv4gnBR5PceiEx+O59rGly06zKQBjZqBrVIL/ojNOFQoF/rd+cmdVMBC4sRhNQYFr1QR+72Bcwd2vSTBz1klw3XVXW77ONddcDSecOA9+8MJQ8GtBWQ/ekyvjIHqKhjdPfX3dv1oEt+ExF50+TyiB3xXGbV75F5x9/gX4cnOLVnEeNHIbo5m/3zsEsOQfKfjjH/4b5sw52fR8Ouau3/wUnnopDYfah/72t8CVkMrxjLzYPR+gbGbedRZOi4HXy6BYM888Hu9Fdz/06AzQj/0fs2HNow78OhpCMOH5Q77Pmn2cJ1gWuhSKGLLtxStfNrd/iGq+9m4JWrumwAvP/w0WLVqke+5ll10Ky/7xDBxonwjX/SnfEFwx8Sq4tf92WNs3A7aGG+HhroVwfcMvEInBvP7g7JMj4PUUz4siCMLk6TNmXZpVz1Z64DGh/cdColo7lc23f/3mtxu9Af/lxXwooj7zT4oDLE+gIeqXd8YAZn4tBW989zhYunQJ/P3FpbDs5eWwdev7KCxeOO642XDZpYvg8sWLkef74MKfpfg5WuXJo26AJ9OfAEj2AgQnaR9UEYbjZyV4gF0xi8/r//Cnb/jiA4/cd280p97VfFuWYv/HCoUYtsJDmlNYp6FKWDj/FDtcX/f7s8tf+2hVTc2DRXZJQVlQgj89UQv3rp+U15/edIYAt9/ggcoKAZgUBr/PAykpCN19DP77r2n460ZWMES+f9l+uOpD/RCOFL0Dj+1paj73xo9fvQ2GBtmCxvdcEyXvLVeu3cBKKcoL0/q6mj9UXr5oODxS8bgAn/xwL6xsDsHu9uqsbgHgz+sYbqjZKwBOrfaDH22E9V1JgAF3bn/JrE748AfCEIl6hkPRBhsaGmjO73YdO1zI6QXGhPYfNZxfR+vboju0HT1jhgcpxrlZnLVoz5xGkAeDDH57UyucP60bbyZB3gyEfgbvHGCwfq/83XzGgskmpOHqE9vh9s+1o4wJUMwUK9l1FywPfUijTawYvnn7F559xqjg/qNZ8ztJNQh3/OKuU0VRnCwrZ8bDDfBvvhWj0Cyq6koJ/vuWVmht74DWDi8UC48efIXJE1PQUJ8GWssinS4e8BkaNWl8EbJV+L29vvM+dfOXyx+95+6wBp0RDHqBUVtGBfgXnneuU62fp/mnTT3q3FgsVubxeDj4I+EwhMrKIBAIFE1LqlGVjQ1pmDghXdS6oiA2G+FDBQh1CpKJBEhYbzzNuiTVXH7ZFXMQ/Ou1ZMXE2B2VgjBa/fyCBUHQ6naFioqKE/hiDgh+0lr4N6iCUFwTgHEPEPUExdwkaZgwhID3+v28Dqn+RI836A/6TrbYC5u6Pi8672zhiAf/hWedZkfr6wkG33fciSd5Ovv6p9CCEbQiCgEyjZ+k/envYvL/8VKojlLYtaTJG0Or5Smry5BC8YpwgobiMZtQpFvpC08bWb//SINfsAB4UyNX3T7x2c83iIIwKVsbE9f3+XwZCqQ2aqnkV3oau5Z4PJ5ZKyC7nhgaGaGyqll6de/U+IURdLeLI1jXdipC0PEwDLnelKOnT2QSm0h8NZWipE4Jzl092HUT6Ok7GXJOPR5WqMJwURK3n5/IFNWRhBt9J6pDf9OmCoPH76u/4cv/UmlDodnquce7wSu4WGl5guAPBmo9HrFOnTIXjcR545ehwUtdN/FXdY0sq8AhTRiLRC2BiI4pr6zgFKFYLh+6RwKfKWrzmagHNHpvOs6LPSSB34dcn0Afj8X4OYFgULFppMqZs4+jAY1+EznSGgEWTAxjQcOLNObBb3ctLN1ITbMu98SZ06sH0minYSPSDk9lZaYqnbg7ydvR39PL6YAlbcsXnpOgsqa6aK5V/ky9vcjLrT2TAlqoqsZn8oiGkOVuTdW1iZqfPGR0D/Vd8FoN1dXVlHHooIWOBMB48MvIMwTDIQjeUQR6uzw/b18sGknEwNOTSCZ8oK70rIAyBxGWni0ajniTqZT1VUvxuGg0QnOPJX8gkCqCh4meyZdE4Nt5JppQj88iYc+o/0yCwHQplnwOyo7YIYqetAUtbaT5rQjAsAiCMEKgH3Lc/Q8/XDZp5nHHY8P4qbsF2fgS5M+0kJbSmWOxWxbTaYlt3/L23h99//Yu5Tp8runHP/Xp6gsXX3Wrz+OZiTWVlNSZ3QrYJRX0yifLeVamHI/PIYgEeVH0CWr7MMuzrwW8L1Pu766BJgq0Hq/Pkts8B8yM0M8YjRDgyw0m+hGyL6ScI6rnCpSBhB8rYt2ILJ1+/l+u/9RSGBxylj72iU8GL7/uU7Oxl/Aj5ZTErJk1+KzMo4Scerw8s5ZAn33trXs/ftXiwzq9hRXzZNSB39Gizi+/uWER8pS7sKKPsvM82JaRcDj8yysWnvcHFfy3fuNbR02cNGUqtpmXXJwoQKIKZgkFCFtfIAFg+D1NYGbybwR6fgwbTIMgnyMNEYqMwDBLCtfgXURBVqiy0x6ljO5vKdKNMY2DsnSqCmYV4EKWEKj0RRRERvvpGLo1nYGChUD3MJHvl78LCvjpOAIynhp7e+P6piWPPdJLwH/g6efPOXrq1F/jgUcL9lxoMSmV+s0Hz15w50gKgDCMwM875oVXV59UXlWxHN/F8aIQHYfbrv/Y4g+9QG36+NJlt5dXVHzTkG4ovmsyGh29PZP5MBmFBRm1Cp1g2R4Zh9eTeBhHwtlAHuOCgu/jA9GoQhRpbj106Atf/ORHn/nZb/532lnnnvccStI0cFaNaFSnvvChsxY8ABYT4botBN6RAj7tKysv+3ohwKdS21j/7Ss/+rEVzz31t5jP5+usrDTPOI60CSJcgTtY8xYBRsAvLy/XBFuuf5yDU2JK3ib9qvJ4vEgNPJkmRWDIo7mChpLnPZaUdX11IC9tW5/x9/H5oKzc2tzjrs4OmoEgzD3ttC87Bb76Hl6P93sPPv3889dfe0U35McKWQF3QWET3iIDX9enu2TN+mOxe11sxzetBTav6DnpEzd/6YMI/hfREJSs8Gy6PHk+KOjN7oCX6vNWR5DzQIxaNC3J2RTo0qSVg4rrMImbqHE/eoaO9jboVlIcIm+Guvp68JO3ReMegjJwlw3+zCLWDoRZVMI/rJyfiKYSV1/7mcpgKHRVoW2HJGx23bSpV+DXBwzcn0UTAG+RgG86kBEUPafjnrxcH+RnlhjT9UUT5RhSqbiruqLyPPz6IlaBpUz1/DpeLx/0cs3gwWtWhEJQFgpALJ6AvnCEA35CfR1Mn9QIKextduw9COFYdIgAEA+PRaPw8t+XQvPuncTHObiPOfZ4OP7EE3gvlQsiGreYccxsV2KWRCUOyuJ1WDKRSn34qmvm4jPmpdhVQyF0weYdCjc60s+EhfjxIOSPD9jpBRwJgDgCwBdu/8kdQZ8gnq9H4iRlpDF30+PEftEzt7auzgNSPGlN28m83a0wBwKOF69XXhakVH9QURbifxPIpzbWQSX+XVtZDg01lXkgo2eIof3R1dGB2tzPKRXvCdoOQ39fPwz0529o6INLDy4Pbnkt60BJ9EnChCmN5+nVg922wzuffN8TSxpgBEaBvcMNfPrf8SecXInAOEkXmQYg03wJn2/mBxctqo6Rk92inUQNTlqPuLUb9cppTTLFQR/Hz7QSD98zEIGaygquwfsjUc13CmGPMWXaNNizexc+kwfIlp45+1iYMHGShiZl+HvAre5KjnuyY1sn0xAKBk+023YGzzC9uq6O4rE6IH8MQKsXYG5pfzcHuQSLfwsh6rcBpuvRB0FndFRvP+qvhvlz55Yno9FY1qCMufZXYn7coDwE9p7+AQjjIyRTKQ5a0vz7D7dBLwoAUaz+SITbBLlUgUZSP7joMujt6VWoiAC1yPmzeb2WEnBjEI1rfavhHimJddRWwdHB4HRyoOaOfFD7CPqDaHqXrUOFUT3UYTsE9EWbIO8tEOBWgJ/3nUXLggKINVrvwEdPdHijPFri0UKDp6q+IZQSvQnr2ofxWBbu8nSJ86coeE4RJnXdXPq7o7uHv7lHR3hJAMoqKqCyqmpIT8K1viC47eTI8jB5dBWKTiMnGY2ReT1VaL1rOwP0OL+eQkN7OxLwhjRezMnqkLYqphiuTtNEsr5QKohvLeo1iB4H1dN0pCl7ItHyCsFvS417FGPPLeoj6HhyPBYyqmW4sRtUwqKdwiepmAS8ZZeUCImajnYxcNTRHqYBZidtxzNzp9JlYB7+4HoP4C0A5GbH6AarCf6E1+h6TrrzsoDfl0jEkooTQbSj/YiSyGxpTC4na7vu1F7J47Xd8SdSyZTketvJ6eNz44EA7McC2RKKYvn5DaM0dZR+QYXieOLRJAVuJbBhg3ZcnkIiwQeNct2Ker3FaJ0KQ4NiZuMcPBBK0dB2XaUSk5IJ/Oe254UN9ph6fN9qb1B0b4+ZIFhJMlUElQeecCRM4Ytk9FoCvzrTS/b6kAfIY+Gc0ZuSgAxs0eI7qO9tS1OjYolFoylweRIU2jeChsGbq/nt8HxLQuG1CWwrFMcM+ILysm63vNjd1RWTGKM0TpbX3iLtNzhrSTIFw6jW/NzPbqz5VdDbpzxcWaRisZjruSOYHDFrlAIRDHqCYfP22NX+WvH4ZGC6jx/GPJ3tbXEmSRFNj5ARoIn6JJPK6LHxQCJjbIxrfiEzsGWbnzNIRgbCrmt+DawwC8JQMP3xuvCggoXPIdqfND9Ju6sTyZHB7NvTHMPrRu0aiOr0RnV43ggUo1nz82wVBppfDQ8RHY5uY90kI+EB1zW/NMgErAjAiPn57Rq8WvlcikN7UKFtffedODZQ1PappDEV48/K9EOzmk+n0hBPxF1zU5IvnubRimaA1Yh90iL8eoNnFsQrjtQyDsWbBMVsGL5mGt9USLwOAG4l3Ygm11e3VMp92kNu6/DAAEul09GAg3on7Z9OJVUDTF9IjGepyGv04nVo8Mytno3uSID1KClYjDS/kbeHCwbxfYfzi1OMxfft3Rtzm/YoM+60pizacXmOivAGAcxz7LivNlRM2qQ96hMS+GNMrmc90PLMD6q7xACAFHsjCoJrtgH1RmYcXf6NGQocj91XBrYc1XFKijU37U4wl5O0aIAfdDQ/gIuDXV6XwK73u2Dwsu4ae3KLYvukI7ZPVuhOUEnRYUhxqIsx8ZR4PORRCbjnEzVlOwKPBvVK3jxY5qpTbt/YdXHKYgVSMhprb22V+HKZxTV4nQhB0cHvJHNynuYvBviV+bdCKpF0HO9LvNqqYckM5hxQsizKeSO41cmJAkVScqHTui/dM2jx2Qd7CbsNj8Y0QFhxebmq+7M0v9WY/VET2wNWAF9s2kOT07kxnUr2qYCw2/huhTfw9N5p97I1C5J5oi03nl13FhbIi4MnU+m+YrRdljJ0qv0dCYPXJqjNDFwrQiKki2DwqiUeT8TUFHu5WjoT06JGMxYhlked40veIze9PUXNNC2nIJfTOebUl9zx8AnIkEomiuXp0fLwOPLgjJTBa4X2FI3zq/dC4JdHlJlOehRBFQCaI+uxOSBmVYPSpBbm4vWKhTcpLSen5aHYEtOc1K+meMStvMjgZxa1/4hwfqu9g2Di9SkC7ZGU0WMpbkZtZJdgmk9gD4ZC4Pf7XQU+z6UZjbp2TTLGKbuC2ykQKd0Jn/zGQBfw2XWJiiVRzLYDd7I2WBYKsQCQ26E8RV+eXjV4E/For53XiUUiPP+lq43p8tWcZmYwBn6SA18v/QpNqs/9LZ1KDBRZ8wsGDMIKDkeM9php+sx3VLruD3Ip9+jrG6D8H2RtWuMzNIE8FuOeFDc0q+zn99uZFG7pGUUXqQ/xewK3nH5OP9UIHSdkTXMMR2K9xUA9k21AvfBlq7rFNg0SHYLcCe/PfO8+1JZkLqoyulBKiTZsP9x6GClNwi4Y5Axu7gFMjZ50ZXOT81PadVpry2AkmO7pD/hBSfkoR7ymUumegQF5krleUltHniwGHVVVcQNHSiFYdB38dm+eR3m6elrjWPuuco1EJMrXMn/nrfUHqde2C4ikshTPeC80VZJoXrYRTe8uZ3sb5PoUIKeGcvAJMCLEW5p3tXL6w5hrCY9EvFe34ImDcWr6opRir8yiGf3J/KEE6p1W97SHFGvr6ScLU3jztVe7scO2HXlIDZ5ykMFtLBU+oZ6vTjPoyiTvJfV68jwgxn+X+DhFiuyozEZrVaxY9vp+Xt3JRJtbz5QShWTlrqawAxtRGA3gFyzy/8znnl07I1Iqtdc14y2VPny45SCvQOSylB4/5QT81MVL42Aer9k7shyPoaTm/cTf+VJOytwGUXEL87SLkjf9z/c28tCReCy8z8Vnam1vO9xjAvqiDJS6pfmtrM6X+fulF57rD4cjb7tVgbF4dPe6Nau6Mz0LE2JOtCIfHEuPz1Ub1fkK8mR9ISMMPuT2wWAIfD455ofCJHwBOS4pmVKyWjAK+U5lUlx0dfZucU3zp1K7Vyz7+2EobJqrMJzgL+gBUTuzgwcPbgI500LBpauze8vhgwczE6uxkQey+bxlPkzdvTR+eX8mF1COt4CSZtHkdzXDNOf4XiWtiRKqwWhutFKjO97f8hb+7UpFRaORd1e//lq8WNRmtHD+IfvfXPnKVuxe/+mC265/y9ubVmXfC7v2HlmzSZCIxfhgTiqVHLKRkaeu1qhqQkHWRMOawkTIUAvjzS3Ko3UlScnhk73yIiXM9fsC3AXM84cCy/DyF5YsaU7E4ptdeKb4vuY9L+vR42KX4VqKNO+lHnvgr93drYceZgW+Z09v76u/vPPH7w/x/MTjrdngogSwQ+qTyWHHvtzJIUR9bGRudgpK9TxJ0ary0qn6W1oxQgu5p0IxNHtC2kOhHvQ7Gb/qFo/H5M8YT8Go8nLY8s7bkV1NO56AAsfzorHYittu+vzGYhu2Iw1+zZf6w+9++xRq/3+QdnGyIXCannjo/rtyLxyOhPdn6k1ZTTCVTvFEsrSKYQK1Pk/fIeTPx+XeDYtraZFh6MhATyR4+APfIpH8LTz0b1pQjo6lgSmn6RVVWpMjhfLi3HSPcBgCqOEp3CN3C9FSrmlpiIfn13fe8fLAwMBSp22HT7Jv9esr7rSiKItVRmI1xsz+la8sD3t9//GNRZcvrq+razjdciQkNlpn2+GBPc3NP37s/r8ezrMBOtr3HzVlaqa7D4cHoKOtLePGo0cgzV/f0IiNG+Q+7sz8DCb7wvWeRXUX9nR1IRhjXGPWN9TrxtrnUg/SooPuxHTWmKa8SIQ81VCOsqTpkOpwEl8VTpnRRYIcCARtjEiTsZvKi9bkcUh8ACuJ1/VBX18v5/9ai34N9PcP8fDs3rE99o1bbvrhF2/5l/r6xgnn8HXyLLZdV3tbtKe3+z/v/MH3mkbSBhrxdXiXv/Rir5BK7EMKcrpNvhht3rOnU+u3jkM9bTBPiVGJRbm2J8BRw1IKcL6MTyQM/X3yaH0AtVvAPxgyTCObPp0+nS9MjRo43D/AvSNR1JjR8jKoMFsOiT+LTCN4ZDBeHDUnj6jkK8VQ8FpFBfi8vsxEeqamI1fSpXD6gc/v8Yo8Pw8luxYthDpzV2XWAJ7qzqTJOyRMRAvJ0K+qrtEUKLr+jp3bd+Xu37Ht/eg/nntmbzAQOMdm28Xa29vbwHpGBldDmYcT/IZCgJqOlqcU7SZRotQnXp0Ams7O/jApcoGWbcEvkkfkWraiohLqGhs5+A7s28f3cV92Fs2RRzeNHRk8Fbc6HyBrkWajQoBTl0ESeIY4iRviPT3dmTw6RC/oWjJQ5Unrag/EexxaRJobwPL7kOAQLbFEexRjlq7PZ5nhdcL9/XwhOroe9Ti0PxdjPJU7nnOw5UCrTvt5nLSdx9Xgp9EP/mErTOjDPn4wg7yarYD4PI+V8ch5KgmQoDXR3CCKknoNAlxVTTXEItEML2YmdIfuJUBWVjUF0PQ8mU+yI5RszV5h6GQbplyHogKZcg4Jk1/pzYwUIw/hzroW9+xgT+hHza+Gc2f7/nPvywUyFk+NN5yMS/DHohG0RBnyEqGSZdGV/r4+ORU4Gn+kNeV2ZnmjumryKiPeX1NbC0CbBmC0BEYVJlHJwUPCoMWtQ6EgvxR3O+YIJPdcIdgFURjSS8mzvMDw/pk1hWlNL1pJMqsrpt/IoBY4BQxyYcqZVSKlEsl0CfwOFDFYm6VT6PUzpbe3N5ZMpbu8Hk8lAY2htiQKQZxbnWSiTvr2BwPc65MNbNXXbUpELaQyUcYiMscTWDnQWL6Tl5h9ZCDM+Tfx8OxJNkKWZ8aPVIVsAQHANNZfPk+pJGGwJ8hUHJ9wLyfYSmPP2N/Ty/366nVpedRQqKwP6y5eZIwU8vuoA3+xwG5a9jTtDidisUPe8vLpnI/jNnnKVD5xZdC5whSO7dF4cHNAkeFKwkRCxTMnGPjf1dVPVM5NawXTuflZlwSorK7mxxGlYTnUhe5L5+aC18we5Gv2Mv3mIE9PIh3j9k8Iry9mTe3kCiMS6erq7IiOAOjHHe3RSkPt6jWbdu6MpZLJ9mzgkDZLK/FugrKYlFcZ5MrNz0lRj3rL66jAb29r5/56cpnSmrnllZUGK8eIGc0te5oiMo3RELoBpGbc24TPlp1WUD2fPES036+s2siF26yLUpcL0hBQdYUWdRHq3Feg+0Rj0VZSKMMEXDZcguF1CcCjqmdIpZIskUx0C1kNTI1Pw/XZt86AlbG8ldOZgd8wzt2VCQ4aGcxR7qY06ikIsHElhSEBKpMpQQElaWd1pFWOshTyQErnBgK+TF59nsLQwtiImllaMJYPXcFNxZMHtv9za3SEFDQbbeAfLXxfV5iSiWiXpHg26Kd89+VgnWplLdZNSoWbCjr1GBo/yJ7wrQV+AjVp9CQJDrk8lQXxSOPK2STklXkSyiwroiJqSDG/rqCsvJJI8gG1QNDHDWej+6olnfX7EK+OxRIO9x52G5DC4GywYdP0I0173BYGpicAsViyXxTUBacdLMSgk6qcLx2KoKtvaFCMTz8f4DLLo6mGC6tjA7SPmAbZHYLSC6mpVGQtTwKchHRkMPuiVxE6TlNCIUsrq2Tm4ipxSzRpXRA9fO1fiyCljCZxGN2FjST4tZaLt3yew0T9gs55XADQSOtVZm0I3J8PavrxfIJMA04qhzbT/GopqyiHUHmZJc2r8gq6P4Hdl0xy2qOO8+SGHaj7AkHPYJgxHwWW19Ly5TyrlXuDMkuLD7DhJw1o0SqW6rrFTNMglkMuEvFE2ABoTsPbBQt8v6i9gdcl4AsWuLzmfqQjjBY9cELtJYlbsJqt1tXVcVgCaUAUPJXyCKovA4Bsw48oi+zzZ1kxL/JgVK4doEWL7IY/qxSIAKyOulq5Al91RfRwH7/tJLPKPfg942grEGVCzc+jN1ExcNdpIKg3ppGOxWLdBj2to7Zj8jxguyBnMIoztmkB3XSRMezGW4yAptOgPb29vT16grVn9+62s8+7oFf0yeBXR0TJdceDPZWkHXx9KjHXaBSKtv5ttsCIlDHZThfpIH9PxthV6oDigdTeQF1DIBqOyhGqufVPbeLx9B1uOdiiA3yigQcdvH9/X19fewHswpXGER3c3PWHQPC/hBq5P1s7mk3oQL798oEDBzr1nuXtDes7pJQ0AEpQFzV0R3s7bm1w6OBBaDm4Hw4e2A8tuMUTcqTlsHug2WBCKrOtIGGU2FBhUK5FPQFdN1gWgvKKShSM8iFbCDfsMTtfe2X5Hr1Lt7W1rUAB6LHTdtjbvPz++++3FEh1ir4gXSGGqTaJzI/kE55//vl3zz333K9UVVVdi5r4A6ih63K9MzyXjN8fxYpej5W3cfPmzQ8bUa5dO7bHEsAGgkqoAGUjIICTsVhXVy8HdoXDPNyZ4uSp2w9k5efPTOoeB0UC7axsRPm42xW1Ps9vKmi6V/ve2bh+QA94W7Zs2Y3G87/X1dVdiW10PtZxQ64iobbz+XxkeK3B3zYh8P88Epp+1Lo6V69evQIbY9W8efMeRw5ep+V6xArsQ6pzx86dO/dZoFXUJfera84ySU4AlUymobq2NuPe7O/v054qyADczkM/cr4Q/bylSkIqOThP47iYHOppqHHXr1+/Gj/ePPPMM/+CiqlB6z7YdgPYrneisGwD/bnbzKaGZybMpGjgd9oraGr/008//aTKysp5CNAGeUK1pKX5g3jMItw2vPXWW5vNBIAl4u2g+NFpUJe0PsX38zR9fPV1n+LSzAeIHOIAIIx53DPz5YyUEWiVtmQfL6UHKY0e+E455ZTZNTU1J2O7NarjFNnXUNqORhgXnXPOORVr1qxZbwJY5qLyHTHNb6r9y8vLvRdccMFPvF7vVVjxNeS+LKeow5wGU7RzNVbsN/H3gcbGxtfffffdHx86dKhPTwAGBvr31dTWybEqyQR37dHI7L69zSDPbpJkr44qAHkPbhzf44bRqxrYaUaa1/msUo9AMfr2oo7p/Umxl2XVtzqhXx1viMfih/U0LbaZuHDhwm8Gg8FrqG1wE8mg1mm7ctz/Dfz9lo985CNv7t69+7vbt28/XGxeP5zgt9sbMOT6X8Iu8QYz/3qWBiP5qERNcjlqnN7Ozs47Udukte7f0daxZ8rUabI/PSh369FoLLN4G7n9ybAjrh8IBix7UrInvOSdkzMhXouCqCugq751ERJQE9qCgBtw5Dqn0eL+2LEQS03MEwC9d6Ln55mYgfGozlCojHvCaNI63T0YKuPKoqe7Y5cexTj//PM/hXz/C3baDrcKFKxLZ82a1dfa2vqNnp6eeIG+fTYawG81w26mF6BZXNhVftTpDVEArpwwYcKvDxw40K8lgPv2NO+dN38+z9hMWq6yqppTHZqzykdV8R9NGyS+y+Prc+N7dBqT5tDSnGC6RnlFRUaY5LnBg6u+DK4QMyiTBPqBvl589iDUNdRDWsL7ezvg+KkPQjDgbEI8XXn7/stgX/fHwOfptQR+VSPTFBo1fSEXTOoRgSlyK0ib39q8WQ9g2ANfUYCH7yq0Ef5r2bJlLSOh9e26Ol2XvsmTJ5PTuczpTbHxKmpra+v1OOP6N1YcZlI6ma2J/T4fn/xNA030yUdLlWzIkoWEVVzrJ1N5/Njv83MfeiKeULIuRHmPQ5SCD7BluTYlTjnSQx5XFCXThcyMFjgThLSV+sp8kpCS0POMbfhJyoE8P9QLlpdX8JAQrJPkO5s2tGnVbUVFhb/AtvNHo9GG4XZvDhfnNxro4vtEFxLiI8Aq9O7R3dObRE7fgYx/qhwrIycDFj1ilgtc7vYzqUyyVyTRCGsWFK5MGh8UTxJf3QWFigbRDrUcxM84B/zs447PhCYn0Oag+QQScuoKBJc6YWRQqATHrStYtC145gjsjdT1A9Q4oYxbk1ySygQa5bzeZCIqaYGP+H6hYMR6rHTg2RmxEV4t49U2z1ePdwP8kiQxPYFrb29LooG7xxPyTvV6fTprdA3pivV/zH0JiWWWCyItSRSKHkWeYihAXX0jj+Ohwj0gqTS3L2hsQdIJmiu214cG+mjebnhgQI5l4pF/OqY9t028+9sOH9ZMJa80nRth7U6OY8MFfrcGuvKuo0QlCho+/T7ky2oqQ4HiQFDTzMbjJmp0n/qRndFour+/fxsab+cLFrIsyPl00nyK4OCoqv5MEaIIA/398iR2/E49ihoyUVNbwzUp/X5w/z6ePmXmMcfwY6ORCAx3kef/+nlINfVapPmpx6PJ9DwHUE4KFHqPto6Ore1trSktg1cYnEKW23ZhbLutii9fbbuZePhRDn37Yzae31AoyODVisxEzbht5cqVn1UqU4jFYukPfehDdyDAPq3T6+sKaF9/7x4KP9ZTtOrd03zRhqRirMZlWmKgRYnKkLDs37uXhzRPnzmTz7vlvYBys96eHtjX3CzPkcVyAIVg2oyZPJvE8Gj+oTFKlI2ZvF6CMiGHBJK0Pwmof4i3izJMAIREabMeGEVRFHR64qa1a9d+Afl8nBQTfqYWLVr03UAgcIsJYxuX8fy62h/pAGkVrbWzElhpyWy7Dis7oeOyixvdp7en+zCFLDNyTeb2MLyR0xyw6swqn5Kw1SeYeivgcEuLnHunu0sOmyAhA3n+bfPuXQruKG6/HIUpwHuEqDIHYLjWAWAa/F+dupgEeYIM9UZe39A0XUmss2h/ol9PCyttp9WVpiiBgCSPUirxeLqLhcQK0Ppmo7umFSy6WLd2j2N79+7tR6Csz/0B972Wu29gYOB1DZqyYx8WowqJDoTDXp837VPCiLM34u0yTxc5FeBxLgh8nghKY9R3iHcGacPkKVOgoWECB1JnRzs07dzBjWrqCWSBSkBD40Q4/qQ5MOvYY2HGrFk85Yk8oX2YFJ3BvGKyV9RBKYrvSSm5TCmnqVcQ0v/c2aTHzxgBHAXgrVxqhb30G1LO8Dy2HWXRTucorZaOjo6mkdL6bro6HSsjrJj/RBCvIGWCjYD1mXj0nXfeeSD3nDfffHMlGou/Ik4p4z61A4XkdmyEqIHEs/a29q5ELN6mDuBkbzTa68uaT0vuz0zIr2E3JvDUI2TQTp0+DYF9ButlerYOEn2myPoj54+AxomTuRHRsIDSCv6MtmfB6nFMAVOmIxEc0qmZJFTN5HPGYC2tkOHOoy06/bt23+Odfey2nbYWy/ZsmXLn7OO49saLJFIhJLS9ilt14SK5jY8v9uo7cYa7bE6oytDSxDUrVgRnz3ttNNmt7W1JZubm/eBzrJGr7766u9POOGEp0OhUB32Gs1dXV1RyF+4eIgNsHbVG62LLr9iH4J6cq6W4kYfcl+rc2GzL66MNfNBq5qaGh4hSZGRlAO09dBhvG6Ma1cKnBsY6EPqUwmNKBBV1dWOw5MFFzV/FkdHgQ/lnRONx5peW7H8sBGtwE63B7db586dOwuVWLqpqalZD7SvvPLKPSeffPKzSAEnHDx4cDdufSNh5BYL/HopSUyjLyk8Yd26dTvBfHqbsG3bNhoRPJSDRa378M/333s3moqHW+IejyYwKI7d/iLP8kIPHa1tPJNymue1j8m5ePA6nR1tXJiqa+qgsrICDqFtQEJA4dPUK/C5vDbbl16osyuBPYsAVRVeeOPNLuTpApx9Zi14Pc56EYnlZLHIKtgztlAmZgt8mr377ru7NX5nOeeyrVu3Hlbazq3pimw0aX4rBq+eQDALSk8zItTA4OWf6WSqkww6IaeRyePBk9XaHm6QM69RZrXDLQczfnsybMmd2dvTC+1th/nfEydP5sbk3uYmTpNo4jgNeDmZVL/itQ6orfHD25t7YeqUIHR1JaEJafnnPjPVVq8gZ2lLZBLTMhYcEtZBtE5KsT4T4Ovts+qTt7qfaQjTmHJ1Gs3ztTKOoEVptGKJNAUgmki11Gmk8iaOT54ZytHPJGYLPHRedXUN/2w91AIUZTF56hQa9ocwpRzkWZRjXDDIyE0mjuYLOwuinF7c67WvreNxyqkp2427EfTnn1cHU48KOlKBTHXGaNkEtAbRQCYfvx3g6wGWGYCYmQDfVW1fDIOXOTjGTmXpVbSlhjm4f/82xqSoli1IqTxSiZRmiDIzBWOMZ2ubecxsmDZzBjeWqTfp6+vJ5OVUjdyGCRO41ufpwW3TdiV+yC9y8H/5xmkw75QqWL22G/6+rF3GsM3r+fik9YCc85PnBEplTZuU+rf98723HADfjnZmBue5ruXdAn8hPI0ZVIBZJTELFa7ZQA//5c9b0ql0lzydMc0BqH7yvJkIYq21uAyCGzI5c8hjJLs25czGNLBFi15kpyORQwvkJLnUE6iBdFa5/roNPfCHu/fAnj0RFCAP/Pb/mqG+wQ/nn1MLm9/thVTS/pRLyslPI7tkf1AwXk9Xt+yZogUzorG+3/2/n223CHJmAGa7mn9Y3Z7FzN6ghyEtX59Vvg8WKE+ePdDctCuWSCTJ3y9b1II6k0v29oiKq8+Km5Dnq0e+3tfbxQe0KAKSYmX42IEy6ts4YSJ3stBv6mos6rxW8jCR8Uv7J5A7lKm3YroCN2t6Gaxd1409ixc+cukEaGz0I//vBD8avF+5ZQZ4/aJhekWjHoApyyFV1dRmcoNGIuEeC70tM9HizIbmtwt8NlrAb5a3R08QrDi8mYaXEWwAP/MsqOgOYeMeJze6V0ka5eO5cDwa6QqN+L4aAJcdBaquvELUpjyT9JXJE8M1wDh0YRKaVYa2AEtreiYnTgzC1//1mEyFnHVGHd+yvVaMeWy5R9VQtkQszg1wvtZXKql4stK7LALfzGtjRfMXSnOKPpnFanAbswhmO1qfWfjbbL8wMBDegvr9wkGNRx4aX2bVFjvA8SFQGidOHMLH7ZTgxEngVdMSQhLi6WrYduAG8Ag0s0r7rmoApno7NbJG4nxfgnB8FnjFsGUBJspHhjkZ+4KQFdHKKB3JodcLAD5zQftbEZgx4+1xQov0aA9YoD95vzft3LZqwVnnfHXwKvKXOGo+nkHN57MO5Czt77gCMjYBn08G3dG5NMMBnEb0C0JSYw4v001LTr0eH81WcoJKXsZHdinQ7b33tr7nEPC6Pn4LvN8uwAu2FcQiAdpMkq34cY0qzGi/pkG2a+eOFjUzG7n5yMgjykO+d6/hMqLDkr0KNXkSnwftDzHhYKPMa/aMXo8yy4zStstLojJ1xcboQHdHwoJGN2oXOy5P5gLGRp3mN5vLa8XRAQXw/CHHJmPcn9nn9fmqZBtAzKyMqPdIooFXhjlIHZiXH0jIT4todQFsw+vmvIOgGX0sL6lETgByw6rPkUgk9+3fu6fPhkeNWewBrLo+zQRjTOXqhBGS7CGDXRvWrum+dPFVa1DLX6qGoputYtjr6cVeQTssoqKyiq/IaEeSycPT3to2ZFEM8rers8z4Qnd1stfFjnYgo7qnu4dGrobQHOrh0hS5ms5340oSS6LdQ8l+RUUKebbqRDK2dMOaN/stgtsN6mMmIEXz+XtdArnpfF0HgDXz8tgykvfvbU5sWLXiyTkLzrqYW7oFlrbWVr7OF4HVSg9A7lQCaWdbq8aaWoMa3McXrCizFO8vJ5kN8wk16hq/NnSQN7f9U6lk27o1q5bitSSLWt1N8FsRAleVaLHz9jCLRq1TzW5EdfIo06rX3lh74ikL3vP6vacV/KIIzkMHD0BXZ4dl1c/X382iKFqwpOS5nGpZvCaNIfBlUzXpmWBF0WRKPBF/828PPbhXo42cCIET7w/YFIQRCWyzGo9jxd9v5MlxS0D4923btkZ6urqeb5g0oWDwqwC2Mx/XiJurJaGsFeDmNS0Wae/OnY/Z0OBOtL5VwxkMDGjXiscmkLT+zo27FzS+a/1tWUUV8Ix5941Gw3vnzDvtWkqf58oNdVJyW0nV7cb1XAI+DXRt+tmP/+MuAw3Migx+I45flHV63XB1mgWsgUU3mF1uaHfjhQzfcH//81AqQ22YA4ceNaAdVutYctouFv92jfK4BX4rvMxKHIjkIsgNf9/6zsbH0xIbKEFeLmjgvvfGyuUrHYJeKkAYjHqGolAdp+C3ouGdBD/ZqVzJYsUaPveTTzy+Kx2PPs1KuOelu6v9qbVrVvU40PRuaX8jA9pVbV9szW9lpo+Z98CtXkBTu6CmY1ve2fSoJKV7jnTgp5KpHU88+OCTRaacWu1q1XNkpojZaAA/sygMdrS/VKyGeOCvf9ne09n5mDAeVl4poBw+sOeunTu2hcFegJlT6mNVARbC8dlwgd8J4EdSEIaU559+8k+pdGrXkQr8WCS6/M9//MMyGx4eq9TVqeFrlT67Yg+4TXuYTQEoFrWxFET39qYNPc17mn5GI/tHGvAlJrW/vWndL7q7u1NgL+rSzfayq+lHzM+fcUVb2Kc3BmC2T7BwLzeeNbO9tXbN3vMuvKjWHwiceqQAn49Otxy88+67fvO6DsCsBJfZ9dzY0epWtDsbLeDXA7WV74KNexi9uJUBNa2kuNC8a/vG0xacscDr908d/8jn6xQ8/qPvfPOuImh7u4C3Q2ucJEkYEfAXIgyFPoNgYf8Q7d+DXX8gFNww85jZl9J6X+MZ+wPR8IbVK16+ffu2bTETjQ5QoFfNRbAXZZK70+lITgSgUCEQXHpWzevs2PZ+38xjj9teX9dwsSAKwfEI/HQitffVV5ff+uIzS9ocUBcnWt8ptRmW7A5ug9+uADilRVaFwexeQ7aNa1cfOHHOnL01tXWXYA/gHU/ARwO3462NG7665NEHd9rU+ADDo/Wd/F2QUBQyEVWw+ZtTIXCq/e0KIS9r33xj98mnzOusrK5e6Lo3jA2dAaaOMQwmi2KOk9iaGLjd27Zu+dpf7/7fTQ41PoC7Wt8Kny96Ph+hiOcKLgiFYPAp6PwtKKDV+1s0OVbw+/3i/9173/Xd/eF5HtGTAmCaz80oBYQACev1KKQR8Ck53WEi2dPZ1e/1+kJVtTW1Ho8nxmdzMZpemPYxO4LHwJ8/WMcTAQmpZCK8e8eOZX/83a9Wa4BYKvBvsOnGdAJ6K8Bnww1+pwJgVwisCEC2IIgFCILuSp9g7Kp1s06deDTMQkmMNLcRwCWD4wGcxefYBXhRgF8o7SmEe0OBAHIqVE68S1bHKkbIcan73arbEixSGDsh6VY5fiGgHzGD16m2c2ooOwWdVeDraXwnAjSSmt/KKDqA/RFyt/z7bmtzNhrAX6gxakfbOp0dJlj8Te/aTgz04RQCs7m0YCIYAM5nYDnh+4UAeUT9/G7bEUIBAlCI5i5UEAuhaG41tN1UIm4MYoEOxTKbfeUGiEfcz18sQ9pICPQM3kJcnsWKHRoJjW8H+MXi+1aM2xFZgmg4we92T2BGfZzwfrdsleEEvl3KY1e7254SanBfO5Rn2AA/3OAvBBx2ub8R/RGKDNTh5v3MJfAD2B/gAgOuXyjwh2126XCDvxjGr1NX61ifwuUW+K0KhB7PHy4jd1yC3wogrRidhcQblcDvfvgywDBMSCmkeEdpg9pKOgnmq7yw0doAReb8TqmPlcXhnExCGVX17hnFDVwMz49Tre/6RIoiaP1CwO90AQk7LsxRp3BGM/jN6Ipe3I1dClQovRjuBrai9d3S/nYM3VHL7ccK7bHS8ILJfrsUyOr99Bbes5qZ2k3AWwG+Wz0AWKBAY5JSesco2LXAx7J6szLcAsr70W+UnYGWGoy4LGhGgGdFrhcrtMeuAICBZ8dp3kxWAn9xBYL+rle26iw6l0uHKBy3F7cu5dPqPawsfVQsrW+VR9vx+NjtBcyEbkw6EoQx+ozZ+xpwo6wLIR3jVy8uP4rbAdz6wXhyDFj4HO66tMv7nQqAXs9h1cPDSuAvznNSr3UsbjUGQDcTAPpsV4SAWQC+W6lXhkvzAzgPcAMYRz798QR+4vMnKNweDABpVQBI++9SaJEZ8IczZMINze+kBzAC+7CmFylm8cDYKUKWxj9JoTl2xgLAALx+3MoVW8BMi9ldd9YNoDtxObqxeoqRUcvGEtDHA/hpOw63ShNNayYAWseq3qEem0YkgP3UfoW6Gu3mxynku12eP2aEQRxD4KcKnZDD8TUr+bOf/WxjS0vLHfF4/Jn29vZffec735lpAIrsxm5UeoDsidq5n1rftf4uxsZM7sssPrMbUxHHfBlLAV7US52qUBTd96isrBSbmpp+1dDQcIa6LxwO75k/f/7NO3bsiFvoHShX/T8tenhG2uB1yv/BJU0/pt2dY0nzk1Y2XTx68eLFDXV1dfOy95WXl8/4/Oc/PwOsZTQgzV8N+ik7JLCW3qOYWt+ox3GSH98t4I+pMpYGuSZkVbpu1GdNTY2mgFRUVHh1ztdqxPoc7q+ncQWdawyn5rcKUDdThY9YupEjUfOTMVpmBRySJGkanul02shll/tbZdb3jBY9dOjQhYyx/gMHDizU0rB4j3fx9z7cetUN921WtXJ3d/fn6e/s3998881ptD97X+5G52ZdO7P19/d/jX6jZ0omk89lPwuWAbR5fkffsU7ew78jyhalDfe9T7+lUqm/49+H8Tlq1XPxt5dw33a1YvB9a3Df47gvrWy7YrHYrCGVJxco5nakgr/cTMNcd9119YsWLapWwJ8vGdhoZ555ZgUdZ+K+Y4p9EdDzvHg8Hs0MZ7h/jiAIFYlE4i8IqhX0nfbRbwiuGdgr3YX7X6X96nbeeec119bW/kX9u6en5zbedWQdQ+fjJ6PrZu0vR/vml+pzeb3ei1A4F2Y/K51D30VRPAm/B1FA7kUhovsHcN8Jym90TC3WzRf1lMqUKVP+gefM7OvrOxY/RXyHW8aDwTtWwB8062IffPDBP+P2A9SGSa0LdHV1xe69995PP/roow8YGHy5vc2QYxTQa9kMufw775hZs2ZNV57jaSP+rYARwNi3r5UzExobG//d4BlA49qD/Nfr/db27dtrcs9FYbkZPxcg8D9ZXV29m3b6fL7lwWCwKVvrl8A/grYJAtOPpXJgYCClxbkjkUgyEAiEsJErwNqAlScXgHgu09D8mgakqnXVbfXq1W9xw2XChJ8+9dRT1QWAXzLokS5G4brIwLA3EoBaFNCb89xWgnAJfmxSga/Ro45Zw1eEsV0yFd/Z2fkeGrUztm3bFkEOvTkH+Pt//etf70PNeFI0Gm01Ab7u6Keq+RUh0E36qgB/yLkf/ehHu9vb2y9H8J127bXXtuBz/DvYWxYIULi/oHJ22lBTZzxYqKGfwn3NVVVV38wBupUZWE147pOk/Ynf54B/PoE/C+xkY5AN8qUS7RmekjITgHXr1r2EjVf5yCOPfAzB9QPkvyvRKDvU0dGx/mtf+9rXH3744XORc5+8a9euZTo8PxdwaYuc3yx5U2ZDrf/Kiy++OJmAirThDrRP3ly6dGmNVc1PnJ34urodf/zxTVn360aB+gVpfwTwDAuemCHvhHTxdtL+kydPvs7ItiLOPx60/lhydcbNeoDrr7/+tebm5g1nnHHGrajlPVddddWd8XicNBTcddddH7r44ou/i+A4dNtttz1m0otkhzwzA/ellntTi1oMKZdffjnFD326t7f3YtTSf7/kkku+gH//worbMOu6mr+Xl5ffgwL1zUmTJn1L67icHmlIQVrThHV1D97j29QTZP1EWn+BybOUwF/EMmB2AGqu9A033PCj++6774fz58//8po1az4bDof3hUKhSWig1aIt0PTzn//8hytXruyzQKWIvkQgx5ev0p4szZ8tFEwDHLoAQbC9gkBtxmvN1OhV7PjShwhEKpX6Ob7v/znxyWMd/RwFknj/LFUA8BlfwXf5WCKRWIC0axOMozJWaA9p/pjZQS+88EIXar2vP/PMM9/r6el5HxvyRKQ+rcuWLbvj9NNPv+mnP/3pbrAWbdmrRYVUg1eHPthazhPB9EVyHyK4Njnw9ugGviFA70E28kqOpjcFPu0joxaf5/YcR8KfSPujQJGff75DqvMl5Z7f0fmd2oV6xFqN32Yp5758JBu8bZaMg1RKuuaaa1YsWbLkPt5nb9r0zKWXXvoiGocxI86bU9qNfkd6QYNASXVDAbtYocDb6W8EzE0IvA/SdwTTDoWvfyv7HNLO+KzfQ7D+2aQXYqoRTdfNvgbSlD/keJd4QcH6eY5DZgduKRSsm5XnooGqnTnGuar9Cezd2fv6+voW4cdy3DZm1cmY7wXGYmCbYXzPQw89dPY555xzQWNj4ymVlZXHIs/f39ra+vbWrVs33XjjjSva29tTJvVBgW3vgbWh+tFSf6yIx4+7aM6xxvlB8b4cxG2G7st4vQIC/7wZM2Z8mHo11Kx9gUCgYdq0aZeVlZXVT5gwYZUJ+Kmh9yqc3wq4xwowRl2G5JLmd/a8J+JWVaR3blf451isOzbKrjMmqMRYKxRtWedSr5UNYJrHu/NIavwjDezjAfxq7p0aF2kbuVK3K9SqBPYS+Ed1Id7egRvF6QQKvFa7ovGtAF8ogbsE/tHSA3QogkBCYNdtSyunNylGdAkwR2ARxpEQ0zRHGiSptkCZOpWtBPoS+MdVITuA4v/LlN5AdVuS/z6a9XeplEqplEqplEqplEqplMoRwfnH+HyEUikVx0UsVUGplMBfKqVSAn+plEoJ/KVSKiXwl0qplMBfKqVSAn+plEoJ/KVSKmO2/H8BBgDFJBWzLrBYOgAAAABJRU5ErkJggg=="/>';
    window.document.body.appendChild(this.html);

    this.lang = 'en-EN';
    this.commands = {
      'butler': function helloWorld() {
        if (!sayHello) {

          sayHello = true;
          that.hello();

          window.setTimeout(function sayHelloTimeout() {
            that.goodbye();
            sayHello = false;
          }, 4900);
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
      'selector add class *detection': function selectorAddClass(detection) {
        try {
          Highlighter.element.classList.add(detection);
        } catch(e) {

          window.alert(e);
        }
      },
      'selector add id *detection': function selectorAddId(detection) {
        try {
          Highlighter.element.id = detection;
        } catch(e) {

          window.alert(e);
        }
      },
      'selector put value *detection': function selectorPutValue(detection) {
        try {
          Highlighter.element.value = detection;
        } catch(e) {

          window.alert(e);
        }
      },
      'selector insert text *detection': function selectorInsertText(detection) {
        try {
          Highlighter.element.innerText = detection;
        } catch(e) {

          window.alert(e);
        }
      },
      'selector remove class *detection': function selectorRemoveClass(detection) {
        try {
          Highlighter.element.classElement.remove(detection);
        } catch(e) {

          window.alert(e);
        }
      },
      'selector empty text': function selectorRemoveText() {
        try {
          Highlighter.element.innerText = '';
        } catch(e) {

          window.alert(e);
        }
      },
      'selector click': function selectorClick() {
        try {
          Highlighter.element.click();
        } catch(e) {

          window.alert(e);
        }
      },
      'selector focus': function selectorFocus() {
        try {
          Highlighter.element.focus();
        } catch(e) {

          window.alert(e);
        }
      },
      'selector hover': function selectorHover() {
        try {
          Highlighter.element.onmouseover();
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
        /*eslint-enable*/
        //jscs:enable
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

  Butler.prototype.hello = function helloMethod() {
    this.html.style.opacity = '1';
  };
  Butler.prototype.goodbye = function goodbyeMethod() {
    this.html.style.opacity = '0';
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
