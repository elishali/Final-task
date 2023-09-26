let btnSideBar = document.querySelector('.btnopen');
let sideBar = document.querySelector('.side-bar');
let btnClose = document.querySelector('.btnClose');
let sideBarSection = document.querySelector('.side-bar-menu-section');


btnSideBar.addEventListener('click', ()=> {
    sideBarSection.classList.add('open');
    sideBar.classList.add('open');
})

btnClose.addEventListener('click', ()=> {
    sideBar.classList.remove('open'); 
    sideBarSection.classList.remove('open');
})


let scrollUpButton = document.getElementById('scrollUpButton');


window.addEventListener('scroll', function() {
  if (window.pageYOffset > 100) {
    scrollUpButton.classList.add('active');
  } else {
    scrollUpButton.classList.remove('active');
  }
});


scrollUpButton.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


document.addEventListener("DOMContentLoaded", function() {
  let swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: '.custom-swiper-button-next',
      prevEl: '.custom-swiper-button-prev',
    },
  });

  let nextButton = document.getElementById('nextButton');
  let prevButton = document.getElementById('prevButton');

  nextButton.addEventListener('click', function() {
    swiper.slideNext();
  });

  prevButton.addEventListener('click', function() {
    swiper.slidePrev();
  });
});


document.addEventListener('DOMContentLoaded', function() {
  let divLeft = document.querySelector('.div-left');
  let divRight = document.querySelector('.div-right');

  setTimeout(function() {
    divLeft.style.width = '0%';
    divRight.style.width = '0%';
  }, 1000);
});


document.addEventListener("DOMContentLoaded", function() {
  var spinner = document.getElementById("spinner");
  setTimeout(function() {
      spinner.style.display = "none";
  }, 1000); 
});