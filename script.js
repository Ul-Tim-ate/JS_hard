'use strict';
let lang = document.documentElement.lang;
if (lang === 'ru') {
	console.log('Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
}
if (lang === 'en') {
	console.log('Monday, tuesday, wednesday, thursday, friday, saturday, sunday');
}

switch (lang) {
	case 'ru':
		console.log('Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
		break;
	case 'en':
		console.log('Monday, tuesday, wednesday, thursday, friday, saturday, sunday');
		break;
}
const myMap = new Map();
myMap.set('ru', 'Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
myMap.set('en', 'Monday, tuesday, wednesday, thursday, friday, saturday, sunday');
console.log(myMap.get(lang));

let namePerson = 'чмо';
namePerson === 'Артём' ? console.log('Директор') : namePerson === 'Максим' ? console.log('Преподаватель') : console.log('Студент');