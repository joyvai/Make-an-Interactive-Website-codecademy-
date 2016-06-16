/*
In the page to the right, click inside the page, and then press any letter or number key.

Another common user event is the keypress event. A keypress event occurs when a user types a key on the keyboard.

The .keypress() method attaches an event handler to an HTML element so that it can respond to a keypress event.
*/

//$(document) selects the whole web page.
// The .keypress() method attaches an event handler to document
/*
Putting it all together, when you press any keyboard key, a keypress event is triggered by the browser.

When the keypress event occurs, the .keypress() method runs the event handler.

Here, the event handler toggles the dropdown menu.


*/

$(document).keypress(function() {
  $('.dropdown-menu').toggle(); // When any keyboard key is pressed, the event handler toggles the dropdown menu.
});
