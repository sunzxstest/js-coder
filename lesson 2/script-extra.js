console.log('Усложненное задание');

// 1 задание
// Создать массив week и записать в него дни недели
// Вывести на экран все дни недели
// Каждый из них с новой строчки
// Выходные дни - жирным шрифтом
// Текущий день - курсивом

var today = new Date();
var weekToday = today.getDay();

var week = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

for (var i = 0; i < week.length; i++) {
	let day;

	switch (i) {
		case 0:
		case 6:
			day = '<i>' + week[i] + '</i>';
			break;
		default:
			day = week[i];
			break;
	}

	if (i == weekToday) {
		day = '<b>' + day + '</b>';
	}

	document.getElementById('mydiv').innerHTML += day + '<br>';
};


// 2 задание
// Создать массив arr = []
// Записать в него 7 многозначных чисел в виде строк
// Вывести в консоль только те, что начинаются с цифры 3 или 7 (Должны присутствовать в массиве)

var arr = ['123461134', '375675', '23424', '5235637', '712355', '123157', '0958245'];

for (var i = 0; i < arr.length; i++) {
	let firstChar = parseInt(arr[i].charAt(0));

	if (firstChar == 3 || firstChar == 7) {
		console.log(parseInt(arr[i]));
	}

};