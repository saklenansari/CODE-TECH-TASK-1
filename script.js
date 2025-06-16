gsap.from(".logo", { duration: 1, x: -100, opacity: 0 });
gsap.from(".nav-links li", {
  duration: 1,
  x: 100,
  opacity: 0,
  stagger: 0.2,
  delay: 0.5
});
gsap.from(".hero-text", {
  duration: 1.5,
  y: -50,
  opacity: 0,
  ease: "bounce",
  delay: 1
});
gsap.from("#about", {
  scrollTrigger: "#about",
  duration: 1,
  x: -100,
  opacity: 0
});
gsap.from(".project-card", {
  scrollTrigger: "#projects",
  duration: 1,
  scale: 0.8,
  opacity: 0
});

