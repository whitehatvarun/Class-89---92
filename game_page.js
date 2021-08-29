player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML = player1_name +":";
document.getElementById("player2_name").innerHTML = player2_name +":";


document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;


document.getElementById("player_question").innerHTML = "Question_turn -"+ player1_name;
document.getElementById("player_answer").innerHTML = "Answer_turn -"+ player2_name;

function send()
{
 get_word = document.getElementById("Word").value;
 lowercase_word = get_word.toLowerCase();
 console.log("word in lowercase" + lowercase_word);

 charAt1 = lowercase_word.charAt(1);
 console.log(charAt1);

 length_divide_2 =Math.floor(lowercase_word.length/2);
 charAt2 = lowercase_word.charAt(length_divide_2);
 console.log(charAt2);

 length_minus = lowercase_word.length-1;
 charAt3 = lowercase_word.charAt(length_minus);
 console.log(charAt3);

 remove_charAt1 = lowercase_word.replace(charAt1,"_");
 remove_charAt2 = remove_charAt1.replace(charAt2 , "_");
 remove_charAt3 = remove_charAt2.replace(charAt3 , "_");

 console.log(remove_charAt3);

 question_word = "<h4 id='word_display'> Q. "+remove_charAt3+"</h4>";
 input_Box = "<br> Answer: <input type='text' id='input_box'>";
 check_button = "<br><br> <button class='btn btn-success' onclick='check()'>Check</button>";
 row = question_word + input_Box + check_button;
document.getElementById("output").innerHTML= row;
document.getElementById("Word").value="";


}



question_turn = "player1";
answer_turn = "player2";

function check()
{

    get_answer = document.getElementById("input_box").value;
    answer= get_answer.toLowerCase();

    if(answer == lowercase_word)
    {
        if(answer_turn == "player1")
        {
            //Write code for if condition
            player1_score= player1_score+1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else
        {
            //Write the code for else condition
            player2_score= player2_score+1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
        
    }

   if(question_turn == "player1")
   {
       //Write code for if condition
       question_turn = "player2";
       document.getElementById("player_question").innerHTML = "Question Turn -"+ player2_name;
   }

   else
   {
       //Write code for else condition
       question_turn = "player1";
       document.getElementById("player_question").innerHTML = "Question Turn -"+ player1_name;
   }


   if(answer_turn == "player1")
   {
       //Write code for if condition
       answer_turn = "player2";
       document.getElementById("player_answer").innerHTML = "Answer Turn -"+ player2_name;
   }

   else
   {
       //Write code for else condition
       answer_turn = "player1";
       document.getElementById("player_answer").innerHTML = "Answer Turn -"+ player1_name;
   }

    document.getElementById("output").innerHTML ="";

}
