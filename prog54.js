//find() method

fruits=['apple','pineapple','mango','orange','kiwi']

//find mango from the given array
a=fruits.find(f=>f=='mango')
console.log(a);

//is mango present in the array

b=fruits.includes('mango')
console.log(b?'yes':'no');

//find index of orange

i=fruits.indexOf('orange')
console.log(i);

