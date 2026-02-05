alert("script.js is running");

let rounds = '';
let p = '2';
let r = '0';
let t = '1';
let n = '1';
let s = '0';
let total = 0;
let tricks = '';
let krakened = 0;
const scores = [];
const places = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'];

setPlayers();
function setPlayers() { //create a form for inputting player names
  let  x = document.getElementById('players').value; //set x to number of players
  //console.log(x);
    //create inner content variable to build form 
    let innercontent = '<div class="gameStart"> Enter player names: <br>'; //create inner content variable and add a form
    let i = "1"; //set i equal to one
      while (i <= x) { // run loop until i = x (once for each player)
        innercontent += //add to innercontent form
                        '<input type="text" id="player' +i+ //add input for player name
                        '" name="player' +i+ '" placeholder="player ' + i +'"><br>';
        i++; //add one to i to ensure loop runs proper amount of times
    }
    innercontent += //add the rest of the form
        '<br> <label for="scoing">Scoring method:</label><br>' +
        '<select id="scoring" name="score_method">' +
        '<option value="skullKing">Skull King scoring</option>' +
        '<option value="rascal">Rascal scoring</option>' +
        '</select><br><br>' +
        '<label for="rounds">Number of rounds:</label><br>' +
        `<button class='plusMinus' id='removePlayer' onclick='let a = (document.getElementById("rounds").value * 1);` +
                `if (a > 1) {document.getElementById("rounds").value = (a - 1);};'>-</button>` +
        '<input type="number" id="rounds" name="rounds" min="1" max="100" value="1">' +
        `<button class='plusMinus' id='removePlayer' onclick='let a = (document.getElementById("rounds").value * 1);` +
                `if (a < 100) {document.getElementById("rounds").value = (a + 1);};'>+</button>` +
        '<br><br><button class="bigButton" onclick="process();">Start Game</button></div>'
    //console.log(innercontent);
    document.getElementById('test').innerHTML = innercontent; //place form on the page
}

function process() { //hide all html
  document.getElementById('numberPlay').style.display='none';
  document.getElementById('test').style.display='none';
  //document.getElementById('welcome').style.display='none';
  //document.getElementById('getStarted').style.display='none';
    rounds = document.getElementById('rounds').value;
    p = document.getElementById('players').value;
    //console.log(p);
    let k = 1, l=0;
    while (k <= p) { //add objects containing player names and score to array
        scores[l] = {name: document.getElementById('player' +k).value, score:0, tricks:0, bids:0, bonus:0},
        k++; l++;
    }
    let scoring = document.getElementById('scoring').value;
    //determine chosen scoring method and run new funcion
    if (scoring == "rascal") {
        //console.log('you have chosen rascal scoring');
        rascalScoring();
    }else{
        //console.log('you have chosen Skullking scoring');
        skullkingScoring();
    }

}

