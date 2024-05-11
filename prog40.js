
fruits=['apple','mango','orange','kiwi','pineapple']

//for loop

for(index=0;index<fruits.length;index++)
{
    console.log(fruits[index]);
}

//in

for(let i in fruits)
{
    console.log(fruits[i]); //here i gives the index value
}

//of

for(let i of fruits){
    console.log(i);  //to access items directly
}

