$(document).ready(function () {
    $("#agentinfo").hide();
    $("#addressinfo").hide();
    $("#confirmmsg").hide();
    $("#timeslot").hide();
    $("#buildlist").hide();
    $("#buildcard-con").hide();
    $("#input").change(function () {
        $("#agentinfo").show();
        $("#progressbar").animate({value:"1"},500);
        $("#buildcard-con").show();
    });
    $("#input2").change(function () {
        $("#addressinfo").show();
        $("#progressbar").animate({value:"2"},500);
    });
    var date, day,month,year;
    $("#dateselect").change(function () {
        date = new Date($('#dateselect').val());
        day = date.getDate();
        month = date.getMonth() + 1;
        year = date.getFullYear();
        $("#datetimestr").text("Date&Time: " +[ day, month, year].join('/'));
        $("#timeslot").show();
        $("#progressbar").animate({value:"3"},500);
    })
    $(".selectTime").click(function(){
        $("#datetimestr").text("Date&Time: " +[ day, month, year].join('/') + " " + $(this).text());
        $("#progressbar").animate({value:5},500);
    })
    $("#submitbtn").click(function(){
        $("#confirmmsg").show();
    });
    $("#submitbtn2").click(function(){
        alert("Submitted");
        $("#confirmmsg").hide();
        window.location.href("index.html");
    });
    $("#closeconfirm").click(function(){
        $("#confirmmsg").hide();
    });
    $(".buildcard").click(function(){
        $("#progressbar").animate({value:2},500);
        if($(this).css("background-color")=="rgb(245, 158, 45)")
            $(this).css("background-color","rgb(49, 49, 49)")
        else
            $(this).css("background-color","rgb(245, 158, 45)");
    });
    $("#closebuilding").click(function(){
        $("#buildlist").hide();
    });
    $("#morebtn").click(function(){
        $("#buildlist").show();
    });
});