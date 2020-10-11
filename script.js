let money = 250000;
let income = 'репетиторство';
let addExpenses = 'Оплата жилья, продукты, интернет';
let deposit = true;
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