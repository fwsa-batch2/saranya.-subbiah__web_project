let customername = [];
function PageOnLoad() {
    const user = JSON.parse(localStorage.getItem("login"));
    if (user != null) {
        customername = user;
    }
}


function submit_function() {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const mailid = document.getElementById("Email_Id").value;
    const pass = document.getElementById("enter_pass").value;
    const conpass = document.getElementById("confirm_pass").value;

    let customerdetails = {
        "username": username,
        "mail_id": mailid,
        "enter_pass": pass,
        "confirm_pass": conpass
    }
    const Alreadyexists = validmail(mailid);

    console.log(Alreadyexists);

    if (Alreadyexists) {
        alert("Email-id Already Exists");
        return;
    }


    const checkpassword = checking(pass, conpass);

    console.log(checkpassword)

    if (checkpassword) {
        customername.push(customerdetails);
        let check = JSON.stringify(customername)
        localStorage.setItem("login", check);
        window.location.href = "/pages/tripdet.html"
    }
    else {
        alert("please check your password");
    }

}



function validmail(current_email) {
    let user = JSON.parse(localStorage.getItem("login"));
    let used = false;

    if (user) {
        for (i = 0; i < user.length; i++) {
            const userlist = user[i];
            const email = userlist.mail_id;

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

PageOnLoad();




















