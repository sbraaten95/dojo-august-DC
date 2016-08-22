function generateCoinChange(cents) {
	var track = [[0,25], [0,10], [0,5], [0,1]];
	for (var i = 0; i < track.length; i++){
		track[i][0] = Math.floor(cents/track[i][1]);
		cents %= track[i][1];
	}

	document.write(cents + " cents can be represented by\n\tquarters: " + track[0][0]
		+ "\n\tdimes: " + track[1][0] + "\n\tnickels: " + track[2][0] + "\n\tpennies: "
		+ track[3][0]);
}

generateCoinChange(69);