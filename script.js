
function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var correct = 0;


	if (question1 == "port au prince") {
		correct++;
}
	if (question2 == "Jean-Jacques Dessalines") {
		correct++;
}
	if (question3 == "Black & Red") {
		correct++;
	}

	var pictures = ["img/haiti.gif", "img/lose.gif","img/download.jpeg"];
	var messages = ["Great job!",  "You really need to do better","Read a book"];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 3) {
		score = 1;
	}

	if (correct == 3) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
	}
