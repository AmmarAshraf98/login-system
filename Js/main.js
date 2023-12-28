// // store Data
// let Data = [];

// // select div , a
// let regist = document.querySelector(".register-box");
// let logn = document.querySelector(".login-box");
// let signLink = document.querySelector(".sign-a");
// let loginLink = document.querySelector(".login-a");
// // select register inputs
// let regName = document.querySelector(".register-name");
// let regMail = document.querySelector(".register-email");
// let regPass = document.querySelector(".register-pass");

// // error message
// let errPass = document.querySelector(".register-pass ~ p");
// let errName = document.querySelector(".register-name ~ p");
// let errEmail = document.querySelector(".register-email ~ p");

// // select login inputs
// let logMail = document.querySelector(".login-email");
// let logPass = document.querySelector(".login-pass");

// // select buttons
// let logBtn = document.querySelector(".logBtn");
// let regBtn = document.querySelector(".regBtn");

// // registeration inputs
// // name
// regName.addEventListener("blur", function (e) {
//   validateName(e.target);
// });

// // email
// regMail.addEventListener("blur", function (e) {
//   validateEmail(e.target);
// });

// // Password
// regPass.addEventListener("blur", function (e) {
//   validatePass(e.target);
// });

// // login inputs
// // email
// logMail.addEventListener("blur", function (e) {});

// // Password
// logPass.addEventListener("blur", function (e) {});

// // get users from local ti the array
// if (localStorage.getItem("users")) {
//   getUsers();
// }

// // check if user excist
// function check() {
//   let gest = {
//     email: logMail.value,
//     pass: logPass.value,
//   };

//   let flag = false;
//   for (const user of Data) {
//     console.log("Data from check", Data);
//     console.log("gest to test", gest);
//     if (user.email === gest.email && user.pass === gest.pass) {
//       console.log("right user");
//       flag = true;
//       // document.querySelector(".errGest").classList.replace("d-block", "d-none");
//       // document.querySelector(
//       //   ".display-user"
//       // ).innerText = `Welcome ${user.name}`;
//       // sessionStorage.setItem("currentUser", user);
//       // return true;
//     } else {
//       flag = false;
//       // document.querySelector(".errGest").classList.replace("d-none", "d-block");
//       console.log("wrong user");
//       // return false;
//     }
//   }
//   return flag;
// }

// logBtn.addEventListener("click", function () {
//   check();
//   if (check()) {
//     logn.classList.add("d-none");
//     document
//       .querySelector(".display-user")
//       .classList.replace("d-none", "d-block");
//   }
//   clear();
// });

// // validation function
// function validateEmail(x) {
//   let regsEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
//   if (regsEmail.test(x.value) === true) {
//     errEmail.classList.replace("d-block", "d-none");
//     return true;
//   } else {
//     errEmail.classList.replace("d-none", "d-block");
//     return false;
//   }
// }

// function validateName(x) {
//   let regsName = /[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{1,20}$/;
//   if (regsName.test(x.value)) {
//     document
//       .querySelector(".register-name ~ p")
//       .classList.replace("d-block", "d-none");
//     return true;
//   } else {
//     document
//       .querySelector(".register-name ~ p")
//       .classList.replace("d-none", "d-block");
//     return false;
//   }
// }

// function validatePass() {
//   var regsPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
//   if (regsPass.test(regPass.value)) {
//     document
//       .querySelector(".register-pass ~ p")
//       .classList.replace("d-block", "d-none");
//     return true;
//   } else {
//     document
//       .querySelector(".register-pass ~ p")
//       .classList.replace("d-none", "d-block");
//     return false;
//   }
// }

// // if email is exist
// function isExist() {
//   for (const i of Data) {
//     if (i.email === logMail.value) return false;
//   }
// }

// // Add function
// function add() {
//   let user = {
//     name: regName.value,
//     email: regMail.value,
//     pass: regPass.value,
//   };

//   if (user.name == "" || user.email == "" || user.pass == "") return;
//   if (Data.length === 0) {
//     Data.push(user);
//     setUsers(Data);
//   }
//   if (isExist()) {
    
//   }
// }

// regBtn.addEventListener("click", function () {
//   add();
//   clear();
// });

// // set and get from localstorage
// function setUsers(x) {
//   localStorage.setItem("users", JSON.stringify(x));
// }
// function getUsers() {
//   Data = JSON.parse(localStorage.getItem("users"));
// }

// // Display || hide forms
// signLink.addEventListener("click", function () {
//   regist.classList.add("active");
//   logn.classList.add("d-none");
// });

// loginLink.addEventListener("click", function () {
//   regist.classList.remove("active");
//   logn.classList.remove("d-none");
// });

// // clear inputs
// function clear() {
//   regMail.value = "";
//   regName.value = "";
//   regPass.value = "";
//   logMail.value = "";
//   logPass.value = "";
// }
