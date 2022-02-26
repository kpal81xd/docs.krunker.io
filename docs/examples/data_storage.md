# Data storage script example

```krunkscript
# Add this on the server side

# var to check whether player just joined the server
num maxPlayer = -1;

# action called upon loading data
action dataReady(obj data, bool success, str accountName){
	# Runs if loaded without errors
    if((bool) success){
        obj[] playerList = GAME.PLAYERS.list();
	
		# Loops through a list of all player objects
        for (num i = 0; i < lengthOf playerList; i++){
			
			# Runs if player object in list matches spawned player
            if((str) playerList[i].accountName == accountName){
				
				# Runs if the player has data stored
                if(notEmpty data){
                    GAME.log((str) playerList[i].accountName + " has data stored!");
					
					# Assigns silver count as a property of the player
                    playerList[i].silver = data.silver;
					GAME.log(playerList[i].silver);
                }
				
				# Runs if the player doesn't have data stored
                else{
					
					# Assigns the player to have 0 silver
                    playerList[i].silver = 0;
                }
            }
        }
    }
	
	# Runs if the loading of data had errors
	else{
		GAME.log("Error during loading data!");
	}
}

# action called upon the setting of data
action callb(obj data, bool success, str accountName){
    GAME.log("Updated the data of " + accountName);
}

public action onPlayerSpawn(str id) {
    obj player = GAME.PLAYERS.findByID(id);

	# Runs if the player has just joined the server, player with the highest sid is the newest
	if((num) player.sid > maxPlayer){
		
		# Loads the data of the player
    	GAME.STORAGE.load(player.accountName, '', dataReady);

		# Sets the maxPlayer var to the new max player
		maxPlayer = (num) player.sid;
	}
}

public action onPlayerUpdate(str id, num delta, obj inputs) {
    obj player = GAME.PLAYERS.findByID(id);

	# Runs if the players jump key is pressed
    if((bool) inputs.jump){
		
		# Increases the players silver count by 1
        (num) player.silver += 1;
    }
	
	# Runs if player is crouching
	if((bool) player.isCrouching){
		
		# Updates the silver data to new silver count
		GAME.STORAGE.set(player.accountName, {silver: player.silver}, false, callb);
	}
}
```