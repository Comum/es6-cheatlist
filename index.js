console.log('ES6 Cheat List');
console.log('\n');
console.log('Variable types');
console.log('\n');
console.log('cosnt - will be initiated with value\ndoes not allow to be reassign, will through an error');

console.log('---------------------------------');
console.log('\nConst example:');
console.log(`(function () {
	const name = 'Miguel';

	console.log(\`name: \${name}\`);
})();`);
console.log('\nRunning:');

(function () {
	const name = 'Miguel';

	console.log(`name: ${name}`);
})();

console.log('---------------------------------');
console.log('\nlet vs var example:');
console.log(`(function () {
	if (1) {
		let letVariable = 'this will not be accesible outside';
		var varVariable = 'this will be accessible outside';
	}

	// console.log(letVariable); // throws error!
	console.log(varVariable);
})();`);
console.log('\nRunning:');

(function () {
	if (1) {
		let letVariable = 'this will not be accesible outside';
		var varVariable = 'this will be accessible outside';
	}

	// console.log(letVariable); // throws error!
	console.log(varVariable);
})();

console.log('---------------------------------');
console.log('\nSpread and destruction:');
console.log(`(function () {
	let name = ['Miguel', 'Coelho'];
	let fullName = [...name, 'Ribeiro'];
	let [firstName, secondName, thirdName] = fullName;

	console.log(\`name: \${name}\`);
	console.log(\`fullName: \${fullName}\`);
	console.log(\`firstName: \${firstName}\`);
	console.log(\`secondName: \${secondName}\`);
	console.log(\`thirdName: \${thirdName}\`);
})();`);
console.log('\nRunning:');

(function () {
	let name = ['Miguel', 'Coelho'];
	let fullName = [...name, 'Ribeiro'];
	let [firstName, secondName, thirdName] = fullName;

	console.log(`name: ${name}`);
	console.log(`fullName: ${fullName}`);
	console.log(`firstName: ${firstName}`);
	console.log(`secondName: ${secondName}`);
	console.log(`thirdName: ${thirdName}`);
})();

console.log('---------------------------------');
console.log('\nClass example:');
console.log(`class User {
	constructor(options) {
		this.name = options.name ? options.name : 'user';
		this.age = options.age ? options.age : '5';
	}

	getData() {
		console.log(\`User is \${this.name} and he is \${this.age} yeard old.\`);
	}
}

let user = new User({name: 'Miguel', age:27});
let defaultUser = new User({});
user.getData();
defaultUser.getData();`);
console.log('\nRunning:');

class User {
	constructor(options) {
		this.name = options.name ? options.name : 'user';
		this.age = options.age ? options.age : '5';
	}

	getData() {
		console.log(`User is ${this.name} and he is ${this.age} yeard old.`);
	}
}

let user = new User({name: 'Miguel', age:27});
let defaultUser = new User({});
user.getData();
defaultUser.getData();
