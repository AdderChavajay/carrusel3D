let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let box = document.querySelector(".box");

let grados = 0;

prev.addEventListener("click", () => {
  grados += 45;
  box.style = `transform: perspective(1000px) rotateY(${grados}deg);`;
});

next.addEventListener("click", () => {
  grados -= 45;
  box.style = `transform: perspective(1000px) rotateY(${grados}deg);`;
});
