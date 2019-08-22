$( document ).ready(function() {
    $('#postheader2-tech-middle > h3').css('visibility','hidden');
    $('#menu-btn').css('visibility','hidden');
    console.log('hi?');
    if($(window).width() >= 1024){
        adjustHeight('#postheader2-left','#postheader2-right');
        adjustHeight('#postheader2-left','#postheader2-right');
    }
    var url = window.location.href;
    $("nav a").each(function() {
        if (url == (this.href)) {
            $(this).closest("li a").addClass("active");
            //for making parent of submenu active
            $(this).closest("li a").parent().parent().addClass("active");
        }
    });
});
function adjustHeight(el1,el2) {
    var elementTarget = el1;
    var elementToChange = el2;
    var targetHeight = $(elementTarget).height();
    $(elementToChange).height(targetHeight);
    $(elementTarget).height(targetHeight);
    console.log(targetHeight);
}
