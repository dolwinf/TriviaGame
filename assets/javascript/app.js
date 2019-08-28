var array = [
	{
		question: "Whats the capital of NSW?",
		options: ["Sydney", "Melbourne", "Perth", "Canberra"],
		answer: "Sydney"
	},

	{
		question: "What is the estimated population of Australia as of 2019",
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
			"Which prime minister from the UK joined the war on terror with President Bush in 2001",
		options: [
			"Tony Blair",
			"Boris Johnson",
			"Theresa May",
			"Margaret Thatcher"
		],
		answer: "Tony Blair"
	},

	{
		question: "What is the capital of Angola",
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
		question: "Who was the first non-caucasian president of the United States",
		options: [
			"Barack Obama",
			"Hillary Clinton",
			"Dwayne Johnson",
			"Pamela Anderson"
		],
		answer: "Barack Obama"
	},

	{
		question: "Which of these countries is not in South America",
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
var time = 1;
var nextQuestion = 0;

var timerDiv = $("#timer");
var table = $("#table");
timerDiv.append("<h1>Time remaining:" + time + "</h1>");

function newQuestion() {
	var question = array[nextQuestion].question;
	var options = array[nextQuestion].options;
	var answer = array[nextQuestion].answer;
	table.empty();
	table.append("<p>" + question + "</p>");

	options.forEach(function(item) {
		table.append("<p>" + item + "</p>");
	});
}

function timer() {
	if (time !== 0 && nextQuestion < 11) {
		time--;
		timerDiv.empty();
		timerDiv.append("<h1>Time remaining:" + time + "</h1>");
	} else {
		timerDiv.empty();
		timerDiv.append("<h1>Time up! </h1>");
		time = 1;
		nextQuestion++;
		if (nextQuestion < 11) {
			newQuestion();
		} else {
			table.empty();
			table.append("<p>Game over!</p>");
		}
	}
}

setInterval(timer, 1000);
