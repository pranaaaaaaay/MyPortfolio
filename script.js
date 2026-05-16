let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = ()=> {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
//================================================================
//~for cursor
var crsr = document.querySelector("#cursor");
var crsr2 = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
    crsr2.style.left = dets.x -40 + "px"
    crsr2.style.top = dets.y -20 + "px"
})



//~for navbar
// gsap.to(".navbar", {
//     backgroundColor: "#000",
//     duaration:0.5,
//     height:"120px",
//     scrollTrigger:{
//         trigger:"#nav",
//         scroller:"body",
//         markers: true,
//         start:"top -10%",
//         end:"top -11%",
//         scrub:3
//     }
// })




//scroll 
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// gsap to animate
gsap.from(".nlink", {
    stagger: .0,
    y: 10,
    duration: 3,
    ease: Power2,
    opacity: 0
})
gsap.from(".myvid", {
    stagger: .2,
    x: 200,
    duration: 2,
    ease: Power3,
    opacity: 0
})

Shery.textAnimate(".naming", {
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1
  });

gsap.from(".imgani", {
    y: 50,
    stagger: .1,
    opacity: 0,
    ease: Power1,
    duration: 1,
})
// gsap.from(".myvid", {
//     z: 100,
//     stagger: .1,
//     opacity: 0,
//     ease: Power2,
//     duration: 2,
// })

Shery.imageEffect("#imgtext img", {
    style: 1,
    // debug: true
})




document.querySelector(".btn")
.addEventListener("mouseover", function(){

})

document.querySelector(".btn")
.addEventListener("mouseleave", function(){
    
})