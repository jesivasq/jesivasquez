// turn the gear
let gear = document.getElementById("gear");
gsap.to(gear, {
  rotate: 360,
  duration: 4,
  repeat: -1,
  yoyo: true,
  ease: "power2.inOut",
});

let jesi = document.getElementById("jesi");
gsap.from(jesi, { y: -500, duration: 2, delay: 1.5, ease: "bounce.out" });

let vasquez = document.getElementById("vasquez");
gsap.from(vasquez, {
  x: -500,
  duration: 2,
  ease: "elastic.out",
});
