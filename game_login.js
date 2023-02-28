function addUser(){
    var player1_name=document.getElementById("player_1_name_input").value;
    var player2_name=document.getElementById("player_2_name_input").value;
    localStorage.setItem("player1", player1_name);
    localStorage.setItem("player2", player2_name);
    window.location="game_page.html";
}
// this function is for the first page, basically saving the usernames that were entered.