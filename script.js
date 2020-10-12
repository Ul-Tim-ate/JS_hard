'use strict';
let money = prompt('Ваш месячный доход?');
let income = 'репетиторство';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = 1000000;
let period = 12;
console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log('Период равен', period, 'месяцев');
console.log('Цель заработать', mission, 'тенге');
addExpenses.toLocaleLowerCase();
console.log(addExpenses.split(', '));

let budgetDay = money / 30;
console.log(budgetDay);


let expenses1, expenses2, amount1, amount2;
expenses1 = prompt('Введите обязательную статью расходов');
amount1 = prompt('Во сколько это обойдется?');
expenses2 = prompt('Введите обязательную статью расходов');
amount2 = prompt('Во сколько это обойдется?');
let budgetMounth = money - amount1 - amount2;
console.log('Бюджет на месяц:', budgetMounth);

console.log('До вашей цели:', Math.ceil(mission / budgetMounth), 'месяцев');

budgetDay = budgetMounth / 30;
console.log('Бюджет на день:', Math.floor(budgetDay));

if (budgetDay >= 1200) {
	console.log('У вас высокий уровень дохода');
}else if (budgetDay >= 600) {
	console.log('У вас средний уровень дохода');
}else if (budgetDay >= 0) {
	console.log('У вас низкий уровень дохода');
} else {
	console.log('Что-то пошло не так');
}

