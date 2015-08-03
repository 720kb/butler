<br>
![Butler.js](http://i.imgur.com/75NI4tj.jpg)
<br><br><br>
<p align="center">
  <b><a href="#installation">Installation </a></b> &nbsp; 
  |
  &nbsp; <b><a href="#usage">Usage</a></b>&nbsp; 
  |
  &nbsp; <b><a href="#-commands">Commands</a></b>&nbsp; 
  |
  &nbsp; <b><a href="#plugins">Plugins</a></b>&nbsp; 
  |
  &nbsp; <b><a href="#browser-support">Browser support</a></b>
</p>
<br><br>

###What is this?

**Butler.js** is a voice driven portable major-domo, for your personal needs.
You can easily customize it to your needs and _"Sir"_ ... he will never never betray you.

Butler is developed with the aim to make developers and designers lifes easier. What would you have done before through the keyboard and text can now be done just commanding Butler.

The whole with a bit of healthy humor and fun.


[![Join the chat at https://gitter.im/720kb/butler](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/720kb/butler?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

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
bower install butler.js
```

####Npm
```bash
npm install butler.js
```

###Usage
```javascript
document.addEventListener("DOMContentLoaded", function() {
  Butler.start();
});
```
### <img src="http://i.imgur.com/1p126e1.png" valign="text-top" width="25"/> Commands
Default voice commands you can abuse of. (many others are coming...)

####Selector
Commands to select, visualize and manipulate the DOM elements

Command  | Result
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
 _Selector copy text_  | Copy all the text from the current selected DOM element
 _Selector paste text_  | Paste the previously copied text to the current selected DOM element
 _Selector clone_  | Clone the current selected DOM element
 _Selector append clone_  | Append the cloned element to the current selected DOM element
 _Selector prepend clone_  | Prepend the cloned element to the current selected DOM element
 _Selector which_  | Alert the current selected DOM element's informations

####Trigger

Commands to trigger events and actions

Command  | Result
------------- | -------------
 _Trigger click_  | Trigger click on the current selected DOM element
 _Trigger focus_  | Trigger focus on the current selected DOM element
 _Trigger fade_  | Trigger fade on the current selected DOM element
 _Trigger pin_  | Trigger pin on the current selected DOM element
 _Trigger blur_  | Trigger blur on the current selected DOM element
 _Trigger submit_  | Trigger submit on the current selected DOM element
 _Trigger select_  | Trigger select on the current selected DOM element
 _Trigger change_  | Trigger change on the current selected DOM element
 _Trigger show_  | Trigger show on the current selected DOM element
 _Trigger reset_  | Trigger reset on the current selected DOM element
 _Trigger play_  | Trigger play on the current selected DOM element
 _Trigger pause_  | Trigger play on the current selected DOM element
 _Trigger mouse over_  | Trigger mouseover on the current selected DOM element
 _Trigger mouse up_  | Trigger mouseup on the current selected DOM element
 _Trigger mouse down_  | Trigger mousedown on the current selected DOM element
 _Trigger mouse leave_  | Trigger mouseover on the current selected DOM element
 _Trigger mouse move_  | Trigger mousemove on the current selected DOM element
 _Trigger mouse enter_  | Trigger mouseenter on the current selected DOM element
 _Trigger mouse out_  | Trigger mouseout on the current selected DOM element
 _Trigger drag_  | Trigger drag on the current selected DOM element
 _Trigger drag start_  | Trigger dragstart on the current selected DOM element
 _Trigger drag end_  | Trigger dragend on the current selected DOM element
 _Trigger drag enter_  | Trigger dragenter on the current selected DOM element
 _Trigger drag leave_  | Trigger dragleave on the current selected DOM element
 _Trigger drag over_  | Trigger dragmove on the current selected DOM element
 _Trigger drop_  | Trigger drop on the current selected DOM element
 _Trigger touch start_  | Trigger touchstart on the current selected DOM element
 _Trigger touch end_  | Trigger touchend on the current selected DOM element
 _Trigger touch enter_  | Trigger touchenter on the current selected DOM element
 _Trigger touch leave_  | Trigger touchleave on the current selected DOM element
 _Trigger touch move_  | Trigger touchmove on the current selected DOM element
 _Trigger touch cancel_  | Trigger touchcancel on the current selected DOM element
 _Trigger scroll y_  | Trigger Y scroll on the current selected DOM element
 _Trigger scroll x_  | Trigger X scroll on the current selected DOM element

####Window

Commands to manipulate, trigger ```window``` events and actions

Command  | Result
------------- | -------------
 _Window scroll y_  | Trigger window Y scroll
 _Window scroll x_  | Trigger window X scroll


####Navigator

Commands to manipulate, trigger ```window.navigator```

Command  | Result
------------- | -------------
 _Navigator go online_  | Set online status
 _Navigator go offline_  | Set offline status
 _Navigator vibrate_  | Vibrate device
 _Navigator which_  | Show navigator informations


###Events
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

###Plugins
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

###Debug
Enable debug mode
```javascript
document.addEventListener("DOMContentLoaded", function () {
  Butler.start({
   'debug':true
  });
});
```
###Browser Support
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Google_Chrome_icon_(2011).svg/1024px-Google_Chrome_icon_(2011).svg.png" width="50"/>

Google Chrome (latest versions)

http://caniuse.com/#feat=web-speech

###Contributing
We will be much grateful if you help us making this project to grow up.
Feel free to contribute by forking, opening issues, pull requests etc...

###License
The MIT License (MIT)

Copyright (c) 2015 Filippo Oretti, Dario Andrei

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

####Gtk
- Not ready for production
- Default [commands](https://github.com/720kb/butler#-commands) may be changed or modified at any time, others will come soon

####Thank you
- to [Google](google.com) and Google developers, for the awesome webkit-speech API
- to https://github.com/TalAter/annyang developers and maintainers for the awesome library.
