const arr1 = [1, 13, -3, 0];
  let sum = 0;
  let result;

 for (let i = 0; i < arr1.length; i++) {
 	sum += arr1[i];
 } 

     console.log(`${sum}`);

     console.log(`${sum}` / `${arr1.length}`);

     console.log(Math.min.apply(null, arr1));

     console.log(Math.max.apply(null, arr1));


const obj1 = { from: 1, to: 4, value: [4, 5, 12, 7, 5, 4], ignore: [2] };
let sort1 = obj1['value'], sort2 = [];

	for (i = obj1['from']; i <= obj1['to']; i++) {
		if (i == obj1['ignore']) continue;
		sort2.push(sort1[i]);
	}
	console.log(sort2.join(', '))