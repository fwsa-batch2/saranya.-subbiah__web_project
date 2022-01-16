
let userdetails = [];

function onPageLoad() {
  
  let users = JSON.parse(localStorage.getItem('username'));
  console.log(users)
  if (users == null){
    userdetails = []
  }else {
    userdetails = users;
  }
  
}


function submithandler(event) {
  event.preventDefault();
  const email = document.getElementById("Email_Id").value;
  const Pass = document.getElementById("enter_pass").value;
  let isEmailAlreadyExist = emailValid(email,Pass);
  if (isEmailAlreadyExist !== true) {
    alert("Invalid mail or password")
    return null;
  }
  else {
    alert("WELCOME")
    window.location.href="./../../pages/home.html"
    localStorage.setItem("username", login);
  }
}





function emailValid(current_email,current_password) {
  console.group("emailValid");
  let userList = JSON.parse(localStorage.getItem("login"));

  let isUsed = false;
  
  for (let i of userList) {

    let user = i;
    let mailid = user.mail_id;
    let password =user.enter_pass;
    if (current_password === password && current_email === mailid) {
      console.log("password and email already exists");
      isUsed = true;
      break;
    }
  }
  console.groupEnd("emailValid");
  return isUsed;
}

onPageLoad()
