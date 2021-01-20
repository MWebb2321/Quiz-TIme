//Timer
var count = 15;
var interval = setInterval(function(){
  document.getElementById('count').innerHTML=count;
  count--;
  if (count === 0){
    clearInterval(interval);
    document.getElementById('count').innerHTML='Done';
    alert("Time is up!");
  }
}, 1000);

document.getElementById("next").addEventListener("click", nextQuestion)

var questions = [
	{
		prompt: "What color are apples?\n(a) Red/Green\n(b) Black\n(c) Purple",
		answer: "a"
	},
	{
		prompt: "What color are bananas?\n(a) Black\n(b) Blue\n(c) Yellow",
		answer: "c"
	},
	{
		prompt: "What color are straberries?\n(a) Yellow\n(b) Red\n(c) Blue",
		answer: "b"
	}
]
var score = 0;

	for(var i = 0; i < questions.length; i++){
		var response = window.prompt(questions[i].prompt);
	if (response == questions[i].answer) {
		score++;
		alert("Correct!");
	}	else {
		alert("Wrong!");
	}
}
alert("You got " + score + "/" + questions.length);