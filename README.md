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
<img src="http://i.imgur.com/2JA16e5.png" width="20"/> 
_"Hey"_

![](http://i.imgur.com/2JA16e5.png) _"Selector on"_

![](http://i.imgur.com/2JA16e5.png) _"Selector next"_

![](http://i.imgur.com/2JA16e5.png) _"Selector back"_

![](http://i.imgur.com/2JA16e5.png) _"Selector next id :detection:"_

![](http://i.imgur.com/2JA16e5.png) _"Selector next class :detection:"_

![](http://i.imgur.com/2JA16e5.png) _"Selector next tag :detection:"_

![](http://i.imgur.com/2JA16e5.png) _"Selector back id :detection:"_

![](http://i.imgur.com/2JA16e5.png) _"Selector back class :detection:"_

![](http://i.imgur.com/2JA16e5.png) _"Selector back tag :detection:"_

##Options

####Exclude hidden/invisible elements
Sometime you could need to work only on visible/viewable elements, so, to skip invisible or hidden elements, set the option ```{ viewable:true}```

```javascript
var Highlighter = new window.Highlighter({
  'viewable':true //this way Highlighter.js will exclude/avoid selecting or highlighting hidden/invisible elements
});
```

####Scroll to the underlined element
Sometime you could need to scroll to the current underlined element, so, to automatically scroll to it once is underlined you can set the options ```{scroll:true, scrollDuration: 500 }```
```javascript
var Highlighter = new window.Highlighter({
  'scroll':true, //Automatically scroll to the underlined element
  'scrollDuration': 500 //milliseconds
});
```

##Gtk
- Not yet 100% ready for production
- If your element/s has ```outline:``` CSS rule setted up, there could be problems or maybe not.
- isVisible() control need a deep check, it could probably mistake at any time
- Scroller is a bit horrible atm
- If no selectable next elements, Highlighter will restart from the first element in DOM
- If no selectable previous elements, Highlighter will restart from the first element in DOM