function validate()
{

var mail= document.getElementById("email");
var passworrd= document.getElementById("pwd");
var passworrdd= document.getElementById("pwd1");
var password=passworrd.value.trim();
var passwordd=passworrdd.value.trim();

var check=mail.value;
if(password===passwordd)
{
    
    alert('Password matched');
regexp=/^([a-zA-Z0-9\.])+\@([a-zA-Z0-9-])+\.([a-z]{2,3})([.a-z]{2,3})?$/  
        
        if(regexp.test(check)) {
    
           
            return true;
    
        }  
        else{
    
            alert('Email  format is wrong');
            return false;
    
        }        
}

else
{
    alert('Password mismatch');
    return false;
}

 



}