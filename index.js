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