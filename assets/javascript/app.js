// questionArray is an array of 10 questions each with 1 correct answer, 3 incorrect answers and an image location.

var questionArray = [];

questionArray[0] = {
	question: "The star of this movie earned $15 million for speaking only 700 words of dialogue.",
	answers: [
		"<div class='correct'>Terminator 2: Judgment Day</div>",
		"<div class='incorrect'>Cast Away</div>",
		"<div class='incorrect'>The Good, the Bad and the Ugly</div>",
		"<div class='incorrect'>Under the Skin</div>",
	],
	answerImage: "<img src='assets/images/terminator.gif' />",
	movie: "Terminator 2: Judgment Day"
};
	
questionArray[1] = {
	question: "When this movie was released, recruitment into the US Navy went up by 500%",
	answers: [
		"<div class='correct'>Top Gun</div>",
		"<div class='incorrect'>Crimson Tide</div>",
		"<div class='incorrect'>A Few Good Men</div>",
		"<div class='incorrect'>Pearl Harbor</div>",
	],
	answerImage: "<img src='assets/images/topGun.gif' />",
	movie: "Top Gun"
}

questionArray[2] = {
	question: "This was the first movie ever given the title 'Blockbuster'",
	answers: [
		"<div class='correct'>Jaws</div>",
		"<div class='incorrect'>Star Wars</div>",
		"<div class='incorrect'>The Poseidon Adventure</div>",
		"<div class='incorrect'>Lawrence of Arabia</div>",
	],
	answerImage: "<img src='assets/images/jaws.gif' />",
	movie: "Jaws"
}

questionArray[3] = {
	question: "Fox Plaza, 20th Century Fox's headquarters was the setting for this movie.",
	answers: [
		"<div class='correct'>Die Hard</div>",
		"<div class='incorrect'>The Towering Inferno</div>",
		"<div class='incorrect'>Metropolis</div>",
		"<div class='incorrect'>Safety Last!</div>",
	],
	answerImage: "<img src='assets/images/dieHard.gif' />",
	movie: "Die Hard"
}
	
questionArray[4] = {
	question: "Despite being the highest rated movie on IMDB, this movie did not win a single Academy Award or Golden Globe.",
	answers: [
		"<div class='correct'>The Shawshank Redemption</div>",
		"<div class='incorrect'>The Godfather</div>",
		"<div class='incorrect'>Pulp Fiction</div>",
		"<div class='incorrect'>12 Angry Men</div>",
	],
	answerImage: "<img src='assets/images/shawshank.gif' />",
	movie: "The Shawshank Redemption"
}
	
questionArray[5] = {
	question: "This movie is based on the novel tilted 'Do Androids Dream of Electric Sheep?'",
	answers: [
		"<div class='correct'>Blade Runner</div>",
		"<div class='incorrect'>Ex Machina</div>",
		"<div class='incorrect'>I, Robot</div>",
		"<div class='incorrect'>Short Circuit</div>",
	],
	answerImage: "<img src='assets/images/bladeRunner.gif' />",
	movie: "Blade Runner"
}

questionArray[6] = {
	question: "William H. Macy threatened to shoot the director's dog if he didn't him one of the lead roles in this film.<br>He was joking about shooting the dog of course.",
	answers: [
		"<div class='correct'>Fargo</div>",
		"<div class='incorrect'>Magnolia</div>",
		"<div class='incorrect'>Jurassic Park III</div>",
		"<div class='incorrect'>Thank You for Smoking</div>",
	],
	answerImage: "<img src='assets/images/fargo.gif' />",
	movie: "Fargo"
}
	
questionArray[7] = {
	question: "The tagline of this movie is 'Be afraid. Be very afraid'",
	answers: [
		"<div class='correct'>The Fly</div>",
		"<div class='incorrect'>The Thing</div>",
		"<div class='incorrect'>Scream</div>",
		"<div class='incorrect'>A Nightmare on Elm Street</div>",
	],
	answerImage: "<img src='assets/images/theFly.gif' />",
	movie: "The Fly"
}
	
questionArray[8] = {
	question: "This was the first American film to show a toilet flushing on screen.",
	answers: [
		"<div class='correct'>Psycho</div>",
		"<div class='incorrect'>Dr. No</div>",
		"<div class='incorrect'>Easy Rider</div>",
		"<div class='incorrect'>The Parent Trap</div>",
	],
	answerImage: "<img src='assets/images/psycho.gif' />",
	movie: "Psycho"
}
	
