let budget,
		storeName,
		time,
		price;


function start() {
	while (isNaN(budget) || budget == '' || budget == null) {
		budget = 100;//prompt('Ваш бюджте?', '');
	}

	storeName = 'Мой магазин'.toUpperCase();//prompt('Название вашего магазина?', '');
	time = 19;
	price = 1000;
}
start();



mainList = {
	budget: budget,
	storeName: storeName,
	shopGoods: [],
	employers: {},
	open: false,
	discount: true,
	shopItems: [],
	price: price,
	chooseGoods: function chooseGoods() {
		for (let i = 0; i < 3; i++) {
			let a = 'Какой тип товара?';//prompt('Какой тип товаров будем продавать?', '');
			if (typeof(a) === 'string' && (typeof(a) != null && a != '' && a.length < 50)) {
				mainList.shopGoods[i] = a;
			} else {
				console.log('Ошибка ввода!');
				i--;
			}
		};
	},
	workTime: function workTime(time) {
		if (time < 0) {
			console.log('Время работы магазина не может быть отрицательным');
		} else if (time > 8 && time < 20) {
			console.log('Магазин работает');
			mainList.open = true;
		} else if (time < 24) {
			console.log('Магазин закрыт');
		} else {
			console.log('Время работы магазина не может быть больше 24');
		}
	},
	budgetDay: function budgetDay() {
		console.log('Бюджет на день: ' + budget / 30 + 'р');
	},
	isDiscount: function isDiscount() {
		if (mainList.discount == true) {
			mainList.price = price * 0.8;
		}
	},
	hireEmployers: function hireEmployers() {
		for (let i = 1; i <= 4; i++) {
			let a = 'Имя';//prompt('Введите имя нового сотрудника', '');
			if (typeof(a) === 'string' && (typeof(a) != null && a != '' && a.length < 50)) {
				mainList.employers[i] = a;
			} else {
				console.log('Ошибка ввода сотрудника!');
				i--;
			}
		};
	},
	chooseShopItems: function chooseShopItems() {
		let items = '';
		while (typeof(items) != 'string' || items == '' || items == null) {
			items = 'zxcv,qwer,asdgh';//prompt('Перечислите через запятую товары', '');
		}

		mainList.shopItems = items.split(',');
		mainList.shopItems.push('outy4');//prompt('Добавьте еще:', ''));
		mainList.shopItems.sort();
	}

}


console.log(mainList);

mainList.chooseShopItems();

let j = 1;
let arr = mainList.shopItems;
arr.forEach(function(item, i, arr) {
	console.log('У нас вы можете купить: #' + j++, item);
});


for (let key in mainList.shopItems) {
	console.log('Наш магазин включает в себя:', mainList.shopItems[key]);
}