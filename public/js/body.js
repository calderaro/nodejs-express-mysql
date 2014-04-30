$(document).on("ready",function(){

    var body = $("body"),
        win  = $(window);
    function init(){
        body.css({
        "width": win.width,
        "height": win.height
        })
    }
    init();
    win.on("resize",function(){
        init();
    });
    console.log("body w:"+body.width()+" h:"+body.height())
   
});