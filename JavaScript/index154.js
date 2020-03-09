let player={
    name : "null",
    energy : 100,
    lives : 3,
    loseEnergy : function(damage)
    {
        this.energy= this.energy-damage;
        console.log(`The ${this.name} has ${this.energy} energy % and  ${this.lives} lifes`);
    },
    recoverEnergy : function(energyUp)
    {
this.energy=this.energy+energyUp;
console.log(`The ${this.name} has ${this.energy} energy % and  ${this.lives} lifes`);
    },
    loseLife : function()
    {

        this.lives= this.lives-1;
        console.log(`The ${this.name} has ${this.energy} energy % and  ${this.lives} lifes`);
    },
    recoverLife : function()
    {
        this.lives=this.lives+1;
        console.log(`The ${this.name} has ${this.energy} energy % and  ${this.lives} lifes`);
    }

};
if(player.energy>0 && player.energy<=100 && player.lives<=99 )
{
player.name = "isha";
player.loseLife();
player.loseEnergy(10);
player.loseEnergy(5);
player.loseEnergy(15);
player.loseEnergy(20);
player.recoverEnergy(10);
player.loseEnergy(30);
player.loseEnergy(40);
player.loseEnergy();
player.recoverLife();
player.recoverLife();
}
else{
    player.loseLife();
}