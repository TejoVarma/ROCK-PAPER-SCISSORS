let userScore = 0;
let computerScore = 0;
let count;
let letsPlay = false;
let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");
let scoreBoard_div = document.querySelector(".score-board");
let result_p = document.querySelector(".result > p");
let rock_div = document.getElementById("r");
let paper_div = document.getElementById("p");
let scissors_div = document.getElementById("s");
let play_button = document.getElementById("play");
let reset_button = document.getElementById("reset");
let rounds = document.getElementById("rounds");
let rounds_left_number = document.getElementById("number");

play_button.addEventListener('click', function () {
    if (rounds.value == "") {
        window.alert("please enter number of rounds!");
        location.reload();
    }
    rounds_left_number.innerHTML = rounds.value;
    count = rounds.value;
    letsPlay = true;
    rounds.value = "";
    userScore_span.innerHTML = 0;
    computerScore_span.innerHTML = 0;
    userScore = 0;
    computerScore = 0;
    result_p.innerHTML = `Let's Play`
})

function getComputerChoice() {
    let choices = ['r', 'p', 's'];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") {
        return "Rock";
    }
    else if (letter === "p") {
        return "Paper";
    }
    return "Scissors";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    let smallUserWord = "user".fontsize(3).sub();
    let smallCompWord = "comp".fontsize(3).sub();
    let userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord} . You Win!`;
    userChoice_div.classList.add('green-glow');
    setTimeout(function () {
        userChoice_div.classList.remove('green-glow');
    }, 300);
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    let smallUserWord = "user".fontsize(3).sub();
    let smallCompWord = "comp".fontsize(3).sub();
    let userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} lost to ${convertToWord(computerChoice)}${smallCompWord} . You lost!`;
    userChoice_div.classList.add('red-glow');
    setTimeout(function () {
        userChoice_div.classList.remove('red-glow');
    }, 300);
}

function draw(userChoice, computerChoice) {
    let smallUserWord = "user".fontsize(3).sub();
    let smallCompWord = "comp".fontsize(3).sub();
    let userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} same as ${convertToWord(computerChoice)}${smallCompWord} . It's a draw!`;
    userChoice_div.classList.add('grey-glow');
    setTimeout(function () {
        userChoice_div.classList.remove('grey-glow');
    }, 300);
}
function game(userChoice) {
    if (count <= 0) {
        if (computerScore > userScore) {
            result_p.innerHTML = `Game over! <br> You Lost! Better luck next time`
        }
        else if (computerScore < userScore) {
            result_p.innerHTML = `Game over! <br> Hooray! You Won.`
        }
        else {
            result_p.innerHTML = `Game Over! <br> It's a Draw Match`
        }
    }
    else {
        let computerChoice = getComputerChoice();
        count--;
        rounds_left_number.innerHTML = count;
        switch (userChoice + computerChoice) {
            case "rs":
            case "pr":
            case "sp":
                win(userChoice, computerChoice);
                // console.log("win");
                break;
            case "rp":
            case "ps":
            case "sr":
                lose(userChoice, computerChoice);
                // console.log("lose");
                break;
            case "rr":
            case "pp":
            case "ss":
                draw(userChoice, computerChoice);
                // console.log("draw");
                break;
        }
    }
}



function main() {
    rock_div.addEventListener('click', function () {
        if (letsPlay == false) {
            window.alert("please click on play button");
            location.reload();
        }
        game("r");
    })
    paper_div.addEventListener('click', function () {
        if (letsPlay == false) {
            window.alert("please click on play button");
            location.reload();
        }
        game("p");
    })
    scissors_div.addEventListener('click', function () {
        if (letsPlay == false) {
            window.alert("please click on play button");
            location.reload();
        }
        game("s");
    })
    reset_button.addEventListener('click', function () {
        location.reload();
    })
}

main();
