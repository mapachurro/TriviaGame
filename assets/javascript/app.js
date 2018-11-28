$(document).ready(function () {

    //The object containing the questions that we will be deploying:
    var Questions = {
        questionArray: [
            {
                Question: "What is anarcho-syndicalism?",
                Answer1: "A sort of commune where you elect a sort of executive officer of the week",
                Answer2: "A kind of anarchism that's set up in cells part of a larger whole",
                Answer3: "The belief that anarchical organizing of the working class will help lead to broader societal revolution",
                Correct: 3,
            },
            {
                Question: "Which English-speaking author documented up-close the realities of life in pre-dictatorship Catalunya?",
                Answer1: "Orwell",
                Answer2: "Hemingway",
                Answer3: "Fitzgerald",
                Correct: 1,
            },
            {
                Question: "Which method does anarcho-syndicalism most clearly embrace?",
                Answer1: "Representative democratic voting",
                Answer2: "The overthrow en masse of the bourgeoise",
                Answer3: "Direct action by the workers",
                Correct: 3,
            },
            {
                Question: "What main color do anarchists use in their symbols?",
                Answer1: "Black",
                Answer2: "Red",
                Answer3: "Yellow",
                Correct: 1,
            },
            {
                Question: "What animal is associated with the Industrial Workers of the World?",
                Answer1: "A hawk",
                Answer2: "A cat",
                Answer3: "A wolverine",
                Correct: 2,
            },
        ]
    }

    //The array of correct answers:
    var correct = [3, 1, 3, 1, 2,];

    //The array into which the user's answers will be placed:
    var userAnswers = [];

    //The array into which the user's correct answers will be placed:
    var correctUserAnswers = [];

    //Additional variables that will be needed:
    var questionIndex = [0];
    var time = 21;
    var correctAlert = "Correct!"

    //Gameplay itself. First, the initial click:
    $("#playButton").on("click", function () {
        $("#instructions").empty();
        $("#quizCard").css({ "visibility": "visible" })
        run();
        questionLoop();
    })

    //Then, subsequent questions. This is what happens when user inputs an answer:
    $("#answer1").on("click", function () {
        userAnswers.push(1);
        eachAnswer();
        answerLoop();
    })

    $("#answer2").on("click", function () {
        userAnswers.push(2);
        eachAnswer();
        answerLoop();
    })

    $("#answer3").on("click", function () {
        userAnswers.push(3);
        eachAnswer();
        answerLoop();
    })
    //  When the stop button gets clicked, run the stop function.
    $("#nextButton").on("click", stop());

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
            alert("Time's Up! The correct answer is: " + Questions.questionArray[questionIndex][correctIndex]);
        }
    }

    //The 'stop' function needs to be available globally, so here it is:
    function stop() {
        //  Clears our intervalId
        //  We just pass the name of the interval to the clearInterval function.
        clearInterval(intervalId);
        console.log("done");
    }

    //This is the behavior for when a radio button (answer) is clicked.
    //It was originally all together with the radio buttons, but in order for different
    //values to be put into the userAnswers array when different answers are clicked
    //(ie 1 vs 2 vs 3), this behavior had to be isolated.

    function answerLoop() {
        if (questionIndex < 4) {
            //First, clear out the html:
            $("#question").empty();
            $("#answer1").empty();
            $("#answer2").empty();
            $("#answer3").empty();

            //Stop the timer
            stop();
            //Then, increase the question index to move on to the next question:
            console.log("Mr. Hammond, the radio buttons are working");
            questionIndex++;
            console.log("question index " + questionIndex);
            console.log("user answers" + userAnswers);
            //And load the next question:
            questionLoop();
            //Reset time to 20
            time = 21;
            //Start the timer: 
            run();
        }
        else {
            scoreEvaluate();
            stop();
        }
    }

//The function for evaluating whether each individual answer is correct or not.

//First, we need to get the index of the question.
//Then, check to see whether the answer given matches the answer provided in the correct answer array at the correct index.
function eachAnswer() {
    if (Questions.questionArray[questionIndex].Correct == userAnswers[questionIndex])
    //If so, print a message to the scren re: correct or not, and move on. Or make it an alert, whatevs
    alert("Correct!")

    //If not, then alert regarding the fact that it's incorrect, 
    else {
        correctIndex = ("Answer" + Questions.questionArray[questionIndex].Correct);
        console.log(correctIndex);
        alert("Sorry, the correct answer is: " + Questions.questionArray[questionIndex][correctIndex]);
    }
}


    //The function for evaluating the total score.
    function scoreEvaluate() {
        for ( i = 0; i < userAnswers.length; i++) {
            const element = userAnswers[i];
                if (element == correct[i]) {
                    correctUserAnswers.push(element);
                    console.log(correctUserAnswers)   
                }
        }
                if (correctUserAnswers.length == 5) {
                    alert("YOU GOT A PERFECT SCORE! HASTA LA VICTORIA SIEMPRE!")
                    stop();    
                }
                else{ 
                    // amtCorrect();
                    alert("ONWARD COMRADE, you got " + correctUserAnswers.length + " out of 5 correct!")
                    stop();
                }    
    }        

    // Function for looping through the questions:
    function questionLoop() {
        //Set up the variables, within the limited scope of this function, for the present question:
        console.log("at beginning of loop, question index is " + questionIndex);
        const question = Questions.questionArray[questionIndex].Question;
        const answer1 = Questions.questionArray[questionIndex].Answer1;
        const answer2 = Questions.questionArray[questionIndex].Answer2;
        const answer3 = Questions.questionArray[questionIndex].Answer3;

        //Then fill the html with those variables:
        var thisQuestion = $('<h2>' + question + '</h2>');
        thisQuestion.appendTo("#question");
        var radioBtn1 = $('<input type="radio" name="rbtnCount">' + answer1 + '</>');
        radioBtn1.appendTo('#answer1');
        var radioBtn2 = $('<input type="radio" name="rbtnCount">' + answer2 + '</>');
        radioBtn2.appendTo('#answer2');
        var radioBtn3 = $('<input type="radio" name="rbtnCount">' + answer3 + '</>');
        radioBtn3.appendTo('#answer3');
    }
})