/*global window annyang*/
(function plainOldJs(window, annyang) {
  'use strict';

  var Hey = function initHey(settings) {
    /*eslint-disable*/
    var i
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
      'i': function pauseDetection() {
        self.pause();
      },
      'hey on': function resumeDetection() {
        self.resume();
      },
      'ok select element by class *detect': function selectElementByClass(detect) {
        window.console.log(detect);
      },
      'ok select element by id *detect': function selectElementById(detect) {
        window.console.log(detect);
      },
      'ok select element by tag *detect': function selectElementByTag(detect) {
        window.console.log(detect);
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

  Hey.prototype.resume = function resumeHey() {
    annyang.resume();
    window.console.log('resumed');
  };

  Hey.prototype.pause = function pauseHey() {
    annyang.pause();
    window.console.log('paused');
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

  window.Hey = Hey;
}(window, annyang));
