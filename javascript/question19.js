//find sum of digit in a number.
let a=123
let sum=0
while(a!=0)
{
    let r=a%10
    sum=sum+r
    a=Math.floor(a/10)

}
console.log(sum)