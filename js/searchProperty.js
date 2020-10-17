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

    $.getJSON('hseInfo.json', function (data) {
        property = data;
        let count = 0;

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

        var markers = L.markerClusterGroup();

        var fileName = location.href.split("/").slice(-1);
        var link;
        if(fileName=="ManagerApartmentSale.html")
            link = "ManagerHouseDetail.html";
        else if(fileName=="CustomerApartmentSale.html")
            link = "CustomerHouseDetail.html";
        else if(fileName=="AgentApartmentSale.html")
            link = "AgentHouseDetail.html";
        else
            link = "houseDetail.html";

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
                '<a style="text-decoration:none;position:absolute;width:100%;height:100%;z-index:1;" href="'+link+'?index=' + index + '"/>' +
                '</div>'
            );
            $("#total-result").html(count);
            markers.addLayer(L.marker(item.property_geo).bindPopup("<h2>" + item.name + "</h2><p>" + item.address + "</p>").addTo(mymap));
        });
        markers.on('click', function (a) {
            count = 0;
            const geoData = Object.values(a.layer._latlng);
            property.filter(function (item, index, array) {
                if (JSON.stringify(item.property_geo) == JSON.stringify(geoData)) {
                    count++;
                    $("#property-result").html(
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
                }
            });
        });
        markers.on('clusterclick', function (a) {
            $("#property-result").html("");
            count = 0;
            for (var i in a.layer.getAllChildMarkers()) {
                const geoData = Object.values(a.layer.getAllChildMarkers()[i]._latlng);
                property.filter(function (item, index, array) {
                    if (JSON.stringify(item.property_geo) == JSON.stringify(geoData)) {
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
                    }
                });
            }
            $("#total-result").html(count);
        });
        mymap.addLayer(markers);
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
        count = 0;
        $(".belongitem1").appendTo("#item-container-1");
        $(".belongitem2").appendTo("#item-container-2");
        $(".belongitem3").appendTo("#item-container-3");
        $(".belongitem4").appendTo("#item-container-4");
        $(".belongitem5").appendTo("#item-container-5");
        $(".belongitem6").appendTo("#item-container-6");
        $('.addfilter input:checkbox,input:radio').prop("checked", false);
        $('.searchbar').val("");
        $.getJSON('hseInfo.json', function (data) {
            $("#property-result").html("");
            property = data;
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

    $(".searchbtn").click(function () {
        let count=0;
        $.getJSON('hseInfo.json', function (data) {
            $("#property-result").html("");
            property = data;
            property.filter(function (item, index, array) {
                console.log(item.numOfRoom);
                if (item.numOfRoom == 3 && item.size>800) {
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
                }
            });
        });
    });
});