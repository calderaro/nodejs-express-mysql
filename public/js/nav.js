$(document).on("ready",function(){

    var menu = $("aside");
    var nav = $("nav"),
        content = $("#content"),
        win = $(window);

    function init () {
        nav.css({
            "width": win.width() -menu.outerWidth() ,
            "margin-left": menu.outerWidth(),
            "height" : 50
            
        })
        
    }

    init();


})