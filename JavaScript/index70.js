let number=0;
let x=0;
while(number<=100)
{
    if(number%2!=0)
    {
      x=number+x;
    
    }
    number++;
    console.log("partial output" + x);
}
console.log(x);