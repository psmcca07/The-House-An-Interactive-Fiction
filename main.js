
// Create the contents of your room here.
alert("Loading main.js!"); //Don't change this line
player = new Player()

//Create your objects
let hallway = new Room("You wake up in an endless hallway. There are doors on each side of the hallway.");
let pentagram = new Room("You enter the room. The number 9 is written all over the walls. In the center of the room there is a devils trap with ingredients to summon a demon.");


hallway.addItem(room);
pentagram.addItem(ingredients);
pentagram.addItem(room);

player.location = hallway;
player.location.enter();
