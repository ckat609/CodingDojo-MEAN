Traveling
Objectives:
Start building a simple game that can be played in the browser's console.
Create a player object that points to a location on the map.
Have the player move by changing the player's pointer depending on user input.
In the last assignment, we created a map of the Hundred Acre Wood! Now let's use it to start building a simple game. First, our player will need a way to travel around the map. We'll get you started by creating a player object. The player object will have the attribute "location", which will be a pointer to Tigger's home. Assuming that we are using the code in the previous module, the variable tigger points to the location in memory where we stored Tigger's home object. If you did not use the variable tigger, your code may look different

var player = {
    location: tigger
}
Create a function that will move the player to the north, south, east, or west, depending on the direction provided to it. Call this function move. Have the move function console.log the player's current location so that you can verify that the code is working as expected. If a direction is passed to the move function that does not lead anywhere, have it console.log "You may not go that way!" Complete this assignment in <script> tags in an html document so that you may open it in your browser and call your function from the browser's console. The screenshot below shows the kind of output you should be able to produce.



 Create the player object with the location attribute
 Assign the player's location to the tigger object
 Create the function move, which takes a direction as a parameter
 When the move function is invoked, change the player's location accordingly and log a message
 If the move function is passed an invalid direction, log a message to inform the user
