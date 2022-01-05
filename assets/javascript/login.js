
let userdetails = [];

function onPageLoad() {
  // console.group("onPageLoad");
  let users = JSON.parse(localStorage.getItem('username'));
  console.log(users)
  if (users == null){
    userdetails = []
  }else {
    userdetails = users;
  }
  // console.groupEnd("onPageLoad")
}

function submit_function() {
  event.preventDefault();
  console.group("submitHandlers");
  let email = document.getElementById("email").value.toLowerCase();
  let password = document.getElementById("password").value;


  let customerDetail = {
    "email": email,
    "password": password
  }
  // console.table(customerDetail);
  let isEmailAlreadyExist = emailValid(email,password);

  // console.log(isEmailAlreadyExist);
  if (isEmailAlreadyExist) {
    userdetails.push(customerDetail);
    let login = JSON.stringify(userdetails);
    localStorage.setItem("username", login);
    window.location.href = "./../../index.html";
   
   
  }
  else{ 
   
    alert("Please Sign in!");
    return;
  }
  //  console.groupEnd("submitHandlers") ;
  


}



function emailValid(current_email,current_password) {
  event.preventDefault();
  console.group("emailValid");
  let userList = JSON.parse(localStorage.getItem("registersname"));

  let isUsed = false;
  
  for (i = 0; i < userList.length; i++) {

    let user = userList[i];
    let email = user.email;
    let password =user.password;
    if (current_password === password && current_email === email) {
      console.log("password and email already exists");
      isUsed = true;
      break;
    }
  }
  console.groupEnd("emailValid");
  return isUsed;
}

onPageLoad()
