// What are "Data Structures" ?
// Data Structures simply allow you to manage data.... So Data Structures are the things in your code that allow you to store & retrieve and delete, and in general, manage data.
// Examples: Arrays, Objects, maps, Sets..etc
////////////////////////////////
// Why do we need such different "Data Structures" ?
// Well, first of all, of course programs, So the code you write are all about doing something, and for that something you pretty much always work with data, and that data needs to be managed.
// For example.. also intermediate results which you might be deriving in your code.
// And Typically, You will have tasks that require different kinds of data or different ways of managing data.

// Here are a couple of common use cases
/*
    Different tasks require different "Data Structures"
        * Ordered List of Data, Duplicates Allowed
        * Unordered List of Data, No Duplicates wanted
        * Key-value Pairs of Unorderd Data
        * Key-value Pairs of Ordered, Iterable Data
*/
// You might have tasks where you need ordered lists of data and where duplicate data is wanted or allowed.
// In other tasks you might not care whether the order of the data is kept, and you might not want or need duplicate data, So you might be fine with working with unique values, or you might actually want unique values.
// Then you might have cases where you don't just care about the values and whether they are ordered or not... You might actually them to an identifier, You might want key value pairs of unordered or oredered data.

//         * Ordered List of Data, Duplicates Allowed

// Now, for these different use cases you would have Arrays in the case of ordered lists of data... Arrays in JavaScript look like this [1,2,3,4,38,55]....., And as a side not ordered doesn't mean that the elements them selves must have a order in the sense of being sorted in a ascending or descending way, as we see in the example, this Array is not sorted, it just means that the insertion order is memorized, is kept, So that the element 6 in this example always is the third element in the array, and that it doesn't magically change behind the scenes. That is wht ordered means here, and that's important.

//        * Unordered List of Data, No Duplicates wanted

// Now, if the order doesn't matter, and if you don't want duplicates... A Set might be the right choice. A Set in JavaScript can be created with a new Set constructor... And then with the add method you can add elements to a set.
// new Set()
// set.add('mobahaa2001')

//        * Key-value Pairs of Unorderd Data

// Sometimes you need the key value pairs, and for that in javascript you of course have the object.. that allows you to Map data together into one object to group it into one object, and you can assign keys, identifiers of your choice, and retrieve the values with help of those keys.
// { name: 'Abdo', age: 18}

//        * Key-value Pairs of Ordered, Iterable Data

// And, You also have the map which does almost the same thing
// new Map()
// map.set('loc', 'Giza')

// So, "Data Structures" whiche you as a developer build on your own.


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
