var first_variable = "Yipee I was first!";

console.log(first_variable);

function firstFunc() {
	first_variable = "Not anymore!!!";
	console.log(first_variable);
}

console.log(first_variable);

var food = "Chicken";
function eat() {
	food = "half-chicken";
	console.log(food);
	var food = "gone";       // CAREFUL!
	console.log(food);
}
eat();
console.log(food);

var new_word = "NEW!";
function lastFunc() {
  new_word = "old";
}
console.log(new_word);