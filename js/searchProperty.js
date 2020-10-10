$(document).ready(function () {
    $("#slider-range").slider({
        range: true,
        min: 500000,
        max: 50000000,
        step: 300000,
        values: [500000, 50000000],
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

    $.getJSON('hseInfo.json', function (data) {
        property = data;
        let count = 0;
        property.forEach(function (item, index, array) {
            count++;
            $("#property-result").append(
                '<div class="user-card">' +
                '<div class="user-card-img">' +
                '<img src="' + item.img1 + '" alt="" width="150px" height="100px">' +
                '</div>' +
                '<div class="user-card-content" style="margin-left:10px">' +
                '<h3 class="user-card-text-1">' + item.name + '</h3>' +
                '<p class="user-card-text-2">' + item.address + '</p>' +
                '<p style="color: rgb(70, 70, 70);">' + item.numOfRoom + " Room | " + item.type + '</p>' +
                '<span class="user-card-text-3" style="color:rgb(255, 50, 93);font-size:20pt">$' + item.price + '</span>' +
                '<span style="margin-left:5px;font-size:12pt">' + item.size + " sq.ft." + '</span>' +
                '</div>' +
                '<a style="text-decoration:none;position:absolute;width:100%;height:100%;z-index:1;" href="houseDetail.html?index=' + index + '"/>' +
                '</div>'
            );
            $("#total-result").html(count);
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
            if ($(this).parent().attr("class") == 'addfilter belongitem3')
                $(this).parent().appendTo("#item-container-4");
            if ($(this).parent().attr("class") == 'addfilter belongitem3')
                $(this).parent().appendTo("#item-container-5");
            if ($(this).parent().attr("class") == 'addfilter belongitem3')
                $(this).parent().appendTo("#item-container-6");
        }
        if ($("#low2high").is(':checked')) {
            $("#high2low").parent().appendTo("#item-container-6");
        }
        if ($("#high2low").is(':checked')) {
            $("#low2high ").parent().appendTo("#item-container-6");
        }
    });

    $('.resetbtn').click(function () {
        $(".belongitem1").appendTo("#item-container-1");
        $(".belongitem2").appendTo("#item-container-2");
        $(".belongitem3").appendTo("#item-container-3");
        $(".belongitem4").appendTo("#item-container-4");
        $(".belongitem5").appendTo("#item-container-5");
        $(".belongitem6").appendTo("#item-container-6");
        $('.addfilter input:checkbox,input:radio').prop("checked", false);
        $('.searchbar').val("");
        $(".searchbtn").click();
    });

    $('#price-range-selector').click(function () {
        console.log($(this).parent().attr("class"));
        if ($(this).parent().attr("class") == "filteritem-container")
            $(this).appendTo(".filter-selected-container");
        else {
            if ($(this).parent().attr("class") == 'filter-selected-container')
                $(this).appendTo("#item-container-6");
        }
    });

    var mymap = L.map('map-container').setView([22.318455, 114.191612], 17);

    L.tileLayer('https://mapapi.geodata.gov.hk/gs/api/v1.0.0/xyz/basemap/wgs84/{z}/{x}/{y}.png', {
        attribution: '<u href="https://api.portal.hkmapservice.gov.hk/disclaimer" target="_blank" class="copyrightDiv">&copy; The Government of the Hong Kong SAR</u><div style="width:28px;height:28px;display:inline-flex;background:url(https://api.hkmapservice.gov.hk/mapapi/landsdlogo.jpg);background-size:28px;"></div>',
        maxZoom: 17,
        id: 'APIKEY'
    }).addTo(mymap);

    L.tileLayer('https://mapapi.geodata.gov.hk/gs/api/v1.0.0/xyz/label/hk/en/wgs84/{z}/{x}/{y}.png', {
        maxZoom: 17,
        id: 'APIKEY'
    }).addTo(mymap);
    
    const option = {
        title:'tltle'
    }

    var markers = L.markerClusterGroup({
        singleMarkerMode:true
    });
    markers.addLayer(L.marker([22.318455, 114.191612]).bindPopup("<h2>Wyler Gardens</h2><p>To Kwa Wan Rd 125 Kowloon</p>").addTo(mymap).on('click',onClick));
    markers.addLayer(L.marker([22.311500, 114.191812]).bindPopup("<h2>HONG WAH COURT</h2><p>To Kwa Wan Rd 128 Kowloon</p>").addTo(mymap));
    markers.addLayer(L.marker([22.317500, 114.191812]).bindPopup("<h2>HONG WAH COURT</h2><p>To Kwa Wan Rd 128 Kowloon</p>").addTo(mymap));
    markers.addLayer(L.marker([22.323500, 114.191812]).bindPopup("<h2>HONG WAH COURT</h2><p>To Kwa Wan Rd 128 Kowloon</p>").addTo(mymap));
    markers.addLayer(L.marker([22.317500, 114.141812]).bindPopup("<h2>HONG WAH COURT</h2><p>To Kwa Wan Rd 128 Kowloon</p>").addTo(mymap));
    markers.addLayer(L.marker([22.312500, 114.111812]).bindPopup("<h2>HONG WAH COURT</h2><p>To Kwa Wan Rd 128 Kowloon</p>").addTo(mymap));
    markers.addLayer(L.marker([22.317500, 114.291812]).bindPopup("<h2>HONG WAH COURT</h2><p>To Kwa Wan Rd 128 Kowloon</p>").addTo(mymap));
    markers.addLayer(L.marker([22.317500, 114.101812]).bindPopup("<h2>HONG WAH COURT</h2><p>To Kwa Wan Rd 128 Kowloon</p>").addTo(mymap));
    markers.addLayer(L.marker([22.417500, 114.241812]).bindPopup("<h2>HONG WAH COURT</h2><p>To Kwa Wan Rd 128 Kowloon</p>").addTo(mymap));
    markers.addLayer(L.marker([22.357500, 114.151812]).bindPopup("<h2>HONG WAH COURT</h2><p>To Kwa Wan Rd 128 Kowloon</p>").addTo(mymap));
    markers.addLayer(L.marker([22.327500, 114.121812]).bindPopup("<h2>HONG WAH COURT</h2><p>To Kwa Wan Rd 128 Kowloon</p>").addTo(mymap));
    mymap.addLayer(markers);

    function onClick(e){
        $("#property-result").html(
            '<div class="user-card">' +
            '<div class="user-card-img">' +
            '<img src="./assets/hseInfo/WYLER_GARDENS_1.jpg" alt="" width="150px" height="100px">' +
            '</div>' +
            '<div class="user-card-content" style="margin-left:10px">' +
            '<h3 class="user-card-text-1">WYLER GARDENS Block C</h3>' +
            '<p class="user-card-text-2">To Kwa Wan Rd 125 Kowloon</p>' +
            '<p style="color: rgb(70, 70, 70);">2 Room | Private housing estates</p>' +
            '<span class="user-card-text-3" style="color:rgb(255, 50, 93);font-size:20pt">$6.88M</span>' +
            '<span style="margin-left:5px;font-size:12pt">456 sq.ft.</span>' +
            '</div>' +
            '<a style="text-decoration:none;position:absolute;width:100%;height:100%;z-index:1;" href="houseDetail.html?index=0"/>' +
            '</div>'
        );
    }

    // $(".searchbtn").click(function () {
    //     $(".userresult-container").html("");
    //     const rolefilter = ac["user"].filter(function (item, index, array) {
    //         if ($("#user").is(":checked"))
    //             var customer = $("#user").val();
    //         if ($("#agent").is(":checked"))
    //             var agent = $("#agent").val();
    //         if (!$("#agent").is(":checked") && !$("#user").is(":checked")) {
    //             var agent = $("#agent").val();
    //             var customer = $("#user").val();
    //         }
    //         return item.role == customer || item.role == agent;
    //     });
    //     const sexfilter = rolefilter.filter(function (item, index, array) {
    //         if ($("#male").is(":checked"))
    //             var male = $("#male").val();
    //         if ($("#female").is(":checked"))
    //             var female = $("#female").val();
    //         if (!$("#male").is(":checked") && !$("#female").is(":checked")) {
    //             return rolefilter;
    //         }
    //         return item.sex == male || item.sex == female;
    //     });

    //     let arr = [];
    //     let min;
    //     let max;

    //     for (item of sexfilter) {
    //         arr.push(new Date(item.date).getTime());
    //     }

    //     let dateArr = [...arr];
    //     let orderedArr = [];

    //     if (!$("#new2old").is(":checked") && !$("#old2new").is(":checked")) {
    //         orderedArr = [...sexfilter];
    //     } else {
    //         if ($("#new2old").is(":checked")) {
    //             for (item of dateArr) {
    //                 min = arr.indexOf(Math.min.apply(null, arr));
    //                 orderedArr.push(sexfilter[dateArr.indexOf(arr.splice(min, 1)[0])]);
    //             }
    //         }
    //         if ($("#old2new").is(":checked")) {
    //             for (item of dateArr) {
    //                 max = arr.indexOf(Math.max.apply(null, arr));
    //                 orderedArr.push(sexfilter[dateArr.indexOf(arr.splice(max, 1)[0])]);
    //             }
    //         }
    //     }

    //     let sliderleft = $(new Date($("#slider-range").slider("values", 0) * 1000).getTime());
    //     let sliderright = $(new Date($("#slider-range").slider("values", 1) * 1000).getTime());
    //     if ($("#daterange").parent().parent().attr("class") == 'filter-selected-container') {
    //         let count = 0;
    //         const dateRangeFilter = orderedArr.filter(function (item, index, array) {
    //             let itemdate = new Date(item.date).getTime();
    //             if (itemdate >= sliderleft[0] && itemdate <= sliderright[0]) {
    //                 count++;
    //                 $(".userresult-container").append(
    //                     '<div class="user-card">' +
    //                     '<div class="user-card-img">' +
    //                     '<img src="assets/' + item.role + '.png" alt="" width="75px">' +
    //                     '</div>' +
    //                     '<div class="user-card-content">' +
    //                     '<h3 class="user-card-text-1">' + item.email + '</h3>' +
    //                     '<p class="user-card-text-2">Name : ' + item.name + '</p>' +
    //                     '<p class="user-card-text-3">Join Date: ' + item.date + '</p>' +
    //                     '</div>' +
    //                     '<div class="user-card-toggle">' +
    //                     '<p style="color: #5c5c5c;">Account Status</p>' +
    //                     '<label class="switch">' +
    //                     '<input type="checkbox" checked>' +
    //                     '<span class="slider round"></span>' +
    //                     '</label>' +
    //                     '</div>' +
    //                     '<a style="text-decoration:none;position:absolute;width:100%;height:100%;z-index:1;" href="personalInfo.html?index=' + index + '"/>' +
    //                     '</div>'
    //                 );
    //             }
    //         });
    //     } else {
    //         const dateRangeFilter = orderedArr.filter(function (item, index, array) {
    //             $(".userresult-container").append(
    //                 '<div class="user-card">' +
    //                 '<div class="user-card-img">' +
    //                 '<img src="assets/' + item.role + '.png" alt="" width="75px">' +
    //                 '</div>' +
    //                 '<div class="user-card-content">' +
    //                 '<h3 class="user-card-text-1">' + item.email + '</h3>' +
    //                 '<p class="user-card-text-2">Name : ' + item.name + '</p>' +
    //                 '<p class="user-card-text-3">Join Date: ' + item.date + '</p>' +
    //                 '</div>' +
    //                 '<div class="user-card-toggle">' +
    //                 '<p style="color: #5c5c5c;">Account Status</p>' +
    //                 '<label class="switch">' +
    //                 '<input type="checkbox" checked>' +
    //                 '<span class="slider round"></span>' +
    //                 '</label>' +
    //                 '</div>' +
    //                 '<a style="text-decoration:none;position:absolute;width:100%;height:100%;z-index:1;" href="personalInfo.html?index=' + index + '"/>' +
    //                 '</div>'
    //             );
    //         });
    //     }

    //     var lowerCase = $(".searchbar").val().toLowerCase();

    //     var searchText = $(".user-card");
    //     var resultCount = searchText.length;
    //     for(i=0;i<searchText.length;i++){
    //         searchStr = searchText[i].innerText.toLowerCase();
    //         if(searchStr.indexOf(lowerCase)> -1){
    //             searchText.eq(i).show();
    //         } else {
    //             searchText.eq(i).hide();
    //             resultCount--;
    //         }
    //     }
    //     $("#total-result").html(resultCount);
    // });
});