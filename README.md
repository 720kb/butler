###Browser Support
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Google_Chrome_icon_(2011).svg/1024px-Google_Chrome_icon_(2011).svg.png" width="45"/>

http://caniuse.com/#feat=web-speech

###Installation

####HTML
```html
<!DOCTYPE html>
<html>
<head>
<script src="../path/to/hey.min.js"></script>
</head>
```
####Bower
```shell
bower install
```

####Npm
```shell
npm install
```

###Usage
```javascript
document.addEventListener("DOMContentLoaded", function() {
  Hey.start();
});
```
###Demo

##Commands
Default voice commands you can abuse of.

<img src="http://i.imgur.com/2JA16e5.png" width="18"/> 
_"Hey"_

<img src="http://i.imgur.com/2JA16e5.png" width="18"/> 
_"Selector on"_

<img src="http://i.imgur.com/2JA16e5.png" width="18"/> 
_"Selector next"_

<img src="http://i.imgur.com/2JA16e5.png" width="18"/> 
_"Selector back"_

<img src="http://i.imgur.com/2JA16e5.png" width="18"/> 
_"Selector next id :detection:"_

<img src="http://i.imgur.com/2JA16e5.png" width="18"/> 
_"Selector next class :detection:"_

<img src="http://i.imgur.com/2JA16e5.png" width="18"/> 
_"Selector next tag :detection:"_

<img src="http://i.imgur.com/2JA16e5.png" width="18"/> 
_"Selector back id :detection:"_

<img src="http://i.imgur.com/2JA16e5.png" width="18"/> 
_"Selector back class :detection:"_

<img src="http://i.imgur.com/2JA16e5.png" width="18"/> 
_"Selector back tag :detection:"_

##Plugins
Writing a plugin is very simple, all you have to do is to define new commands using the ```plug()``` method
**Example**
_hey.plugin.js_
```javascript
Hey.plug({
 'do something when i say this sentence': function callback(){
  window.alert('You said that sentence');
 } 
});
```
_index.html_
```html
<head>
<script src="hey.min.js"></script>
<script src="hey.plugin.js"></script>
<script>
Hey.start();
</script>
</head>
```
Now all the hey.plugin.js defined commands and callbacks are plugged and can be used.

##Debug
Enable debug mode
```javascript
Hey.start({
 'debug':true
});
```
##Gtk
- Not ready for production