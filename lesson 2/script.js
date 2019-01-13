var budget = 100;//prompt('Ваш бюджте?');
var storeName = 'Мой магазин';//prompt('Название вашего магазина?');
var time = 19;

mainList = {
	budget: budget,
	storeName: storeName,
	shopGoods: [],
	employers: {},
	open: true
}


for (let i = 0; i < 3; i++) {
	let a = 'Товар';//prompt('Какой тип товаров будем продавать?');
	if (typeof(a) === 'string' && (typeof(a) != null && a != '' && a.length < 50)) {
		console.log('Все верно!');
		mainList.shopGoods[i] = a;
	} else {
		console.log('Ошибка ввода!');
		i--;
	}
};


//While
// var i = 0;
// while (i < 3) {
// 	let a = 'Товар';//prompt('Какой тип товаров будем продавать?');

// 	if (typeof(a) === 'string' && (typeof(a) != null && a != '' && a.length < 50)) {
// 		console.log('Все верно!');
// 		mainList.shopGoods[i] = a;
// 	} else {
// 		console.log('Ошибка ввода!');
// 		i--;
// 	}

// 	i++;
// }


//Do while
// var i = 0;
// do {
// 	let a = 'Товар';//prompt('Какой тип товаров будем продавать?');

// 	if (typeof(a) === 'string' && (typeof(a) != null && a != '' && a.length < 50)) {
// 		console.log('Все верно!');
// 		mainList.shopGoods[i] = a;
// 	} else {
// 		console.log('Ошибка ввода!');
// 		i--;
// 	}

// 	i++;
// }

// while (i < 3);


if (time < 0) {
	console.log('Время работы магазина не может быть отрицательным');
} else if (time > 8 && time < 20) {
	console.log('Магазин работает');
} else if (time < 24) {
	console.log('Магазин закрыт');
} else {
	console.log('Время работы магазина не может быть больше 24');
}

console.log(mainList);

var budgetDay = budget / 30;
console.log('Бюджет на день: ' + budgetDay + 'р');