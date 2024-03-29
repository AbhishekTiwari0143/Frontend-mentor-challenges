const data = [
  {
    imageDesktop: "./images/desktop-image-hero-1.jpg",
    imageMobile: "./images/mobile-image-hero-1.jpg",
    title: "Discover innovative ways to decorate",
    subtitle:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    imageDesktop: "./images/desktop-image-hero-2.jpg",
    imageMobile: "./images/mobile-image-hero-2.jpg",
    title: "We are available all across the globe",
    subtitle:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    imageDesktop: "./images/desktop-image-hero-3.jpg",
    imageMobile: "./images/mobile-image-hero-3.jpg",
    title: "Manufactured with the best materials",
    subtitle:
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];

//navigation
const menu = document.querySelector("#menu-open");
const menuClose = document.querySelector("#menu-close");
const navigation = document.querySelector(".navigation");
const overlay = document.querySelector("#overlay");

menu.addEventListener("click", () => {
  navigation.classList.add("show");
  overlay.classList.remove("hidden");
});
menuClose.addEventListener("click", () => {
  navigation.classList.remove("show");
  overlay.classList.add("hidden");
});

//data
const title = document.getElementById("title");
const paragraph = document.getElementById("paragraph");
const imageDesktop = document.getElementById("imageDesktop");
const imageMobile = document.getElementById("imageMobile");
const left = document.getElementById("left");
const right = document.getElementById("right");

let current = 0;

right.addEventListener("click", () => {
  if (current < 2) {
    current++;
  } else {
    current = 0;
  }
  init();
});
left.addEventListener("click", () => {
  if (current === 0) {
    current = 2;
  } else if (current < 3) {
    current--;
  }
  init();
});

const init = () => {
  console.log(data[current]);
  const newImageMobile = data[current].imageMobile;
  const newImageDesktop = data[current].imageDesktop;
  const newTitle = data[current].title;
  const newParagraph = data[current].subtitle;

  title.textContent = newTitle;
  paragraph.textContent = newParagraph;
  imageDesktop.src = newImageDesktop;
  imageMobile.src = newImageMobile;
};

gsap.to("#left", { rotation: 27, x: 50, duration: 1 });
gsap.to("#right", { rotation: 27, x: -50, duration: 1 });
