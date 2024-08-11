let homeScore = 0 ;
let awayScore = 0 ;

let homeScoreDisplay = document.getElementById("homeScore");
let awayScoreDisplay = document.getElementById("awayScore");

awayScoreDisplay.textContent = "00"
homeScoreDisplay.textContent = "00"

function displayScore(score){
    if (score<=9){
        return "0" + score;
    }
    else{
        return score
    }
}


function addOneHome(){
    homeScore += 1
    homeScoreDisplay.textContent = displayScore(homeScore)
}
function addThreeHome(){
    homeScore += 3
    homeScoreDisplay.textContent = displayScore(homeScore)
}
function addFiveHome(){
    homeScore += 5
    homeScoreDisplay.textContent = displayScore(homeScore)
}


function addOneAway(){
    awayScore += 1
    awayScoreDisplay.textContent = displayScore(awayScore)
}
function addThreeAway(){
    awayScore += 3
    awayScoreDisplay.textContent = displayScore(awayScore)
}
function addFiveAway(){
    awayScore += 5
    awayScoreDisplay.textContent = displayScore(awayScore)
}

function newGame(){
    homeScore = 0;
    awayScore = 0;
    homeScoreDisplay.textContent = displayScore(homeScore)
    awayScoreDisplay.textContent = displayScore(awayScore)
}