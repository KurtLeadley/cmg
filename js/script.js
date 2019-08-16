$( document ).ready(function() {
    console.log( "ready!" );
    $('#postheader2-tech-middle > h3').css('visibility','hidden');
    var height = $('#postheader2-right').height();
    console.log(height);
    $('#postheader2-left').height(height);
    $('#postheader2-right').height(height);
});