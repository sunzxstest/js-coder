let soldier = {
	health: 400,
	armor: 100
}

let john = {
	health: 200
}

john.__proto__ = soldier;

console.log(john);
console.log(john.armor);