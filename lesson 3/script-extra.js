console.log('Усложненное задание');

// 1 задание
// У вас есть str = урок-3-был слишком легким
// Сделать так, чтобы строка начиналась с большой буквы

var str = 'урок-3-был слишком легким';
newStr = str[0].toUpperCase() + str.slice(1);
console.log(newStr);

// 2 задание
// Теперь замените все “-” на пробелы
newStr = newStr.replace(/\-/g, ' ');
console.log(newStr);

// 3 задание
// Из получившейся строки вырезать слово “легким”, заменить 2 последние буквы на “о”
newStr = newStr.replace(/\легким/g, '').replace(/^\s*/,'').replace(/\s*$/,'').slice(0, -2) + 'оо';
console.log(newStr);

// 4 задание
// У вас также есть массив arr = [20, 33, 1, “Человек”, 2, 3]
// Вывести в консоль квадратный корень из суммы кубов его элементов
var arr = [20, 33, 1, 'Человек', 2, 3];
let sum = 0;

for (var i = 0; i < arr.length; i++) {
	if (typeof(arr[i]) === 'number') {
		sum += Math.sqrt(Math.pow(parseInt(arr[i]), 3));
	}
};

console.log('Квадратный корень сумм кубов элементов массива', sum)