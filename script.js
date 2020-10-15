'use strict';
function isNumber(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}
function start() {
	let count = 10;
	let flag = confirm('Угадай число от 1 до 100');
	let number = Math.floor(Math.random() * 100) + 1;
	function guess() {
		if (!flag) {
			alert('Игра закончилась так и начавшись!!!');
			return;
		}
		if (count === 0) {
			if (confirm('You lose, you get nothing!!! Хотите сыграть еще?')) {
				let temp = start();
				temp();
			}
			else { return; }
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
			alert('Загаданное число меньше, у вас осталось попыток ' + --count);
			guess();
		}
		if (answer < number) {
			alert('Загаданное число больше, у вас осталось попыток ' + --count);
			guess();
		}
		if (answer === number) {
			if (confirm('Поздравляю, Вы угадали!!! Хотите сыграть еще?')) {
				let temp = start();
				temp();
			}
			else { return; }
		}
	}
	return guess;
}


let a = start();
a();
