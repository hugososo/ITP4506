$(function() {
    $.getJSON("hseInfo.json", function(data) {

      for (var i = 0; i < data.length; i++) {

        if (i % 3 === 0) {
          var str = "<div>" +
            "<h3>Hide</h3>" +
            "<img src='assets/cross.png' width='50px' height='50px' >" +
            "</div>";
        } else if (i % 5 === 0) {
          var str = "<div>" +
            "<h3>Promoting</h3>" +
            "<img src='assets/hseInfo/pin.jpg' width='50px' height='50px' >" +
            "</div>";
        } else {
          
          var str = "<div>" +"<h3>normal</h3>"+
              "<img src='assets/tick.png' width='50px' height='50px' >" +
              "</div>";
        }

        $("#pro_card").append(
          "<div class=\"hse_card_cm\" style='margin: 15px' >" +
          "<div style='justify-content: space-between' class=\"card_cm_info\">" +
          "<img src=" + data[i].img1 + " width='200px' height='100px'>" +
          "<div style='margin-left: 15px; width: 300px' class='upload_procard'>" +
          "<h3>" + data[i].name + " Flat " + data[i].flat + " " + data[i].floor + "/F" + "</h3>" +
          "<div>" + data[i].address + "</div>" +
          "<p>" + data[i].status + " | " + data[i].type + "</p>" +
          "<p>" + data[i].price + " | " +
          data[i].size + "sq.ft." + "</p>" +
          "</div>" +

          "<div >" +
          "<p>" + data[i].agent + "</p>" +
          "<p>Ac.email.com</p>" +
          "</div>" + str +
          "</div>" +

          "<hr>" +
          "<div class=\"hse_actual_cm\">" +
          "</div>" +
          " </div>");
      }
    });

    $("#up_hse_search").click(function() {
      $.getJSON("hseInfo.json", function(data) {

        var str = "<div>" +"<h3>normal</h3>"+
              "<img src='assets/tick.png' width='50px' height='50px' >" +
              "</div>";
        
        for (var i = 0; i < 1; i++) {
          $("#pro_card").html(
            "<div class=\"hse_card_cm\" style='margin: 15px' >" +
            "<div style='justify-content: space-between' class=\"card_cm_info\">" +
            "<img src=" + data[i].img1 + " width='200px' height='100px'>" +
            "<div style='margin-left: 15px;' class='upload_procard'>" +
            "<h3>" + data[i].name + " Flat " + data[i].flat + " " + data[i].floor + "/F" + "</h3>" +
            "<div>" + data[i].address + "</div>" +
            "<p>" + data[i].status + " | " + data[i].type + "</p>" +
            "<p>" + data[i].price + " | " +
            data[i].size + "sq.ft." + "</p>" +
            "</div>" +

            "<div>" +
            "<p>" + data[i].agent + "</p>" +
            "<p>Ac.email.com</p>" +
            "</div>" + str +
            "</div>" +
            "" +
            "<hr>" +
            "<div class=\"hse_actual_cm\">" +
            "</div>" +
            " </div>");
        }

        $("#res_num_hse_up").html("1");
      });
    });
  });