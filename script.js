function load_items(level){
    var play_board = document.getElementById('game-board');
    var selection_board = document.getElementById('level-container');
    var inner="";
    switch (level) {
        case 1: inner="<div class='item'>1</div><div class='item'>1</div><div class='item'>1</div><div class='item'>1</div>"
        play_board.style.gridTemplateColumns="1fr 1fr"
        break;
        case 2: inner="<div class='item'>1</div><div class='item'>1</div><div class='item'>1</div><div class='item'>1</div><div class='item'>1</div><div class='item'>1</div><div class='item'>1</div><div class='item'>1</div><div class='item'>1</div>"
        play_board.style.gridTemplateColumns="1fr 1fr 1fr"
        break;
        case 3: inner="<div class='item'>1</div><div class='item'>1</div><div class='item'>1</div><div class='item'>1</div><div class='item'>1</div><div class='item'>1</div><div class='item'>1</div><div class='item'>1</div><div class='item'>1</div><div class='item'>1</div><div class='item'>1</div><div class='item'>1</div><div class='item'>1</div><div class='item'>1</div><div class='item'>1</div><div class='item'>1</div>"
        play_board.style.gridTemplateColumns="1fr 1fr 1fr 1fr"
        break;
        default: console.log("Some error has occured.");
    }
    selection_board.style.display='none';
    play_board.innerHTML=inner
    // alert("func called")
}
// load_items(1)