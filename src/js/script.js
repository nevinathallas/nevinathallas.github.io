//Navbar-Script
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
    }else{
        header.classList.remove('navbar-fixed');
    }
}

// Hamburger
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, setting up hamburger menu...');
    const hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('#nav-menu');

    console.log('Hamburger element:', hamburger);
    console.log('Nav menu element:', navMenu);

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function (e) {
            e.preventDefault();
            console.log('Hamburger clicked!');
            
            hamburger.classList.toggle('hamburger-active');
            navMenu.classList.toggle('hidden');
            
            console.log('Hamburger active:', hamburger.classList.contains('hamburger-active'));
            console.log('Nav menu hidden:', navMenu.classList.contains('hidden'));
        });
        
        console.log('Hamburger menu setup successful!');
    } else {
        console.error('Hamburger menu elements not found');
        console.error('Hamburger:', hamburger);
        console.error('Nav menu:', navMenu);
    }
});
