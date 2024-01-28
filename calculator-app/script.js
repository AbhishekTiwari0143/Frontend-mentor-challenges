const buttonBall = document.getElementById("button-ball");
const body = document.querySelector("body");
const Button = document.querySelector(".theme-button");

let val = 1;

Button.addEventListener("click", () => {
  if (buttonBall.classList.contains("position-1")) {
    buttonBall.classList.remove("position-1");
    buttonBall.classList.add("position-2");
    body.className = "theme-2";

    // val = 2;
  } else if (buttonBall.classList.contains("position-2")) {
    buttonBall.classList.remove("position-2");

    buttonBall.classList.add("position-3");
    body.className = "theme-3";
    // val = 3;
  } else {
    buttonBall.classList.remove("position-3");
    buttonBall.classList.add("position-1");
    body.className = "";
    // val = 1;
  }

  // switch (val) {
  //   case 1:
  //     body.className = ""; // default theme
  //     break;
  //   case 2:
  //     body.className = "theme-2";
  //     break;
  //   case 3:
  //     body.className = "theme-3";
  //     break;
  // }
});

const buttonsContainer = document.querySelector(".keys");
const screen = document.getElementById("screen");

console.log(screen.value);

buttonsContainer.addEventListener("click", (e) => {
  if (screen.value === "0") {
    screen.value = "";
  }
  if (e.target != buttonsContainer) {
    const value = e.target.innerText;
    console.log(e.target.textContent);
    console.log(value);
    switch (value) {
      case "DEL":
        screen.value = screen.innerText.slice(0, -1);
        break;
      case "RESET":
        screen.value = "0";
        break;
      case "=":
        try {
          screen.value = eval(screen.value.replace(/x/g, "*"));
        } catch (error) {
          screen.value = "Error";
        }
        break;
      default:
        screen.value += value;
        break;
    }
  }
});
