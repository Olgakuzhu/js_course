function itsMe(a = "Olgakuzhu"){
	let cont = "it's me, " + a;

   console.log(cont)
   return cont
}


//itsMe();

function compare (arg, arg2){
	let cont = arg + arg2;
	let num = "";

 if ( arg - arg2 > 0)
 	num = `${arg} > ${arg2}`;


 if (arg - arg2 == 0)
 	num = `${arg} == ${arg2}`;

 if (arg - arg2 < 0)
 	num = `${arg} < ${arg2}`;

 

 if (typeof arg != "number" || typeof arg2 != "number")
 	num = "не число"
return num
}

// console.log(compare(1,9))
// console.log(compare(8,8))
// console.log(compare(9,7))
// console.log(compare(4,6))


function row (a1, a2, a3, a4){
	let cont = [];

	for(let j = 0; j < 3; j++) {
		cont[j] = arguments[j];
	}
	cont.sort();

	if( a4 == "<"){
		console.log(cont.join("<"))
	}
	else if (a4 ==">"){
		cont.reverse();
		console.log(cont.join("<"))
	}
}
   //row(3, -4, 5, '<') 
   //row(3, -4, 5, '>')


   function fact(a) {
   	     let num = 1;
   	     for(let j = 1; j < a; j++){
   	     	num *= (j+1);
   	     }
   	     return num
   }
  // console.log(fact(0))
  //console.log(fact(4))
  //console.log(fact(5))

  function matrixDiff (arr1, arr2){
         let num1 = 0;
         let num2 = 0;
         let cont = 1;
         let cont2 = [];
         let result = 0;
         let result2 = 0;

      for(let j = 0; j < arr1.length; j++){
      	for(let i = 0; i < arr1[j].length; i++){
      		if(arr1[j].length != arr2[j].length)

      			return "NaN"
      		num1 = arr1[j][i]
      		num2 = arr2[j][i]

      		if(num1 - num2 < 0)
      			cont = -1;
      		cont2[result2] = (num1 - num2)* cont
      		result2++

      	}
      	//console.log(arr1)
      	//console.log(arr2)

      	cont2[j] = (arr1 - arr2)* cont
      } 
      for(let j = 0; j < cont2.length; j++){
       result += cont2[j]
      }
      //console.log(result)
      //console.log(cont2)
      return result
}
//console.log(matrixDiff([[2,3],[4,5]],[[2,1],[6]]))
  