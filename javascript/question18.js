
/*Number Reversal –
 Take a three-digit number from the user and print its reverse. 
 (Example: 123 → 321).*/
let a=123
let r=0
while(a!=0)
{
    let k=a%10//3
    r=r*10+k
    a = Math.floor(a / 10)

}
console.log(r)