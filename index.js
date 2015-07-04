/*global window annyang*/
(function plainOldJs(window, annyang) {
  'use strict';

  var Hey = function initHey(settings) {
    /*eslint-disable*/
    var Pointer = new window.Pointer()
    , i
    , self = this
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
