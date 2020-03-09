
function a()
{
    let total=0;

    
    for(i=0;i<=arguments.length;i++)
    {
        if(typeof arguments[i]=== "number")
        {total= total+ arguments[i];}
        
        
    }
    console.log(total);   
};

a(1,2,3,4,5);
a(1,2,3,4,5,6,7,8,9,10);