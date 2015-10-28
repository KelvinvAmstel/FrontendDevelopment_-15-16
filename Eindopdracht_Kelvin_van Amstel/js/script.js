/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/


/////////////////
//  Variables  //
/////////////////
var radio1 = document.querySelector('input[value="project"]');
var radio2 = document.querySelector('input[value="stage"]');
var fieldset1 = document.querySelector('#project');
var fieldset2 = document.querySelector('#stage');
var nav = document.querySelector('nav');
var menu = document.querySelectorAll('h2');
var secondWidth= window.matchMedia("(max-width: 800px)");
var thirdWidth= window.matchMedia("(max-width: 600px)");

/////////////////
//  Functions  //
/////////////////
menu[0].classList.add('invisible');

if (fieldset1 == null){
    console.log('geen fieldset gevonden');
} else {
    fieldset1.classList.add('invisible');
    fieldset2.classList.add('invisible');
}

function project() {
    fieldset1.classList.remove('invisible');
    fieldset2.classList.add('invisible');
}

function stage() {
    fieldset2.classList.remove('invisible');
    fieldset1.classList.add('invisible');
}

//width menu smaller then 801px
if (secondWidth.matches || thirdWidth.matches) {
    nav.classList.add('invisible');
    menu[0].classList.remove('invisible');
    menu[0].classList.add('h2');
}

function show(){
    if(nav.classList == 'invisible') {
        nav.classList.remove('invisible');
    } else {
        nav.classList.add('invisible');
    }
}

//  Add Event
if (fieldset1 == null){
    console.log('Geen radio button gevonden');
} else {
    radio1.addEventListener('click', project);
    radio2.addEventListener('click', stage);
}

menu[0].addEventListener('click', show);
