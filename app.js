const togglebell = document.querySelector('#mobile-menu');
const menulinks = document.querySelector('.navbar_menu');
const navlogo = document.querySelector('#logo');

//display mobile menu
const mobileMenu = () => {
    togglebell.classList.toggle('is-active');
    menulinks.classList.toggle('active');
}

togglebell.addEventListener('click', mobileMenu);

//show active menu when acrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homemenu = document.querySelector('#home-page');
    const aboutmenu = document.querySelector('#about-page');
    const servicesmenu = document.querySelector('#service-page');
    let scrollPos = window.scrollY;
    // console.log(scrollPos);
    // adds bottom border while we scroll to menu items
    if(window.innerWidth > 960 && scrollPos < 600){
        homemenu.classList.add('highlight');
        aboutmenu.classList.remove('highlight');
        return;
    }else if (window.innerWidth > 960 && scrollPos < 1400){
        aboutmenu.classList.add('highlight');
        homemenu.classList.remove('highlight');
        servicesmenu.classList.remove('highlight');
        return;
    }
    else if (window.innerWidth > 960 && scrollPos < 2345){
        servicesmenu.classList.add('highlight');
        aboutmenu.classList.remove('highlight');
        return;
    }
    if((elem && window.innerWidth<960 && scrollPos <600 )|| elem){
        elem.classList.remove('highlight');
    }
}

window.addEventListener('scroll' , highlightMenu);
window.addEventListener('click' , highlightMenu);

const hidemenu = () => {
    const menuBars = document.querySelector('.is-active');
    if(window.innerWidth <= 760 && menuBars){
        togglebell.classList.toggle('is-active');
        menulinks.classList.remove('active');
    }
}

menulinks.addEventListener('click' , hidemenu);
navlogo.addEventListener('click' , hidemenu);