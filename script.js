'use strict';
let arr = ["294034", "36452", "812523", "533421", "4354213", "235436356", "912134"];
for (let i = 0; i < arr.length; i++) {
	const element = arr[i];
	if (arr[i][0] === "2" || arr[i][0] === "4" ) {
		console.log(arr[i]);
	}
}
for (let i = 2; i < 100; i++) {
		let del;
		for (let j = 1; j <= i; j++) {
			if (i % j === 0 && j !== 1) {
				del = j;
				break;
			}
		}
		if (del === i) {
			console.log('Делители числа', del, ': 1 и', i);
		}
	}