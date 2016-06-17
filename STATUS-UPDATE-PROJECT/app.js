/*
You can type messages and post status updates
A counter keeps track of the number of characters left
The Post button is only enabled when there is a message that is 140 characters or less
*/

var main=function(){
    $('.btn').click(function(){
        var post=$('.status-box').val();
        $('<li>').text(post).prependTo('.posts');
        $('.status-box').val('');
        $('.counter').text('140');
        $('.btn').addClass('disabled');
    });
    $('.status-box').keyup(function(){
        var postLength = $(this).val().length;
        var charactersLeft = 140 - postLength;
        $('.counter').text(charactersLeft);
        if (charactersLeft < 0){
            $('.btn').addClass('disabled');
        }
        else if(charactersLeft === 140){
            $('.btn').addClass('disabled');
        }
        else{
            $('.btn').removeClass('disabled');
        }
    });
    $('.btn').addClass('disabled');
    
};

$(document).ready(main);
