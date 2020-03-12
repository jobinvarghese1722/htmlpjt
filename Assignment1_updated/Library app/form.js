

// var mail= document.getElementById("email");


//  var username= document.getElementById("uname");
// var password= document.getElementById("pwd");
// var username=username.value.trim();
// var password=password.value.trim();
// var mail= document.getElementById("email").value;
function validate()
{
    var mail= document.getElementById("email");


    var username= document.getElementById("uname");
   var password= document.getElementById("pwd");
   var username=username.value.trim();
   var password=password.value.trim();                 

    if(username==="")
    {
    alert("username cannot be blank space ");
    return false;
    }
    else if(password==="")
    {
        alert("Password cannot be blank space");
    return false;
    
    }
    // else if(password.length<6)
    // {
    //     alert('too short');
    //     return false;
    // }
    
    else{

        var check=mail.value;
        regexp=/^([a-zA-Z0-9\.])+\@([a-zA-Z0-9-])+\.([a-z]{2,3})([.a-z]{2,3})?$/  
        // regexp=/^w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
        if(regexp.test(check)) {
    
            
            return true;
    
        }  
        else{
    
            alert('Email  format is wrong');
            return false;
    
        }         
        
        
    }







}























    
   
    




























