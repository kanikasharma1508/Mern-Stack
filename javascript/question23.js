//product of number
//123 1*2*3 = 6
let a=224
let sum=1
while(a!=0)
{
    let r=a%10
    sum=sum*r
    a=Math.floor(a/10)
}
console.log(sum)