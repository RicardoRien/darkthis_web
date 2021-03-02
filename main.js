const mobileBtn = document.getElementById('mobile-cta');
const nav = document.querySelector('NAV');
const mobileBtnExit = document.getElementById('mobile-exit');
const checkbox = document.querySelector('input[name=theme-switch]');
const mainButton = document.querySelector('.primary-cta');

// ---- Mobile Navbar ----
mobileBtn.addEventListener('click', () => {
  nav.classList.add('menu-btn')
});

mobileBtnExit.addEventListener('click', () => {
  nav.classList.remove('menu-btn')
});

// ... Encapsulando.
function darkMode() {
    document.documentElement.setAttribute('data-theme', 'dark');
    setTimeout(() => {
      document.querySelector('.hero-img').src = "images/undraw_lost_online_red.svg"
    }, 150);
    checkbox.checked = true;
    localStorage.setItem('theme', 'dark');
    localStorage.setItem('image', 'images/undraw_lost_online_red.svg');
}

function lightMode() {
    document.documentElement.setAttribute('data-theme', 'light');
    setTimeout(() => {
      document.querySelector('.hero-img').src = "images/undraw_lost_online_wqob.svg"
    }, 150);
    checkbox.checked = false;    
    localStorage.setItem('theme', 'light');
    localStorage.setItem('image', 'images/undraw_lost_online_wqob.svg');
}


// ~~~~ LocalStorage ~~~~

const theme = localStorage.getItem('theme');
const themeSwitch = localStorage.getItem('themeSwitch');
const image = localStorage.getItem('image');

if (theme) {
  document.documentElement.setAttribute('data-theme', theme);
  checkbox.setAttribute('checked', themeSwitch);
  document.querySelector('.hero-img').setAttribute('src', image);
} if(theme === 'light') {
  checkbox.removeAttribute('checked');
}

// ~~~~ Dark / Light Mode ~~~~

checkbox.addEventListener('change', function() {
    this.checked ? darkMode() : lightMode()
});

mainButton.addEventListener('click', function (event) {

  event.preventDefault();

  document.documentElement.getAttribute('data-theme') === 'light' ? darkMode() : lightMode();
})