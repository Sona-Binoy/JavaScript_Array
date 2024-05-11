
//w a p to print pairs whose sum is 6

/*b=[2,3,4,5]
isPair=false
for(i=0;i<=b.length-1;i++)
{
    for(j=i+1;j<=b.length-1;j++)
    {
        if(b[i]+b[j]==6)
        {   
            isPair=true
            console.log(b[i],',',b[j]);
        }
        
    }
}
!isPair && console.log('no pairs');*/

//using binary search

b=[2,3,4,5]
//sort the array
low=0
up=b.length-1
sum=6
isPresent=false
while(low<=up)
{
    csum=b[low]+b[up]
    if(csum==sum)
    {
        isPresent=true
        console.log(`${b[low]} , ${b[up]}`);
        low++
    }
    else if(csum<sum)
    {
        low++
    }
    else{
        up--
    }
}
!isPresent && console.log('no pair');
