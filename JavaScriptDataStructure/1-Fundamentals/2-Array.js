// This is an Array
let a = [1, 3, 6, 2]

//////////////-------Notes--------////////////////
// -> Insertion order is kept
// -> Element access via index
// -> Iterable (= You can use the for-of loop)
// -> Size (length) adjusts dynamically
// -> Duplicate values are allowed
// -> Deletion and finding elements can re`uire "Extra Work"

/* 
//////////// Time Work //////////////////
*/

const names = ['Mohamed', 'Taha', 'Abdo', 'Salem', 'Mohamed']
// Index starts at zero
console.log(names[1])
// Input --> "Taha"

for (const x of names) {
    console.log(x)
}
// All Data in Array will input on console

console.log(names.length)
// And here will Acounting all names in Array
// Input --> 5

names.push('Salem')
console.log(names.langeth)
// Input --> 6

const tahaIndex = names.findIndex((x) => x === 'Taha')
console.log(tahaIndex)
// Input --> 1
names.splice(2, 1)
console.log(names)
/*
Input --> 
1: "Taha"
2: "Salem"
3: "Mohamed"
4: "Salem"
*/
