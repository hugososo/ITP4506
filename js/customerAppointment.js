$(document).ready(function () {
    $("#cmbox2").hide();
    $(".add").click(function(){
        $("#cmbox2").toggle();
    });

    $("#closecmbox2").click(function(){
        $("#cmbox2").hide();
    });

    $(".fa2:nth-child(3)").mouseover(function(){
        $(".fa2:nth-child(3)").addClass("checked");
        $(".fa2:nth-child(4)").removeClass("checked");
        $(".fa2:nth-child(5)").removeClass("checked");
        $(".fa2:nth-child(6)").removeClass("checked");
        $(".fa2:nth-child(7)").removeClass("checked");
    });
    
    $(".fa2:nth-child(4)").mouseover(function(){
        $(".fa2:nth-child(3)").addClass("checked");
        $(".fa2:nth-child(4)").addClass("checked");
        $(".fa2:nth-child(5)").removeClass("checked");
        $(".fa2:nth-child(6)").removeClass("checked");
        $(".fa2:nth-child(7)").removeClass("checked");
    });

    $(".fa2:nth-child(5)").mouseover(function(){
        $(".fa2:nth-child(3)").addClass("checked");
        $(".fa2:nth-child(4)").addClass("checked");
        $(".fa2:nth-child(5)").addClass("checked");
        $(".fa2:nth-child(6)").removeClass("checked");
        $(".fa2:nth-child(7)").removeClass("checked");
    });

    $(".fa2:nth-child(6)").mouseover(function(){
        $(".fa2:nth-child(3)").addClass("checked");
        $(".fa2:nth-child(4)").addClass("checked");
        $(".fa2:nth-child(5)").addClass("checked");
        $(".fa2:nth-child(6)").addClass("checked");
        $(".fa2:nth-child(7)").removeClass("checked");
    });

    $(".fa2:nth-child(7)").mouseover(function(){
        $(".fa2:nth-child(3)").addClass("checked");
        $(".fa2:nth-child(4)").addClass("checked");
        $(".fa2:nth-child(5)").addClass("checked");
        $(".fa2:nth-child(6)").addClass("checked");
        $(".fa2:nth-child(7)").addClass("checked");
    });

    $("#submitreply").click(function(){
        $("#sentoverlay").slideDown(800,function(){
            $("#cmbox2").animate({left:"3000px"},500,function(){
                $("#cmbox2").css("display","none");
            });
        });
    });
    $("#readcmbox").hide();
    $(".see").click(function(){
        $("#readcmbox").toggle();
    });

    $("#closereadbox2").click(function(){
        $("#readcmbox").hide();
    });

    
});