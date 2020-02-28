let userName;
let password;
function validateUser(userName, password)
{
    if((userName=="nacho" && password=="Nerd1979") ||(userName=="pedro" && password=="Batman0217")|| (userName=="marta" && password=="Mother2312")  )
    {
    
        console.log(`Welcome ${userName}, nice to see you again`);
    }
    else
    {
        console.log(`Please input valid credentials`);

    }
}
validateUser("pedro", "Batman0217");
validateUser("a", "b");
