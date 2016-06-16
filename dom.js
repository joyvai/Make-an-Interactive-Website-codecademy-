/*
$( )
In jQuery, we often see $( ). It has two main uses:

To select existing HTML elements on the page.

$('p') selects all p elements on the page.
To create new HTML elements to add to the page.

$('<h1>') creates a new h1 element. The < > indicates that we want to create a new HTML element.

$('<h1>')
The $() creates new <h1> element.

create a new li element => $('<li>')

text()
The .text() method adds text to an HTML element.
$('<p>').text('List')

The $()creates a new '<p>'element and .text()
sets its text to 'List'

$('li').text('Old Item') 
The $() selects the 'li' elements and .text() 
replaces its text with 'Old item'.

$('h1').text() The $() selects the 'h1' elements 
and .text() gets the text it contains.


.appendTo()
The .appendTo() method adds HTML elements to the end of the selected element.

The $() function creates a new li element.
Text is added to the new li element.
The li element is added as the last item inside <ul class="items"> .. </ul> on the page.
*/

$('.btn').click(function() {
  $('<li>').text('New item').appendTo('.items');
});
/*
.prependTo()
The .prependTo() method adds HTML elements to the beginning of the selected element.

The .remove() method removes the selected HTML element from the web page.

When the Delete button is clicked, the .selected element is removed from the page.
*/

$('.btn').click(function() {
  $('.selected').remove();
});
/*
These six jQuery methods let you control more aspects of HTML elements:

.hide() hides the selected HTML element
.show() displays an element
.toggle() alternates hiding and showing an element
.addClass() adds a CSS class to an element
.removeClass() removes a class from an element
.toggleClass() alternates adding and removing a class from an element
*/
var main = function () {
  $(".btn").click(function () {
    $(".read").hide();
  });
};

  $('li').click(function() {
  $(this).addClass('read');
})


$(document).ready(main);



