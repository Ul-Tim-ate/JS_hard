'use strict';
function isNumber(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}
let money;
let income = 'репетиторство';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = 1000;
let period = 12;
let expenses = [];
let accumulatedMonth;
let budgetDay;
//объявление всех переменных
function showTypeOf(data) {
	console.log(data, typeof data);
}
function getExpensesMonth() { 
	let sum = 0;
	let temp;
	for (let i = 0; i < 2; i++) {
		expenses[i] = prompt('Введите обязательную статью расходов');
		do {
			temp = +prompt('Во сколько это обойдется?');
		} while (!isNumber(temp));
		sum += temp;
	}
	console.log(expenses);
	return sum;
}

let expensesAmount = getExpensesMonth();

function getAccumulatedMonth() {
	return money - expensesAmount;
}
function getTargetMonth() {
	return Math.ceil(mission / accumulatedMonth);
}
function getStatusIncome() { 
		if (budgetDay >= 1200) {
		return 'У вас высокий уровень дохода';
	}else if (budgetDay >= 600) {
		return 'У вас средний уровень дохода';
	}else if (budgetDay >= 0) {
		return 'У вас низкий уровень дохода';
	} else {
		return 'Что-то пошло не так';
	}
}
function start() {
	do {
		money = prompt('Ваш месячный доход?');
	} while (!isNumber(money));
}
start();
//все функции
accumulatedMonth = getAccumulatedMonth();
budgetDay = Math.floor(accumulatedMonth / 30);
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);
addExpenses.toLocaleLowerCase();
console.log(addExpenses.split(', '));
console.log(expensesAmount);
if (getTargetMonth() > 0) {
	console.log('Цель будет достигнута через', getTargetMonth());
} else {
	console.log('Цель не будет достигнута');
}
console.log('Бюджет на день:', Math.floor(budgetDay));
console.log(getStatusIncome());