function formValid(){

document.getElementById('name').addEventListener("keyup", formValid),
document.getElementById('num').addEventListener("keyup", formValid)

document.getElementById('email').addEventListener("keyup", formValid)
document.getElementById('pass').addEventListener("keyup", formValid)
document.getElementById('cpass').addEventListener("keyup", formValid)



    let Name =  document.getElementById('name').value.trim()
   let number = document.getElementById('num').value.trim()
   let Email = document.getElementById('email').value.trim()
   let Pass = document.getElementById('pass').value.trim()
   let Cpass = document.getElementById('cpass').value.trim()

   let Errname = document.getElementById('errname')
   let Errnum = document.getElementById('errnum')
   let Erremail = document.getElementById('erremail')
   let Errpass = document.getElementById('errpass')
   let Errcpass = document.getElementById('errcpass')


   if (Name == ""){
    Errname.innerHTML= "please enter your correct name**"
    return false
   }
   else{
    Errname.innerHTML=""
   }


   if (number.length!=10){
    Errnum.innerHTML="please enter 10 digits only**"
    return false
   }
   
   else if (isNaN(number)) {
    Errnum.innerHTML="please enter valid number**"
    return false
   }
   else{
    Errnum.innerHTML=""
   }





if ( !Email.includes("@") && !Email.includes(".com")){
    Erremail.innerHTML="please enter valid email**"
    return false
}
else{
    Erremail.innerHTML=""
}




if ( !Pass.match(/[!@#$%^&*]/) && 
!Pass.match(/[1234567890]/) &&
!Pass.match(/[A-Z]/)&&
!Pass.match(/[a-z]/))

{

    Errpass.innerHTML="please enter strong password**"
    return false
}
else{
    Errpass.innerHTML=""
}




if (Pass!=Cpass){
    Errcpass.innerHTML="please enter same password**"
    return false
}
else{
    Errcpass.innerHTML=""
}




}