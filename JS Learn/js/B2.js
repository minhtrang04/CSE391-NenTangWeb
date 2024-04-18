function isValid(){
    const fullname = document.getElementById('fullname').value;
    const username = document.getElementById('username').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const re_password = document.getElementById('re_password').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const day = document.getElementById('day').value;
    const month= document.getElementById('month').value;
    const year= document.getElementById('year').value;
    const address = document.getElementById('address').value;
    // const avatar = document.getElementById('avatar').value;
    const check_box1 = document.getElementById("check_box1").checked;
    const check_box2 = document.getElementById("check_box2").checked;
    const check_box3 = document.getElementById("check_box3").checked;

    const name_error = document.getElementById('name_error').value;
    const phone_error = document.getElementById('phone_error').value;
    const email_error = document.getElementById('email_error').value;
    const password_error = document.getElementById('password_error').value;
    const repass_error = document.getElementById('repass_error').value;
    
    var name_check = /^[a-zA-Z0-9]+$/;
    var email_check =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // if(username == '' || username == null){
    //      name_error.innerHTML='Không được để trống !';
    // }
    // else if(!username.match(name_check)){
    //     name_error.innerHTML='Username chỉ bao gồm chữ cái và số';
    // }
    // else{
    //     name_error.innerHTML='';
    // }
    
    // if(phone.length <= 10){
    //     phone_error.innerHTML = 'Số điện thoại gồm 10 chữ số'
    // }
    // else{
    //     phone_error.innerHTML='';
    // }

    // if(!email.match(email_check)){
    //     email_error.innerHTML = 'Định dạng email không hợp lệ !'
    // }
    // else{
    //     email_error.innerHTML='';
    // }
    
    // if(password != re_password){
    //     repass_error.innerHTML = 'Mật khẩu không khớp nhau'
    // }
    // else{
    //     repass_error.innerHTML='';
    // }
    

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
    '<br> Sở thích : ' + check_box1 + check_box2 + check_box3 ;
}