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

let days = ['en', 'ru'];
days[0] = ['Monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
days[1] = ['Понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
lang === 'en' ? console.log(days[0]) : console.log(days[1]);

let namePerson = 'чмо';
namePerson === 'Артём' ? console.log('Директор') : namePerson === 'Максим' ? console.log('Преподаватель') : console.log('Студент');