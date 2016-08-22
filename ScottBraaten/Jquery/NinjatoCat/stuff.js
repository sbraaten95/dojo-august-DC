function untilDub() {
	var die = Math.floor((Math.random() * 20) + 1);
	var lastdie = 0;
	var count = 0;
	var min = 21;
	var max = 0;
	var sum = 0;
	var avg = 0;

	console.log(die);

	while (die != lastdie) {
		count++;
		if (die < min) {
			min = die;
		}
		if (die > max) {
			max = die;
		}
		sum += die;
		lastdie = die;
		die = Math.floor((Math.random() * 20) + 1);
	}

	avg = sum / count;
	console.log("Two rolls in a row!\n");
	console.log("Number of rolls: " + count + "\nMin: " + min + "\nMax: " + max + "\nAverage: " + avg);
}

untilDub();