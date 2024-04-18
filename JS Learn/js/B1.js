"use strict";
//a,Hiển thị sử dụng JS thông qua:
//Alert
 alert('Bài tập Javascript - Phó Minh Trang - 64ANM2');
 //Document.write
 document.write('Thông báo này sẽ hiển thị ra màn hình thông qua document.write <br>');
 //getElementById() 
 var a = document.getElementById('prap');

 document.write('b. Sử dụng các vòng lặp, câu lệnh rẽ nhánh trong JS: <br> - Vòng lặp:<br> ');
  var count = 0;
  for(var i = 0 ; i < 5; i++){
       document.write('Co '+ count++ +' sinh vien trong lop <br>' );
  } 

  //rẽ nhánh
  var n = prompt('Nhập số tuổi của bạn: ');
  if(n > 18){
    document.write('<br>Ban đủ tuổi để tham gia');
  }
  else{
    document.write('<br>Bạn chưa đủ tuổi để tham gia');
  }
  //c. Lấy dữ liệu nhập vào từ textbox để xử lý
  //mẫu:let element = document.getElementById('mytext');
  //console.log(element.value);
   function isValid() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    // document.write("Họ và tên: " + name);
    // document.write("<br>Email: " + email);
    var result = document.getElementById("result");
    result.innerHTML =
         '<p> Họ và tên: ' + name + '</p>'
         + '<p> Email: ' + email + '</p>';
}
//Xử lý hàm trong JS
function calCulator(number1,number2){
  var sum = number1 + number2; 
   document.write('<br>Tổng 2 số là: ' + sum);
}
calCulator(8,10);
//
function isValid(){
  let year = document.getElementById('year').value;
  let month = document.getElementById('month').value;
  let day;
  switch (parseInt(month)) {
    case 1: case 3: case 5: case 7:case 8: case 10: case 12:
      day = 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      day = 30;
      break;
    case 2:
      if (leapYear(parseInt(year))) {
        day = 29;
      } else {
        day = 28;
      }
      break;
    default:
      return;
  }
  
 const result = document.getElementById("result");
     result.innerHTML =
        '<p> Tháng ' + month + ' Năm ' + year + ' có ' + day +' Ngày';
}
  
function leapYear(year) {
  return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
}