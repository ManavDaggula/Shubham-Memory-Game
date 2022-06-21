var sequence=[]
var input=[]
var score = 0;
var life=true;
function load_items(level){
    var play_board = document.getElementById('game-board');
    var selection_board = document.getElementById('level-container');
    var inner="";
    switch (level) {
        case 4: inner="<div class='item'></div><div class='item'></div><div class='item'></div><div class='item'></div>"
        play_board.style.gridTemplateColumns="1fr 1fr"
        break;
        case 9: inner="<div class='item'></div><div class='item'></div><div class='item'></div><div class='item'></div><div class='item'></div><div class='item'></div><div class='item'></div><div class='item'></div><div class='item'></div>"
        play_board.style.gridTemplateColumns="1fr 1fr 1fr"
        break;
        case 16: inner="<div class='item'></div><div class='item'></div><div class='item'></div><div class='item'></div><div class='item'></div><div class='item'></div><div class='item'></div><div class='item'></div><div class='item'></div><div class='item'></div><div class='item'></div><div class='item'></div><div class='item'></div><div class='item'></div><div class='item'></div><div class='item'></div>"
        play_board.style.gridTemplateColumns="1fr 1fr 1fr 1fr"
        break;
        default: console.log("Some error has occured.");
    }
    // selection_board.style.display='none';
    play_board.innerHTML=inner
    console.log("added items")
    life=true;
    while(life){
        // generate_sequence(level)
        console.log("sequence generated" + sequence)
        display_sequence()
        life=false;
    }
}
// load_items(1)

function generate_sequence(x){
    var next_number = Math.floor(Math.random()*x)
    sequence.push(next_number)
    console.log(sequence)
}
async function display_sequence(){
    var items = document.getElementById("game-board").children
    for(let i=0;i<sequence.length;i++){
        items[sequence[i]].style.background = "red"
        await sleep(1000)
        items[sequence[i]].style.background = "#106e9b"
        await sleep(1000)
    }    
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}