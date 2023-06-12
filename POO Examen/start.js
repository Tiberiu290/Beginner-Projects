const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');


//Button

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//counter

let counter = 1;
const size = carouselImages[0].clientWidth;


carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Button Listeners

nextBtn.addEventListener('click', ()=> {
    
    if(counter >= carouselImages.length -1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter ++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

prevBtn.addEventListener('click', ()=> {
    if(counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter --;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length -2 ;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter ;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    
})



var balloon = document.getElementById("balloon");

// Obține dimensiunile containerului
var containerWidth = document.getElementById("balloon-container").offsetWidth;
var containerHeight = document.getElementById("balloon-container").offsetHeight;

// Funție pentru generarea unei poziții aleatoare în cadrul containerului
function generateRandomPosition() {
  var randomX = Math.floor(Math.random() * (containerWidth - balloon.offsetWidth));
  var randomY = Math.floor(Math.random() * (containerHeight - balloon.offsetHeight));
  return { x: randomX, y: randomY };
}

// Funție pentru actualizarea poziției balonului
function updateBalloonPosition() {
  var randomPosition = generateRandomPosition();
  balloon.style.left = randomPosition.x + "px";
  balloon.style.top = randomPosition.y + "px";
}

// Actualizează inițial poziția balonului
updateBalloonPosition();


// Funcție pentru a sparge balonul
function popBalloon() {
    balloon.style.display = "none";
    alert("JavaScript Power");
  }
  
  balloon.addEventListener("click", popBalloon);



// Actualizează poziția balonului la fiecare 3 secunde
setInterval(function() {
  updateBalloonPosition();
}, 1000);
