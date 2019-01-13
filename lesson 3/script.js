let budget,
		storeName,
		time,
		price;

mainList = {
	budget: budget,
	storeName: storeName,
	shopGoods: [],
	employers: {},
	open: true,
	discount: true,
	price: price
}

function start() {
	while (isNaN(budget) || budget == '' || budget == null) {
		budget = 100;//prompt('Ваш бюджте?');
	}

	storeName = 'Мой магазин'.toUpperCase();//prompt('Название вашего магазина?');
	time = 19;
	price = 1000;
}
start();


function chooseGoods() {
	for (let i = 0; i < 3; i++) {
		let a = 'Товар';//prompt('Какой тип товаров будем продавать?');
		if (typeof(a) === 'string' && (typeof(a) != null && a != '' && a.length < 50)) {
			mainList.shopGoods[i] = a;
		} else {
			console.log('Ошибка ввода!');
			i--;
		}
	};
}
chooseGoods();


function hireEmployers() {
	for (let i = 1; i <= 4; i++) {
		let a = 'Имя';//prompt('Введите имя нового сотрудника');
		if (typeof(a) === 'string' && (typeof(a) != null && a != '' && a.length < 50)) {
			mainList.employers[i] = a;
		} else {
			console.log('Ошибка ввода сотрудника!');
			i--;
		}
	};
}
hireEmployers();


function isDiscount() {
	if (mainList.discount == true) {
		mainList.price = price * 0.8;
	}

}
isDiscount();


function workTime(time) {
	if (time < 0) {
		console.log('Время работы магазина не может быть отрицательным');
	} else if (time > 8 && time < 20) {
		console.log('Магазин работает');
	} else if (time < 24) {
		console.log('Магазин закрыт');
	} else {
		console.log('Время работы магазина не может быть больше 24');
	}
}
workTime();


function budgetDay() {
	console.log('Бюджет на день: ' + budget / 30 + 'р');
}
budgetDay();


console.log(mainList);