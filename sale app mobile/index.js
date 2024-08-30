// var search = document.querySelector('.search__navbar-hover');
// var searchNavbar =document.querySelector('.search__navbar');
// var headerContainer = document.querySelector('.app_container');
// function showSearch() {
//     searchNavbar.classList.add('open');
// }

// search.addEventListener('click',showSearch);

// console.log(e);
// var moveSlide = document.querySelector('.homepage-slide');
// var slides = document.querySelectorAll('.slide-item');
// var slideItem = slides[0].clientWidth + 44;
// var moveSlideLength = slides.length;
// setInterval(function() {
//     var images = slides;
//     document.querySelector(`slide-img-${i}`)
//     i++;
//     if(i == moveSlideLength)
//     {
//         i = 0;
//     }
// },4000)


var toggleNavbar = document.querySelector('.navbar-toggle');
var navbarItems = document.querySelectorAll('.header__navbar-hover')
var btnClose = document.querySelector('.btn-close')
var navbarList = document.querySelector('.header__navbar-mb0');
var navbarLists = document.querySelector('.header__navbar-list');
var btnNavbar = document.querySelector('.btn-navbar');
var subNavbars = document.querySelectorAll('.sub__navbar');


function showNavbar() {
    if (navbarItems.length > 0) {
        for(var i = 0; i < navbarItems.length; i++)
            navbarItems[i].style = `display: block;`

        toggleNavbar.classList.toggle('active');
        btnClose.classList.remove('active');
        
        navbarList.style = `height: 100%;
        animation: fadeIn ease-in 0.2s, growth ease-in 0.8s`
       
    }
}

function closeNavbar() {
    if (navbarItems.length > 0) {
        for(var i = 0; i < navbarItems.length; i++)
            navbarItems[i].style = `display: none;`

        toggleNavbar.classList.remove('active');
        btnClose.classList.add('active');
        navbarList.style = `height: auto;`
        btnNavbar.classList.add('active');
    }
}

toggleNavbar.addEventListener('click', showNavbar)
btnClose.addEventListener('click', closeNavbar)



// -------------------------
function showSubNavbar() {
    btnNavbar.classList.remove('active');
}

function closeSubNavbar() {
    btnNavbar.classList.add('active');
}

btnNavbar.addEventListener('click',closeSubNavbar)
navbarLists.addEventListener('click', showSubNavbar)




