/*global window annyang*/
(function plainOldJs(window, annyang) {
  'use strict';

  var Hey = function initHey(opt) {
    /*eslint-disable*/
    var self = this;
    /*eslint-enable*/
    this.options = opt;
    this.lang = opt.lang || 'en-EN';
    this.debug = opt.debug;
    this.extraCommands = opt.extraCommands || undefined;
    this.commands = {
      'ok off': function pauseDetection() {
        self.pause();
      },
      'ok on': function resumeDetection() {
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

    if (this.debug) {

      annyang.debug(true);
    }

    if (this.extraCommands) {

      annyang.addCommands(this.extraCommands, false);
    }
    //mic access allowed
    annyang.addCallback('start', function onAnnyangStart(data) {
      window.console.info('Started detecting', data);
    });
    annyang.addCallback('error', function onAnnyangError(error) {
      window.console.error('Error', error);
    });
    /*annyang.addCallback('end',            function(){console.log('end');})
    annyang.addCallback('result',         function(){console.log('result');})
    annyang.addCallback('resultMatch',    function(){console.log('resultMatch');})
    annyang.addCallback('resultNoMatch',  function(){console.log('resultNoMatch');})*/
    annyang.setLanguage(this.lang);
    annyang.addCommands(this.commands, true);
    annyang.start({
      'autoRestart': false,
      'continuous': true
    });
  };

  Hey.prototype.resume = function turnOn() {
    annyang.resume();
    window.console.log('resumed');
  };

  Hey.prototype.pause = function turnOff() {
    annyang.pause();
    window.console.log('paused');
  };

  window.Hey = Hey.prototype;

  //USAGE
  var asd = new Hey({
    'debug': true
  });
  //etc ...
}(window, annyang));
