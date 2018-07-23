function add(arg) {
	sum = 0;

	if (arg) {
		for (let j = 0; j <arg.length; j++){

			//console.log(arg.charCodeAt(j));

			sum = sum + arg.charCodeAt(j)
		}
			}
	else {
		arg = "❤️🇺🇦";

sum = arg.charCodeAt(0) + arg.charCodeAt(1) + arg.charCodeAt(2) + arg.charCodeAt(3);		
	}

	return(sum / (arg.length) );

	// console.log(sum)
	// console.log(sum / arg.length)
	}
	// add ()


	