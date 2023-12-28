let user = localStorage.getItem("currentUser");
let logout = document.querySelector(".logout");
// console.log(logout);
console.log(user);

logout.addEventListener("click", function (e) {
  localStorage.removeItem("currentUser");
});

if (user) {
  document.querySelector(".userName").innerText = `${user}`;
} else {
  document.querySelector(".userName").innerText = ``;
  window.location.href = "../index.html";
}
