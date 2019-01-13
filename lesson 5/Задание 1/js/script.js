let btn = document.querySelectorAll('.menu-item'),
		menu = document.querySelector('.menu');
		adv = document.getElementsByClassName('adv'),
		title = document.getElementById('title'),
		promptArea = document.getElementById('prompt');

//Восстанавливаем порядок в меню
menu.insertBefore(btn[2], btn[1]);

//Добавляем пятый пункт в меню
let div = document.createElement('div');
div.classList.add('menu-item');
div.innerHTML = 'Пятый пункт';
menu.appendChild(div);

//Меняем фон
document.body.style.background = 'url(img/apple_true.jpg)';

//Убираем рекламу
document.body.getElementsByClassName('column')[1].removeChild(adv[0]);

//Меняем заголовок
title.innerHTML = 'Мы продаем только подлинную технику Apple';

//Спрашиваем и записываем ответ в prompt
promptArea.innerHTML = prompt('Как вы относитесь к технике Apple?', '');