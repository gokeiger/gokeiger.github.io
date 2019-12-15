var message="クリスマスイベント限定商品"//Chữ cần tạo hiệu ứng
var neonbasecolor="green"//Mầu chữ ban đầu
var neontextsize="40"
var neontextcolor="red"//mau thu nhat
var neontextcolor2="blue"//mau thu 2
var flashspeed=250 //toc do chay
var flashingletters=3 // So chu doi mau 1
var flashingletters2=2 // so chu doi mau 2
var flashpause=0 // thoi gian tam dung 
///ham chu doi mau/////
var n=0
if (document.all||document.getElementById){
document.write('<font color="'+neonbasecolor+'">')
for (m=0;m<message.length;m++)
document.write('<span id="neonlight'+m+'">'+message.charAt(m)+'</span>')
document.write('</font>')
}
else
document.write(message)
function crossref(number){
var crossobj=document.all? eval("document.all.neonlight"+number) : document.getElementById("neonlight"+number)
return crossobj
}
function neon(){
//reset mau chu
if (n==0){
for (m=0;m<message.length;m++)
crossref(m).style.color=neonbasecolor
}
//vong doi mau chu
crossref(n).style.color=neontextcolor
if (n>flashingletters-1) crossref(n-flashingletters).style.color=neontextcolor2
if (n>(flashingletters+flashingletters2)-1) crossref(n-flashingletters-flashingletters2).style.color=neonbasecolor
if (n<message.length-1)
n++
else{
n=0
clearInterval(flashing)
setTimeout("beginneon()",flashpause)
return
}
}
function beginneon(){
if (document.all||document.getElementById)
flashing=setInterval("neon()",flashspeed)
}
beginneon()