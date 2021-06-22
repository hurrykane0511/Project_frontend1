const myCarousel = document.querySelector('.slider-ct11 .slider');
const slider = document.querySelectorAll('.slider-ct11 .slider section');

window.addEventListener("keydown", function(e) {
    if(["ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);


let setWidth = () =>{
    slider[0].setAttribute('style','margin-left: 0px');
    slider[slider.length-1].setAttribute('style','margin-right: 0px');
    if(window.screen.width > 992){
        myCarousel.style.width = slider[0].offsetWidth*3 + 80 +'px';
    }
    else if(window.screen.width > 600){
        myCarousel.style.width = slider[0].offsetWidth*2 + 20 +'px';
    }
    else{
        myCarousel.style.width = slider[0].offsetWidth+ +'px';
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
    it13[0].setAttribute('style','margin-left: 0px');
    it13[it13.length-1].setAttribute('style','margin-right: 0px');
    if(window.screen.width > 992){
        sliderct13.style.width = it13[0].offsetWidth*3 + 60 + 'px';
    }
    else if(window.screen.width > 600){
        sliderct13.style.width = it13[0].offsetWidth*2 + 20 +'px';
    }
    else{
        sliderct13.style.width = it13[0].offsetWidth+ +'px';
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
        left: -200,
        behavior : "smooth"
    })
}

btn13[1].onclick = () =>{
    sliderct13.scrollBy({
        left: 200,
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
    sliderct13.scrollBy({
        top: 0,
        left: (it13.length*it13[0].offsetWidth)/2,
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