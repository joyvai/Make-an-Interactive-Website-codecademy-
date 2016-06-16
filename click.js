/*
In the page to the right, click the three share buttons at the top of the page.

One common user event is the click event. A click event occurs when a user clicks on an HTML element.

The .click() method attaches an event handler to an HTML element so that it can respond to a click event.

*/

//$('.social li') selects each share button at the top of the web page.
//The .click() method attaches an event handler to each button.
//We use $(this) to refer to the HTML element that was clicked on.
//We can now operate on this element using .toggleClass().

$('.social li').click(function() {
  $(this).toggleClass('active');
});