function rascalScoring() { //create input for game data (bid, tricks, bonus, grapeshot/cannonbal) for rascal scoring
  //console.log(scores);
  r++;
  t = '1';
  s = '0';
  let innercontents = '';
    if (r <= rounds) { //if the round number is less than or equal to the total number of rounds
      document.getElementById('welcome').innerHTML = 'Round ' +r+ ' of ' + rounds //display round number
//console.log(tricks);
      tricks = 1;
    innercontents += '<div class="inputs"><label>Set number of tricks:</label><br><button class="plusMinus" onclick="' +
    'let tric = (document.getElementById(`trik`).value * 1); if (tric > 1) {document.getElementById(`trik`).value = (tric - 1)};">' +
    '-</button> <input type="number" id="trik" value="1" min="1" max="99"> '+
    '<button class="plusMinus" onclick="let tric = (document.getElementById(`trik`).value *1);' +
    'if (tric < 99) {document.getElementById(`trik`).value = (tric + 1)};">+</button>' +
    '<button class="plusMinus" onclick="tricks = (document.getElementById(`trik`).value * 1);' +
    'if (tricks == 1) {document.getElementById(`getStarted`).innerHTML = tricks + ` Trick`;}else{' +
    'console.log(tricks); document.getElementById(`getStarted`).innerHTML = tricks + ` Tricks`;}' +
    '">Set</button>' +
    '</div><br>';
         if (tricks == 1){
      document.getElementById('getStarted').innerHTML = tricks + ' Trick'
      }else{ document.getElementById('getStarted').innerHTML = tricks + ' Tricks'
      }
        while (t <= p) { //add input form for each player
            innercontents += '<div class="inputs">' +
            document.getElementById('player' +t).value + '<br>Score: ' + scores[s].score + '<br><br>' + //display name and score
            '<label for="bid">Bid:</label><br>' + //bid label
            `<button class='plusMinus' onclick='let a = (document.getElementById("bid` +t+ `").value * 1);` +
            `if (a > 0) {document.getElementById("bid` +t+ `").value = (a - 1);}'>-</button>` +
            '<input type="number" id="bid' +t+ '" class="verstappen" value="0" min="0" max="99">' + //bid input
            `<button class='plusMinus' onclick='let a = (document.getElementById("bid` +t+ `").value * 1);` +
            `document.getElementById("bid` +t+ `").value = (a + 1);'>+</button>` +
            '<br><br><label for="tricks">Tricks:</label><br>' + //tricks label
            `<button class='plusMinus' onclick='let a = (document.getElementById("tricks` +t+ `").value * 1);` +
          `if (a > 0) {document.getElementById("tricks` +t+ `").value = (a - 1);}'>-</button>` +
            '<input type="number" id="tricks' +t+ '" class="verstappen" min="0" max="99" value="0">' + //tricks input
            `<button class='plusMinus' onclick='let a = (document.getElementById("tricks` +t+ `").value * 1);` +
          `document.getElementById("tricks` +t+ `").value = (a + 1);'>+</button>` +
            '<br><br><label for="grape">Scoring method:</label><br>' +
            '<select id="grape' +t+ '">' + //scoring method select
                         '<option value="Grapeshot">Grapeshot</option>' + //grapeshot option
              '<option value="Cannonball">Cannonball</option>' + //cannonball option
            '</select><br><br><label for="bonus">Bonus points</label><br>' + //bonus points label
          `<button class='plusMinus' onclick='let a = (document.getElementById("bonus` +t+ `").value * 1);` +
          `if (a > -100) {document.getElementById("bonus` +t+ `").value = (a - 10);}'>-</button>` +
          `<input type="number" id="bonus` +t+ `" step="10" value="0" max="950">` +
          `<button class='plusMinus' onclick='let a = (document.getElementById("bonus` +t+ `").value * 1);` +
          `if (a < 300) {document.getElementById("bonus` +t+ `").value = (a + 10);}'>+</button></div><br><br>` +
            t++; s++;
        }
        innercontents += '<div class="inputs"><label for="kraken">Kraken</label><br>' + //kraken label
                        `<button class='plusMinus' onclick='let a = (document.getElementById("kraken").value * 1);` +
          `if (a > 0) {document.getElementById("kraken").value = (a - 1);}'>-</button>` +
                        '<input type="number" id="kraken" min="0" max="2" value="0">' + //kraken input
                        `<button class='plusMinus' onclick='let a = (document.getElementById("kraken").value * 1);` +
          `if (a < 2) {document.getElementById("kraken").value = (a + 1);}'>+</button></div><br><br>` +
                        '<div class="submit"><button class="bigButton" onclick="checktricksR();">Enter round scores</button></div>'
        document.getElementById('playing').innerHTML = innercontents; //display input forms
    }else{ //after the last round
        //console.log('hello world, game over');
        document.getElementById('welcome').innerHTML = "The End";
        document.getElementById('getStarted').innerHTML = "Final scores:";
        document.getElementById('playing').innerHTML = "temporary";
          scores.sort(function(a, b){return b.score - a.score}); //reorder array: sort by score
          displayScores(); //run function to display final scoreboard
    }  
    
}

