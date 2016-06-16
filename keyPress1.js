/*
In the page to the right, click inside the page, and then press the m key.
Triggering a keypress event handler when any key is typed isn't particularly useful.
For more control, we can use the event object.
The event object contains more information about an event,
such as which mouse button was clicked or which key was pressed.

*/
//$(document) selects the whole web page, and the .keypress() method attaches an event handler to document.
//The event handler takes event as a parameter.
//event.which contains which key was pressed. Keyboard keys are identified by key codes.
//The m key is identified by the key code 109.
//Therefore, if the m key is pressed ...
//... the dropdown menu is toggled.



$(document).keypress(function(event) {
  if(event.which === 109) {
    $('.dropdown-menu').toggle();
  }
});
