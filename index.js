let email = document.getElementById("email");
let error =document.getElementById("error");


function validate(){
let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/


    if(regexp.test(email.value)){
        error.innerHTML="Valid";
        error.style.color-"green";
        return true;
    }
    else{
        error.innerHTML="Invalid";
        error.style.color="red";
        return false;
    }
}
// let pwd = document.getElementById("pwd");
// let error =document.getElementById("error");


// function validate(){
//     if (pwd.value==""){
//         alert("Password cannot be blank");
//         return false;
//     }
// else if (pwd.value.length<=7){
//     alert("password should contain 8 characters,atleast 1 uppercase,1 lowercase,1 number");
// }
// else{
//     return true;
// }}





 
    


//     if(email.value.trim()==""||pwd.value.trim()==""){
//         alert("Fields cannot be empty");
//         return false;
//     } 
//     else{
//         return true;
//         alert("validation is proper");
//     }
// 
