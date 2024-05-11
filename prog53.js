//filter() method

a=[10,12,15,13,25,2,3,5]

//w.a.p to print all even numbers from the given array

b=a.filter((n)=>n%2==0)
console.log(b);

//w.a.p to print all even numbers >13 from the given array

b=a.filter((n)=>n>13)
console.log(b);

//w.a.p to check is there any numbers greater than 13 exist in the given array

// b=a.filter((n)=>n>13?yes:no)
// console.log(b);  -----  this will give error

c=a.some(num=>num>13)  //some() returns true or false
console.log(c);
console.log(c?'yes':'no');


