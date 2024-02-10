const wrapper = document.querySelector(".wrapper"); // why the fuck did I do it like this? ikd
let yes = document.getElementById("yesbtn");
let no = document.getElementById("nobtn");
let arrow = document.getElementById("arrow");
const initialBorderWidth = 4;
const initialWidth = 70;
const initialFontSize = 8;

let n = 0;

const wrapperRect = wrapper.getBoundingClientRect();
let noBtnRect = no.getBoundingClientRect();

yes.addEventListener("click", () => {
  window.location.href = "../ty.html";
});

no.addEventListener("mouseover", () => {
  n++;
  const x =
    Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
  const y =
    Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
  no.style.left = x + "px";
  no.style.top = y + "px";
  no.style.opacity = 1 - n / 20;
  if (no.style.opacity >= 0) {
    yes.style.borderWidth = initialBorderWidth + n + "px";
    yes.style.fontSize = initialFontSize + n * 5 + "px";
    yes.style.width = initialWidth + n * 10 + "px";
    arrow.style.marginLeft = -320 - n * 12 + "px"; // hard coding bc I can't be fucking bothered
    arrow.style.fontSize = 30 + 5 * n + "px"; // it's 3 in the morning
    arrow.style.opacity = n / 20;
  }
});
