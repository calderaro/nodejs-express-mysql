$(document).on("ready",function(){

    var body    = $("body"),
        menu    = $("aside"),
        buttons = $("aside li"),
        content = $("content"),
        views   = $(".view"),
        win     = $(window);
    function init(){
        menu.css({
        
            "height": win.height()+15
        })  
    }
   
    
    init();
    win.on("resize",function(){
        init();
    });

});