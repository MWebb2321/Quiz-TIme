//Timer
var questionHeader = document.getElementById("question");
var answerText = document.querySelectorAll(".choice-text");
var answersDiv = document.getElementById("answers");
var score = document.getElementById("score")
var index = 0;
var userScore = 100;
var timeEl = document.getElementById("timer");



answersDiv.addEventListener("click", function(event){
	if (event.target.matches("p")) {
		//change time
		console.log(event.target.textContent);
		//choiceindex finds the index number of the users selection
		var choiceIndex = questions[index-1].choices.indexOf(event.target.textContent);
		//score adjust, gets corresponding value in answers array
		var scoreAdjust = questions[index-1].answers[choiceIndex];
		userScore = userScore + scoreAdjust;
		console.log(userScore);
		qPopulate();
		}
})

function qPopulate() {
	questionHeader.textContent = questions[index].prompt;
	for (let i = 0; i < answerText.length; i++) {
		const element = answerText[i];
		element.textContent = questions[index].choices[i]
	}
	index++;
}

var targetNumber = 100;

var questions = [
	{
		prompt: "What color are apples?",
		choices: [
			"Red/Green",
			"Black",
			"Purple"
		],
		answers: [0, -10, -10]
	},
	{
		prompt: "What color is the sky?",
		choices: [
			"Blue",
			"Green",
			"Magenta"
		],
		answers: [0, -10, -10]
	},
	{
		prompt: "Where was the fortune cookie invented?",
		choices: [
			"New York",
			"San Francisco",
			"Seattle"
		],
		answers: [-10, 0, -10]
	},
	{
		prompt: "What was Marilyn Monroe's natural hair color?",
		choices: [
			"Brown",
			"Blonde",
			"Red"
		],
		answers: [-10, -10, 0]
	},
	{
		prompt: "How many bricks were used in the contruction of the Empire State Building?",
		choices: [
			"9 million",
			"10 million",
			"11 million"
		],
		answers: [-10, 0, -10]
	},
	{
		prompt: "Who composed the music for Sonic the Hedgehog 3?",
		choices: [
			"Michael Jackson",
			"Hans Zimmer",
			"John Williams"
		],
		answers: [0, -10, -10]
	},
	{
		prompt: "What sport has been played on the moon?",
		choices: [
			"Football",
			"Baseball",
			"Golf"
		],
		answers: [-10, -10, 0]
	},
	{
		prompt: "What is the highest-grossing holiday movie of all time?",
		choices: [
			"Home Alone",
			"Die Hard",
			"Frozen"
		],
		answers: [0, -10, -10]
	},
	{
		prompt: "Where was the world's first speeding ticket issued?",
		choices: [
			"America",
			"England",
			"France"
		],
		answers: [-10, 0, -10]
	},
	{
		prompt: "What do you call a group unicorns?",
		choices: [
			"A blessing",
			"A miracle",
			"A fiction"
		],
		answers: [0, -10, -10]
	}
	
]

var secondsLeft = 60;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
    }

  }, 1000);
}
//High Score Page
function showResponse(event) {
	event.preventDefault();
	console.log(event);
	var response = "Thank you for your submission " + nameInput.value + "!";
	submissionResponseEl.textContent = response;

qPopulate();
setTime();
submitEl.addEventListener("click", showResponse);