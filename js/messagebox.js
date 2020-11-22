$(document).ready(function () {
    $("#hidemsg").hide();
    $("#thomaschat").click(function(){
        $(".mesgs img").attr("src","assets/thomasicon.png");
        $(".incoming_msg:nth-child(3)").remove();
        $(".incoming_msg:last-child").remove();
        $("#himsg").html("Hi, I am Thomas, What apartments are you looking for?");
        $("#hidate").html("11:11 AM | Nov 18");
        $("#thomaschat").addClass("active_chat");
        $(".chat_list:first-child").removeClass("active_chat");
        $(".removemsg").remove();
    });
    $(".msg_send_btn").click(function(){
        $("#hidemsg").show();
        $("#sentmsgtext").html($(".write_msg").val());
        $(".write_msg").val("");
    });
    $("#searchbtn").click(function(){
        $(".chat_list").hide();
        $(".chat_list:nth-child(3)").show();
    });
});