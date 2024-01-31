const input = document.getElementById("input");
const error = document.getElementById("error");
const success = document.getElementById("success");
const que = document.getElementById("que");
const button = document.getElementById("login-button");

button.addEventListener("click", () => {
  console.log();
  const val = input.value;
  if (val.includes("@") && val.includes(".com")) {
    que.classList.add("hidden");
    error.classList.add("hidden");
    success.classList.remove("hidden");
  } else if (val.trim() === "") {
    que.classList.remove("hidden");
  } else {
    que.classList.add("hidden");
    success.classList.add("hidden");
    error.classList.remove("hidden");
  }
  input.value = "";
});
