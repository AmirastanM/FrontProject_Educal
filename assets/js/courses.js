"use strict";

// sticky header functionality
let lastScrollTop = 20,
    header = document.querySelector("header");
var clickToTop_btn = document.querySelector('.clickToTop_btn');
window.addEventListener("scroll", () => {
    let scrollTop = window.pageYoffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        header.classList.add("sticky");
        clickToTop_btn.classList.add("fade");
    } else {
        header.classList.remove("sticky");
        clickToTop_btn.classList.remove("fade");
    }
})



// add class on hover all the event item
const eventItem = document.querySelectorAll('.event-item');
eventItem.forEach(item => {
    item.onmouseover = (ele) => {
        if (ele.target.classList.contains("event-item")) {
            const row = item.parentNode.parentNode;
            row.querySelector('.fill').classList.remove("fill")
            ele.target.classList.add("fill")
        }
    }
})

