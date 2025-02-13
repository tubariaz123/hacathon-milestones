"use strict";
let myName = localStorage.getItem("name");
window.addEventListener('load', () => {
    let name = localStorage.getItem("name");
    let desig = localStorage.getItem("desig");
    let phone = localStorage.getItem("phone");
    let email = localStorage.getItem("email");
    let address = localStorage.getItem("address");
    let pass = localStorage.getItem("pass");
    let deg = localStorage.getItem("deg");
    let uni = localStorage.getItem("uni");
    let skill1 = localStorage.getItem("skill1");
    let skill2 = localStorage.getItem("skill2");
    let skill3 = localStorage.getItem("skill3");
    let lang1 = localStorage.getItem("lang1");
    let lang2 = localStorage.getItem("lang2");
    let styear = localStorage.getItem("styear");
    let endyear = localStorage.getItem("endyear");
    let company = localStorage.getItem("company");
    let comlocation = localStorage.getItem("comlocation");
    let jobTitle = localStorage.getItem("jobTitle");
    let achiev1 = localStorage.getItem("achiev1");
    let achiev2 = localStorage.getItem("achiev2");
    let achiev3 = localStorage.getItem("achiev3");
    let picture = localStorage.getItem("profile_pic");
    let resName = document.getElementById('resName');
    resName.textContent = myName;
    let resDesig = document.getElementById('resDesig');
    resDesig.textContent = desig;
    let resPhone = document.getElementById('resPhone');
    resPhone.textContent = phone;
    let resEmail = document.getElementById('resEmail');
    resEmail.textContent = email;
    let resAddress = document.getElementById('resAddress');
    resAddress.textContent = address;
    let resPass = document.getElementById('resPass');
    resPass.textContent = pass;
    let resDegree = document.getElementById('resDegree');
    resDegree.textContent = deg;
    let resUni = document.getElementById('resUni');
    resUni.textContent = uni;
    let resSkill1 = document.getElementById('resSkill1');
    resSkill1.textContent = skill1;
    let resSkill2 = document.getElementById('resSkill2');
    resSkill2.textContent = skill2;
    let resSkill3 = document.getElementById('resSkill3');
    resSkill3.textContent = skill3;
    let resLang1 = document.getElementById('resLang1');
    resLang1.textContent = lang1;
    let resLang2 = document.getElementById('resLang2');
    resLang2.textContent = lang2;
    let resStyear = document.getElementById('resStyear');
    resStyear.textContent = styear;
    let resEndyear = document.getElementById('resEndyear');
    resEndyear.textContent = endyear;
    let resCompany = document.getElementById('resCompany');
    resCompany.textContent = company;
    let resComLocation = document.getElementById('resComLocation');
    resComLocation.textContent = comlocation;
    let resJobTitle = document.getElementById('resJobTitle');
    resJobTitle.textContent = jobTitle;
    let resAchiev1 = document.getElementById('resAchiev1');
    resAchiev1.textContent = achiev1;
    let resAchiev2 = document.getElementById('resAchiev2');
    resAchiev2.textContent = achiev2;
    let resAchiev3 = document.getElementById('resAchiev3');
    resAchiev3.textContent = achiev3;
    let resImg = document.getElementById('resImg');
    resImg.src = picture;
});
//-------------print_section-----------
let print_btn = document.getElementById('print_btn');
print_btn?.addEventListener('click', () => {
    window.print();
});
//---------------edit-btn------------
let edit_btn = document.getElementById('edit_btn');
edit_btn?.addEventListener("click", () => {
    window.history.back();
});
//---------------share-btn------------
let share_btn = document.getElementById('share_btn');
let userName;
let anc = document.getElementById("anc");
if (myName) {
    myName.toLowerCase().replace(/\s+/g, "-");
}
else {
    userName = "user";
}
let baseUrl = "file:///D:/MyHackathon/milestone-5/resume/resume.html";
let uniqueUrl = `${baseUrl}?/${myName}`;
share_btn?.addEventListener("click", () => {
    anc?.setAttribute("href", uniqueUrl);
});
//------------copy link btn-------
let copy_btn = document.getElementById('copy_btn');
copy_btn?.addEventListener("click", () => {
    navigator.clipboard.writeText(uniqueUrl).then(() => {
        alert("copy done");
    });
});
