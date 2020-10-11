var second = 0;
var ten = 0;

const sec = document.getElementById('second');
const te = document.getElementById('ten');
console.log(te);
const startButton = document.getElementById('start-btn');
const stopButton = document.getElementById('stop-btn');
const resetButton = document.getElementById('reset-btn');
var Interval;
startButton.addEventListener('click', function() {
    clearInterval(Interval);
     Interval = setInterval(startTimer, 10);
});
stopButton.addEventListener('click', function() {
    clearInterval(Interval);
    console.log(Interval);
})
resetButton.addEventListener('click', function() {
    clearInterval(Interval);
    second = "00";
    ten = "00";
    sec.innerHTML = second;
    te.innerHTML = ten;
})
function startTimer() {
    ten++;
    if (ten <= 9) {
        te.innerHTML = "0" + ten;
    }
    if (ten > 9) {
        te.innerHTML = ten;
    }
    if (ten > 99) {
        second++;
        sec.innerHTML = "0" + second;
        ten = 0;
        te.innerHTML = "0" + 0;
    }
    if (second > 9) {
        sec.innerHTML = second;
    }
}
