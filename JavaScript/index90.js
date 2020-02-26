let number=0;
let x=0;
for(let number=0;number<=1000; number++)

{
    if(number%2!=0)
    {
      x=number+x;
    
    }
    
    console.log("partial output" + x);
}
console.log(x);