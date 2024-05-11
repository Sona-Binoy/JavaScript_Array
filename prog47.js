arr=[10,11,12,3,2,4]
//1-sort the given array in ascending order

sortedArr=arr.sort((n1,n2)=>n1-n2)
console.log('Sorted Array : ',sortedArr);
searchitem=0
low=0
up=arr.length-1
isPresent=false
while(low<=up)
{   
    mid=Math.floor((low+up)/2)
    if(sortedArr[mid]==searchitem){
        isPresent=true
        break
    }
    else if(searchitem>sortedArr[mid])
    {
        low=mid+1

    }
    else{

        up=mid-1
    }
    
}
isPresent?console.log(`${searchitem} is found at position ${mid}`):console.log('not present');  