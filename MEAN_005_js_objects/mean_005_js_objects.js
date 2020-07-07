let students = [{
        name: 'Remy',
        cohort: 'Jan'
    },
    {
        name: 'Genevieve',
        cohort: 'March'
    },
    {
        name: 'Chuck',
        cohort: 'Jan'
    },
    {
        name: 'Osmund',
        cohort: 'June'
    },
    {
        name: 'Nikki',
        cohort: 'June'
    },
    {
        name: 'Boris',
        cohort: 'June'
    }
];

let users = {
    employees: [{
            'first_name': 'Miguel',
            'last_name': 'Jones'
        },
        {
            'first_name': 'Ernie',
            'last_name': 'Bertson'
        },
        {
            'first_name': 'Nora',
            'last_name': 'Lu'
        },
        {
            'first_name': 'Sally',
            'last_name': 'Barkyoumb'
        }
    ],
    managers: [{
            'first_name': 'Lillian',
            'last_name': 'Chambers'
        },
        {
            'first_name': 'Gordon',
            'last_name': 'Poe'
        }
    ]
};

function printNames(aList) {
    for (var i = 0; i < aList.length; i++) {
        console.log(`Name: ${aList[i]['name']}, Cohort: ${aList[i]['cohort']}`);
    }
}

function printUsers(aList) {
    for (var i in aList) {
        var count = 1;
        console.log(i.toUpperCase());
        for (var j = 0; j < aList[i].length; j++) {
            console.log(`${count} - ${aList[i][j].first_name.toUpperCase()}, ${aList[i][j].last_name.toUpperCase()} - ${aList[i][j].first_name.length + aList[i][j].last_name.length}`);
            count++;
        }
    }
}

printNames(students);
printUsers(users);