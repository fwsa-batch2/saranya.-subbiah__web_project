let customername = [];
function PageOnLoad(event) {
    event.preventDefault();
    let user = JSON.parse(localStorage.getItem("login"));
    if (user != null) {
        customername = user;
    }
}


function submit_function(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let mailid = document.getElementById("Email_Id").value;
    let pass = document.getElementById("enter_pass").value;
    let conpass = document.getElementById("confirm_pass").value;

    let customerdetails = {
        "username": username,
        "mail_id": mailid,
        "enter_pass": pass,
        "confirm_pass": conpass
    }
    let Alreadyexists = validmail(mailid);

    console.log(Alreadyexists);

    if (Alreadyexists) {
        alert("Email-id Already Exists");
        return;
    }


    let checkpassword = checking(pass, conpass);

    console.log(checkpassword)

    if (checkpassword) {
        customername.push(customerdetails);
        let check = JSON.stringify(customername)
        localStorage.setItem("login", check);
        window.location.href = "/pages/login.html"
    }
    else {
        alert("please check your password");
    }

}



function validmail(current_email) {
    let user = JSON.parse(localStorage.getItem("login"));
    let used = false;

    if (user) {
      for (let i of user )  {
            let userlist = i.email;
            let email = userlist.mail_id;

            if (current_email == email) {
                used = true;
                break;
            }

        }
    }
    return used;
}


function checking(pass, conpass) {
    if (pass == conpass) {
        return true;
    }
    else {
        return false;
    }

}





















