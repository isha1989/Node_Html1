let hour=23;
if(hour>=5 && hour<12)
{
    console.log("good morning");

}
else if (hour>=12 && hour<18)
{
    console.log("good afternoon");

}
else if(hour>=18 && hour<22)
{
    console.log("good evening");

}
else if(hour>=22 && hour<=24 || hour>0 && hour<5)
{
    console.log("good night");

}
else
{
    console.log("invalid entry");
}