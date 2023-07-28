// navbar

hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
    navBar = document.querySelector(".nav-bar-links");
    navBar.classList.toggle("active");
}


// core values

const accodion = document.getElementsByClassName('contentBx');

for (i = 0; i<accodion.length; i++){
  accodion[i].addEventListener('click', function(){
    this.classList.toggle('active')
  })
}

