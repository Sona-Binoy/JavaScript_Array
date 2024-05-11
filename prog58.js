//[id,name,price,stock]
products=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,10],
    [5,'tiger',20,30],
    [6,'unibic',60,0],
    [7,'good day',70,20]
]
//1. display all product name
console.log('display all product name : ');
productName=products.forEach(item=>{console.log(item[1]);})

console.log('--------------------------');

//2. display product whose price < Rs.50
console.log('product whose price < Rs.50');
a=products.filter(item=>item[2]<50)
console.log(a);

console.log('--------------------------');

//3. print price of oreo
console.log('price of oreo');
oreo=products.find(pro=>pro[1]=='oreo')
console.log(oreo[2]);

console.log('--------------------------');

//4. print costly product name
console.log('costly product name :');
costlyProduct=products.reduce((item1,item2)=>item1[2]>item2[2]?item1:item2)
console.log(costlyProduct[1]);

console.log('--------------------------');

//5. display out of stock product
console.log('Out of stock product');
outOfStock=products.filter(item=>item[3]==0).forEach(pro=>console.log(pro[1]))

console.log('--------------------------');

//6. sort products based on stock in decsending order
console.log('sort products based on stock in decsending order :');
products.sort((a,b)=>b[3]-a[3]).forEach(item=>console.log(item[1]))

console.log('--------------------------');

//7. print product having maximum available stock
console.log('product having maximum available stock');
maxStock=products.reduce((item1,item2)=>item1[3]>item2[3]?item1:item2)
console.log(maxStock[1]);

console.log('--------------------------');

//8. is there any product can be purchased by Rs. 10
console.log('is there any product can be purchased by Rs. 10');
price=products.some(item=>item[2]<=10)
console.log(price?'yes':'no');

console.log('--------------------------------------------');

//9. Is there any product in the range of 10 to 30
console.log('Is there any product in the range of 10 to 30');
price=products.some(item=>item[2]>=10 && item[2]<=30)// return ture or false
console.log(price?'yes':'no');
//console.log(price); --(true)

console.log('---------------------------------------------');

//10. print all products in the range of 10 to 30
console.log('print all products in the range of 10 to 30');
products.filter(item=>item[2]>=10 && item[2]<=30).forEach(pro=>console.log(pro[1]))


