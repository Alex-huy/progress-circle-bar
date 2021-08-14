const percent = document.querySelector(".number");
let counter = 0;

setInterval(() => {
    if (counter === 100) {
        clearInterval();
    } else {
        counter = counter + 1;
        percent.innerHTML =counter + ' % ';
    }
}, 15);