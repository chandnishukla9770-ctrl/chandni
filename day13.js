// document.getElementById("btn1").addEventListener("click", myDisplay);

// function myDisplay(){
//     alert("welcome to cybrom!!");
// }

document.getElementById("btn1").addEventListener("click", myCal);

function myCal(){
    let a = parseInt(document.getElementById("n1").value);
    let b = parseInt(document.getElementById("n2").value);
    let ans = a+b;
    document.getElementById("demo").innerHTML+=`${ans}`

}
