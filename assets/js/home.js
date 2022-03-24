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
gsap.from(jesi, { y: -500, duration: 2, ease: "bounce.out" });

let vasquez = document.getElementById("vasquez");
gsap.to(vasquez, {
  y: 15,
  duration: 0.15,
  delay: 0.75,
  repeat: 1,
  yoyo: true,
  ease: "power2.out",
});
