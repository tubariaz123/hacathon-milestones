window.addEventListener('load', () => {

    let name = localStorage.getItem("name")
    let desig = localStorage.getItem("desig")
    let phone = localStorage.getItem("phone")
    let email = localStorage.getItem("email")
    let address = localStorage.getItem("address")
    let pass = localStorage.getItem("pass")
    let deg = localStorage.getItem("deg")
    let uni = localStorage.getItem("uni")
    let skill1 = localStorage.getItem("skill1")
    let skill2 = localStorage.getItem("skill2")
    let skill3 = localStorage.getItem("skill3")
    let lang1 = localStorage.getItem("lang1")
    let lang2 = localStorage.getItem("lang2")
    let styear = localStorage.getItem("styear")
    let endyear = localStorage.getItem("endyear")
    let company = localStorage.getItem("company")
    let comlocation = localStorage.getItem("comlocation")
    let jobTitle = localStorage.getItem("jobTitle")
    let achiev1 = localStorage.getItem("achiev1")
    let achiev2 = localStorage.getItem("achiev2")
    let achiev3 = localStorage.getItem("achiev3")
    let picture = localStorage.getItem("profile_pic")




    let resName:any = document.getElementById('resName')
    resName.textContent = name


    let resDesig:any = document.getElementById('resDesig')
    resDesig.textContent = desig

    let resPhone:any = document.getElementById('resPhone')
    resPhone.textContent = phone


    let resEmail:any = document.getElementById('resEmail')
    resEmail.textContent = email
    
    let resAddress:any = document.getElementById('resAddress')
    resAddress.textContent = address

    let resPass:any = document.getElementById('resPass')
    resPass.textContent = pass

    let resDegree:any = document.getElementById('resDegree')
    resDegree.textContent = deg

    let resUni:any = document.getElementById('resUni')
    resUni.textContent = uni

    let resSkill1:any = document.getElementById('resSkill1')
    resSkill1.textContent = skill1

    let resSkill2:any = document.getElementById('resSkill2')
    resSkill2.textContent = skill2

    let resSkill3:any = document.getElementById('resSkill3')
    resSkill3.textContent = skill3

    let resLang1:any = document.getElementById('resLang1')
    resLang1.textContent = lang1

    let resLang2:any = document.getElementById('resLang2')
    resLang2.textContent = lang2

    let resStyear:any = document.getElementById('resStyear')
    resStyear.textContent = styear
    
    let resEndyear:any = document.getElementById('resEndyear')
    resEndyear.textContent = endyear

    let resCompany:any = document.getElementById('resCompany')
    resCompany.textContent = company

    let resComLocation:any = document.getElementById('resComLocation')
    resComLocation.textContent = comlocation

    let resJobTitle:any = document.getElementById('resJobTitle')
    resJobTitle.textContent = jobTitle

    let resAchiev1:any = document.getElementById('resAchiev1')
    resAchiev1.textContent = achiev1

    let resAchiev2:any = document.getElementById('resAchiev2')
    resAchiev2.textContent = achiev2

    let resAchiev3:any = document.getElementById('resAchiev3')
    resAchiev3.textContent = achiev3

    let resImg:any = document.getElementById('resImg')
    resImg.src = picture





})


//-------------print_section-----------

let print_btn = document.getElementById('print_btn')

print_btn?.addEventListener('click', () => {
    window.print()
})

//---------------edit-btn------------

let edit_btn = document.getElementById('edit_btn')

edit_btn?.addEventListener("click",()=>{
    window.history.back()
})
