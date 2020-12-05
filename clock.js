function setTime()
{
     var d=['Sun','Mon','Tues','Wed','Thur','Fri','Sat'];
    let time  = new Date();
    let hr    = time.getHours();
    let min   = time.getMinutes();
    let sec   = time.getSeconds();
    let day   = time.getDay();

    if(hr < 10)
    {
        hr = '0' + hr;
    }
    if(min < 10)
    {
        min = '0' + min;
    }
    if(sec < 10)
    {
        sec = '0' + sec;
    }
    document.getElementById('clock').innerHTML = hr+ ' : '+min+ ' : '+sec +' '+d[day];
}
setInterval(setTime, 500);