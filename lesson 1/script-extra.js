//Усложненное задание
console.log('\nУсложненное задание');

var num = 33721;
var arr = (''+num).split('');
var sum = 0;
for (var i = 0; i < arr.length; i++) {
	sum += parseInt(arr[i]);
};

console.log('Сумма всех элементов ' + num + ':', sum);
console.log('Число ' + sum + ' в кубе равно:', Math.pow(sum,3));