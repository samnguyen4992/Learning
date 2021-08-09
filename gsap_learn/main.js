// // // console.log("its work");
// // // // gsap.from(".pa", {
// // // //   x: 100,
// // // //   y: 400,
// // // //   rotate: 360,
// // // //   //backgroundColor: "red",
// // // //   duration: 1,
// // // //   delay: 0.5,
// // // //   stagger: 0.2,
// // // //   //repeat:2,
// // // //   yoyo: true,
// // // //   ease: "power2.inOut",
// // // //   onComplete: myFunc,
// // // // });

// // // // function myFunc() {
// // // //   console.log("Its finished");
// // // // }
// // // // console.log(gsap.log);

// // // gsap.registerPlugin(ScrollTrigger);

// // // /*
// // // gsap.to(".section", {
// // //   scrollTrigger: {
// // //     trigger: ".section", // selector or element
// // //     start: "top center", // [trigger] [scroller] positions end: "20px 80%", // [trigger] [scroller] positions scrub: true, // or time (in seconds) to delay
// // //     //pin: true, // or selector or element to pin
// // //     //markers: true, // only during development! toggleActions: "play pause resume reset",
// // //     // other actions: complete reverse none
// // //     //anticipatePin: 1, // can help avoid flash
// // //     //snap: 1 / 10, // progress increment
// // //     //pinReparent: true, // moves to documentElement during pin once: true,
// // //   },
// // //   duration: 1,
// // //   delay: 0.5,
// // //   // rotate: 180,
// // //   // stagger: 0.4,
// // // });*/

// // // gsap.set(".stickycontent", { yPercent: -100 });
// // // let main = document.querySelector(".main-container");

// // // ScrollTrigger.create({
// // //   trigger: ".stickycontent",
// // //   start: "top",
// // //   endTrigger: "footer",
// // //   end: "top bottom",
// // //   pin: true,
// // //   // onRefreshInit: (self) =>
// // //   //   (main.style.paddingBottom = self.trigger.offsetHeight + "px"),
// // //   // pinSpacing: false,
// // // });

// // gsap.set(".sticky", { yPercent: -100 });
// // let main = document.querySelector(".main-container");

// // ScrollTrigger.create({
// //   trigger: ".sticky",
// //   start: "bottom bottom",
// //   endTrigger: ".container2",
// //   end: "top bottom",
// //   pin: true,
// //   onRefreshInit: (self) =>
// //     (main.style.paddingBottom = self.trigger.offsetHeight + "px"),
// //   pinSpacing: false,
// // });

// // gsap.set(".sticky2", { yPercent: -100 });
// // let main2 = document.querySelector(".container2");

// // ScrollTrigger.create({
// //   trigger: ".sticky2",
// //   start: "bottom bottom",
// //   endTrigger: "footer",
// //   end: "top bottom",
// //   pin: true,
// //   onRefreshInit: (self) =>
// //     (main2.style.paddingBottom = self.trigger.offsetHeight + "px"),
// //   pinSpacing: true,
// // });

// let triggerHeight = document.querySelector("#trigger2");
// let triggerHeight2 = document.querySelector("#trigger3");

// gsap.to("#animate2", {
//   y: triggerHeight.offsetHeight,
//   ease: "none",
//   scrollTrigger: {
//     trigger: "#trigger2",
//     start: "top bottom",
//     end: "bottom bottom",
//     scrub: true,
//     //markers: true,
//     id: "scrub",
//   },
// });
// gsap.to("#animate3", {
//   y: triggerHeight2.offsetHeight,
//   ease: "none",
//   scrollTrigger: {
//     trigger: "#trigger3",
//     start: "top bottom",
//     end: "bottom bottom",
//     scrub: true,
//     //markers: true,
//     id: "scrub2",
//   },
// });

gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger.create({
//   trigger: "#darkGrey",
//   start: "-500",
//   end: "bottom bottom",
//   //markers: true,
//   toggleClass: { targets: "#sticky2", className: "active" },
// });
// ScrollTrigger.create({
//   trigger: "#darkGrey",
//   start: "bottom bottom",
//   endTrigger: "#green",
//   end: "bottom bottom",
//   //markers: true,
//   toggleClass: { targets: "#sticky", className: "active" },
// });
// ScrollTrigger.create({
//   trigger: "#green",
//   start: "bottom bottom",
//   endTrigger: "footer",
//   end: "bottom bottom",
//   //markers: true,
//   toggleClass: { targets: "#sticky3", className: "active" },
// });

//'[id="something[' + id + ']"]'

function scrollcreate(val, end, sticky) {
  ScrollTrigger.create({
    trigger: "#" + val + "",
    start: "bottom bottom",
    endTrigger: "#" + end + "",
    end: "bottom bottom",
    //markers: true,
    toggleClass: { targets: "#" + sticky + "", className: "active" },
  });
  console.log(val, end, sticky);
  console.log(val);
  console.log(typeof ("" + val + ""));
}

//document.addEventListener("scroll", scrollcreate("green", "footer", "sticky3"));

scrollcreate("darkGrey", "green", "sticky");
scrollcreate("header", "darkGrey", "sticky2");
scrollcreate("green", "black", "sticky3");
//scrollcreate("darkGrey", "darkGrey", "sticky2");
let btn = document.querySelector("#clickbtn");
btn.addEventListener("click", (e) => {
  console.log(e.currentTarget);
  console.log({ e });
});
