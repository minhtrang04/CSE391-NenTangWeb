

function isValid (){
const fullname = document.getElementById('fullname').value;
const username = document.getElementById('username').value;
const phone = document.getElementById('phone').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const re_password = document.getElementById('repassword').value;
const gender = document.querySelector('input[name="gender"]:checked').value;
const day = document.getElementById('day').value;
const month= document.getElementById('month').value;
const year= document.getElementById('year').value;
const address = document.getElementById('address').value;
var form = document.forms["form"];
// const avatar = document.getElementById('avatar').value;
const hobby1 = document.getElementById("hobby1").checked;
const hobby2 = document.getElementById("hobby2").checked;
const hobby3 = document.getElementById("hobby3").checked;
      
const name_error = document.getElementById('name_error');
const fullname_error = document.getElementById('fullname_error');
const phone_error = document.getElementById('phone_error');
const email_error = document.getElementById('email_error');
const password_error = document.getElementById('password_error');
const repass_error = document.getElementById('repass_error');
var email_check = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var name_check = /^[a-zA-Z0-9]+$/;
if (username === '' || fullname === '' || password === ''|| re_password === '' || address === '' || phone === '') {
    alert('Ten dang nhap khong duoc de trong !');
    // fullname_error.innerHTML ='Yeu cau khong duoc de trong !';
    // name_error.innerHTML ='Yeu cau khong duoc de trong !';
    // phone_error.innerHTML ='Yeu cau khong duoc de trong !';
    // email_error.innerHTML ='Yeu cau khong duoc de trong !';
    // password_error.innerHTML ='Yeu cau khong duoc de trong !';
    // repass_error.innerHTML ='Yeu cau khong duoc de trong !';
 }
 else if(!username.match(name_check)){
    alert('Ten dang nhap chi bao gom chu cai va so !');
    // name_error.innerHTML ='Ten dang nhap chi bao gom chu cai va so !';  
 }
 else if(phone.length < 9){
    alert('Do dai phai du 10 ki tu !');
    // phone_error.innerHTML ='Do dai phai du 10 ki tu !';
 }
 else if(!email.match(email_check)){
    alert('Sai dinh dang email !');
    // email_error.innerHTML ='Sai dinh dang email !';
 }
 else if (password !== re_password){
    alert('Mat khau nhap lai khong trung khop !')
    // repass_error.innerHTML ='Mat khau nhap lai khong trung khop !';
 }
else{
    // fullname_error.innerHTML ='';
    // phone_error.innerHTML ='';
    // email_error.innerHTML ='';
    // password_error.innerHTML ='';
    // repass_error.innerHTML ='';
    // name_error.innerHTML = ""; 
   const result = document.getElementById('result');
    result.innerHTML =
    '<br> Fullname : ' + fullname +
    '<br> Username : ' + username +
    '<br> Số điện thoại : ' + phone +
    '<br> Email: ' + email +
    '<br> Password : ' + password +
    '<br> Password nhập lại : ' + re_password +
    '<br> Gender : ' + gender +
    '<br> Ngày sinh : ' +  day + ' - ' + month + ' - ' + year +
    '<br> Địa chỉ : ' + address +
    '<br> Sở thích : '  + (hobby1 ? 'Hobby 1 ' : '') +
    (hobby2 ? 'Hobby 2 ' : '') +
    (hobby3 ? 'Hobby 3' : '');
}
}
    
