document.addEventListener('DOMContentLoaded', function () {
    const num = document.getElementById('count');
    const increase = document.getElementById('increase');
    const decrease = document.getElementById('decrease');
    const reset = document.getElementById('reset');

    let count = 0;

    increase.addEventListener('click', function() {
        count++;
        num.innerHTML = count;
    });
    decrease.addEventListener('click', function() {
        count--;
        num.innerHTML = count;

    });
    reset.addEventListener('click', function() {
        count = 0;
        num.innerHTML = count;
    });
});