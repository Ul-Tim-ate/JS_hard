'use strict';
function lesson4(str) { 
	if (typeof str !== 'string') {
		alert('Sorry, your argument is not string');
		return "Error";
	}
	let str2 = str.replace(/(^\s+|\s+$)/g, '');
	if (str2.length > 30) {
		str2 = str2.substring(0, 30) + '...';
	}
	return str2;
}
let str = '     Шла  Саша                    ddasdasd    ';
console.log(lesson4(str), lesson4(str).length);




