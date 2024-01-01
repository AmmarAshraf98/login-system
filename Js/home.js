let user = localStorage.getItem("currentUser");
let logout = document.querySelector(".logout");

logout.addEventListener("click", function (e) {
  localStorage.removeItem("currentUser");
});

if (user) {
  document.querySelector(".userName").innerText = `${user}`;
} else {
  window.location.href = "../index.html";
  document.querySelector(".userName").innerText = ``;
}
