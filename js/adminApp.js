$(document).ready(function () {
    $("#nextdate").hide();
    $(".rightarrow").click(function () {
        $("#nowdate").hide();
        $("#nextdate").show();
        $("#date").html("28/11/2020 - 03/12/2020");
    });

    $(".leftarrow").click(function () {
        $("#nowdate").show();
        $("#nextdate").hide();
        $("#date").html("21/11/2020 - 27/11/2020");
    });

    $("#detail").hide();
    $("#closedetail").click(function () {
        $("#detail").hide();
    });

    $("#opbooking").click(function () {
        $("#detail").toggle();
    });
});

