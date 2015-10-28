/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/


/////////////////
//  Variables  //
/////////////////
var radio1 = document.querySelector('input[value="project"]');
var radio2 = document.querySelector('input[value="stage"]');
var fieldset1 = document.querySelector('#project');
var fieldset2 = document.querySelector('#stage');

/////////////////
//  Functions  //
/////////////////
fieldset1.classList.add('invisible');
fieldset2.classList.add('invisible');

function project() {
    fieldset1.classList.remove('invisible');
    fieldset2.classList.add('invisible');
}

function stage() {
    fieldset2.classList.remove('invisible');
    fieldset1.classList.add('invisible');
}

//  Add Event
radio1.addEventListener('click', project);
radio2.addEventListener('click', stage);
