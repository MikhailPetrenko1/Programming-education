// https://learn.javascript.ru/task/shuffle
// Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.

// Многократные прогоны через shuffle могут привести к разным последовательностям элементов. Например:

let arr = [1, 2, 3];

alert(shuffle(arr));
// arr = [3, 2, 1]

alert(shuffle(arr));
// arr = [2, 1, 3]

alert(shuffle(arr));
// arr = [3, 1, 2]
// ...
// Все последовательности элементов должны иметь одинаковую вероятность. Например, [1,2,3] может быть переупорядочено как [1,2,3] или [1,3,2], или [3,1,2] и т.д., с равной вероятностью каждого случая.
function shuffle(array) {
	return array.sort(() => Math.random() - 0.5);
}
// function shuffle(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i

//     // поменять элементы местами
//     // мы используем для этого синтаксис "деструктурирующее присваивание"
//     // подробнее о нём - в следующих главах
//     // то же самое можно записать как:
//     // let t = array[i]; array[i] = array[j]; array[j] = t
//     [array[i], array[j]] = [array[j], array[i]];
//   }
// }

// function shuffle(array) {
// 	for (let i = array.length - 1; i > 0; i--) {
// 		let j = Math.floor(Math.random() * (i + 1));
// 		[array[i], array[j]] = [array[j], array[i]];
// 	}
// }