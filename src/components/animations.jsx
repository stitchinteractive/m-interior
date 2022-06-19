// step 1: import
import { gsap } from "gsap"

// step 2: define
gsap.utils.toArray(".animate").forEach(function (e) {
  gsap.from(e, {
    duration: 0.8,
    ease: "power1.out",
    opacity: 0,
    y: 100,
    scrollTrigger: e,
    onComplete: () => console.log(e),
  })
})
