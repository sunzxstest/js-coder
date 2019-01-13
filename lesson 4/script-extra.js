console.log('Усложненное задание');

// 1 задание
// Многомерные массивы ( [ [], [], ..] ) иногда называют матрицами
// Написать функцию, которая будет спрашивать у пользователя сколько массивов включить во внутрь arr
// Заполняет их несколькими произвольными числами (не больше 5) и выводит сумму элементов этого массива

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let arr = [];
let countArrs = '';
while (isNaN(countArrs) || countArrs == '' || countArrs == null || countArrs < 1) {
	countArrs = prompt('Сколько массивов заполнить?', '');
}

let countElem = getRandomInt(1, 5);
let sum = 0;

for (var i = 0; i < countArrs; i++) {
	let row = [];
	for (var j = 0; j < countElem; j++) {
		row[j] = getRandomInt(1, 99);
		sum += row[j];
	}
	arr.push(row);
}

console.log('Сумма элементов массива:', sum);
console.log(arr);