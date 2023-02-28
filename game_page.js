var player1= localStorage.getItem("player1");
var player2 = localStorage.getItem("player2");
//receiving the player usernames which were stored in localstorage after the function in the game_login.js
var player1_score=0;
var player2_score=0;
//resetting the scores to 0
document.getElementById("player1").innerHTML=player1 + " : ";
document.getElementById("player2").innerHTML=player2 + " : ";
//this is the score display, this is basically just displaying the players name and a colon, because the score number is displayed in a seperate tag
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
//score number tag setting
document.getElementById("player_question").innerHTML="Question Turn - " + player1;
document.getElementById("player_answer").innerHTML="Answer Turn - " + player2;
//displaying which players turn it is
function send(){
get_word=document.getElementById("Word").value;
word=get_word.toLowerCase();
c1=word.charAt(1);
length_divide_2=Math.floor(word.length/2);
c2=word.charAt(length_divide_2);
length_minus_1=word.length-1;
c3=word.charAt(length_minus_1);

remove_c1=word.replace(c1,"_");
remove_c2=remove_c1.replace(c2,"_");
remove_c3=remove_c2.replace(c3,"_");
//getting 3 characters of the word that will not be displayed as underscores, rather as the letter so it's easier to guess the word,
//as theres only one chance given. 

question_word="<h4 id='question_word'> Question: "+remove_c3+"</h4>";
input_box="<br> Answer: <input type='text' id='input_check_box'>";
check_button="<br> <br> <button class='btn btn-info' onclick='check()'> Check </button>";
row= question_word+input_box+check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("Word").value="";
}
//making tags in the JS showing the word that has to be guessed and an input tag to answer, then the button tag to check the answer

answer_turn="Player 2";
question_turn="Player 1";

function check(){
    var get_answer = document.getElementById("input_check_box").value;
    var answer= get_answer.toLowerCase();
console.log(word);
console.log(answer);
//logging the word and the answer to the console just to check that the code got this far while debugging, also setting the answer to lowercase as the word was already set to lowercase,
//because then it doesn't have to be case sensitive when typing, because both the word and the answer are set to lowercase, so when checking the answer i don't have to check to see if any letter was capitalised
    if (word==answer){

        if (answer_turn=="Player 2"){
        player2_score=player2_score+1;
    document.getElementById("player2_score").innerHTML=player2_score;

}
else{

    player1_score=player1_score+1;
    document.getElementById("player1_score").innerHTML=player1_score;

    
}
//basically checking if the answer was the word put in and whos turn it was
    }

    if (answer_turn=="Player 1"){

        answer_turn="Player 2";
        document.getElementById("player_answer").innerHTML="Answer Turn- "+player2;
        
    }
    //changing the answer turn  for each person and displaying it too on the answer turn HTML tag
    else{

        answer_turn="Player 1";
        document.getElementById("player_answer").innerHTML="Answer Turn- "+player1;
    }

    if (question_turn=="Player 1"){

        question_turn="Player 2";
        document.getElementById("player_question").innerHTML="Question Turn- "+player2;
    }
    else{

        question_turn="Player 1";
        document.getElementById("player_question").innerHTML="Question Turn- "+player1;
    }
 //changing the question turn for each person and displaying it on the question turn HTML tag as well
    document.getElementById("output").innerHTML="";

}

