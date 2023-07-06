window.addEventListener("scroll", ()=>{
    var navbar = document.querySelector("nav");
    if(window.scrollY === 0){
        navbar.classList.remove("StickyNavBar");
        navbar.classList.add("nonStickyNavBar");
    }
    else{
        navbar.classList.remove("nonStickyNavBar");
        navbar.classList.add("StickyNavBar");
    }
})
