// https://learn.javascript.ru/task/pow
// Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.

// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).

// Запустить демо

// P.S. В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше.
function pow(x, n) {
	let result = x;

	for (let i = 1; i < n; i++) {
		result *= x;
	}

	return result;
}

let x = prompt('x?', '');
let n = prompt('n?', '');

if (n >= 1 && n % 1 == 0) {
	alert(pow(x, n));
} else {
	alert(`Степень ${n} не поддерживается, используйте натуральное число`);
}