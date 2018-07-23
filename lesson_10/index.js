const myAge = 18;
let  wordmyAge = "лет";

if ((myAge % 10) >= 5 || myAge == 0 || (myAge % 100 >= 5 && myAge % 100 <= 19)) {
	wordmyAge = "лет";
}

if (( myAge % 10 ) == 1) {
	wordmyAge = "год";
}

else if ((myAge % 10) >= 2 && (myAge % 10) <= 4) {
	wordmyAge = "года"
}

console.log (`Мой возраст ${myAge} ${wordmyAge}`);
