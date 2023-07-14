console.log('Welcome To My Gym');
//initilization
let bar = document.querySelector('.bar');
let navbar = document.getElementsByClassName('navbar')[0];
let timer = document.getElementsByClassName('timer')[0];
bar.addEventListener('click', () => {
    let opacity = window.getComputedStyle(navbar, null).getPropertyValue('opacity');
    if (opacity == '0') {
        navbar.style.opacity = '1';
        navbar.style.height = "465px";
    }
    else {
        navbar.style.opacity = '0';
        navbar.style.height = "61px";
    }

});

let clr = setInterval(() => {
    let countDownDate = new Date("June 30, 2023 19:23:14").getTime();
    let now = new Date().getTime();
    var distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24))/(1000*60*60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / (1000));
    timer.innerHTML = "The deal ends in "+days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
}, Infinity);

if (distance <= 0) {
    clearInterval(clr);
    timer.innerHTML = "EXPIRED";
}








