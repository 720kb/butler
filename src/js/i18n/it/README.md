###Butler i18n Italian

####Translated Default Commands
####Butler
Common commands for Butler

Command  | Result
------------- | -------------
_Butler parla_ | Turn on Butler voice
_Butler silenzio_ | Turn off Butler voice

####Selector
Commands to select, visualize and manipulate the DOM elements

Command  | Result
------------- | -------------
 _Selettore on_  | Turn on selector highlighter
 _Selettore off_ | Turn off selector highlighter
 _Selettore avanti_  | Select next element in the DOM
 _Selettore indietro_  | Select previous element in the DOM
 _Selettore prossimo id :detection:_  | Select next element in the DOM by detected id value
 _Selettore prossimo class :detection:_  | Select next element in the DOM by detected class name
 _Selettore prossimo tag :detection:_  | Select next element by detected tag name
 _Selettore precedente id :detection:_  | Select previous element by detected id value
 _Selettore precedente class :detection:_  | Select next element by detected class name
 _Selettore precedente tag :detection:_  | Select next element by detected tag name
 _Selettore aggiungi class :detection:_  | Add detected class name to the current selected DOM element
 _Selettore rimuovi class :detection:_  | Remove detected class name from the current selected DOM element
 _Selettore aggiungi id :detection:_  | Add detected id value to the current selected DOM element
 _Selettore inserisci valore :detection:_  | Add detected value to the current selected DOM element (helpful for inputs)
 _Selettore inserisci testo :detection:_  | Insert detected text inside the current selected DOM element
 _Selettore svuota testo_  | Remove all the text from the current selected DOM element
 _Selettore copia testo_  | Copy all the text from the current selected DOM element
 _Selettore incolla testo_  | Paste the previously copied text to the current selected DOM element
 _Selettore fallo editabile_  | Make the current selected DOM element editable
 _Selettore fallo non editabile_  | Make the current selected DOM element not editable
 _Selettore fallo disabilitato_  | Make the current selected DOM element disabled
 _Selettore fallo non disabilitato_  | Make the current selected DOM element not disabled
 _Selettore clona_  | Clone the current selected DOM element
 _Selettore appendi clone_  | Append the cloned element to the current selected DOM element
 _Selettore prependi clone_  | Prepend the cloned element to the current selected DOM element
 _Selettore rimuovi_  | Delete the current selected DOM element
 _Selettore nascondi_  | Hide the current selected DOM element
 _Selettore mostra_  | Show the current selected DOM element
 _Selettore scelgo io_  |  Select yourself which DOM element by clicking the element
 _Selettore quale_  | Show and alert the current selected DOM element informations

####Trigger

Commands to trigger events and actions

Command  | Result
------------- | -------------
 _Innesca click_  | Trigger click on the current selected DOM element
 _Innesca focus_  | Trigger focus on the current selected DOM element
 _Innesca fade_  | Trigger fade on the current selected DOM element
 _Innesca pin_  | Trigger pin on the current selected DOM element
 _Innesca blur_  | Trigger blur on the current selected DOM element
 _Innesca submit_  | Trigger submit on the current selected DOM element
 _Innesca select_  | Trigger select on the current selected DOM element
 _Innesca change_  | Trigger change on the current selected DOM element
 _Innesca show_  | Trigger show on the current selected DOM element
 _Innesca reset_  | Trigger reset on the current selected DOM element
 _Innesca play_  | Trigger play on the current selected DOM element
 _Innesca pause_  | Trigger play on the current selected DOM element
 _Innesca mouse over_  | Trigger mouseover on the current selected DOM element
 _Innesca mouse up_  | Trigger mouseup on the current selected DOM element
 _Innesca mouse down_  | Trigger mousedown on the current selected DOM element
 _Innesca mouse leave_  | Trigger mouseover on the current selected DOM element
 _Innesca mouse move_  | Trigger mousemove on the current selected DOM element
 _Innesca mouse enter_  | Trigger mouseenter on the current selected DOM element
 _Innesca mouse out_  | Trigger mouseout on the current selected DOM element
 _Innesca drag_  | Trigger drag on the current selected DOM element
 _Innesca drag start_  | Trigger dragstart on the current selected DOM element
 _Innesca drag end_  | Trigger dragend on the current selected DOM element
 _Innesca drag enter_  | Trigger dragenter on the current selected DOM element
 _Innesca drag leave_  | Trigger dragleave on the current selected DOM element
 _Innesca drag over_  | Trigger dragmove on the current selected DOM element
 _Innesca drop_  | Trigger drop on the current selected DOM element
 _Innesca touch start_  | Trigger touchstart on the current selected DOM element
 _Innesca touch end_  | Trigger touchend on the current selected DOM element
 _Innesca touch enter_  | Trigger touchenter on the current selected DOM element
 _Innesca touch leave_  | Trigger touchleave on the current selected DOM element
 _Innesca touch move_  | Trigger touchmove on the current selected DOM element
 _Innesca touch cancel_  | Trigger touchcancel on the current selected DOM element
 _Innesca scorri y_  | Trigger Y scroll on the current selected DOM element
 _Innesca scorri x_  | Trigger X scroll on the current selected DOM element

####Window

Commands to manipulate, trigger ```window``` events and actions

Command  | Result
------------- | -------------
 _Finestra scorri y_  | Trigger window Y scroll
 _Finestra scorri x_  | Trigger window X scroll
 _Finestra dimensioni_  | Alert window dimensions

####Location
Commands to manipulate, navigate urls and history

Command  | Result
------------- | -------------
 _Indirizzo refresh_  | Location refresh
 _Indirizzo indietro_  | Go to previous location url
 _Indirizzo avanti_  | Go to next location url
 _Indirizzo hashbang :detection:_  | Add hashbang at the end of the location url


####Navigator

Commands to manipulate, trigger ```window.navigator```

Command  | Result
------------- | -------------
 _Navigatore vai online_  | Set online status
 _Navigatore vai offline_  | Set offline status
 _Navigatore vibra_  | Vibrate device
 _Navigatore quale_  | Show and alert navigator informations

####Browser

Commands to manipulate and interact with the browser

Command  | Result
------------- | -------------
 _Browser cancella cookies_  | Clean browser cookies
 _Browser cancella session storage_  | Clean browser session storage
 _Browser cancella local storage_  | Clean browser local storage
