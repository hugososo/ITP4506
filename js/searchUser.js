$(document).ready(function () {
    $("#slider-range").slider({
        range: true,
        min: new Date('2020-09-01').getTime() / 1000,
        max: new Date('2020-10-31').getTime() / 1000,
        step: 86400,
        values: [new Date('2020-09-10').getTime() / 1000, new Date('2020-10-10').getTime() / 1000],
        slide: function (event, ui) {
            $("#daterange").val((new Date(ui.values[0] * 1000).toDateString().split(' ').slice(1).join(' ')) + " - " + (new Date(ui.values[1] * 1000)).toDateString().split(' ').slice(1).join(' '));
        }
    });
    $("#daterange").val((new Date($("#slider-range").slider("values", 0) * 1000).toDateString().split(' ').slice(1).join(' ')) +
        " - " + (new Date($("#slider-range").slider("values", 1) * 1000)).toDateString().split(' ').slice(1).join(' '));

    $(".advancebtn").click(function () {
            $(".filter-container").slideToggle();
    })
});