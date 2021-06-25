let items = document.querySelectorAll('.carousel .carousel-inner.content6-slider .carousel-item')

items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

const btncontrol = document.querySelectorAll('.ct6 a');
const btn7 = document.querySelectorAll('.content-7 button');
btn7[0].onclick = () =>{
    btn7[0].disabled = true;
    btn7[1].disabled = false;
    btncontrol[0].click();
    btn7[0].setAttribute('id','choosing-7');
    btn7[1].setAttribute('id','notchoose-7');
}
btn7[1].onclick = () =>{
    btn7[1].disabled = true;
    btn7[0].disabled = false;
    btncontrol[1].click();
    btn7[1].setAttribute('id','choosing-7');
    btn7[0].setAttribute('id','notchoose-7');
}
setInterval(() => {
    if(window.innerWidth * 1.0 < 700){
        btncontrol.forEach(e => {
            e.classList.remove('visually-hidden');
        });
    }
    else{
        btncontrol.forEach(e => {
            e.classList.add('visually-hidden');
        });
    }
}, 0);


const nav = document.querySelector('.navbar.d-none.d-lg-block');
const logo = document.querySelector('.navbar-brand.ds img');
const navitems= document.querySelectorAll('.navbar-nav.ds .nav-item .nav-link');
window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if(scroll > 45){ 
        nav.classList.add('fixed-top');
        nav.classList.add('blue');
        for (const i of navitems) {
            i.classList.add('ds');
        }
        logo.setAttribute('src','public/img/logo2.png')
    }
    else{
        nav.classList.remove('fixed-top');
        nav.classList.remove('blue');
        logo.setAttribute('src','public/img/logo1.png')
        for (const i of navitems) {
            i.classList.remove('ds');
        }
    }
});

let mybutton = document.getElementById("myBtn");



// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.classList.remove('opacity');
  } else {
    mybutton.classList.add('opacity');
  }
}


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const ct8 = document.querySelectorAll('.ct8 .col-lg-4');
ct8.forEach(e => {
    e.addEventListener('mouseover', ()=>{
        e.firstElementChild.setAttribute('id','scale');
    })
    e.addEventListener('mouseout', ()=>{
        e.firstElementChild.removeAttribute('id');
    })

});

const sliderct1 = document.querySelector('.slider-main');
const btncontrol_ct1 = document.querySelectorAll('.carousel-fade button.banner-control');

const form = document.querySelectorAll('form');
form.forEach(e =>{
    e.addEventListener('submit',(event)=>{
        if(!e.checkValidity()){
            event.preventDefault()
            event.stopPropagation()
        }
        e.classList.add('was-validated')
    },false)
})

const loader= document.querySelector('.loading');
const loading = document.querySelector('.loader h3');

setTimeout(() => {
    loader.classList.add('hidden2')
    document.querySelector('html').style.overflowY = 'scroll';
}, 10000);


function sleep (ms) { return new Promise(r => setTimeout(r, ms)); }
let i = 0;
(async function slowDemo () {
    for (i = 0; i < 50; i++) {
        await sleep(20);
        loading.textContent = " "+i+'%'; 
    }
    await sleep(2000);
    for (i; i <= 75; i++) {
        await sleep(20);
        loading.textContent = " "+i+'%'; 
    }
    await sleep(2000);
    for (i; i < 100 ; i++) {
        await sleep(20);
        loading.textContent = " "+i+'%'; 
    }
})();
const myCarousel = document.querySelector('.slider-ct11 .slider');
const slider = document.querySelectorAll('.slider-ct11 .slider section');

