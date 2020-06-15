timeChange = () => {
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

let date = new Date();


hour.innerHTML = date.getHours();
minute.innerHTML = date.getMinutes();
second.innerHTML = date.getSeconds();
    setTimeout(timeChange, 1000)
}
timeChange();


  