a=[10,11,12,13,14,15]
//find square of each element in the given array

sq=a.map(num=>num**2)
console.log(sq);

//forEach
a.forEach(num => {
    console.log(num**2);
});

//w.a.p to find the cube of a given number using map

cube=a.map(num=>num**3)
console.log(cube);

//create a new array with number<=13 increment by 1 and number>13 decrement by 1
//op=[11,12,13,14,13,14]
arr=[10,11,12,13,14,15]
newArr=arr.map(num=> num<=13?num+1 : num-1)
console.log(newArr);


