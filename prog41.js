
expense=[12000,24000,35000,10000,54000,40000]

//to find the lowest expense

lowest=expense[0]
for(let num of expense)
{
    if(num<=lowest)
    {
        lowest=num
    }
}
console.log('the lowest expense is ',lowest);

//to find the highest expense

highest=expense[0]
for(let num of expense)
{
    if(num>=highest)
    {
        highest=num
    }
}
console.log('the highest expense is ',highest);

//find the total expense

total=0
for(let i of expense)
{
    total=total+i
}
console.log('total expense is ',total);