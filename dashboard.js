$(function () {
    $.get("products.json", function (data) {
        var count = 0;
        for (count = 0; count <= data.length; count++) {
            var number = 0;
            number += count;
        }
        $("#products").append(number);
    });
    $.get("customers.json", function (data) {
        var count = 0;
        for (count = 0; count <= data.length; count++) {
            var number = 0;
            number += count;
        }
        $("#customers").append(number);
    });
    $.get("suppliers.json", function (data) {
        var count = 0;
        for (count = 0; count <= data.length; count++) {
            var number = 0;
            number += count;
        }
        $("#suppliers").append(number);
    });
    $.get("orders.json", function (data) {
        var count = 0;
        for (count = 0; count <= data.length; count++) {
            var number = 0;
            number += count;
        }
        $("#orders").append(number);

    });

});