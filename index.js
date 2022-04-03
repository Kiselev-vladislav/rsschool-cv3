const themeBtn = document.querySelector('.theme__button')
let btnTop = document.querySelector('.btn-go-top')
const burgerBtn = document.querySelector('.burger-btn')


themeBtn.addEventListener("click", function(){ 
    themeBtn.classList.toggle('ligth-theme')
    if(themeBtn.classList.contains('ligth-theme')){
        document.documentElement.style.setProperty('--bg','#F8F0E4' )
        document.documentElement.style.setProperty('--text','#311996' )

    }
    else{
        document.documentElement.style.setProperty('--bg','#1D262D' ) 
        document.documentElement.style.setProperty('--text','#F8F0E4' )
    }
    const moon = document.querySelector('.moon-color')
    moon.classList.toggle('moon-ligth-theme')
    const sun = document.querySelector('.sun')
    sun.classList.toggle('sun-dark-theme')
   
}); 

setInterval(function() {
    if(scrollY < 350){
        btnTop.classList.add('btn-go-top-none')
    }
    else{
        btnTop.classList.remove('btn-go-top-none')
    }
}, 300);


burgerBtn.addEventListener('click', function() {
    let one = document.getElementById("one-line")
    let two = document.getElementById("two-line")
    let three = document.getElementById("three-line")
    let menu = document.querySelector('.menu').classList.toggle('menu-active')
    classAddBurger(one, 'one')
    classAddBurger(two, 'two')
    classAddBurger(three, 'three')


});

function classAddBurger(line, num) {
    if(line.classList.contains(`${num}-line-back`)) {
        line.classList.remove(`${num}-line-back`)
        line.classList.add(`${num}-line-active`)
    }
    else {
        line.classList.remove(`${num}-line-active`)
        line.classList.add(`${num}-line-back`)      
    }
}
