var tl = gsap.timeline()

tl.to("#yellow1", {
    top:"-100%",
    delay:0.5,
    duration:0.5,
    ease:"expo.out"
})

tl.to("#loader video",{
    top:"-120%",
    delay:0.5,
    duration:0.5,
    ease:"expo.out"
}, "anim")

tl.to("#loader h1", {
    delay:0.2,
    duration:0.5,
    color:"black"
}, "anim")

tl.to("#loader", {
    display:"none"
})

document.getElementById('arow').addEventListener('click', function(event) {
    event.preventDefault(); 
    const targetSection = document.getElementById('page2');
    targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start' 
    });
});

var elems = document.querySelectorAll(".elem")
var page2 = document.querySelector("#page2")
elems.forEach(function(ele){
    ele.addEventListener("mouseenter", function(){
        var bgimg = ele.getAttribute("data-img");
        page2.style.backgroundImage = `url(${bgimg})`
    });
    ele.addEventListener("mouseleave", function(){
        page2.style.color = "black";
    });
})

document.getElementById('up').addEventListener('click', function(event) {
    event.preventDefault(); 
    const targetSection = document.getElementById('page1');
    targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start' 
    });
});
