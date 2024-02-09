const me = document.getElementById("me");
const heart = document.getElementById("heart");
console.log("hi");

setInterval(() => {
  me.style["border-color"] = `rgb(${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  //   heart.style.background = `rgb(${Math.floor(
  //     Math.random() * 256
  //   )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  //console.log(me.style);
}, 100);
