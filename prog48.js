//nested array

a=[[2,10],[50,25],[2,100],[7,66],[33,9]]

//w.a.p to find the numbers less than or equal to 10

for(let num of a){
    for(let n of num){
        if(n<=10)
        {
            console.log(n);
        }
    }
}

console.log('--------------------');

//find even numbers from the array

arr=[[2,10],[50,25],[2,100],[7,66],[33,9]]
for(let num of arr){
    for(let n of num)
    {
        if(n%2==0)
        {
            console.log(n);
        }
    }
}