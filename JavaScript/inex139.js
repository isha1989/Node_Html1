let a=[];

for(let i=1000; i>=0; i--)
{
a.push(i);
  
}


console.log(a); 

let even = a.filter(function(e) {
   
    if(e%2==0)
   {
       return true;
   }
   else
   {
       return false;
   }

});
console.log(even);
let odd = a.filter(function(o) {
   
    if(o%2!=0)
   {
       return true;
   }
   else
   {
       return false;
   }

});
console.log(odd);

let temp1= even.filter(function(e,index)
{
    if(index>=0 && index<19)
    {
return true;
    }
});
console.log(temp1);
