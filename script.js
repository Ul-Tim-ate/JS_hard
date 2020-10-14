'use strict';
function showTypeOf(data) {
	console.log(data, typeof data);
}
function getExpensesMonth(amount1, amount2) { 
	return amount1 + amount2;
}
function getAccumulatedMonth(income_, amount1_, amount2_, callback) {
	return income_ - callback(amount1_, amount2_);
}
function getTargetMonth(accumulatedMonth_, mission_) {
	return Math.ceil(mission_ / accumulatedMonth_);
}
function getStatusIncome(budgetDay_) { 
		if (budgetDay_ >= 1200) {
		return 'У вас высокий уровень дохода';
	}else if (budgetDay_ >= 600) {
		return 'У вас средний уровень дохода';
	}else if (budgetDay_ >= 0) {
		return 'У вас низкий уровень дохода';
	} else {
		return 'Что-то пошло не так';
	}
}
//все функции
let money = +prompt('Ваш месячный доход?');
let income = 'репетиторство';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = 1000000;
let period = 12;
let expenses1, expenses2, amount1, amount2;
//объявление всех переменных
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);
addExpenses.toLocaleLowerCase();
console.log(addExpenses.split(', '));
expenses1 = prompt('Введите обязательную статью расходов');
amount1 = +prompt('Во сколько это обойдется?');
expenses2 = prompt('Введите обязательную статью расходов');
amount2 = +prompt('Во сколько это обойдется?');
let accumulatedMonth = getAccumulatedMonth(money, amount1, amount2, getExpensesMonth);
let budgetDay = Math.floor(accumulatedMonth / 30);
console.log(getExpensesMonth(amount1, amount2));
console.log(getTargetMonth(accumulatedMonth, mission));
console.log('Бюджет на день:', Math.floor(budgetDay));
console.log(getStatusIncome(budgetDay));



