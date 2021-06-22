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
    mybutton.style.display = "block";
    mybutton.classList.add('opacity');
  } else {
    mybutton.style.display = "none";
    mybutton.classList.remove('opacity');
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
        loading.textContent = 'loading:'+i+'%'; 
    }
    await sleep(2000);
    for (i; i <= 75; i++) {
        await sleep(20);
        loading.textContent = 'loading:'+i+'%'; 
    }
    await sleep(2000);
    for (i; i < 100 ; i++) {
        await sleep(20);
        loading.textContent = 'loading:'+i+'%'; 
    }
})();