let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    if (answer == '' || attempt || '') {
        setHiddenFields();
    }
}

function setHiddenFields() {
    answer = Math.floor(Math.random() * (10000));
    while (answer.toString().length < 4) {
        answer = "0" + answer;
    }
    $("#attempt").val(0);
}