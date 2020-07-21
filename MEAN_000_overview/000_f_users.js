users = [{
        fname: "Kermit",
        lname: "the Frog",
        languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
        interests: {
            music: ["guitar", "flute"],
            dance: ["tap", "salsa"],
            television: ["Black Mirror", "Stranger Things"]
        }
    },
    {
        fname: "Winnie",
        lname: "the Pooh",
        languages: ["Python", "Swift", "Java"],
        interests: {
            food: ["honey", "honeycomb"],
            flowers: ["honeysuckle"],
            mysteries: ["Heffalumps"]
        }
    },
    {
        fname: "Arthur",
        lname: "Dent",
        languages: ["JavaScript", "HTML", "Go"],
        interests: {
            space: ["stars", "planets", "improbability"],
            home: ["tea", "yellow bulldozers"]
        }
    }
]

function userLanguages(users) {
    let aString = "";
    for (let i = 0; i < users.length; i++) {
        aString += `${users[i].fname} ${users[i].lname} knows `;
        for (let j = 0; j < users[i].languages.length; j++) {
            if (j == users[i].languages.length - 1) {
                aString += `and ${users[i].languages[j]}.\n`;
            } else {
                aString += `${users[i].languages[j]}, `;
            }
        }
        aString += `${users[i].fname} is also interested in `;
        for (let interest in users[i].interests) {
            for (let k = 0; k < users[i].interests[interest].length; k++) {
                aString += `${users[i].interests[interest][k]}, `;
            }
        }
        aString = aString.slice(0, aString.length - 2) + ".\n";
    }
    return aString;
}

console.log(userLanguages(users));