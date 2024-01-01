("use strict");

// select div , a
let regist = document.querySelector(".register-box");
let logn = document.querySelector(".login-box");
let signLink = document.querySelector(".sign-a");
let loginLink = document.querySelector(".login-a");

let logIn = document.querySelector(".logIn");
let signIn = document.querySelector(".signIn");

// Display || hide forms
signLink.addEventListener("click", function () {
  regist.classList.add("active");
  logn.classList.add("d-none");
});

loginLink.addEventListener("click", function () {
  regist.classList.remove("active");
  logn.classList.remove("d-none");
});

signIn.addEventListener("click", function () {
  regist.classList.add("active");
  logn.classList.add("d-none");
});

logIn.addEventListener("click", function () {
  regist.classList.remove("active");
  logn.classList.remove("d-none");
});

// store Data in array
let Data = [];

// get users from local ti the array
if (localStorage.getItem("users") !== null) {
  getUsers();
}

let usersMail = [];

for (const i of Data) {
  usersMail.push(i.email);
}

// clear inputs
function clear() {
  regEmail.value = "";
  regName.value = "";
  regPass.value = "";
  logMail.value = "";
  logPass.value = "";
}

// select register inputs
let regName = document.querySelector(".register-name");
let regEmail = document.querySelector(".register-email");
let regPass = document.querySelector(".register-pass");

// error message
let errPass = document.querySelector(".register-pass ~ p");
let errName = document.querySelector(".register-name ~ p");
let errEmail = document.querySelector(".register-email ~ p");
let errLogin = document.querySelector(".logBtn ~ p");
let succMsg = document.querySelector(".regBtn ~ p");

// select login inputs
let logMail = document.querySelector(".login-email");
let logPass = document.querySelector(".login-pass");

// select buttons
let logBtn = document.querySelector(".logBtn");
let regBtn = document.querySelector(".regBtn");

// registeration inputs (validation and action)
// name
regName.addEventListener("blur", function (e) {
  validateName(e.target);
});

// email
regEmail.addEventListener("blur", function (e) {
  validateEmail(e.target);
});

// Password
regPass.addEventListener("blur", function (e) {
  validatePass(e.target);
});

// validation function
function validateEmail(x) {
  let regsEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (regsEmail.test(x.value) === true) {
    errEmail.innerHTML = ``;
    return true;
  } else {
    errEmail.innerHTML = `<span> invalid mail <span/>`;
    return false;
  }
}

function validateName(x) {
  let regsName = /[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{1,20}$/;
  if (regsName.test(x.value)) {
    errName.innerHTML = ``;
    return true;
  } else {
    errName.innerHTML = ``;
    errName.innerHTML = `<span> Please start with [A - Z]</span>`;
    return false;
  }
}

function validatePass() {
  var regsPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  if (regsPass.test(regPass.value)) {
    errPass.innerHTML = ``;
    return true;
  } else {
    errPass.innerHTML = `<span>Please use strong password</span>`;
    return false;
  }
}

regBtn.addEventListener("click", function () {
  add();
});

// add function
function add() {
  let user = {
    name: regName.value,
    email: regEmail.value,
    pass: regPass.value,
  };

  if (user.name === "" || user.email === "" || user.pass === "") return;

  if (Data.length === 0) {
    Data.push(user);
    setUsers(Data);
    clear();
    succMsg.innerHTML = `Account created successfully`;
    return;
  }

  if (usersMail.includes(user.email)) {
    errEmail.innerHTML = `<span> this email is already used </span>`;
    return;
  } else {
    errEmail.innerHTML = ``;
    Data.push(user);
    setUsers(Data);
    clear();
    succMsg.innerHTML = `Account created successfully`;
    return;
  }
}

// set and get from localstorage
function setUsers(x) {
  localStorage.setItem("users", JSON.stringify(x));
}

function getUsers() {
  Data = JSON.parse(localStorage.getItem("users"));
}

// login inputs check and action
// email
// logMail.addEventListener("blur", function (e) {
//   //   console.log(e.target.value);
// });

// logPass.addEventListener("blur", function (e) {
//   //   console.log(e.target.value);
// });

logBtn.addEventListener("click", function () {
  if (logMail.value === "" || logPass === "") {
    return;
  } else {
    for (const i of Data) {
      if (i.email === logMail.value && i.pass === logPass.value) {
        // set new key for the currentuser in localstorage
        localStorage.setItem("currentUser", i.name);

        // // set the location to home page after login
        // window.open("https://ammarashraf98.github.io/login-system/home.html");

        // window.open(
        //   "https://ammarashraf98.github.io/login-system/pages/home.html"
        // );
        window.location.replace("home.html");

        errLogin.innerHTML = ``;
        return;
      } else {
        errLogin.innerHTML = `<p class="text-center"> this email or password not valid </p>`;
      }
    }
  }
});


// 
let currentUser = localStorage.getItem("currentUser");

if (currentUser) {
  window.location.replace("home.html");
}
