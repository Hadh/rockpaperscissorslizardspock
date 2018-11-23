var userScore = 0;
var computerScore = 0;
var userScore_span = document.getElementById('user-score');
var computerScore_span = document.getElementById('computer-score');
var scoreBoard_div = document.querySelector(".scoreboard");
var result_div = document.querySelector(".result > p");
var rock_div = document.getElementById("r");
var paper_div = document.getElementById("p");
var scissors_div = document.getElementById("s");
var lizard_div = document.getElementById("l");
var spock_div = document.getElementById("sp");

var user_badge = document.getElementById("user-label");
var computer_badge = document.getElementById("computer-label");

function getComputerChoice() {
    var choices = ["r", "p", "s", "l", "sp"];
    const randomNumber = Math.floor(Math.random() * 5);
    return choices[randomNumber];
}

function highlight(obj) {
    var orig = obj.style.background;
    obj.style.background = '#3ac569';
    setTimeout(function () {
        obj.style.background = orig;
    }, 1000);
}

function highlightDraw() {
    var orig1 = user_badge.style.background;
    var orig2 = computer_badge.style.background;
    user_badge.style.background = '#dadbdb';
    computer_badge.style.background = '#dadbdb';
    setTimeout(function () {
        user_badge.style.background = orig1;
        computer_badge.style.background = orig2
    }, 1000);
}

function win(userChoice, computerChoice) {
    userScore++;
    const smallUser = "user".fontsize(3).sup();
    const smallComp = "computer".fontsize(3).sup();
    highlight(user_badge);
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = convert(userChoice) + smallUser + " Beats " + convert(computerChoice) + smallComp + ". You win!";
}

function lose(userChoice, computerChoice) {
    computerScore++;
    const smallUser = "user".fontsize(3).sup();
    const smallComp = "computer".fontsize(3).sup();
    highlight(computer_badge);
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = convert(computerChoice) + smallUser + " Beats " + convert(userChoice) + smallComp + ". You Lose!";
}

function draw() {
    result_div.innerHTML = "It's a Tie!";
    highlightDraw();
}

function convert(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissors";
    if (letter === "l") return "Lizard";
    if (letter === "sp") return "Spock";
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
        case "rl":
        case "lsp":
        case "ssp":
        case "sl":
        case "lp":
        case "psp":
        case "spr":
            win(userChoice, computerChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
        case "lr":
        case "spl":
        case "sps":
        case "ls":
        case "pl":
        case "spp":
        case "rsp":
            lose(userChoice, computerChoice);
            break;
        case "ss":
        case "pp":
        case "rr":
        case "ll":
        case "spsp":
            draw();
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function () {
        game("r");
    })

    paper_div.addEventListener('click', function () {
        game("p");
    })

    scissors_div.addEventListener('click', function () {
        game("s");
    })

    lizard_div.addEventListener('click', function () {
        game("l");
    })

    spock_div.addEventListener('click', function () {
        game("sp");
    })

}

main();