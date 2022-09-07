const NAV = document.getElementById('main-navbar');
// console.log(NAV.getAttribute('class'));
console.log(NAV.classList);

// NAV.classList.add('scrolled');

document.addEventListener('scroll', (e) => {
  //   console.log(scrollY);
  if (scrollY >= 100) {
    console.log(scrollY);
    NAV.classList.add('scrolled');
  } else if (NAV) {
    NAV.classList.remove('scrolled');
  }
});
