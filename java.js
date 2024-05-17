// script.js
document.addEventListener('DOMContentLoaded', function() {
    const mainMenu = document.getElementById('main-menu');
    mainMenu.style.display = 'block';
  
    const headerHeight = document.querySelector('header').offsetHeight;
    const menuItems = document.querySelectorAll('#main-menu ul li');
  
    menuItems.forEach((item, index) => {
      item.style.transform = `translateY(${headerHeight}px)`;
      item.style.transition = `transform 0.5s ease ${index * 0.1}s`;
  
      setTimeout(() => {
        item.style.transform = 'translateY(0)';
      }, 500);
    });
  });
  
  for (var i = 0; i < document.links.length; i++) {
    if (document.links[i].href === document.URL) {
        document.links[i].className = 'current';
    }
 }

 let popup = document.getElementById('popup')

function openPopup(){
  popup.classList.add('open-popup')
}

function closePopup(){
  popup.classList.remove('open-popup')
}