function checktricksR() {
n = '1';
total = 0;
    while (n <= p) {
        total += (1 * document.getElementById('tricks' +n).value); //calculate total dumber of tricks submitted
        n++;
    }
    total += (1 * document.getElementById('kraken').value); //add tricks taken by the kraken
    //console.log(total);
      if (total == tricks) { //if proper number of tricks submitted
        krakened += (1 * document.getElementById('kraken').value);
        rascalCalc(); //call function to calculate scores
      }else if (total < tricks) { //if tricks submitted is less than cards dealt
        window.alert('Not enough tricks submitted'); //alert user
      }else{ //if tricks submubmitted is more than cards dealt
        window.alert('Too many tricks submitted'); //alert user
      }
}

function rascalCalc() {
let q = '1';
let z = '0';
    while (q <= p) {
      let tr = (1 * document.getElementById('tricks' +q).value); //variable for players tricks
      console.log('player' +q);
      let bid = (1 * document.getElementById('bid' +q).value); //variable for players bid
      console.log('tricks'+tr+'bids'+bid);
      let bonus = (1 * document.getElementById('bonus' +q).value); //variable for players bonus points
      let scor = document.getElementById('grape' +q).value; //variable for scoring method
      let math = (bid - tr); console.log(math);
        //console.log(scores[z]);
        //console.log(bonus);console.log(tr);console.log(bid);
        //console.log(scor);
    scores[z].tricks += tr; scores[z].bids += bid;
           if (scor == 'Grapeshot') { // if grapeshot scoring is chosen
            if (math == 0) { //if bid equals tricks
                scores[z].score += ((tricks * 10) + bonus); scores[z].bonus += bonus;
            }else if (math == 1) { //if bid is one less than tricks
                scores[z].score += ((tricks * 5) + (bonus / 2)); scores[z].bonus += (bonus / 2);
            }else if (math == '-1') { //if bid is one more than tricks
                scores[z].score += ((tricks * 5) + (bonus / 2)); scores[z].bonus += (bonus / 2);
            }
            else{ //off by more than one
                console.log("PIZZANUGGET");
            }
        }else{ //if cannonball scoring was chosen
            //console.log('pizza');
            if (bid == tr) {
                scores[z].score += ((tricks * 15) + bonus); scores[z].bonus += bonus;
            }
        }
        //scores[z].tricks += (1 * tr); scores[z].bids += (1 * bid);
      q++; z++;//console.log(tr);
    }
rascalScoring();
}

