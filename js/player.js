  
class Player {
    constructor(){}
  
    getCount(){//to get the player count from the database
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",function(data){
        playerCount = data.val();
      })
    }
  
    updateCount(count){//to update the player count inside the database
      database.ref('/').update({
        playerCount: count
      });
    }
  
    update(name){//to update player name in the database                                                    
      var playerIndex = "player" + playerCount;
      database.ref(playerIndex).set({
        name:name
      });
    }
  }                 
