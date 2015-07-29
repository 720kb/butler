###Browser Support
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Google_Chrome_icon_(2011).svg/1024px-Google_Chrome_icon_(2011).svg.png" width="45"/>

http://caniuse.com/#feat=web-speech

###Installation

####HTML
```html
<!DOCTYPE html>
<html>
<head>
<script src="../path/to/butler.min.js"></script>
</head>
```
####Bower
```bash
bower install
```

####Npm
```bash
npm install
```

###Usage
```javascript
document.addEventListener("DOMContentLoaded", function() {
  Butler.start();
});
```
##Commands
Default voice commands you can abuse of.

####Selector
Commands to select, highlight, trigger, manipulate DOM elements.

<img src="http://i.imgur.com/2JA16e5.png" width="18"/> Command  | Result
------------- | -------------
 _Selector on_  | Turn on selector highlighter
 _Selector off_ | Turn off selector highlighter
 _Selector next_  | Select next element in the DOM
 _Selector back_  | Select previous element in the DOM
 _Selector next id :detection:_  | Select next element in the DOM by detected id value
 _Selector next class :detection:_  | Select next element in the DOM by detected class name
 _Selector next tag :detection:_  | Select next element by detected tag name
 _Selector back id :detection:_  | Select previous element by detected id value
 _Selector back class :detection:_  | Select next element by detected class name
 _Selector back tag :detection:_  | Select next element by detected tag name
 _Selector add class :detection:_  | Add detected class name to the current selected DOM element
 _Selector remove class :detection:_  | Remove detected class name from the current selected DOM element
 _Selector add id :detection:_  | Add detected id value to the current selected DOM element
 _Selector put value :detection:_  | Add detected value to the current selected DOM element (helpful for inputs)
 _Selector insert text :detection:_  | Insert detected text inside the current selected DOM element
 _Selector empty text_  | Remove all the text from the current selected DOM element
 _Selector click_  | Trigger click event on the current selected DOM element
 _Selector focus_  | Trigger focus event on the current selected DOM element
 _Selector hover_  | Trigger mouseover event on the current selected DOM element
 _Selector which_  | Alert the current selected DOM element's informations

##Events
Available events
```javascript
document.addEventListner('Butler:start', function (data) {
	console.info('Butler is started and microfone is allowed', data);
});

document.addEventListner('Butler:end', function (data) {
	console.info('Butler has stopped working', data);
});

document.addEventListner('Butler:detection', function (data) {
	console.info('Butler has new detections', data);
});

document.addEventListner('Butler:detection-match', function (data) {
	console.log('Butler detection is matching', data);
});

document.addEventListner('Butler:detection-not-match', function (data) {
	console.log('Butler detection is not matching', data);
});

document.addEventListner('Butler:error', function (error) {
	console.error('Butler returned an error', error);
});
```

##Plugins
Writing a plugin is very simple, all you have to do is to define new commands using the ```plug()``` method.

####Plugin commands
Please refer to [annyang](https://github.com/TalAter/annyang/blob/master/docs/README.md#commands-object) documentation to define new commands

**Example**


_butler.plugin.js_
```javascript
document.addEventListener("DOMContentLoaded", function () {
   Butler.plug({
    'do something when i say this sentence': function callback(){
       window.alert('You said that sentence');
    }
  });
});
```
_index.html_
```html
<head>
<script src="butler.min.js"></script>
<script src="butler.plugin.js"></script>
<script>
document.addEventListener("DOMContentLoaded", function () {
  Butler.start();
});
</script>
</head>
```
Now all the _butler.plugin.js_ defined commands and callbacks are plugged and can be used.

##Debug
Enable debug mode
```javascript
document.addEventListener("DOMContentLoaded", function () {
  Butler.start({
   'debug':true
  });
});
```
##License
MIT

####Gtk
- Not ready for production

####Thank you
- to [Google](google.com) and Google developers, for the awesome webkit-speech API
- to https://github.com/TalAter/annyang developers and maintainers for the awesome library.
