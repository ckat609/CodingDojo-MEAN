christopher = {
    name: "Christopher Robin",
    greet: function () {
        console.log("One thing you should know, no matter where I go, we'll always be together.");
    }
}

pooh = {
    name: "Winnie the Pooh",
    greet: function () {
        console.log("Oh bother!");
    }
}

rabbit = {
    name: "Rabbit",
    greet: function () {
        console.log("Spring!");
    }
}

gopher = {
    name: "Gopher",
    greet: function () {
        console.log("Caddyshack!");
    }
}

owl = {
    name: "Owl",
    greet: function () {
        console.log("Adventure is a wonderful thing!");
    }
}

piglet = {
    name: "Piglet",
    greet: function () {
        console.log("Oh d-d-d-dear!");
    }
}

bees = {
    name: "Bees",
    greet: function () {
        console.log("Bzzzz!");
    }
}

tigger = {
    name: "Tigger",
    greet: function () {
        console.log("The wonderful thing about Tiggers is Tiggers are wonderful things!");
    }
}

eeyore = {
    name: "Eeyore",
    greet: function () {
        console.log("It's not much of a tail, but I'm sort of attached to it.");
    }
}

kanga = {
    name: "Kanga",
    greet: function () {
        console.log("Aha!");
    }
}

heffalumps = {
    name: "Heffalumps",
    greet: function () {
        console.log("I want some honey!");
    }
}

christopher.north = kanga
christopher.south = pooh
christopher.east = rabbit
christopher.west = owl

pooh.north = christopher
pooh.south = tigger
pooh.east = bees
pooh.west = piglet

rabbit.south = bees
rabbit.east = gopher
rabbit.west = christopher

gopher.west = rabbit

owl.south = piglet
owl.east = christopher

piglet.north = owl
piglet.east = pooh

bees.north = rabbit
bees.west = pooh

tigger.north = pooh

eeyore.south = kanga
eeyore.east = heffalumps

kanga.north = eeyore
kanga.south = christopher

heffalumps.west = eeyore