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
const eventItem = document.querySelectorAll('.event_item');
eventItem.forEach(item => {
    item.onmouseover = (ele) => {
        if (ele.target.classList.contains("event_item")) {
            const row = item.parentNode.parentNode;
            row.querySelector('.fill').classList.remove("fill")
            ele.target.classList.add("fill")
        }
    }
})

// filter card functionality
const filterMenu = document.querySelector('.course_categoties_filter_menu');
const cards = document.querySelectorAll('.course_card');
filterMenu.onclick = (selectedItem) => {
    if (selectedItem.target.classList.contains('filter_item')) {
        filterMenu.querySelector('.active').classList.remove('active');
        selectedItem.target.classList.add('active');
        let filterItem = selectedItem.target.getAttribute('data-filter');

        cards.forEach((card) => {
            const filterClass = []
            const cardItem = card.classList;
            cardItem.forEach(value => { filterClass.push(value) })
            const filterCardCategory = filterClass[filterClass.indexOf(filterItem)]
            if ((filterItem == "all") || (filterItem == filterCardCategory)) {
                cardItem.remove('hide');
                cardItem.add('shown');
            } else {
                cardItem.add('hide');
                cardItem.remove('shown')
            }
        })
    }
}

// click to top button functionality
window.onscroll = () => {
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round(pos * 100 / calcHeight);
    clickToTop_btn.style.background = `conic-gradient(#2b4eff ${scrollValue}%, #edeef3 0%)`;

}
clickToTop_btn.onclick = () => { document.documentElement.scrollTop = 0 }

