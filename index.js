console.log('Ey!');

//VARIABLES
let colour = 'blue';
console.log(colour);

//OBJECTS

let person = {
	name: 'susan',
	age: '10'
};
console.log(person);

	//dot notation
person.name = 'notsusan';
console.log(person);

	//bracket notation
person['name'] = 'mary';
console.log(person);

	//dynamic access to target property
let selection = 'name';
person[selection] = 'pedro';
console.log(person);

//ARRAYS
let selectedColours = ['red', 'blue'];
console.log(selectedColours);
console.log(selectedColours[0]);
selectedColours[2] = 'green';
console.log(selectedColours);
