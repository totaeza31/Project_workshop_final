

$(function() {

    $.get("customers.json", function(data) {

        var num = 0;
        for (num = 0;num< data.length;num++){
       
         tablelist = '<tr><td><a href="detail.html" onclick="setCookies('+num+')">'+data[num].customerID+'</td><td>'
         +data[num].companyName+'</td><td>'+data[num].contactName+'</td><td>'+data[num].contactTitle+'</td></tr>';

     $('#datalist').append(tablelist);
        }
    });

  });
  function setCookies(num){
    document.cookie = num;
  }
