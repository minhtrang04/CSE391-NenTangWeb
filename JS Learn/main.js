//var fullName = 'Choso Kamo';
// alert(fullName);
/**
 *hàm bulit - in
 1.Alert
 var age=26;
 // alert(26);
 2.Confirm
 //confirm("Ban da dang ky thanh cong!");
 3.Console
 //var fullName = 'Kamo';
//console. log(fullName);
 4.Prompt
 //prompt("Xac nhan nhan hang thanh cong!");
 5.Set Timeout
 setTimeout(function() {
   alert('Canh bao')
}, 1000);
 6.Set interval
 /*setInterval(function(){
    console. log('Day la log' + Math.random)
},1000);*/
/**
 Toán tử
 1.Toán tử số học
var a = 6 + 2;
console .log(a);
 2.Toán tử gán
 var fullName = 'Kamo';
 console. log('Họ và tên:' , fullName);
 3.Toán tử so sánh
 var a = 1;
var b = 8;
if(a < b){
    alert('DUNG');
}
 4.Toán tử logic: &&:và ; ||:hoặc ;!:Không
var a = 4;
var b = 8;
if(a > 0 && b>0) {
   alert('a & b lớn hơn 0')
}
 */
/**
 1.Toán tử số học
 +,-,*,/
 **:lũy thừa ; %:chia số dư ;++: tăng 1 gtri;--: giảm 1 gtr
 toán tử ++ ; --
 Perfix:tiền tố ; Postfix:hậu tố
 */
/*Toán tử chuỗi
var firstName = 'Kamo';
var lastName = 'Choso';
console .log('Họ và tên: ',firstName + ' ' + lastName);*/
/**
 Kiểu dữ liệu trong JS
 1.DL nguyên thủy
 -Number vd: var a = 1;
 -String vd: var fllName = 'Choso Kamo';
 -Boolean vd: var isSuccess = true; hoặc false
 -Undefined vd var age ; console .log(age);
 -Null vd: var isNull = null;
 -Symbol vd:
 2.DL phức tạp
 -Function
 var myFunction = function (){
    alert('Xin chao cac ban!')
 }
 myFuncton();
 -Object
 vd: chứa tt cá nhân
 var myObject ={
    name: 'Choso Kamo',
    age: 150,
    Address:'Japan',
 };
 */
//1
var a = prompt('Nhập vào số a: ');
var b = prompt('Nhập vào số b: ');
var c = prompt('Nhập vào số c: ') ;
var d = a*a + 2*b +c;
if( a > 0){
//   console. log(d);
document.write('Sum: '+d);
}else{
   // console. log('Du lieu khong phu hop');
   document.write('Du lieu khong phu hop');
}
//2
var n = prompt('Nhập vào số n: ');
var sum = 0;
var count = 0;
for(var icount = 0 ; icount <= n ; icount++){
   if(icount%2==0){
      sum = sum + icount;
      count++;
   }
}
// console. log(sum);
document.write('Tổng n số chẵn là: '+sum);