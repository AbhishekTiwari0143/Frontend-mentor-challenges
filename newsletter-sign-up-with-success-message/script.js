const errorMsg = document.getElementById("error-msg");

const loginPage = document.querySelector(".loginPage");
const success = document.querySelector(".success");
const dismiss = document.getElementById("dismiss");

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

const submitform = () => {
  const input = document.getElementById("userInput");

  const value = input.value.trim();

  if (value.length === 0 || !value.includes("@") || !value.includes(".")) {
    errorMsg.classList.remove("hidden");
    input.classList.add("error");
  } else {
    loginPage.classList.add("hidden");
    success.classList.remove("hidden");
  }
};

dismiss.addEventListener("click", () => {
  loginPage.classList.remove("hidden");
  success.classList.add("hidden");
});
