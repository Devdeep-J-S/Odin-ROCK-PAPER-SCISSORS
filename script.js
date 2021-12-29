function game() {
    function computerplay() {
        let num = Math.floor(Math.random() * 3);
        if (num == 0) {
            return "Rock";
        }
        else if (num == 1) {
            return "Paper";
        }
        return "Scissors";
    }
    function perfect_string(string) {
        let s1 = string[0];
        let s2 = string.slice(1, string.length);
        let s3 = s1.toUpperCase() + s2.toLowerCase();
        return s3.trim();
    }
    function playerSelection() {
        let string = window.prompt("Write your weapon->Rock, Paper or Scissors?");
        return perfect_string(string);
    }
    function playround(player, com) {
        if (player == "Rock") {
            if (com == "Scissors") {
                return "You Win! Rock beats Scissors\n";
            }
            return "You Lose! Paper beats Rock\n";
        }
        else if (player == "Scissors") {
            if (com == "Paper") {
                return "You Win! Scissors beats Paper\n";
            }
            return "You Lose! Rock beats Scissors\n";
        }
        else {
            if (com == "Rock") {
                return "You Win! Paper beats Rock\n";
            }
            return "You Lose! Scissors beats Paper\n";
        }
    }
    let str = playround(playerSelection(), computerplay());
    console.log(str);
    return str;
}
let player_score = 0;
let computer_score = 0;
for (let i = 0; i < 5; ++i) 
{
    let str = game();
    let new_str = str.split("!");
    if (new_str[0] == "You Lose") {
        computer_score++;
    }
    else {
        player_score++;
    }
    console.log("Your score : " + player_score + "       " + "Computer's score : " + computer_score + "\n");
}
(player_score > computer_score) ? console.log("You Win the game, BOY!") : console.log("You did not win the game, BOY!,Don't let this happen again!!!");