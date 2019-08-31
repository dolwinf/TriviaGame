var array = [
	{
		question: "Whats the capital of NSW?",
		options: ["Sydney", "Melbourne", "Perth", "Canberra"],
		answer: "Sydney"
	},

	{
		question: "What is the estimated population of Australia as of 2019?",
		options: ["10 million", "20 million", "25 million", "60 million"],
		answer: "25 million"
	},

	{
		question:
			"Who was the president of the United States of America during the invasion of IRAQ in 2003?",
		options: ["George W Bush", "Donald Trump", "Martin Luther", "Ronald Regan"],
		answer: "George W Bush"
	},

	{
		question:
			"Which prime minister from the UK joined the war on terror with President Bush in 2001?",
		options: [
			"Tony Blair",
			"Boris Johnson",
			"Theresa May",
			"Margaret Thatcher"
		],
		answer: "Tony Blair"
	},

	{
		question: "What is the capital of Angola?",
		options: ["Bengo", "Luanda", "Cabinda", "Cuando Cubango"],
		answer: "Luanda"
	},

	{
		question: "What is the capital of South Australia?",
		options: ["Sydney", "Melbourne", "Adelaide", "Perth"],
		answer: "Adelaide"
	},

	{
		question:
			"Which of these countries was successful in sending a satellite into Mars orbit in their first attempt?",
		options: ["America", "China", "India", "Russia"],
		answer: "India"
	},

	{
		question: "Who was the first non-caucasian president of the United States?",
		options: [
			"Barack Obama",
			"Hillary Clinton",
			"Dwayne Johnson",
			"Pamela Anderson"
		],
		answer: "Barack Obama"
	},

	{
		question: "Which of these countries is not in South America?",
		options: ["Brazil", "Argentina", "Portugal", "Chile"],
		answer: "Portugal"
	},

	{
		question: "How many meters is 1 kilomter?",
		options: ["1000", "10000", "150000", "3000"],
		answer: "1000"
	},

	{
		question: "Which is these religions are non Abrahamic?",
		options: ["Christianity", "Buddihsm", "Islam", "Jewish"],
		answer: "Buddhism"
	}
];
var time = 30;
var nextQuestion = 0;
var correctAnswers = 0;
var wrongAnswers = 0;

var startGame = $(".startGame");
var timerDiv = $("#timer");
var table = $("#table");
timerDiv.append(
	"<h1 class='questions' style='color:#6A6AE9'>Welcome to the Quiz. You'll be given 11 questions with a 30 second time frame to answer each question. Let's see what you've got. Click the Start Game button to proceed. </h1>"
);

function displayNewQuestion() {
	var question = array[nextQuestion].question;
	var options = array[nextQuestion].options;
	var answer = array[nextQuestion].answer;
	table.empty();
	table.append("<p class='questions'>" + question + "</p>");

	options.forEach(function(item) {
		table.append(
			"<li class='list-group-item list-group-item-action list-group-item-light' style='font-size:1.5em'>" +
				item +
				"</li>"
		);
	});
	$("li").on("click", function(e) {
		if (e.currentTarget.innerHTML === answer) {
			correctAnswers++;

			displayNewQuestion();
			time = 0;

			timerDiv.html(
				"<h1 class='questions' style='color:#6A6AE9'>Time remaining: " +
					time +
					" </h1>"
			);
		} else {
			wrongAnswers++;

			displayNewQuestion();
			time = 0;

			timerDiv.html(
				"<h1 class='questions' style='color:#6A6AE9'>Time remaining: " +
					time +
					" </h1>"
			);
		}

		console.log(
			"Correct answers",
			correctAnswers,
			"Wrong answers",
			wrongAnswers
		);
	});
}

function timer() {
	if (time !== 0 && nextQuestion < 11) {
		time--;

		timerDiv.html(
			"<h1 class='questions' style='color:#6A6AE9'>Time remaining: " +
				time +
				" </h1>"
		);
	} else {
		time = 30;
		nextQuestion++;
		if (nextQuestion < 11) {
			displayNewQuestion();
		} else {
			table.empty();
			table.append("<p class='results'>Game over!</p>");
			table.append(
				"<p class='results'>Correct Answers: " + correctAnswers + "</p>"
			);
			table.append(
				"<p class='results'>Wrong Answers: " + wrongAnswers + "</p>"
			);
			table.append(
				"<button class='btn btn-primary restartGame'>Restart Game</button>"
			);
			$(".restartGame").on("click", function() {
				window.location.reload();
			});
			$(".startGame").remove();
		}
	}
}

startGame.on("click", function() {
	timerDiv.html(
		"<h1 class='questions' style='color:#6A6AE9'>Time remaining: " +
			time +
			" </h1>"
	);
	$(".startGame").remove();
	displayNewQuestion();

	setInterval(timer, 1000);
});
