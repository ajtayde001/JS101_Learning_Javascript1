// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.
let storeUN = "ajay@gmail.com";
let storePS = "123456";

let inputUN = "ajay@gmail.com";
let inputPS = "123456";

if(storeUN == inputUN){
  
  if(storePS == inputPS){
    console.log("Login Successful");
  }
  else {
    console.log("Incorrect Password");
  }
}
else{
  console.log("Wrong Email");
}
