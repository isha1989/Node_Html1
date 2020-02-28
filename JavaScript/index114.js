let x="";
let p="";
function revert(x)
{
    for(let i=x.length-1; i>=0; i--)
    {
        p=p+x[i];
    }
    console.log(p);
}

revert("hello");
revert("isha");