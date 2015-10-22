JavaScript Activities #4
========================

1. Create an object that stores your name, age, and occupation. Print out your age out in the console.

For example:
````js
var drew = {
  name: 'Drew',
  age: 29,
  occupation: 'Educator'
}

console.log(drew.age);
console.log(drew['age']);
````

2. Add a hobby to your object from question #1. Print out your hobby in the console.

For example:
````js
drew.hobby = 'Drawing';

console.log(drew.hobby);
console.log(drew['hobby']);
````

3. Write a function that will update your hobby to 'Computer programming'!

For example:
````js
function updateHobby(object) {
  object.hobby = 'Computer programming';  
}

updateHobby(drew);
console.log(drew.hobby);
````

4. Add a family object inside of your object. Print out a family member's name in the console.

For example:
````js
drew.family = {
  father: 'Phillip',
  cat1: 'Sly',
  cat2: 'Opals'
}

console.log(drew.family.cat1);
```` 

EXTENSION: Use a loop and print out every family member's name. (Google - looping through an object!)