function skullkingScoring() { //create input for game data (bids, tricks, bonus points)
  //console.log("You have chosen skullking scoring");
  r++; //add one to the round number
  t = '1';
  s = '0';
  //console.log(tricks);
  let innercontent = ''; //create variable for html inputs
    if (r <= rounds) { //check if round number is less than or equal to total number of rounds
      document.getElementById('welcome').innerHTML = 'Round ' +r+ ' of ' +rounds //display round number 

          tricks = 1;
    innercontent += '<div class="inputs"><label>Set number of tricks:</label><br><button class="plusMinus" onclick="' +
    'let tric = (document.getElementById(`trik`).value * 1); if (tric > 1) {document.getElementById(`trik`).value = (tric - 1)};">' +
    '-</button> <input type="number" id="trik" value="1" min="1" max="99"> '+
    '<button class="plusMinus" onclick="let tric = (document.getElementById(`trik`).value *1);' +
    'if (tric < 99) {document.getElementById(`trik`).value = (tric + 1)};">+</button>' +
    '<button class="plusMinus" onclick="tricks = (document.getElementById(`trik`).value * 1);' +
    'if (tricks == 1) {document.getElementById(`getStarted`).innerHTML = tricks + ` Trick`;}else{' +
    'console.log(tricks); document.getElementById(`getStarted`).innerHTML = tricks + ` Tricks`;}' +
    '">Set</button>' +
    '</div><br>';
      document.getElementById('getStarted').innerHTML = tricks + ' Trick'
        while (t <= p) { //add input for bids tricks and bonus points for each player
          innercontent += `<div class="inputs">` +
           document.getElementById('player' +t).value + '<br>Score: ' + scores[s].score + '<br><br>' +
          `<label for="bid"> Set bid: </label><br>` + //bids input label
          `<button class='plusMinus' onclick='let a = (document.getElementById("bid` +t+ `").value * 1);` +
          `if (a > 0) {document.getElementById("bid` +t+ `").value = (a - 1);}'>-</button>` + //bids input
                 `<input type="number" id="bid` +t+ `" value="0"  min="0" max="99">` +
          `<button class='plusMinus' onclick='let a = (document.getElementById("bid` +t+ `").value * 1);` +
          `document.getElementById("bid` +t+ `").value = (a + 1);'>+</button><br><br>` +
          `<label for="tricks">Tricks:</label><br>` +
          `<button class='plusMinus' onclick='let a = (document.getElementById("tricks` +t+ `").value * 1);` +
          `if (a > 0) {document.getElementById("tricks` +t+ `").value = (a - 1);}'>-</button>` +
          `<input type="number" id="tricks` +t+ `" min="0" max="` +tricks+ `" value="0">` + //tricks input
          `<button class='plusMinus' onclick='let a = (document.getElementById("tricks` +t+ `").value * 1);` +
          `document.getElementById("tricks` +t+ `").value = (a + 1);'>+</button><br><br>` +
          `<label for="bonus">Bonus points:</label><br>` +
          `<button class='plusMinus' onclick='let a = (document.getElementById("bonus` +t+ `").value * 1);` +
          `if (a > -100) {document.getElementById("bonus` +t+ `").value = (a - 10);}'>-</button>` +
          `<input type="number" id="bonus` +t+ `" step="10" value="0" max="950">` + //bonus points input
          `<button class='plusMinus' onclick='let a = (document.getElementById("bonus` +t+ `").value * 1);` +
          `if (a < 300) {document.getElementById("bonus` +t+ `").value = (a + 10);}'>+</button></div><br><br>` +
          t++; s++;
    }
       
          innercontent += `<div class="inputs"><label for="kraken">Kraken:</label><br>` +
                        `<button class='plusMinus' onclick='let a = (document.getElementById("kraken").value * 1);` +
          `if (a > 0) {document.getElementById("kraken").value = (a - 1);}'>-</button>` +
                      `<input type="number" id="kraken" min="0" max="2" value="0">` +
                        `<button class='plusMinus' onclick='let a = (document.getElementById("kraken").value * 1);` +
          `if (a < 2) {document.getElementById("kraken").value = (a + 1);}'>+</button></div>` +
                      `<br><br><div class="submit"><button class="bigButton" onclick="checktricksSK();">Enter Round Scores</button></div>` //add kraken and submit button
      document.getElementById('playing').innerHTML=innercontent; //add html to the page
    }else{ //after the final round: game end and display leaderboard
      document.getElementById('welcome').innerHTML = "The End";
      document.getElementById('getStarted').innerHTML = "Final scores:";
      document.getElementById('playing').innerHTML = "temporary";
        scores.sort(function(a, b){return b.score - a.score}); //sort scores
        displayScores(); //run function to display final scoreboard
    }
}

function checktricksSK() { //check if submitted trickes equal tricks dealt
n = '1';
total = 0;
    while (n <= p) {
        total += (1 * document.getElementById('tricks' +n).value); //calculate total dumber of tricks submitted
        n++;
    }
    total += (1 * document.getElementById('kraken').value); //add tricks taken by the kraken
    //console.log(total);
      if (total == tricks) { //if proper number of tricks submitted
        //console.log('dubbleyoo');
        krakened += (1 * document.getElementById('kraken').value);
        skullkingCalc(); //call function to calculate scores
      }else if (total < tricks) { //if tricks submitted is less than cards dealt
        //console.log('its not enough');
        window.alert('Not enough tricks submitted'); //alert user
      }else{ //if tricks submubmitted is more than cards dealt
        //console.log('tooo many');
        window.alert('Too many tricks submitted'); //alert user
      }
}

