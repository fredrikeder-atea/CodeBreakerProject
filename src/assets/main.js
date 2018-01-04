let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    if (answer.value == '' || attempt.value == '') {
        setHiddenFields();
    }

    if (!validateInput(input.value)) {
        return false;
    } else {
        attempt.value++;
    }

    if (getResults(input.value)) {
        setMessage('You in! :)')
        showAnswer(true);
        showReplay();
    } else if (attempt.value >= 10) {
        setMessage('You Lose! :(');
        showAnswer(false)
        showReplay();
    } else {
        setMessage('Incorrect, try again.')
    }
}

function setHiddenFields() {
    answer.value = Math.floor(Math.random() * 10000).toString();
    while (answer.value.length < 4) {
        answer.value = "0" + answer.value;
    }
    attempt.value = "0";
}

function setMessage(message) {
    document.getElementById('message').innerHTML = message;
}

function validateInput(guess) {
    if (guess.length == 4) {
        return true;
    } else {
        setMessage("Guesses must be exactly 4 characters long.");
        return false;
    }
}

function getResults(input) {
    let results = document.getElementById('results');
    let guess = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';
    let correct = 0;
    for (let index = 0; index < input.length; index++) {
        const element = input[index];
        if (element == answer.value[index]) {
            guess += '<span class="glyphicon glyphicon-ok"></span>';
            correct++;
        } else if (answer.value.indexOf(element) > -1) {
            guess += '<span class="glyphicon glyphicon-transfer"></span>';
        } else {
            guess += '<span class="glyphicon glyphicon-remove"></span>';
        }
    }
    results.innerHTML += guess + '</div>';

    return correct == 4;
}

function showAnswer(won) {
    let code = document.getElementById('code');

    code.innerHTML = answer.value;

    if (won) {
        code.className += ' success';
    } else {
        code.className += ' failure';
    }
}

function showReplay() {
    document.getElementById('guessing-div').style.display = 'none';
    document.getElementById('replay-div').style.display = 'block';
}