window.addEventListener("keydown", function(e) {
    if(["ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);


let setWidth = () =>{
    if(window.screen.width > 992){
        myCarousel.style.width = slider[0].offsetWidth*3 + 120 +'px';
    }
    else if(window.screen.width > 600){
        myCarousel.style.width = slider[0].offsetWidth*2 + 80 +'px';
    }
    if(window.screen.width < 600){
        myCarousel.style.width = slider[0].offsetWidth + 40 + 'px';
        slider[0].removeAttribute('style');
        slider[slider.length-1].removeAttribute('style');
    }
}
setInterval(setWidth,500)

const btn11 = document.querySelectorAll('.content-11 button');
btn11[0].setAttribute('id','choosing-7');
btn11[1].setAttribute('id','notchoose-7');

btn11[0].onclick = () =>{
    myCarousel.scrollBy({
        left: -200,
        behavior : "smooth"
    })
    btn11[0].setAttribute('id','choosing-7');
    btn11[1].setAttribute('id','notchoose-7');
}

btn11[1].onclick = () =>{
    myCarousel.scrollBy({
        left: 200,
        behavior : "smooth"
    })
    btn11[1].setAttribute('id','choosing-7');
    btn11[0].setAttribute('id','notchoose-7');
}

const sliderct13 = document.querySelector('.slider-ct13');
const it13 = document.querySelectorAll('.slider-ct13 section');
const btn13 = document.querySelectorAll('.contain button')
const contain = document.querySelector('.content-13')
let setwidth2 = () => {
    if(window.screen.width > 992){
        sliderct13.style.width = it13[0].offsetWidth*3 + 90 + 'px';
    }
    else if(window.screen.width > 600){
        sliderct13.style.width = it13[0].offsetWidth*2 + 60 +'px';
    }
    else{
        sliderct13.style.width = it13[0].offsetWidth + 30 +'px';
    }
}

setInterval(setwidth2, 500);

contain.addEventListener('mouseover',()=>{
    btn13[0].classList.add('hidden');
    btn13[1].classList.add('hidden');
})
contain.addEventListener('mouseout',()=>{
    btn13[0].classList.remove('hidden');
    btn13[1].classList.remove('hidden');
})
btn13[0].onclick = () =>{
    sliderct13.scrollBy({
        left: -10,
        behavior : "smooth"
    })
}

btn13[1].onclick = () =>{
    sliderct13.scrollBy({
        left: 10,
        behavior : "smooth"
    })
}
const btn_controller = document.querySelectorAll('.controller button');
btn_controller.forEach(e => {
    e.addEventListener('click',()=>{
        for (const i of btn_controller) {
            i.removeAttribute('id');
        }
        e.setAttribute('id','choosing13')
    })
})
btn_controller[0].onclick = () =>{
    sliderct13.scrollTo({
        left: 0,
        behavior:'smooth'
    })
}
btn_controller[1].onclick = () =>{
    sliderct13.scrollTo({
        top: 0,
        left: ((it13.length-1)*it13[0].offsetWidth)/3,
        behavior: 'smooth'
    })
}
btn_controller[2].onclick = () =>{
    sliderct13.scrollBy({
        top: 0,
        left: it13.length*it13[0].offsetWidth,
        behavior: 'smooth'
    })
}

// Detect request animation frame
let scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
let elementsToShow = document.querySelectorAll('.show-on-scroll'); 
function loop() {

    Array.prototype.forEach.call(elementsToShow, function(element){
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');
      } else {
        element.classList.remove('is-visible');
      }
    });

    scroll(loop);
}
loop()
let tranUp = document.querySelectorAll('.scroll-on-up')
function tranToUp() {

    Array.prototype.forEach.call(tranUp, function(element){
      if (isElementInViewport(element)) {
        element.classList.remove('tranUp');
        sleep(1000);
      } else {
        element.classList.add('tranUp');
      }
    });

    scroll(tranToUp);
}
tranToUp();

let tranLeft = document.querySelectorAll('.scroll-on-left')
function tranToLeft() {

    Array.prototype.forEach.call(tranLeft, function(element){
      if (isElementInViewport(element)) {
        element.classList.remove('tranLeft');
        sleep(1000);
      } else {
        element.classList.add('tranLeft');
      }
    });
    scroll(tranToLeft);
}
tranToLeft();

let tranRight = document.querySelectorAll('.scroll-on-right')
function tranToRight() {

    Array.prototype.forEach.call(tranRight, function(element){
      if (isElementInViewport(element)) {
        element.classList.remove('tranRight');
        sleep(1000);
      } else {
        element.classList.add('tranRight');
      }
    });
    scroll(tranToRight);
}
tranToRight();
// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  let rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}
const number = document.querySelectorAll('.opeqwe .a h4 h1');
let arr = new Array;
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
function saveNum() {
    number.forEach(e => {
        arr.push(e.textContent);
    });
}