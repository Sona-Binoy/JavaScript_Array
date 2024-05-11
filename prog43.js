//input array=[4,5,6]
//output array=[11,10,9]

input=[4,5,6]
output=[]
i=7
for(let num of input)
{
    output.push(num+i)
    i=i-2
}
console.log(output);

//a=[10,20,30,20,30,40,50,60,10]



//find the duplicate element from the array
// arr=[10,20,30,20,30,40,50,60,10]
// isDuplicate=false
// for(i=0;i<=arr.length;i++)
// {
//     for(j=i+1;j<=arr.length;j++)
//     {
        
//             if(arr[i]==arr[j]){
//                 isDuplicate=true
//                 console.log(arr[i]);
//             }
        
//     }
// }
// !isDuplicate && console.log('no duplication');  //&&-truthy operator

a=[10,20,30,20,30,40,50,60,10]
b=[]
for(i=0;i<=a.length-1;i++)
{
    for(j=i+1;j<=a.length-1;j++)
    {
        if(a[i]==a[j])
        {
            isDuplicate=false
            for(k=0;k<=b.length-1;k++)
            {
                if(a[i]==b[k])
                {
                    isDuplicate=true
                    break
                }
            }
            if(!isDuplicate)
            {
                b.push(a[i])
            }
        }
    }
}
!isDuplicate?console.log(b):console.log('no duplication');

//include() 