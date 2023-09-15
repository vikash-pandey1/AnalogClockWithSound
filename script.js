
function show_clock() {
    let h = document.getElementsByClassName('hr')[0];
    let m = document.getElementsByClassName('mn')[0];
    let s = document.getElementsByClassName('ss')[0];

    let data = new Date();
    let hours = data.getHours();
    let minutes = data.getMinutes();
    let second = data.getSeconds();

    h.style.transform = `rotate(${hours}deg)`;
    m.style.transform = `rotate(${6 * minutes}deg)`;
    s.style.transform = `rotate(${6 * second}deg)`;

    let sound = new Audio('clock1.mp3');
    sound.play();
}
setInterval(show_clock, 1000);