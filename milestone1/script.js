"use strict";
//------------ref_section--------------
let ref_section = document.getElementById('ref');
let ref_btn = document.getElementById('ref_btn');
ref_btn?.addEventListener('click', () => {
    ref_section.classList.toggle('hide');
});
//-------------exp_section---------------
let exp_section = document.getElementById('experience');
let exp_btn = document.getElementById('exp_btn');
exp_btn?.addEventListener('click', () => {
    exp_section.classList.toggle('hide');
});
//-------------lan_section---------------
let lan_section = document.getElementById('language');
let lan_btn = document.getElementById('lan_btn');
lan_btn?.addEventListener('click', () => {
    lan_section.classList.toggle('hide');
});
//-------------ski_section---------------
let ski_section = document.getElementById('skills');
let ski_btn = document.getElementById('ski_btn');
ski_btn?.addEventListener('click', () => {
    ski_section.classList.toggle('hide');
});
//-------------edu_section---------------
let edu_section = document.getElementById('education');
let edu_btn = document.getElementById('edu_btn');
edu_btn?.addEventListener('click', () => {
    edu_section.classList.toggle('hide');
});
//-------------con_section---------------
let con_section = document.getElementById('contact');
let con_btn = document.getElementById('con_btn');
con_btn?.addEventListener('click', () => {
    con_section.classList.toggle('hide');
});
//-------------print_section-----------
let print_btn = document.getElementById('print_btn');
print_btn?.addEventListener('click', () => {
    window.print();
});
