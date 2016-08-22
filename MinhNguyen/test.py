def threesAndFive(start,end):
	for x in range(start, end):
		sum = 0
		if (x % 15 != 0):
			if (x % 3 == 0 or x % 5 == 0):
				sum += x
	print sum
threesAndFive(10, 30)