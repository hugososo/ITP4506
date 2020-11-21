$(document).ready(function () {
    $("#agentinfo").hide();
    $("#addressinfo").hide();
    $("#confirmmsg").hide();
    $("#input").change(function () {
        $("#agentinfo").show();
    });
    $("#input2").change(function () {
        $("#addressinfo").show();
    });
    var date, day,month,year;
    $("#dateselect").change(function () {
        date = new Date($('#dateselect').val());
        day = date.getDate();
        month = date.getMonth() + 1;
        year = date.getFullYear();
        $("#datetimestr").text("Date&Time: " +[ day, month, year].join('/'));
    })
    $(".selectTime").click(function(){
        $("#datetimestr").text("Date&Time: " +[ day, month, year].join('/') + " " + $(this).text());
    })
    $("#submitbtn").click(function(){
        $("#confirmmsg").show();
    });
    $("#submitbtn2").click(function(){
        alert("Submitted");
        window.location.href("index.html");
    });
    $("#closeconfirm").click(function(){
        $("#confirmmsg").hide();
    });
});