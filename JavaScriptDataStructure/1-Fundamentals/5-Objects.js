// Object- A Closer Look
// An Object can look like this
/*
{
    name: 'Mo',
    age: 21,
    greet(){
        console.log('Hi, I am ' + this.name);
    }
}

*/
//////////////-------Notes--------////////////////

// Object in general are unordered key value pairs of data.
// The element access is done with help of the key name, So of the property name.
// Objects are not really Iterable, There is the for-in loop which is built for objects, But you won't be able to use the for-of loop, you won't be able to access the values with help of some index or anything like that.
// Keys are unique, values are not... So every key name must only appear once, You can't have two age properties in the same object.
// Keys your properties actually have to be strings, numbers or symbols in JavaScript.
// Object in general, therefore can be summarized as Data Structures or as constructs that can store Data, But that also can contain extra functionalities.

/////////////--------Time Work----------/////////////

const person = {
  firstName: 'Mo',
  age: 20,
  hobbies: ['Sports', 'Cooking'],
  age: 21,
  greet() {
    console.log('Hi, I am ' + this.name)
  },
}
// console.log(person[0])
// Input -->  indefined
// console.log(person['firstName'])
// Input --> Mo
// console.log(person.firstName)
// Input --> Mo
// console.log(person.age)
// Input --> 21
// So age has overwritten

person.lastName = 'Bahaa'
console.log(person)
/*lastName: 'Bahaa'}
age: 21
hobbies: (2) ['Sports', 'Cooking']
lastName: "Bahaa"
*/
delete person.firstName
console.log(person)
/*

age: 21
hobbies: (2) ['Sports', 'Cooking']
lastName: "Bahaa"
*/
