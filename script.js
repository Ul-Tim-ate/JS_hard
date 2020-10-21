'use strict';
function foo(a, b) {
	let answer;
	if (a === 1 || a === 21) {
		answer = ' час ';
		return answer;
	}
	if (a === 2 || a === 3 || a === 4 || a === 22 || a === 23) {
		answer =' часа ';
		return answer;
	}
	answer = ' часов ';
	return answer;
 }
let options = {
  month: 'long',
  day: 'numeric',
  weekday: 'long',
};
setInterval(function () {
	let date = new Date();
	document.write('Сегодня ', date.toLocaleString("ru", options), ' ', date.getFullYear(), ' годa, ', date.getHours(), ' ', foo(date.getHours(), 'час'), date.getMinutes(), ' минут ', date.getSeconds(), ' секунд ');
	document.write(date.toLocaleString());
	window.location.reload();
}, 1000);
