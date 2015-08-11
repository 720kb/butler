/*global window*/
(function plainOldJs(window) {
  'use strict';

  window.document.addEventListener('DOMContentLoaded', function i18nDOMLoaded() {
    window.Butler.plug({
      'scope': 'i18n',
      'language': 'it-IT',
      'commands': {
      'butler parla': function butlerAudioOn() {
        window.Butler.Voice.volume = 0.25;
        window.Butler.Voice.play();
        window.console.info('Butler got permission to speak');
      },
      'butler silenzio': function butlerAudioOff() {
        window.Butler.Voice.play();
        window.Butler.Voice.volume = 0;
        window.console.info('Butler must be silent now');
      },
      'selettore on': function selectorOn() {
        window.Butler.Highlighter.erase();
        window.Butler.Highlighter.underline();
        window.console.info('Turned selector on');
      },
      'selettore off': function selectorOff() {
        window.Butler.Highlighter.erase();
        window.console.info('Turned selector off');
      },
      'selettore avanti': function selectorNext() {
        window.Butler.Highlighter.erase();
        window.Butler.Highlighter.next();
        window.Butler.Highlighter.underline();
        window.console.info('Selected next element');
      },
      'selettore indietro': function selectorBack() {
        window.Butler.Highlighter.erase();
        window.Butler.Highlighter.previous();
        window.Butler.Highlighter.underline();
        window.console.info('Selected previous element');
      },
      'selettore prossimo id *detection': function selectorNextById(detection) {
        if (Array.isArray(detection)) {

          detection = detection.join('');
        }
        window.Butler.Highlighter.erase();
        window.Butler.Highlighter.next('#' + detection);
        window.Butler.Highlighter.underline();
        window.console.info('Selected next element by id: #' + detection);
      },
      'selettore prossimo tag *detection': function selectorNextByTag(detection) {
        window.Butler.Highlighter.erase();
        if (Array.isArray(detection)) {

          detection = detection.join('');
        }
        window.Butler.Highlighter.next('<' + detection + '>');
        window.Butler.Highlighter.underline();
        window.console.info('Selected next element by tag: <' + detection + '>');
      },
      'selettore prossimo class *detection': function selectorNextByClass(detection) {
        window.Butler.Highlighter.erase();
        window.Butler.Highlighter.next('.' + detection.replace('.', ''));
        window.Butler.Highlighter.underline();
        window.console.info('Selected next element by class: .' + detection);
      },
      'selettore precedente id *detection': function selectorBackById(detection) {
        if (Array.isArray(detection)) {

          detection = detection.join('');
        }
        window.Butler.Highlighter.erase();
        window.Butler.Highlighter.next('#' + detection);
        window.Butler.Highlighter.underline();
        window.console.info('Selected previous element by id: #' + detection);
      },
      'selettore precedente tag *detection': function selectorBackByTag(detection) {
        if (Array.isArray(detection)) {

          detection = detection.join('');
        }
        window.Butler.Highlighter.erase();
        window.Butler.Highlighter.next('<' + detection.replace('<', '').replace('>', '') + '>');
        window.Butler.Highlighter.underline();
        window.console.info('Selected prevous element by tag: <' + detection + '>');
      },
      'selettore precedente class *detection': function selectorBackByClass(detection) {
        window.Butler.Highlighter.erase();
        window.Butler.Highlighter.next('.' + detection.replace('.', ''));
        window.Butler.Highlighter.underline();
        window.console.info('Selected previous element by class: .' + detection);
      },
      'selettore aggiungi class *detection': function selectorAddClass(detection) {
        try {
          window.Butler.Highlighter.element.classList.add(detection);
          window.console.info('Added class: .' + detection);
        } catch(e) {

          window.alert(e);
        }
      },
      'selettore aggiungi id *detection': function selectorAddId(detection) {
        if (Array.isArray(detection)) {

          detection = detection.join('');
        }
        try {
          window.Butler.Highlighter.element.id = detection;
          window.console.info('Added id: #' + detection);
        } catch(e) {

          window.alert(e);
        }
      },
      'selettore inserisci valore *detection': function selectorPutValue(detection) {
        try {
          window.Butler.Highlighter.element.value = detection;
          window.console.info('Added value: ' + detection);
        } catch(e) {

          window.alert(e);
        }
      },
      'selettore inserisci testo *detection': function selectorInsertText(detection) {
        try {
          window.Butler.Highlighter.element.innerText = detection;
          window.console.info('Inserted text: ' + detection);
        } catch(e) {

          window.alert(e);
        }
      },
      'selettore rimuovi class *detection': function selectorRemoveClass(detection) {
        if (Array.isArray(detection)) {

          detection = detection.join('');
        }
        try {
          window.Butler.Highlighter.element.classElement.remove(detection);
          window.console.info('Removed class: .' + detection);
        } catch(e) {

          window.alert(e);
        }
      },
      'selettore rimuovi testo': function selectorRemoveText() {
        try {
          window.Butler.Highlighter.element.innerText = '';
          window.console.info('Removed text');
        } catch(e) {

          window.alert(e);
        }
      },
      'selettore clona': function selectorClone() {
        try {
          window.Butler.Clipboard.clone = window.Butler.Highlighter.element;
          window.console.info('Cloned element');
        } catch(e) {

          window.alert(e);
        }
      },
      'selettore appendi clone': function selectorAppendClone() {
        try {
          if (window.Butler.Clipboard && window.Butler.Clipboard.clone) {

            window.Butler.Highlighter.element.appendChild(window.Butler.Clipboard.clone);
            window.console.info('Appended cloned element');
          } else {

            window.console.warn('No Clipboard.clone element to append');
          }
        } catch(e) {

          window.alert(e);
        }
      },
      'selettore prependi clone': function selectorPrependClone() {
        try {
          if (window.Butler.Clipboard && window.Butler.Clipboard.clone) {

            window.Butler.Highlighter.element.insertBefore(window.Butler.Clipboard.clone);
            window.console.info('Prepended cloned element');
          } else {

            window.console.warn('No Clipboard.clone element to prepend');
          }
        } catch(e) {

          window.alert(e);
        }
      },
      'selettore copia testo': function selectorCopyText() {
        try {
          window.Butler.Clipboard.text = window.Butler.Highlighter.element.innerText || window.Butler.Highlighter.element.value;
          window.console.info('Copied text');
        } catch(e) {

          window.alert(e);
        }
      },
      'selettore incolla testo': function selectorPasteText() {
        try {
          if (window.Butler.Clipboard && window.Butler.Clipboard.text) {
            if (window.Butler.Highlighter.element.nodeName.toLowerCase() === 'input'
            || window.Butler.Highlighter.element.nodeName.toLowerCase() === 'textarea') {

              window.Butler.Highlighter.element.value = window.Butler.Clipboard.text;
              window.console.info('Pasted text as value');
            } else {
              try {

                window.Butler.Highlighter.element.innerText = window.Butler.Clipboard.text;
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
      'selettore fallo editabile': function selectorMakeEditable() {
        window.Butler.Highlighter.element.setAttribute('contentEditable', 'true');
        window.console.info('Made editable element:', window.Butler.Highlighter.element);
      },
      'selettore fallo non editabile': function selectorRemoveEditable() {
        window.Butler.Highlighter.element.removeAttribute('contentEditable');
        window.console.info('Made not editable element:', window.Butler.Highlighter.element);
      },
      'selettore fallo disabilitato': function selectorAttrDisable() {
        window.Butler.Highlighter.element.setAttribute('disabled', 'disabled');
        window.console.info('Disabled element:', window.Butler.Highlighter.element);
      },
      'selettore fallo non disabilitato': function selectorRemoveAttrDisable() {
        window.Butler.Highlighter.element.removeAttribute('disabled');
        window.console.info('Enabled element:', window.Butler.Highlighter.element);
      },
      'selettore delete': function selectorDeleteElement() {
        window.console.info('Deleted element:', window.Butler.Highlighter.element);
        window.Butler.Highlighter.element.delete();
      },
      'selettore hide': function selectorHideElement() {
        window.Butler.Highlighter.element.style.display = 'none';
        window.console.info('Hidden element:', window.Butler.Highlighter.element);
      },
      'selettore show': function selectorHideElement() {
        window.Butler.Highlighter.element.style.display = 'initial';
        window.console.info('Shown element:', window.Butler.Highlighter.element);
      },
      'selettore scelgo io': function selectorLetMeChoose() {
        //need to restart Highlighter from clicked element
        var fn = function listenClickOneTime(e) {

          window.Butler.Highlighter.erase();
          window.Butler.Highlighter.point(e.target);
          window.Butler.Highlighter.underline();
          window.removeEventListener('click', fn, false);
          window.console.info('Choosed the selector element by myself');
        };

        window.addEventListener('click', fn, false);
        window.alert('Ok do it yourself, click which element.');
      },
      'selettore quale': function selectorWich() {
        window.Butler.Highlighter.erase();
        window.Butler.Highlighter.underline();
        /*eslint-disable*/
        //jscs:disable
        window.alert(
          'nodename: ' + window.Butler.Highlighter.element.nodeName.toLowerCase() + '\n' +
          'classes: ' + window.Butler.Highlighter.element.classList.toString() + '\n' +
          'id: ' + window.Butler.Highlighter.element.id + '\n' + '\n' +
          'CHECK CONSOLE FOR MORE INFORMATIONS'
        );
        window.console.info('Showing which selector element', 'Element is: ', window.Butler.Highlighter.element);
        /*eslint-enable*/
        //jscs:enable
      },
      'innescatore click': function triggerClick() {
        try {
          window.Butler.Highlighter.element.click();
          window.console.info('Triggered click');
        } catch(e) {

          window.alert(e);
        }
      },
      'innescatore focus': function triggerFocus() {
        try {
          window.Butler.Highlighter.element.focus();
          window.console.info('Triggered focus');
        } catch(e) {

          window.alert(e);
        }
      },
      'innescatore fade': function triggerFade() {
        try {
          window.Butler.Highlighter.element.fade();
          window.console.info('Triggered fade');
        } catch(e) {

          window.alert(e);
        }
      },
      'innescatore blur': function triggerBlur() {
        try {
          window.Butler.Highlighter.element.blur();
          window.console.info('Triggered blur');
        } catch(e) {

          window.alert(e);
        }
      },
      'innescatore submit': function triggerSubmit() {
        try {
          window.Butler.Highlighter.element.submit();
          window.console.info('Triggered submit');
        } catch(e) {

          window.alert(e);
        }
      },
      'innescatore change': function triggerChange() {
        try {
          window.Butler.triggerEvent('change', window.Butler.Highlighter.element);
          window.console.info('Triggered change');
        } catch(e) {

          window.alert(e);
        }
      },
      'innescatore close': function triggerClose() {
        try {
          window.Butler.triggerEvent('close', window.Butler.Highlighter.element);
          window.console.info('Triggered close');
        } catch(e) {

          window.alert(e);
        }
      },
      'innescatore play': function triggerPlay() {
        try {
          window.Butler.Highlighter.element.play();
          window.console.info('Triggered play');
        } catch(e) {

          window.alert(e);
        }
      },
      'innescatore pause': function triggerPause() {
        try {
          window.Butler.Highlighter.element.pause();
          window.console.info('Triggered pause');
        } catch(e) {

          window.alert(e);
        }
      },
      'innescatore pin': function triggerPin() {
        try {
          window.Butler.Highlighter.element.pin();
          window.console.info('Triggered pin');
        } catch(e) {

          window.alert(e);
        }
      },
      'innescatore select': function triggerSelect() {
        try {
          window.Butler.triggerUI('close', window.Butler.Highlighter.element);
          window.console.info('Triggered select');
        } catch(e) {

          window.alert(e);
        }
      },
      'innescatore show': function triggerShow() {
        try {
          window.Butler.triggerUI('show', window.Butler.Highlighter.element);
          window.console.info('Triggered show');
        } catch(e) {

          window.alert(e);
        }
      },
      'innescatore reset': function triggerReset() {
        try {
          window.Butler.triggerEvent('reset', window.Butler.Highlighter.element);
          window.console.info('Triggered reset');
        } catch(e) {

          window.alert(e);
        }
      },
      'innescatore mouse over': function triggerMouseover() {
        try {
          window.Butler.triggerMouse('mouseover', window.Butler.Highlighter.element);
          window.console.info('Triggered mouseover');
        } catch(e) {

          window.alert(e);
        }
      },
      'innescatore mouse move': function triggerMousemove() {
        try {
          window.Butler.triggerMouse('mousemove', window.Butler.Highlighter.element);
          window.console.info('Triggered mousemove');
        } catch(e) {

          window.alert(e);
        }
      },
      'innescatore mouse enter': function triggerMouseenter() {
        try {
          window.Butler.triggerMouse('mouseenter', window.Butler.Highlighter.element);
          window.console.info('Triggered mouseenter');
        } catch(e) {

          window.alert(e);
        }
      },
      'innescatore mouse leave': function triggerMouseleave() {
        try {
          window.Butler.triggerMouse('mouseleave', window.Butler.Highlighter.element);
          window.console.info('Triggered mouseleave');
        } catch(e) {

          window.alert(e);
        }
      },
      'innescatore mouse out': function triggerMouseout() {
        try {
          window.Butler.triggerMouse('mouseout', window.Butler.Highlighter.element);
          window.console.info('Triggered mouseout');
        } catch(e) {

          window.alert(e);
        }
      },
      'innescatore mouse up': function triggerMouseup() {
        try {
          window.Butler.triggerMouse('mouseup', window.Butler.Highlighter.element);
          window.console.info('Triggered mouseup');
        } catch(e) {

          window.alert(e);
        }
      },
      'innescatore mouse down': function triggerMousedown() {
        try {
          window.Butler.triggerMouse('mousedown', window.Butler.Highlighter.element);
          window.console.info('Triggered mousedown');
        } catch(e) {

          window.alert(e);
        }
      },
      'innescatore scroll x': function triggerScrollX() {
        try {
          window.Butler.Highlighter.element.scrollBy(35, 0);
          window.console.info('Triggered scroll X');
        } catch(e) {

          window.alert(e);
        }
      },
      'innescatore scroll y': function triggerScrollY() {
        try {
          window.Butler.Highlighter.element.scrollBy(0, 35);
          window.console.info('Triggered scroll Y');
        } catch(e) {

          window.alert(e);
        }
      },
      'innescatore touch start': function triggerTouchStart() {
        try {
          window.Butler.triggerTouch('touchstart', window.Butler.Highlighter.element);
          window.console.info('Triggered touch start');
        } catch(e) {

          window.alert(e);
        }
      },
      'innescatore touch enter': function triggerTouchEnter() {
        try {
          window.Butler.triggerTouch('touchenter', window.Butler.Highlighter.element);
          window.console.info('Triggered touch enter');
        } catch(e) {

          window.alert(e);
        }
      },
      'innescatore touch move': function triggerTouchMove() {
        try {
          window.Butler.triggerTouch('touchmove', window.Butler.Highlighter.element);
          window.console.info('Triggered touch move');
        } catch(e) {

          window.alert(e);
        }
      },
      'innescatore touch leave': function triggerTouchLeave() {
        try {
          window.Butler.triggerTouch('touchleave', window.Butler.Highlighter.element);
          window.console.info('Triggered touch leave');
        } catch(e) {

          window.alert(e);
        }
      },
      'innescatore touch end': function triggerTouchEnd() {
        try {
          window.Butler.triggerTouch('touchend', window.Butler.Highlighter.element);
          window.console.info('Triggered touch end');
        } catch(e) {

          window.alert(e);
        }
      },
      'innescatore touch cancel': function triggerTouchCancel() {
        try {
          window.Butler.triggerTouch('touchcancel', window.Butler.Highlighter.element);
          window.console.info('Triggered touch cancel');
        } catch(e) {

          window.alert(e);
        }
      },
      'innescatore drop': function triggerDrop() {
        try {
          window.Butler.triggerDrag('drop', window.Butler.Highlighter.element);
          window.console.info('Triggered drop');
        } catch(e) {

          window.alert(e);
        }
      },
      'innescatore drag': function triggerDragg() {
        try {
          window.Butler.triggerDrag('drag', window.Butler.Highlighter.element);
          window.console.info('Triggered drag');
        } catch(e) {

          window.alert(e);
        }
      },
      'innescatore drag start': function triggerDragStart() {
        try {
          window.Butler.triggerDrag('dragstart', window.Butler.Highlighter.element);
          window.console.info('Triggered drag start');
        } catch(e) {

          window.alert(e);
        }
      },
      'innescatore drag end': function triggerDragEnd() {
        try {
          window.Butler.triggerDrag('dragend', window.Butler.Highlighter.element);
          window.console.info('Triggered drag end');
        } catch(e) {

          window.alert(e);
        }
      },
      'innescatore drag enter': function triggerDragEnter() {
        try {
          window.Butler.triggerDrag('dragenter', window.Butler.Highlighter.element);
          window.console.info('Triggered drag enter');
        } catch(e) {

          window.alert(e);
        }
      },
      'innescatore drag over': function triggerDragOver() {
        try {
          window.Butler.triggerDrag('dragover', window.Butler.Highlighter.element);
          window.console.info('Triggered drag over');
        } catch(e) {

          window.alert(e);
        }
      },
      'innescatore drag leave': function triggerDragLeave() {
        try {
          window.Butler.triggerDrag('dragleave', window.Butler.Highlighter.element);
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
      'indirizzo refresh': function routerRefresh() {
        window.location.reload();
      },
      'indirizzo indietro': function locationBack() {
        window.history.back();
      },
      'indirizzo avanti': function locationForward() {
        window.history.forward();
      },
      'indirizzo hashbang *detection': function locationHashBang(detection) {
        window.location.hash = '#' + detection;
      },
      'navigatore vai offline': function navigatorOffline() {
        try {
          window.navigator.onLine = false;
          window.Butler.triggerEvent('offline', window);
          window.console.info('Setted navigator offline');
        } catch(e) {

          window.alert(e);
        }
      },
      'navigatore vai online': function navigatorOnline() {
        try {
          window.navigator.onLine = true;
          window.Butler.triggerEvent('online', window);
          window.console.info('Setted navigator online');
        } catch(e) {

          window.alert(e);
        }
      },
      'navigatore vibra': function navigatorVibrate() {
        try {
          window.navigator.vibrate(500);
          window.console.info('Vibrated navigator');
        } catch(e) {

          window.alert(e);
        }
      },
      'navigatore quale': function navigatorUserAgent() {
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
      'browser pulisci local storage': function cleanLocalStorage() {
        window.localStorage.clean();
        window.console.info('Browser cleaned localStorage');
      },
      'browser pulisci session storage': function cleanSessionStorage() {
        window.sessionStorage.clean();
        window.console.info('Browser cleaned sessionStorage');
      },
      'browser pulisci cookies': function browserCleanCookies() {
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
      }
    }
    });
  });
}(window));
