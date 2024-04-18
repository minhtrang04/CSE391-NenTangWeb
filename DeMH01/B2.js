function isValid(){
    const email = document.getElementById('email').value;
    var email_check = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     if(!email.match(email_check)){
        alert('Email sai định dạng !');
     }
}