let box = document.getElementById('box'),
		btn = document.getElementsByTagName('button'),
		circle = document.getElementsByClassName('circle'),
		heart = document.querySelectorAll('.heart'),
		oneHeart = document.querySelector('.heart');

console.log(box);
console.log(btn[0]);
console.log(circle[0]);
console.log(heart[0]);
console.log(oneHeart);

box.style.backgroundColor = 'blue';
btn[1].style.borderRadius = '100%';

circle[0].style.backgroundColor = 'blue';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';


let div = document.createElement('div');
let text = document.createTextNode('Тут текст');

div.classList.add('black');

document.body.appendChild(div);
document.body.insertBefore(div, circle[0]);
document.body.removeChild(circle[1]);
document.body.replaceChild(heart[0], circle[0]);

// div.innerHTML = 'Hello World!';
div.textContent = 'Hello World!';

