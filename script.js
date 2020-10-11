let result = 1;
for (let num = 266219; num > 0; num /= 10 ) {
	const element = num % 10;
	num -= element;
	result *= element;
}
console.log(result);
result **= 3;

alert(result.toString()[0]);
alert(result.toString()[1]);