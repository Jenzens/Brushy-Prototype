$(document).ready(function(){
    $('.menu-toggler').click(function(){
        $('nav').toggleClass('active')
    })
})


$(window).scroll(function(){
    $('header').toggleClass('scrolled',
        $(this).scrollTop() > 700);
});


$(window).scroll(function(){
    $('nav').toggleClass('scrolled',
        $(this).scrollTop() > 700);
});

// hamburger animation toggle
const navSlide = () => {
   const menutoggle = document.querySelector('.menu-toggler');
   const nav = document.querySelector('.nav-links');
   const navLinks = document.querySelectorAll('.nav-links li');

   // Toggle nav
   menutoggle.addEventListener('click', () => {
       nav.classList.toggle('nav-links-active');

       // Animate links
       navLinks.forEach((link, index) => {
           if(link.style.animation){
                link.style.animation = ''
           }
           else{
               link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 }s`;
           }
       });
       // Menu toggle Animation
       menutoggle.classList.toggle('menuButton');
   });
}

navSlide();
