setInterval(clock,1000);
function clock(){
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var day = date.getDay();
    var Cdate = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear()
    console.log(hour,min,sec);
    var hrro = min*0.5;
    var rotateHour = (hour*30)+hrro;
    var rotateMin = min*6;
    var rotateSec = sec*6;
    switch(day){
        case(0):
            weekday="Sun";
            break;
        case(1):
            weekday="Mon";
            break;
        case(2):
            weekday="Tue";
            break;
        case(3):
            weekday="Wed";
            break;
        case(4):
            weekday="Thu";
            break;
        case(5):
            weekday="Fri";
            break;
        case(6):
            weekday="Sat";
            break;
    }
    switch(month){
        case(0):
            month1="Jan";
            break;
        case(1):
            month1="Feb";
            break;
        case(2):
document.querySelector("#year").innerHTML=year;
month1="Mar";
            break;
        case(3):
            month1="Apr";
            break;
        case(4):
            month1="May";
            break;
        case(5):
            month1="Jun";
            break;
        case(6):
            month1="Jul";
            break;
        case(7):
            month1="Aug";
            break;
        case(8):
            month1="Sep";
            break;
        case(9):
            month1="Oct";
            break;
        case(10):
            month1="Nov";
            break;
        case(11):
            month1="Dec";
            break;
       
    }
document.querySelector("#wDay").innerHTML=weekday;
document.querySelector("#date").innerHTML=Cdate;
document.querySelector("#month").innerHTML=month1;
document.querySelector("#year").innerHTML=year;
document.querySelector("#hr").innerHTML=hour+":"+min+":"+sec;
document.querySelector(".hrHand").style.transform = "rotate("+rotateHour+"deg)";
document.querySelector(".minHand").style.transform = "rotate("+rotateMin+"deg)";
document.querySelector(".secHand").style.transform = "rotate("+rotateSec+"deg)";
}