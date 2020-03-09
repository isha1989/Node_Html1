let a=[];

for(let i=0;i<=1000;i++)
{
    a.push(i);
}
/*console.log(a);*/

let x= a.map(function (n, index)
{
let p= n+10;
return p;

}

);
/*console.log(x);*/
a.forEach(function(number, index) {
    console.log(`index: ${index}, original number: ${number}, incremented value: ${x[index]}`)
  });
