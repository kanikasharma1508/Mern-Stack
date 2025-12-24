// number se word
//123 onetwothree
let a=123
let result=""
while(a!==0)
{
let r=a%10

if(r===0)
{
console.log("zero"+result)
}
else if(r===1)
{
    console.log("one"+result)
}
else if(r===2)
{
    console.log("two"+result)
}
else if(r===3)
{
    console.log("three"+result)
}
  a=Math.floor(a/10);
}