questionArray[9] = {
	question: "While this movie is based on a play, Alec Baldwin's character was written specifically for the movie.",
	answers: [
		"<div class='correct'>Glengarry Glen Ross</div>",
		"<div class='incorrect'>Beetlejuice</div>",
		"<div class='incorrect'>Mercury Rising</div>",
		"<div class='incorrect'>State and Main</div>",
	],
	answerImage: "<img src='assets/images/glengarry.gif' />",
	movie: "Glengarry Glen Ross"
}

var tempQuestionArray = [];
tempQuestionArray  = tempQuestionArray.concat(questionArray);

var tempAnswers;
var answers;
var arrayLength;
var countCorrectAnswers = 0;
var countIncorrectAnswers = 0;
var countUnanswered = 0;
var picture;
var startTimer;
var countTimer = 15;
var intervalVar;
var movieTitle;

// The randomQuestion function randomizes the order of the questions.

function randomQuestion(){
	countTimer = 15;
	$("#timer").html("Time left: " + countTimer + " seconds");
	startTimer = setTimeout(unanswered, 15000);
	intervalVar = setInterval(timer, 1000);
	$("#start").empty();
	$("#picture").empty();
	var i = Math.floor((Math.random() * tempQuestionArray.length));
 	answers = tempQuestionArray[i].answers;
 	movieTitle = tempQuestionArray[i].movie;
 	picture = tempQuestionArray[i].answerImage;
 	arrayLength = tempQuestionArray.length;
 	$("#response").empty();
 	$("#question").html(tempQuestionArray[i].question + "<br>");
 	tempQuestionArray.splice(i,1);
	randomAnswer(answers);
}

// The randomAnswer function randomizes the order of the answers.

function randomAnswer(answerArray){
	var tempArray = [];
	tempArray = tempArray.concat(answerArray);
	var a = 1;
  	while(tempArray.length > 0){
    	var n = Math.floor((Math.random() * tempArray.length));
        $("#answer"+a).html(tempArray[n]);
        tempArray.splice(n,1);
        a++;
  	}
};

// Function displays when the incorrect answer is selected.

function wrongAnswer(){
	clearTimeout(startTimer);
	clearInterval(intervalVar);
	$("#timer").html("Time left: " + countTimer + " seconds");
	if(arrayLength === 1){
		setTimeout(gameOver, 5000);
		displayAnswer();
		$("#response").html("Wrong!<br>The correct answer is " + movieTitle);
		countIncorrectAnswers++;
	}
	else{
		setTimeout(randomQuestion, 5000);
		displayAnswer();
		$("#response").html("Wrong!<br>The correct answer is " + movieTitle);
		countIncorrectAnswers++;
	}
};

// Function displays when the correct answer is selected.

function correctAnswer(){
	clearInterval(intervalVar);
	clearTimeout(startTimer);
	$("#timer").html("Time left: " + countTimer + " seconds");
	if(arrayLength === 1){
		setTimeout(gameOver, 5000);
		displayAnswer();
		$("#response").html("Correct!");
		countCorrectAnswers++;
	}
	else{
		setTimeout(randomQuestion, 5000);
		displayAnswer();
		$("#response").html("Correct!");
		countCorrectAnswers++;
	}
};

// Function displays when no answer is selected.

function unanswered(){
	clearInterval(intervalVar);
	countTimer--;
	$("#timer").html("Time left: " + countTimer + " seconds");
	if(arrayLength === 1){
		setTimeout(gameOver, 5000);
		displayAnswer();
		$("#response").html("Times Up!<br>The correct answer is " + movieTitle);
		countUnanswered++;
	}
	else{
		setTimeout(randomQuestion, 5000);
		displayAnswer();
		$("#response").html("Times Up!<br>The correct answer is " + movieTitle);
		countUnanswered++;
	}
}

function gameOver(){
	$("#timer").empty();
	$("#question").html("Game Over!");
	$("#answer1").html("Correct Answers: " + countCorrectAnswers);
	$("#answer2").html("Wrong Answers: " + countIncorrectAnswers);
	$("#answer3").html("No Answers: " + countUnanswered);
	$("#answer4").empty();
	$("#response").empty();
	$("#picture").empty();
	$("#start").html("Start New Game");
	tempQuestionArray  = tempQuestionArray.concat(questionArray);
	countCorrectAnswers = 0;
	countIncorrectAnswers = 0;
	countUnanswered = 0;
}

function displayAnswer(){
	$("#answer1").empty();
	$("#answer2").empty();
	$("#answer3").empty();
	$("#answer4").empty();
	$("#picture").html(picture);
}

function timer(){
	countTimer--;
	$("#timer").html("Time left: " + countTimer + " seconds");
}

$("#start").on("click", randomQuestion);
$(document).on("click", ".incorrect", wrongAnswer);
$(document).on("click", ".correct", correctAnswer);

$("#start").html("Start");