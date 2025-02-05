let myName :any = document.getElementById('myName');

let desig:any= document.getElementById('desig');

let phone:any= document.getElementById('phone');

let email:any= document.getElementById('email');

let address:any= document.getElementById('address');

let pass:any= document.getElementById('pass');

let deg:any= document.getElementById('deg');

let uni:any= document.getElementById('uni');

let skill1:any= document.getElementById('skill1');

let skill2:any= document.getElementById('skill2');

let skill3:any= document.getElementById('skill3');

let lang1:any= document.getElementById('lang1');

let lang2:any= document.getElementById('lang2');

let styear:any= document.getElementById('styear');

let endyear:any= document.getElementById('endyear');

let company:any= document.getElementById('company');

let comlocation:any= document.getElementById('comlocation');

let jobTitle:any= document.getElementById('jobTitle');

let achiev1:any= document.getElementById('achiev1');

let achiev2:any= document.getElementById('achiev2');

let achiev3:any= document.getElementById('achiev3');

let pic:any= document.getElementById('pic');

let submitBtn = document.getElementById('submitBtn')
let form=document.getElementById('form')


form?.addEventListener('submit',(e)=>{
e.preventDefault()

localStorage.setItem("name",myName.value)



localStorage.setItem("desig",desig.value)
localStorage.setItem("phone",phone.value)
localStorage.setItem("email",email.value)
localStorage.setItem("address",address.value)
localStorage.setItem("pass",pass.value)
localStorage.setItem("deg",deg.value)
localStorage.setItem("uni",uni.value)
localStorage.setItem("skill1",skill1.value)
localStorage.setItem("skill2",skill2.value)
localStorage.setItem("skill3",skill3.value)
localStorage.setItem("lang1",lang1.value)
localStorage.setItem("lang2",lang2.value)
localStorage.setItem("styear",styear.value)
localStorage.setItem("endyear",endyear.value)
localStorage.setItem("company",company.value)
localStorage.setItem("comlocation",comlocation.value)
localStorage.setItem("jobTitle",jobTitle.value)
localStorage.setItem("achiev1",achiev1.value)
localStorage.setItem("achiev2",achiev2.value)
localStorage.setItem("achiev3",achiev3.value)


if(pic.files && pic.files[0] ){
   let reader= new FileReader()
   reader.addEventListener("load",()=>{
      let textImg:any =reader.result
      localStorage.setItem("profile_pic",textImg)

   })
   reader.readAsDataURL(pic.files[0])
 
}


window.location.href="./resume/resume.html"
})





















