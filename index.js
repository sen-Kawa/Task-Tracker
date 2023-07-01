console.log('Ey!');

let colour = 'blue';
console.log(colour);

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
//i fu dont know the name of the target property
let selection = 'name';
person[selection] = 'pedro';
console.log(person);
