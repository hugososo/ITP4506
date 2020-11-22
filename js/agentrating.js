$(document).ready(function () {
    $(".replybox").each(function () {
        $(this).hide();
    });
    $("#datedes").hide();
    $("#replycontent").hide();
    $("#reply").each(function () {
        $(this).click(function () {
            $(this).next().next().toggle();
        });
    });
    $("#submitreply").click(function () {
        $(".replybox").hide();
        $("#replycontent").show();
    });

    $("#datesortcb").change(function () {
        if ($("#datesortcb").prop("checked") == true) {
            $("#datesortimg").attr("src", "assets/sort-descending.png");
            $("#dateasc").hide();
            $("#ratedasc").hide();
            $("#ratedes").hide();
            $("#datedes").show();
        } else {
            $("#datesortimg").attr("src", "assets/sort-ascending.png")
            $("#dateasc").show();
            $("#datedes").hide();
            $("#ratedasc").hide();
            $("#ratedes").hide();
        }
    });

    $("#ratedasc").hide();
    $("#ratedes").hide();

    $("#ratingsortcb").change(function () {
        if ($("#ratingsortcb").prop("checked") == true) {
            $("#ratesortimg").attr("src", "assets/sort-descending.png");
            $("#ratedasc").hide();
            $("#ratedes").show();
            $("#dateasc").hide();
            $("#datedes").hide();
        } else {
            $("#ratesortimg").attr("src", "assets/sort-ascending.png")
            $("#ratedasc").show();
            $("#ratedes").hide();
            $("#dateasc").hide();
            $("#datedes").hide();
        }
    });


});