setInterval(clock,1000);
function clock(){
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    console.log(hour,min,sec);
    var hrro = min*0.5;
    var rotateHour = (hour*30)+hrro;
    var rotateMin = min*6;
    var rotateSec = sec*6;
document.querySelector(".hrHand").style.transform = "rotate("+rotateHour+"deg)";
document.querySelector(".minHand").style.transform = "rotate("+rotateMin+"deg)";
document.querySelector(".secHand").style.transform = "rotate("+rotateSec+"deg)";
}