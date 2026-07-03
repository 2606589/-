const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

if(hamburger){
    hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
    });
}

const fadeElements = document.querySelectorAll(".fade");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
    if(entry.isIntersecting){
    entry.target.classList.add("show");
    }
    });
});

fadeElements.forEach(el=>{
    observer.observe(el);
});