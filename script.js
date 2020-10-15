'use strict';
function isNumber(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}
function start() {
	let flag = confirm('Угадай число от 1 до 100');
	let number = 25;
	function guess() {
		if (!flag) {
			alert('Игра закончилась так и начавшись!!!');
			return;
		}
		let answer = prompt('Введи число');
		if (answer === null) {
			alert('Игра окончена');
			return;
		}
		if (!isNumber(answer)) {
			guess();
		}
		answer = parseFloat(answer);
		if (answer > number) {
			alert('Загаданное число меньше');
			guess();
		}
		if (answer < number) {
			alert('Загаданное число больше');
			guess();
		}
		if (answer === number) {
			alert('Поздравляю, Вы угадали!!!');
			return;
		}
	}
	return guess;
}


let a = start();
a();
