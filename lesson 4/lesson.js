// Объекты
let options = {
	name: 'test',
	width: 1024,
	heigth: 1024
}

options.book = false;
options.colors = {
	border: 'black',
	background: 'red'
}

delete options.bool;

for (let key in options) {
	console.log('Свойство ' + key + ' имеет значение ' + options[key]);
}

console.log('Кол-во элементов в объекте', Object.keys(options).length);


// Массивы
let arr = [1, 2, 3, 4, 'variable', 5];
console.log('Исходный массив:', arr);

console.log('Удален последний элемент массива:', arr.pop()); //Удаляет последний элемент из массива и возвращает его
arr.push(6); //Добавляет элемент в конец массива
console.log('Добавлен элемент 6 в конец массива:', arr);

console.log('Удален первый элемент массива:', arr.shift()); //Удаляет первый элемент из массива
arr.unshift(0); //Добавляет элемент в начало массива
console.log('Добавлен элемент 0 в начало массива:', arr);

arr[9] = 9;

for (let i = 0; i < arr.length; i++) {
	// console.log(arr[i]);
}

arr.forEach(function(item, i, arr) {
	console.log(i + ': ' + item + '(массив: ' + arr + ')');
});


// Преобразовать строку в массив
let first = [];
let i = 'asdf,zxcv,zxcv';
first = i.split(',');

console.log(first);


// Преобразовать массив в строку
let second = ['asdf', 'zxcv', 'qwer', 't'];
let j = first.join(',');

console.log(j);


// Сортировка массива
let thirdStr = ['asdf', 'zxcv', 'qwer', 't'];
let k = thirdStr.sort();

console.log(k);

let thirdNum = [10, 5, 22, 6];

function sortNumbers(a, b) {
	return a - b;
}

let l = thirdNum.sort(sortNumbers);

console.log(l);