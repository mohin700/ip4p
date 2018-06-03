$(document).ready(function(){

    $("#paedge-button").click(function(){
        $(".pledge-group-one").hide(100);
        $(".main_content_area").addClass("main_content_area small-logo");
        $(".pledge-group-two").show(300);
    });

    $(".paedge-with-social").click(function(){
        $(".pledge-group-two").hide(100);
        $(".pledge-group-three").show(300);
    });
    
    $(".back-to-social").click(function(){
        $(".pledge-group-three").hide(100);
        $(".pledge-group-two").show(300);
    });

});