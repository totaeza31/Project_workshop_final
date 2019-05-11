

 $(function () {
 
 $("#login").click(function () {
    
 
    var Username= $('#username').val();
    var Password= $('#password').val();
 
    var Realusername ="admin@nw.com";
    var Realpassword ="12345**";
     if(Username == Realusername && Password==Realpassword){
        console.log("true");
     }else{
        console.log("false");
     alert("Please check username or password again!!");
     return false;
    
 
     }
 });
 
 
 
 });
 
 

