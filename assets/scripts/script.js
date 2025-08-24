// script.js

// offline loader
  function showOfflineError() {
    document.querySelector('form').innerHTML = '<div style="color:#fff;background:#f44336;padding:2em;text-align:center;border-radius:8px;">No internet connection detected. Please check your connection and try again.</div>';
  }

  function checkConnection() {
      if (!navigator.onLine) showOfflineError();
  }
  window.addEventListener('load', checkConnection);
  window.addEventListener('online', function() {
      location.reload();
  });
  window.addEventListener('offline', showOfflineError);



// responsive navigation
'use strict';

// Close nav when clicking outside
document.addEventListener('DOMContentLoaded', function() {
  const elemToggleFunc = function (elem) {elem.classList.toggle('active');}

  const navbar = document.querySelector('nav');
  const navbarOpenBtn = document.querySelector('.open-menu');
  const navbarCloseBtn = document.querySelector('.close-menu');

  navbarOpenBtn.addEventListener('click', function () {
      elemToggleFunc(navbar);
  });

  navbarCloseBtn.addEventListener('click', function () {
      elemToggleFunc(navbar);
  });

  if (navbar) {
    document.addEventListener('click', function(e) {
      if (navbar.classList.contains('active')) if (!navbar.contains(e.target) && !navbarOpenBtn.contains(e.target)) navbar.classList.remove('active');
    });
    // Prevent nav from closing when clicking inside nav
    navbar.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  }
});

//Go Top button Pop up
const goTopBtn = document.querySelector(".go-top");

window.addEventListener("scroll", function() {
    if(this.window.scrollY >= 500 ) goTopBtn.classList.add('visible');
    else goTopBtn.classList.remove('visible');
});
