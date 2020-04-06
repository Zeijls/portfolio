document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

var header =  document.getElementById('intro')
var menu =  document.getElementById('menu')

window.addEventListener('scroll', function(e) {
  var offsetTop = header.getBoundingClientRect().top

  if (offsetTop > -1) {
    menu.classList.remove('scrollActive')
  } else {
    menu.classList.add('scrollActive')
  }
});

var menuItems = document.getElementsByClassName('menu-item')
console.log(menuItems)

for(var i = 0; i < menuItems.length; i++) {
  //menuItems[i].classList.remove('active')

  menuItems[i].addEventListener('click', function(el) {

    for(var b = 0; b < menuItems.length; b++) {
      menuItems[b].classList.remove('active')
    }
    el.target.parentElement.classList.add('active')
  })
}

var fadeOne =  document.getElementById('fadeIn')

function fade() {
  setTimeout(function(){
    fadeOne.classList.add('fade')
  }, 800);
}

fade()
