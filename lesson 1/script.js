var budget = 100;//prompt('Ваш бюджте?');
var storeName = 'Мой магазин';//prompt('Название вашего магазина?');

mainList = {
	budget: budget,
	storeName: storeName,
	shopGoods: [],
	employers: {},
	open: true
}

for (let i = 1; i <= 1; i++) {
	let a = 'Товар' + i;//prompt('Какой тип товаров будем продавать?');
	console.log(typeof(a));
	if (typeof(a) === 'string' && (typeof(a) != null && a != '' && a.length < 50)) {
		console.log('Все верно!');
		mainList.shopGoods[i] = a;
	} else {
		console.log('Ошибка ввода!');
		i--;
	}
};

console.log(mainList);

var budgetDay = budget / 30;
// console.log('Бюджет на день: ' + budgetDay + 'р');