//Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.

//Постфиксная форма:

for (let i = 0; i < 5; i++) alert(i);
//Вывод: 0 1 2 3 4

//Префиксная форма:

for (let i = 0; i < 5; ++i) alert(i);
//Вывод: 0 1 2 3 4

//Ответ: в этом задании выводы будут одинаковые, так как здесь цикл построен на самом факте увеличении значения переменной i, а не на том значении какое значение возвращает это выражение. Выводы были бы разные, если инкремент стоял бы в условном выражении.
