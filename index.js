/*global window annyang*/
(function plainOldJs(window, annyang) {
  'use strict';

  var Hey = function initHey(settings) {
    /*eslint-disable*/
    var Pointer = new window.Pointer()
    , i
    , that = this
    /*eslint-enable*/
    , onStartEvent = new window.CustomEvent('Hey:start')
    , onEndEvent = new window.CustomEvent('Hey:end')
    , onDetectionEvent = new window.CustomEvent('Hey:detection')
    , onDetectionMatchEvent = new window.CustomEvent('Hey:detection-match')
    , onDetectionNotMatchEvent = new window.CustomEvent('Hey:detection-not-match')
    , onErrorsEvent = new window.CustomEvent('Hey:error')
    , defaultLang = 'en-EN';

    if (settings
      && settings.langs
      && settings.langs.length > 0) {

      for (i; i <= settings.langs.length; i += 1) {
        annyang.setLanguage(settings.langs[i]);
      }
    } else {

      annyang.setLanguage(defaultLang);
    }

    if (settings && settings.debug) {
      annyang.debug(settings.debug);
    }

    this.commands = {
      'select next element': function selectElementByClass(detection) {
        Pointer.dehighlight();
        Pointer.next();
        Pointer.highlight();
        window.console.info('Select next element', detection);
      },
      'select next element by id *detect': function selectElementById(detection) {
        Pointer.dehighlight();
        Pointer.next('#' + detection);
        Pointer.highlight();
        window.console.info('Select next element by id', detection);
      },
      'select next element by tag *detect': function selectElementByTag(detection) {
        Pointer.dehighlight();
        Pointer.next('<' + detection.replace('<', '').replace('>', '') + '>');
        Pointer.highlight();
        window.console.info('Select next element by id', detection);
      },
      'select next element by class *detect': function selectElementByClass(detection) {
        Pointer.dehighlight();
        Pointer.next('.' + detection.replace('.', ''));
        Pointer.highlight();
        window.console.info('Select next element by class', detection);
      },
      'select next element by classes *detect': function selectElementByClasses(detection) {
        Pointer.dehighlight();
        Pointer.next(detection);
        Pointer.highlight();
        window.console.info('Select next element by classes', detection);
      },
      'deselect elements': function deselectAllElements(detection) {
        Pointer.dehighlight();
        Pointer = new window.Pointer();
        window.console.info('Deselect all elements', detection);
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
    that.createHtml();
  };

  Hey.prototype.createHtml = function createHtml() {

    this.html = window.document.createElement('div');
    this.html.innerHTML = '<img height="25" src="data:image/gif;base64,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"/>';
    this.html.style.cssText = 'border:5px solid #444; text-align:center;position:fixed;bottom:2%;margin:0 auto;left:2%;width:200px;background:rgba(0,0,0,0.7); z-index:9999999999999;border-radius:5px;line-height:25px;color:white;';
    window.document.body.appendChild(this.html);
  };

  Hey.prototype.showHtml = function showHtml() {
    this.html.style.visibility = 'visible';
  };

  Hey.prototype.start = function startHey() {
    annyang.debug(true);
    annyang.start({
      'autoRestart': false,
      'continuous': true
    });
  };

  Hey.prototype.plug = function plugPlugin(plugin) {
    var i = 0;

    if (plugin && plugin.langs && plugin.langs.length > 0) {
      for (i; i < plugin.langs.length; i += 1) {

        annyang.setLanguage(plugin.langs[i]);
      }
    }
    if (plugin && plugin.commands) {

      annyang.addCommands(plugin.commands);
    }
  };

  window.Hey = new Hey();
}(window, annyang));
