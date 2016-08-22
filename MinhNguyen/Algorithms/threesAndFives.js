function threesAndFive(start,end){
	for (var i = start; i<=end; i++){
		var sum = 0;
		if (i % 15 != 0){
			if (i % 3 == 0 || i % 5 == 0){
				sum += i;
			}
		}
	}
	console.log(sum)
}

module.exports = threesAndFive