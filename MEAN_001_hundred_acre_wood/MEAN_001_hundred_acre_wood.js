christopher = {
    name: "Christopher Robin",
}

pooh = {
    name: "Winnie the Pooh",
}

rabbit = {
    name: "Rabbit",
}

gopher = {
    name: "Gopher",
}

owl = {
    name: "Owl",
}

piglet = {
    name: "Piglet",
}

bees = {
    name: "Bees",
}

tigger = {
    name: "Tigger",
}

eeyore = {
    name: "Eeyore",
}

kanga = {
    name: "Kanga",
}

heffalumps = {
    name: "Heffalumps",
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

console.log(pooh.north.name)
console.log(pooh.south.name)
console.log(pooh.east.name)
console.log(pooh.west.name)
console.log("*********")
console.log(christopher.north.name)
console.log(christopher.south.name)
console.log(christopher.east.name)
console.log(christopher.west.name)