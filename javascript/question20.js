// to check the number is palindrome or not.
let a=111
let o=a
let rev=0
while(a!=0)
{
    let rem=a%10
    rev=rev*10+rem
    a=Math.floor(a/10)

}
if(rev===o)
{
    console.log("palindrome")
}
else{
    console.log("not a palindrome")
}