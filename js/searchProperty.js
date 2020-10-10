$(document).ready(function () {
    $("#slider-range").slider({
        range: true,
        min: 500000,
        max: 50000000,
        step: 300000,
        values: [500000,50000000],
        slide: function (event, ui) {
            $("#pricerange").val(ui.values[0] + " - " + ui.values[1]);
        }
    });
    $("#pricerange").val($("#slider-range").slider("values", 0) +
        " - " + $("#slider-range").slider("values", 1));

    $(".advancebtn").click(function () {
        $(".filter-container").slideToggle();
    });

    let ac;

    $.getJSON('js/account.json', function (data) {
        ac = data;
        let count = 0;
        ac['user'].forEach(function (item, index, array) {
            if (item.role != "manager") {
                count++;
                $(".userresult-container").append(
                    '<div class="user-card">' +
                    '<div class="user-card-img">' +
                    '<img src="assets/' + item.role + '.png" alt="" width="75px">' +
                    '</div>' +
                    '<div class="user-card-content">' +
                    '<h3 class="user-card-text-1">' + item.email + '</h3>' +
                    '<p class="user-card-text-2">Name : ' + item.name + '</p>' +
                    '<p class="user-card-text-3">Join Date: ' + item.date + '</p>' +
                    '</div>' +
                    '<div class="user-card-toggle">' +
                    '<p style="color: #5c5c5c;">Account Status</p>' +
                    '<label class="switch">' +
                    '<input type="checkbox" checked>' +
                    '<span class="slider round"></span>' +
                    '</label>' +
                    '</div>' +
                    '<a style="text-decoration:none;position:absolute;width:100%;height:100%;z-index:1;" href="personalInfo.html?index=' + index + '"/>' +
                    '</div>'
                );
                $("#total-result").html(count);
            }
        });
    });

    $('.addfilter input:checkbox,input:radio').prop("checked", false);

    $('input:checkbox,input:radio').change(function () {
        if ($(this).is(':checked')) {
            $(this).parent().appendTo(".filter-selected-container");
        } else {
            if ($(this).parent().attr("class") == 'addfilter belongitem1')
                $(this).parent().appendTo("#item-container-1");
            if ($(this).parent().attr("class") == 'addfilter belongitem2')
                $(this).parent().appendTo("#item-container-2");
            if ($(this).parent().attr("class") == 'addfilter belongitem3')
                $(this).parent().appendTo("#item-container-3");
        }
        if ($("#old2new").is(':checked')) {
            $("#new2old").parent().appendTo("#item-container-3");
        }
        if ($("#new2old").is(':checked')) {
            $("#old2new ").parent().appendTo("#item-container-3");
        }
    });

    $('.resetbtn').click(function () {
        $(".belongitem1").appendTo("#item-container-1");
        $(".belongitem2").appendTo("#item-container-2");
        $(".belongitem3").appendTo("#item-container-3");
        $('.addfilter input:checkbox,input:radio').prop("checked", false);
        $('.searchbar').val("");
        $(".searchbtn").click();
    });

    $('#date-range-selector').click(function () {
        console.log($(this).parent().attr("class"));
        if ($(this).parent().attr("class") == "filteritem-container")
            $(this).appendTo(".filter-selected-container");
        else {
            if ($(this).parent().attr("class") == 'filter-selected-container')
                $(this).appendTo("#item-container-3");
        }
    });

    $(".searchbtn").click(function () {
        $(".userresult-container").html("");
        const rolefilter = ac["user"].filter(function (item, index, array) {
            if ($("#user").is(":checked"))
                var customer = $("#user").val();
            if ($("#agent").is(":checked"))
                var agent = $("#agent").val();
            if (!$("#agent").is(":checked") && !$("#user").is(":checked")) {
                var agent = $("#agent").val();
                var customer = $("#user").val();
            }
            return item.role == customer || item.role == agent;
        });
        const sexfilter = rolefilter.filter(function (item, index, array) {
            if ($("#male").is(":checked"))
                var male = $("#male").val();
            if ($("#female").is(":checked"))
                var female = $("#female").val();
            if (!$("#male").is(":checked") && !$("#female").is(":checked")) {
                return rolefilter;
            }
            return item.sex == male || item.sex == female;
        });

        let arr = [];
        let min;
        let max;

        for (item of sexfilter) {
            arr.push(new Date(item.date).getTime());
        }

        let dateArr = [...arr];
        let orderedArr = [];

        if (!$("#new2old").is(":checked") && !$("#old2new").is(":checked")) {
            orderedArr = [...sexfilter];
        } else {
            if ($("#new2old").is(":checked")) {
                for (item of dateArr) {
                    min = arr.indexOf(Math.min.apply(null, arr));
                    orderedArr.push(sexfilter[dateArr.indexOf(arr.splice(min, 1)[0])]);
                }
            }
            if ($("#old2new").is(":checked")) {
                for (item of dateArr) {
                    max = arr.indexOf(Math.max.apply(null, arr));
                    orderedArr.push(sexfilter[dateArr.indexOf(arr.splice(max, 1)[0])]);
                }
            }
        }

        let sliderleft = $(new Date($("#slider-range").slider("values", 0) * 1000).getTime());
        let sliderright = $(new Date($("#slider-range").slider("values", 1) * 1000).getTime());
        if ($("#daterange").parent().parent().attr("class") == 'filter-selected-container') {
            let count = 0;
            const dateRangeFilter = orderedArr.filter(function (item, index, array) {
                let itemdate = new Date(item.date).getTime();
                if (itemdate >= sliderleft[0] && itemdate <= sliderright[0]) {
                    count++;
                    $(".userresult-container").append(
                        '<div class="user-card">' +
                        '<div class="user-card-img">' +
                        '<img src="assets/' + item.role + '.png" alt="" width="75px">' +
                        '</div>' +
                        '<div class="user-card-content">' +
                        '<h3 class="user-card-text-1">' + item.email + '</h3>' +
                        '<p class="user-card-text-2">Name : ' + item.name + '</p>' +
                        '<p class="user-card-text-3">Join Date: ' + item.date + '</p>' +
                        '</div>' +
                        '<div class="user-card-toggle">' +
                        '<p style="color: #5c5c5c;">Account Status</p>' +
                        '<label class="switch">' +
                        '<input type="checkbox" checked>' +
                        '<span class="slider round"></span>' +
                        '</label>' +
                        '</div>' +
                        '<a style="text-decoration:none;position:absolute;width:100%;height:100%;z-index:1;" href="personalInfo.html?index=' + index + '"/>' +
                        '</div>'
                    );
                }
            });
        } else {
            const dateRangeFilter = orderedArr.filter(function (item, index, array) {
                $(".userresult-container").append(
                    '<div class="user-card">' +
                    '<div class="user-card-img">' +
                    '<img src="assets/' + item.role + '.png" alt="" width="75px">' +
                    '</div>' +
                    '<div class="user-card-content">' +
                    '<h3 class="user-card-text-1">' + item.email + '</h3>' +
                    '<p class="user-card-text-2">Name : ' + item.name + '</p>' +
                    '<p class="user-card-text-3">Join Date: ' + item.date + '</p>' +
                    '</div>' +
                    '<div class="user-card-toggle">' +
                    '<p style="color: #5c5c5c;">Account Status</p>' +
                    '<label class="switch">' +
                    '<input type="checkbox" checked>' +
                    '<span class="slider round"></span>' +
                    '</label>' +
                    '</div>' +
                    '<a style="text-decoration:none;position:absolute;width:100%;height:100%;z-index:1;" href="personalInfo.html?index=' + index + '"/>' +
                    '</div>'
                );
            });
        }

        var lowerCase = $(".searchbar").val().toLowerCase();

        var searchText = $(".user-card");
        var resultCount = searchText.length;
        for(i=0;i<searchText.length;i++){
            searchStr = searchText[i].innerText.toLowerCase();
            if(searchStr.indexOf(lowerCase)> -1){
                searchText.eq(i).show();
            } else {
                searchText.eq(i).hide();
                resultCount--;
            }
        }
        $("#total-result").html(resultCount);
    });
});