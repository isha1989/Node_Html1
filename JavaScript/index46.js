let user;
let password;
let userAndPassword='pepito2017,12345';


user= userAndPassword.substr(0,10);
password=userAndPassword.substr(11);
console.log("userName is : " + user);
console.log("password is  : " + password);

//we dont know the size of user
const sep=userAndPassword.indexOf(",");
let user2=userAndPassword.slice(0, sep);
let pass1=userAndPassword.slice(sep+1);
console.log(user2, pass1);

