let typing = new Typed(".animate", {
    strings: [
      "Eu sou uma",
      "Curiosa",
      "Desenvolvedora Front-End",
      "Curiosa",
      "Apreciadora de UX/UI",
      "Apaixonada por desenvolvimento web",
    ],
    typeSpeed: 120,
    backSpeed: 70,
    loop: true,
  });
  
  let btn = document.querySelector("#back-to-top");
  
  btn.addEventListener("click", function () {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  });