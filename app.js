new fullpage('#fullpage', {
    licenseKey: "E93821A7-DCC6411A-80E0572D-93519C84",
    menu: "#menu",
    anchors: ['home', 'about', 'offers', 'contact'],
    autoScrolling: true,
    navigation: true,
    slidesNavigation: true,
    scrollingSpeed: 1500,
})

window.addEventListener('resize', () => {
    console.log("hey" + window.innerWidth)
    if (window.innerWidth < 2000) {
        const cards = document.getElementsByClassName("card");
        $('.card').addClass('slide')
    }
  });


document.addEventListener('resize, ready', () => {

    cards = document.getElementsByClassName('card');


  window.resize(resize).trigger('resize');
});

const nav = document.querySelector('#menu');
const burger = document.querySelector('.burger');
const links = nav.querySelectorAll('a');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
    burger.classList.toggle('toggle');
});

links.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.toggle('nav-open');
        burger.classList.toggle('toggle');
    });
});