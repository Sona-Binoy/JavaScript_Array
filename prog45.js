//w.a.p to print common numbers from a given array

p=[10,11,12,20,30]
q=[11,20,25,30,33]

/*ispresent=false
for(i=0;i<=p.length-1;i++)
{
    for(j=0;j<=q.length-1;j++) // or for(let i of p) {for(let j of q){}}
    {
        if(p[i]==q[j])
        {   
            ispresent=true
            console.log(p[i]);
        }
    }
}
!ispresent && console.log('no common numbers');*/

//binary search
// 1-sort the array
a=0 //index of p
b=0 //index of q
isPresent=false
while(a<p.length && b<q.length)
{
    if(p[a]==q[b])
    {
        console.log(p[a]);
        isPresent=true
        a++
        b++
    }
    else if(p[a]>q[b])
    {
        b++
    }
    else{
        a++
    }
}
!isPresent && console.log('not present');