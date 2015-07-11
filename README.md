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

  var Hey = new window.Hey();

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
How to write a plugin
##Debug
Enable debug mode
```javascript
var Hey = new window.Hey();
Hey.start({
 'debug':true
});
```
##Gtk
- Not ready for production