let customername=[];
function PageOnLoad(){
    const user = JSON.parse(localStorage.getItem("login"));
    if(user != null){
        customername = user;
    }
}
function submit_function() {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const mailid = document.getElementById("Email_Id").value;
    const pass = document.getElementById("enter_pass").value;
    const conpass = document.getElementById("confirm_pass").value;
       
let customerdetails={
   "username":username,
   "Mail-id":mailid,
   "enter_pass":pass,
   "confirm_pass":conpass
}
let Alreadyexists = validmail(mailid);
    if(Alreadyexists){
        alert("Email-id Already Exists");
        return;
    }


let checkpassword=checking();
if (checkpassword){
    customername.push(customerdetails);
    let check=JSON.stringify(customername)
    localStorage.setItem("login",check);
    window.location.href=".././pages/tripdet"
}
else{
    alert("please check your password");
}
   
}
function validmail(current_email){
    let user = JSON.parse(localStorage.getItem("login"))
    let used = false;


 for (i=0; i < user.length; i++) {
     const userlist = user[i];
     const email = userlist.email;

     if (current_email == email) {
         used = true;
         break;
     }

     return used;
 }
}

function checking(){
    if (pass == conpass) {
       return true;
        }
   else{
       return false;
       }

    }

// const emailexists = emailvalid(mailid);

// if(pass != conpass){
//     alert("Password not matched");
// }
// else if(emailexists){
//     alert("Email already exists");
// }
// else{
//     let customerdetails={
//           "username":username,
//           "Mail-id":mailid,
//           "enter_pass":pass,
//           "confirm_pass":conpass
//         }

//         customername.push(customerdetails);
//         let userlist = JSON.stringify(customerdetails);
//         localStorage.setItem(userlist)
// }

PageOnLoad();




















 