function checkPassword(){
    let password=document.getElementById("password").value;
    let cnfrmPassword=document.getElementById("cnfrm-password").value;
    console.log(password,cnfrmPassword);
    let message=document.getElementById("message");

    if(password.length!=0){
        if(password==cnfrmPassword){
            message.textContent="Password match";
            message.style.backgroundColor="#3ae374"
        }
        else{
            message.textContent="Password does not match";
            message.style.backgroundColor="#ff4d4d";
        }
 
    }
    else{
        alert("Password cannot be empty!");
        message.textContent="";
    }
}