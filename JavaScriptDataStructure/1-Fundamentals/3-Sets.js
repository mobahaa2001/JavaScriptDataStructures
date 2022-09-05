////////////////////////////////////////////
// Sets - A Colser Look
///////////////////////////////////////////

new Set()
set.add('dog')
set.add('cat')
set.add('dog') // Not Added

// --> Insertion order is not stored/ memorized
// --> Element access and extraction via method
// --> Iterable (= You can use the for-of loop)
// --> Size(length) adjusts dynamically
// --> Duplicate values are not allowed (i.e. unique values only)
// --> Deletion and finding element is trivial and fast

/*
////////////////////// Time Work //////////////////////
*/

const ids = new Set()

ids.add('abc')
ids.add(1)
ids.add('bb2')
ids.add(1) // Not Added

for (const i of ids) {
    console.log(i)
}
// Input --> abc   1    bb2

console.log(ids[1])
// Input --> undefined

console.log(ids.has('abc'))
// Input --> true

ids.delete('bb2')
console.log(ids)
// Input --> abc    1

// Sets are a great choice if you need lists of data, but you don't want duplicate values, and you don't care so much about the order and the position.
