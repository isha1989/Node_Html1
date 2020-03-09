function showGameDetails(a) {
    console.log("name: ", a.name);
    console.log("price: ", a.price);
    console.log("sold: ", a.sold);
    console.log("console: ", a.console);
    
  }

const games = [
    {
      name: "Crash Bandicoot N. Sane Trilogy",
      price: 1060,
      sold: 20,
      console: "PS4",
      showDetail : function(){
      showGameDetails(this);
      }
    },
    {
      name: "Lego Marvel Super Heroes",
      price: 700,
      sold: 25,
      console: "XBOX",
      showDetail : function(){
        showGameDetails(this);
        }
    },
    {
      name: "Gta V",
      price: 1449,
      sold: 30,
      console: "PS4",
      showDetail : function(){
        showGameDetails(this);
        }
    },
    {
      name: "Mortal Kombat Xl",
      price: 1190,
      sold: 34,
      console: "PS4",
      showDetail : function(){
        showGameDetails(this);
        }
    },
    {
      name: "Gta V",
      price: 1250,
      sold: 60,
      console: "XBOX",
      showDetail : function(){
        showGameDetails(this);
        }
    },
    {
      name: "Fifa 2017",
      price: 890,
      sold: 15,
      console: "PS4",
      showDetail : function(){
        showGameDetails(this);
        }
    },
    {
      name: "Uncharted 4",
      price: 950,
      sold: 30,
      console: "PS4",
      showDetail : function(){
        showGameDetails(this);
        }
    },
    {
      name: "Uncharted 4",
      price: 950,
      sold: 30,
      console: "PS4",
      showDetail : function(){
        showGameDetails(this);
        }
    },
    {
      name: "Need For Speed",
      price: 790,
      sold: 10,
      console: "PS4",
      showDetail : function(){
        showGameDetails(this);
        }
    },
    {
      name: "Lego Batman",
      price: 1000,
      sold: 18,
      console: "PS4",
      showDetail : function(){
        showGameDetails(this);
        }
    },
    {
      name: "Fifa 17",
      price: 1290,
      sold: 12,
      console: "PS4",
      showDetail : function(){
        showGameDetails(this);
        }
    },
    {
      name: "Resident Evil 7",
      price: 1390,
      sold: 10,
      console: "PS4",
      showDetail : function(){
        showGameDetails(this);
        }
    },
    {
      name: "Dragon Ball XX",
      price: 1390,
      sold: 25,
      console: "XBOX",
      showDetail : function(){
        showGameDetails(this);
        }
    },
  ];
  let con= "XBOX";
  
  games.forEach(function(game) {
      if(game.console== con)
      {console.log(game.showDetail());}
      
    
  });