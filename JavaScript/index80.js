let number=0;
let x=0;
do
{
    if(number%2!=0)
    {
      x=number+x;
    
    }
    number++;
    console.log("partial output" + x);
}while(number<=100);
console.log(x);