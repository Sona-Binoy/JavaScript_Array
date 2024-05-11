arr=[10,11,12,3,2,4]

//check whether 2 is present or not

two=false
for(let num of arr)
{
    if(num==2)
    {
        two=true
        break
    }

}
if(two==true)
{
    console.log('2 is present in the array');
}
else{
    console.log('2 is not present in the array');
}