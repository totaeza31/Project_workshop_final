$(function() {

    $.get("customers.json", function(data) {

        var Search = data;

          var customers = Search[document.cookie];

          var table =

          '<tr><td>' + customers.customerID +'</td><td>'+

           customers.companyName +'</td><td>' +

           customers.contactName +'</td><td>' +

           customers.contactTitle +'</td><td>' +

            "street :"+ customers.address.street + "<br>" +

            "city :"+ customers.address.city + "<br>" +

            "region :"+ customers.address.region + "<br>" +

            "postalCode :"+ customers.address.postalCode + "<br>" +

            "country :"+ customers.address.country + "<br>" +

            "phone :"+ customers.address.phone +'</td></tr>' ;

          $("#customerclick").append(table);



      });

});