//Array

weekdays=['mon','tue','wed','thur']

//to display
console.log(weekdays);

//to get the length

console.log(weekdays.length);

//to print a particular item from the array

console.log(weekdays[3]);
console.log(weekdays[2]);

//to add an item to the  end of the array

weekdays.push('friday')
console.log(weekdays);

weekdays.push(3)
console.log(weekdays);

//to remove last item from the array

weekdays.pop() //last item will remove
console.log(weekdays);

//to add an item to the beginning of the array

weekdays.unshift('sun')
console.log(weekdays);

weekdays.unshift('sat')
console.log(weekdays);


//to remove an item from the beginning of the array

weekdays.shift()
console.log(weekdays);
