let total = 0;
let clicks = 0;

const render = function (location, htmlStr) {
    $(location).empty();
    $(location).html(htmlStr);
};

const randomNum = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const setGhp = function () {
    $('#ghp').attr('point', randomNum(1, 21));
}

const setRc = function () {
    $('#rc').attr('point', randomNum(1, 21));
}

const setSiyc = function () {
    $('#siyc').attr('point', randomNum(1, 21));
}

const setGd = function () {
    $('#gd').attr('point', randomNum(1, 21));
}

const setGoal = function () {
    htmlStr = randomNum(19, 250);
    render('#goal', htmlStr);
}

const setTotal = function () {
    htmlStr = total;
    render('#total', htmlStr);
}

const incrementTotal = function () {
    let point = parseFloat($(this).attr('point'));
    total = parseFloat($('#total').text());
    let sumTotal = total + point;
    render('#total', sumTotal);
    winLose();
}

const winLose = function () {
    if (parseFloat($('#total').text()) === parseFloat($('#goal').text())) {
        htmlStr = 'Congrats! You got the exact amount of House Points!'
        render('#result', htmlStr);
        setTimeout(function () { location.reload() }, 5000);
    }
    if (parseFloat($('#total').text()) > parseFloat($('#goal').text())) {
        htmlStr = 'Oops! You went over the goal. Better luck next time!'
        render('#result', htmlStr);
        setTimeout(function () { location.reload() }, 5000);
    }
};

$('#ghp').on('click', incrementTotal);

$('#rc').on('click', incrementTotal);

$('#siyc').on('click', incrementTotal);

$('#gd').on('click', incrementTotal);

setGoal();
setTotal();
setGhp();
setRc();
setSiyc();
setGd();