var users = [
    { name: "sohan", age: 21 },
    { name: "new1", age: 28 }
];

for (var i = 0; i < users.length; i++) {
    const toLog = "age of" + users[i].name + "is" + users[i].age;
    console.log(toLog)

}