//Что выведет код?
let x = 1;

function func() {
	console.log(x); // ?

	let x = 2;
}

func();

//Оказывается выведется ошибка, так как при запуске func в лексическом окружении сохраниться переменная x, но она будет не инициализирована до строки кода с let