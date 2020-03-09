let user= {
    username: "null",
    password: "null",
    greet : function(){
        if(user.username!="null")
        {
            console.log(`Hello, I'm user ${user.username}`);
        }
        else
        {
            console.log("Please assign a username value");
        }

    },
    updatePassword : function(a)
    {
this.password= a;
console.log(user.password);
        
    }
        
    ,
    updaterUsername : function(b)
    {
        this.username= b;
        console.log(user.username);
        
    }


};
let d="hello";
let e="isha";
user.greet();
user.updaterUsername(e);
user.updatePassword(d);
user.greet();
