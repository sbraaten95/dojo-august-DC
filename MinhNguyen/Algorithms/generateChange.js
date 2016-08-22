function generateChange(change){
	var quarters = 0;
	var dimes = 0;
	var nickels = 0;
	var pennies = 0;
	var coins = [25, 10, 5, 1];
	var strings = ["Quarters", "Dimes", "Nickel", "Pennies"]
	var coinChange = []
	for( var i = 0; i < coins.length; i++){
		coinChange[i] = Math.floor(change/coins[i])
		change = change % coins[i]
	}
	for (var i = 0; i < coinChange.length; i++) {
		console.log(strings[i] +":"+ coinChange[i])
	}
	// console.log(coinChange);
	// quarters = Math.floor(change / 25);
	// change = change % 25;
	// dimes = Math.floor(change / 10);
	// change = change % 10;
	// nickels = Math.floor(change / 5);
	// change = change % 5;
	// pennies = change;

}

module.exports = generateChange