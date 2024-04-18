// $(document).ready(function() {
//     $(".btn").click(function() {
//       $(".prap").css('color','red');
//     })
// })
// function isValid(){
//   var a = document.forms['form'];
//   // const name = document.getElementById('name');
//   // const email = document.getElementById('email');
//   var email_check = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   var name;
//   var email;
//    name = a.elements[0].value;
//    email = a.elements[1].value;
//   if(name == ""){
//     alert('Khong duoc de trong');
//   }
//   else if(email == ""){
//     alert('Khong duoc de trong');
//   }
//   else if(!email.value.match(email_check)){
//     alert('Emai khong hop le !');
//   }
//   else{
//     document.getElementById('prap').innerHTML=name + " " + email;
//   }
// }

function isValid(){
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  var email_check = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(name.value == "" || name.value == null){
    alert('Khong duoc de trong');
  }
  else if(email.value == "" || email.value == null){
    alert('Khong duoc de trong');
  }
  else if(!email.value.match(email_check)){
    alert('Emai khong hop le !');
  }
  else{
    document.getElementById('prap').innerHTML=name + " " + email;
  }
}