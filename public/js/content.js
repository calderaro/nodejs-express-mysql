$(document).on("ready",function(){

    var body    = $("body"),
        content = $("#content"),
        buttons = $("aside li"),
        scroll  = $("#content-scroll"),
        views   = $(".view"),
        nav     = $("nav"),
        menu    = $("aside"),
        win     = $(window);
    console.log(views.length);
    function init(){

        //ajustar el ancho de scroll
        content.css({

           "width": nav.width() ,
           "height": 1000,
           "margin-left": menu.width(),
           "margin-top" : nav.height()
        });

        scroll.css({
            "width" : (views.length + 1) * views.width() 
        });

        views.css({
            "height":content.height(),
            "width" :content.width()
        });
        
    }

    buttons.each(function(){

        $(this).on("click",function(){
            //console.log($("#"+$(this).data("target")).offset().left);
            content.scrollLeft( $(this).data("target") * views.width())
           
        })
    }) 
    init();
    win.on("resize",function(){
        init();
    });

})