function showTime() {

    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    let formatHours = convertFormat(hours);
    hours = checkHours(hours);
    hours = addZero(hours);
    minutes = addZero(minutes);
    second = addZero(seconds);
    
    document.getElementById('clock').innerHTML = `${hours} : ${minutes} : ${seconds} ${formatHours}`;
}
function convertFormat(time) {
    let format = 'AM';
    if (time > 12) {
        format = 'PM';
    }
    return format;
}
function checkHours(time) {
    if (time > 12) {
        time = time - 12;
    }
    else if (time === 0) {
        time = 12;
    }
    return time;
}
function addZero(time) {
    if (time < 10) {
        time = "0" + time;
    }
    return time;
}
setInterval(showTime,1000)