function skullkingCalc() { //calculate player scores
console.log('yessir');
let q = '1';
let z = '0';
    while (q <= p) { //run loop for each player
        let tr = document.getElementById('tricks' +q).value //variable for players tricks
        let bid = document.getElementById('bid' +q).value //variable for players bid
        let bo = (1 * document.getElementById('bonus' +q).value) //variable for players bonus points
            if (bid == 0) { //if player bid equals 0
                if (bid == tr) { //if player tricks also equal 0
                    scores[z].score += ((tricks * 10) + bo); scores[z].bonus += bo;
                    //console.log(bo);
                }else{ //if player tricks do not equal 0
                    scores[z].score += (tricks * -10); 
                }
            }else{ //if player bid does not equal 0
                if (bid == tr) { //if player bid and tricks are the same
                    scores[z].score += ((tr * 20) + bo); scores[z].bonus += bo;
                }else if (bid < tr) { //if player bid is less than tricks
                    scores[z].score += ((tr - bid) * -10);
                }else{ //if player bid is more than tricks
                    scores[z].score += ((bid - tr) * -10);
                }
            } //end top if statement
            //console.log(scores[z].score);
            scores[z].tricks += (1 *tr); scores[z].bids += (1 * bid);
            q++; z++;
                } //end while loop
skullkingScoring();
} 

function displayScores() {
let m = 0;
let c = 1;
const playersRanked = [];
const scoresRanked = [];
const tricksRanked = [];
const bidsRanked = [];
const bonusRanked = [];
const playKrakenRank = [];
const trickKrakenRank = [];
//console.log(scores);
let innercontent = '<table class="center">'
    while (c <= p) {
        innercontent += '<tr><td>' +places[m]+ '</td>' +
                        '<td>' + scores[m].name + '</td>' +
                        '<td>' + scores[m].score + '</td></tr>'
        playersRanked[m] = scores[m].name; tricksRanked[m] = scores[m].tricks; playKrakenRank[m] = scores[m].name;
        scoresRanked[m] = scores[m].score; bidsRanked[m] = scores[m].bids; bonusRanked[m] = scores[m].bonus;
        trickKrakenRank[m] = scores[m].tricks
        m++; c++;
    }
    playKrakenRank[m] = 'Kraken'; trickKrakenRank[m] = krakened;
    innercontent += '</table>'
    const scoresdata = [{
        x:playersRanked,
        y:scoresRanked,
        type:"bar",
        orientation:"v",
    }];

      const scoresLayout = {title: {text: "Player Scores"}};
    Plotly.newPlot("scoresPlot", scoresdata, scoresLayout);
    const tricksData = [{
        labels:playKrakenRank,
        values:trickKrakenRank,
        type:"pie",
    }];
    const tricksLayout = {title: {text: "Tricks Taken"}};
    console.log(tricksRanked);console.log(bidsRanked);
    Plotly.newPlot("tricksPie", tricksData, tricksLayout);
    document.getElementById('playing').innerHTML = innercontent;
    var trickComp = {
        x: playersRanked,
        y: tricksRanked,
        name: 'Tricks',
        type: 'bar'
    };
    var bidComp = {
        x: playersRanked,
        y: bidsRanked,
        name: 'Bids',
        type: 'bar'
    };
    var compData = [trickComp, bidComp];
    var compLayout = {barmode: 'group', title: {text: 'Tricks and Bids'}};
    Plotly.newPlot("trickBidComp", compData, compLayout);
       const bonusData = [{
        x: playersRanked,
        y: bonusRanked,
        type: 'bar',
        orientation: 'v'
    }];
    const bonusLayout = {title: {text: 'Bonus Points'}};
    Plotly.newPlot("bonusPlot", bonusData, bonusLayout);
    document.getElementById('plotsGraph').innerHTML = '<h2>Additional Statistics:</h2>'
    document.getElementById('restart').innerHTML = 'New Game'
}
function restart() {
    if (confirm('Are you sure you want to start a new game?') == true) {
        location.reload();
    }
}

if ("serviceWorker" in navigator) {
  console.log("Service workers supported");

  navigator.serviceWorker.register("../service-worker.js")
    .then((reg) => console.log("SW registered", reg))
    .catch((err) => console.error("SW registration failed", err));
} else {
  console.log("Service workers NOT supported");
}

