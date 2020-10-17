'use strict';
let money;
function isNumber(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}
function start() {
	do {
		money = prompt('Ваш месячный доход?');
	} while (!isNumber(money));
}
start();
let appData = {
	income: {},
	addIncome: [],
	expenses: {},
	addExpenses: [],
	deposit: false,
	mission: 50000,
	peroid: 6,
	budget: money,
	budgetDay: 0,
	budgetMounth: 0,
	expensesMonth: 0,
	asking: function () {
		let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
		appData.addExpenses = addExpenses.toLocaleLowerCase().split(', ');
		appData.deposit = confirm('Есть ли у вас депозит в банке?');
		let sum = 0;
		let temp;
		for (let i = 0; i < 2; i++) {
			let costs = prompt('Введите обязательную статью расходов');
			do {
				temp = +prompt('Во сколько это обойдется?');
			} while (!isNumber(temp));
			appData.expenses[costs] = temp; 
			sum += temp;
			}
	},
	getExpensesMonth: function () { 
		for (let i  in  appData.expenses) {
			appData.expensesMonth += appData.expenses[i]; 
		}
	},
	getBudget: function () {
		appData.budgetMounth = appData.budget - appData.expensesMonth;
		appData.budgetDay = Math.floor(appData.budgetMounth / 30);
		return appData.budgetMounth;
	},
	getTargetMonth: function () {
		return Math.ceil(appData.mission / appData.budgetMounth);
	},
	getStatusIncome: function () { 
		if (appData.budgetDay >= 1200) {
			return 'У вас высокий уровень дохода';
		}else if (appData.budgetDay >= 600) {
			return 'У вас средний уровень дохода';
		}else if (appData.budgetDay >= 0) {
			return 'У вас низкий уровень дохода';
		} else {
			return 'Что-то пошло не так';
		}
	}
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
console.log('Расходы за месяц:', appData.expensesMonth);
if (appData.getTargetMonth() > 0) {
	console.log('Цель будет достигнута через', appData.getTargetMonth(), 'месяца');
} else {
	console.log('Цель не будет достигнута');
}
console.log(appData.getStatusIncome());

console.log('Наша программа включает в себя данные:');
for (const key in appData) {
	if (appData.hasOwnProperty(key)) {
		console.log(key, appData[key]);
	}
}