function Rabbit(name) {
	this.name = name;
}
Rabbit.prototype.sayHi = function () {
	console.log(this.name);
};

let rabbit = new Rabbit('Rabbit');

rabbit.sayHi(); //Rabbit
Rabbit.prototype.sayHi(); //undefined or error
Object.getPrototypeOf(rabbit).sayHi(); //Rabbit
rabbit.__proto__.sayHi(); //Rabbit
