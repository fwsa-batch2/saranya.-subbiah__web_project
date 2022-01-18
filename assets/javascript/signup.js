let customername = [];
function PageOnLoad() {
    let user = JSON.parse(localStorage.getItem("User_loge"));
    if (user != null) {
        customername = user;
    }
}

PageOnLoad();
function submit_function(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let mailid = document.getElementById("Email_Id").value;
    let pass = document.getElementById("enter_pass").value;
    let conpass = document.getElementById("confirm_pass").value;

    
    let Alreadyexists = validmail(mailid);

    if (pass!= conpass) {
      alert("Incorrect password");   
    }
    else if(Alreadyexists){
      alert("Email Already Exist");  
    }
    else{
        customerdetails = {
            "username": username,
            "mail_id": mailid,
            "enter_pass": pass,
            "confirm_pass": conpass
        }
        customername.push(customerdetails);
        localStorage.setItem("User_loged", JSON.stringify(customername));
        window.location.href = "../../pages/login.html"; 
    }
}
function validmail(currentEmail){
    let used = false;
    let len= customername.length;
    for (let a = 0; a < len; a++) {
    const email = customername[a].email;
    if (currentEmail == email) {
    used = true;
    break;
    }
    }
    return used; 
}






















