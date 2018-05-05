const MongoClient = require('mongodb').MongoClient;
// Object destructuring
// var user = {
//     name: 'Prakhar',
//     age: 28
// };
// var {name} = user;
// console.log(name);
// const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");
    // to search for // ID
    // db.collection('Todos').find({_id: new ObjectID("5aeb7842193fc52a05222298")}).toArray().then((docs) => {
    // db.collection('Todos').find({completed: false}).toArray().then((docs) => {
    //     console.log(JSON.stringify(docs));
    // }).catch((err) => {
    //     console.log("Unable to connect Todos", err);
    // });
    db.collection('Users').find({name: "Pallavi Shukla"}).toArray().then((docs) => {
        console.log("Users: ");
        console.log(JSON.stringify(docs));
    }).catch((err) => {
        console.log("Unable to connect Users", err);
    });

    db.close();
})
