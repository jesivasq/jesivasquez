let gear = document.getElementById("gear");

gsap.to(gear, { rotate: 360, duration: 4, repeat: -1, yoyo: true, ease: "power2.inOut" });
