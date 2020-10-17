'use strict';
let week = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
let now = new Date();
const div = document.createElement('div');
for (const key in week) {
	if (week.hasOwnProperty(key)) {
		if (+key === now.getDay()) {
			week[key] = week[key].bold();
			continue;
		}
		if (key === '6' || key ==='0') {
			week[key] = week[key].italics();
		}
	}
}
for (let i = 0; i < 7; i++) {
	document.write(week[i], '<br \/>');
}
