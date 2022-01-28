
let userdetails = [];

function onPageLoad() {
  
  let users = JSON.parse(localStorage.getItem('User_loged'));

 if(userdetails!=null) {
    userdetails=users;
 }
  console.log(userdetails);
}
onPageLoad();

function submithandler(event) {
  event.preventDefault();

  console.log(userdetails);




  const email = document.getElementById("Email_Id").value;
  const Pass = document.getElementById("enter_pass").value;
  let isEmailAlreadyExist = emailValid(email,Pass);
  console.log(isEmailAlreadyExist);
  if (isEmailAlreadyExist != true) {
    alert("Invalid mail or password")
    return null;
  }
  else {
    window.location.href="./../../pages/home.html"
    localStorage.setItem("currentuser", login);
  }
}





function emailValid(current_email,current_password) {
 
  

  let isUsed = false;
  let i ;
  console.log(userdetails.length);
  for (i=0; i<userdetails.length; i++) {


    const user=userdetails[i];
    const password=user.enter_pass;
    const mailid= user.mail_id;
    console.log(user.mail_id + user.enter_pass + current_email+current_password);
    if (current_password == password && current_email == mailid) {
      console.log("password and email already exists");
      isUsed = true;
      break;
    }
  }
 
  return isUsed;
}


