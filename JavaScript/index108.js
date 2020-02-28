function sort(a, b, c) {
    if (a<b && a<c)
    {
        if(b<c)
        {
            console.log(a,b,c);
        }
        else{
            console.log(a,c,b);
        }
    }
    if(b<a&&b<c)
    {
        if(a<c)
        {
            console.log(b,a,c);
        }
        else
        {
            console.log(b,c,a);
        }

    }
    if(c<a&&c<b)
    {
        if(a<b)
        {
            console.log(c,a,b);
        }
        else
        {
            console.log(c,b,a);
        }
    }

}
sort(10, 8, 25);
sort(25,10,20);
function order(a, b, c, h) {
    if (h==1){
    if (a>b && a>c)
        {
            if (b>c)
            {
                Console.log("Descending order A: " + a + " " + b + " " + c);
            }
            else
            {
                Console.log("Descending order A1: " + a + " " + c + " " + b);
            }
        }
        if (b>a && b>c)
        {
            if (a>c)
            {
                console.log("Descending order B: " + b + " " + a + " " +c);
            }
            else
            {
                console.log("Descending order B1: " + b + " " + c + " " +a);
            }
        }
        if (c>a && c>b)
        {
            if (a>b)
            {
                console.log("Descending order C: " + c + " " + a + " " + b);
            }
            else
            {
                console.log("Descending order C1: " + c + " " + b + " " + a);
            }
        }
    } 

else {
        sort(10,25,8);
    }
}
order(10,25,3,0);    


