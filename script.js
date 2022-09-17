const primNav = document.querySelector('.primary_navigation');
const navBtn = document.querySelector('.nav_button');

navBtn.addEventListener('click', function() {
  let visibility = primNav.getAttribute('data-visible');

  if (visibility == 'false') {
    primNav.setAttribute('data-visible', true);
    navBtn.setAttribute('aria-expanded', true);
  } else if (visibility == 'true') {
    primNav.setAttribute('data-visible', false);
    navBtn.setAttribute('aria-expanded', false);
  }
})

const destMenuLi = document.querySelectorAll('.dest_menu_li');
const tab = document.querySelectorAll('.tab');

destMenuLi.forEach(item => {
  item.addEventListener('click', function() {
    tab.forEach(item => {
      item.setAttribute('data-visible', false);
    })
    
    let openTab = document.querySelector('#' + this.getAttribute('aria-controls'));
    console.log(openTab);
    openTab.setAttribute('data-visible', true);
  })
})

const manuDot = document.querySelectorAll('.manual_dot');
const swipCard = document.querySelectorAll('.swiper_card');
manuDot.forEach(item => {
  item.addEventListener('click', function () {
    swipCard.forEach(item => {
      item.setAttribute('data-slider', false);
    })
    manuDot.forEach(item => {
      item.setAttribute('aria-expanded', false);
    })

    let openCard = document.querySelector('#' + this.getAttribute('aria-controls'));
    console.log(openCard);
    
    openCard.setAttribute('data-slider', true);
    this.setAttribute('aria-expanded', true);
  });
});