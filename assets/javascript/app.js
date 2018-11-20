

//When the player clicks 'play', the app will cycle through the questions.

//There will be three possible answers for each question, with tick boxes; only one answer
//can be chosen per question.

//There will have to be a way to determine whether the answer was correct or not.

//There will have to be counters for questions answered correctly and questions answered
//incorrectly, and counters for questions not answered--this can be a 'countdown' counter, for
//each question answered, it subtracts one.

//There will be a timer that runs a question and, when the time is up, moves on to another
//question. There should probably be a behavior where the player is notified that they ran out 
//of time.

//

$(document).ready(function () {


//The object containing the questions that we will be deploying:
    var Questions = {   
            Whatis: {
                Question: "What is anarcho-syndicalism?",
                Answer1: "A sort of commune where you elect a sort of executive officer of the week",
                Answer2: "A kind of anarchism that's set up in cells part of a larger whole",
                Answer3: "The belief that anarchical organizing of the working class will help lead to broader societal revolution",
            },
            Author : {
                Question: "Which English-speaking author documented up-close the realities of life in pre-dictatorship Catalunya?",
                Answer1: "Orwell",
                Answer2: "Hemingway",
                Answer3: "Fitzgerald",
            },
            Organization : {
                Question: "Which method does anarcho-syndicalism most clearly embrace?",
                Answer1: "Representative democratic voting",
                Answer2: "The overthrow en masse of the bourgeoise",
                Answer3: "Direct action by the workers",           
            },
            Colors : {
                Question: "What main color do anarchists use in their symbols?",
                Answer1: "Black",
                Answer2: "Red",
                Answer3: "Yellow",
            },
            Symbols : {
                Question: "What animal is associated with the Industrial Workers of the World?",
                Answer1: "A hawk",
                Answer2: "A cat",
                Answer3: "A wolverine",
            },
            
    }


    $("#playButton").on("click", function() {
        $("#instructions").css({"visibility": "hidden"});
        $("#quizCard").css({"visibility": "visible"})
        var time = 20;
        run();
        questionLoop();


//Below are functions that will be running during gameplay, such as the functions regarding
//the timeout, and then functions regarding the questions and answers.

    //  Variable that will hold our interval ID when we execute the "run" function
    var intervalId;
    //  The run function sets an interval that runs the decrement function once a second.
    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
      }
      //  The decrement function.
      function decrement() {
        //  Decrease number by one.
        time--;
        //  Show the number in the #show-number tag.
        $("#timer").html("<h2>" + time + "</h2>");
        //  Once number hits zero...
        if (time === 0) {
          //  ...run the stop function.
          stop();
          //  Alert the user that time is up.
          alert("Time Up!");
        }
      }
    //  When the stop button gets clicked, run the stop function.
    $("#nextButton").on("click", stop);

    function stop() {
        //  Clears our intervalId
        //  We just pass the name of the interval
        //  to the clearInterval function.
        clearInterval(intervalId);
        console.log("done");
        $("#time-left").append("<h2>Time's Up!</h2>");
        console.log("time is up");
      }

    //Function for looping through the questions:
      function questionLoop(){
          }
          for (let index = 0; index < Questions.length; index++) {
                const element = Questions[index];
                const question = Questions[index].Question;
                const answer1 = Questions[index].Answer1;
                const answer2 = Questions[index].Answer2;
                const answer3 = Questions[index].Answer3;

                $("#question").html(question);
                console.log(question);
                $("#answer1").html(answer1);
                $("#answer2").html(answer2);
                $("#answer3").html(answer3);
      
          }


      }
)




})
