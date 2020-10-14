'use strict';
let money = +prompt('Ваш месячный доход?');
let income = 'репетиторство';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = 1000;
let period = 12;
let expenses1 = prompt('Введите обязательную статью расходов'),
	 amount1 = +prompt('Во сколько это обойдется?'),
	 expenses2 = prompt('Введите обязательную статью расходов'),
	 amount2 = +prompt('Во сколько это обойдется?');
let accumulatedMonth;
let budgetDay;
//объявление всех переменных
function showTypeOf(data) {
	console.log(data, typeof data);
}
function getExpensesMonth() { 
	return amount1 + amount2;
}
function getAccumulatedMonth() {
	return money - getExpensesMonth();
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
//все функции
accumulatedMonth = getAccumulatedMonth();
budgetDay = Math.floor(accumulatedMonth / 30);
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);
addExpenses.toLocaleLowerCase();
console.log(addExpenses.split(', '));
console.log(getExpensesMonth());
console.log(getTargetMonth());
console.log('Бюджет на день:', Math.floor(budgetDay));
console.log(getStatusIncome());