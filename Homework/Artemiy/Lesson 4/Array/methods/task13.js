function groupById(arr) {
	return arr.reduce((prev, item) => {
		prev[item.id] = item;
		return prev;
	}, {});
}

let users = [
	{ id: 'john', name: 'John Smith', age: 20 },
	{ id: 'ann', name: 'Ann Smith', age: 24 },
	{ id: 'pete', name: 'Pete Peterson', age: 31 },
];

let usersById = groupById(users);
console.log(usersById);

/*
после вызова у нас должно получиться:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/
