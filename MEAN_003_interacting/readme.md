Interacting
Objectives:
Add complexity to the game by adding a method to the location objects we created.
Invoke the method whenever the player visits that location object.
Now that a player is able to walk around our map of the Hundred Acre Wood, let's make the game a little more interesting by giving the characters in the homes a chance to speak. We can add methods to an object by creating an attribute that has an anonymous function for a value. The function can be anonymous, or without a name, because it will use the key as a name. For example, here we are giving the tigger object a greet method:

var tigger = {
    character: "Tigger",
    north: pooh,        // assuming that pooh is an object that has already been declared
    greet: function(){
            console.log("The wonderful thing about Tiggers is Tiggers are wonderful things!");
            }
};
tigger.greet();   // call tigger's greet method
Add a greet method to each of the home objects in your code and invoke them whenever the player visits a home. The screenshot below demonstrates the kind of output you should be able to produce in your browser's console.





 Add a greet method to each of the objects on the map
 Adjust the move function so that it invokes the greet method of the player's location
