//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");
    //deleteMany
    // db.collection("Todos").deleteMany({text: "Eat Dinner"}).then((result) => {
    //     console.log(result);
    // });
    //deleteOne
    // db.collection("Todos").deleteOne({text: "Eat Dinner"}).then((result) => {
    //     console.log(result);
    // });
    //findOneAndDelete
    // db.collection("Todos").findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });
    db.collection("Users").deleteMany({name: "Prakhar Shukla"}).then((result) => {
        console.log(result);
        return db.collection("Users").findOneAndDelete({_id: new ObjectID("5aee252216507dc92f6b7b54")});
    }).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log("Unable to connect Users", err);
    });

    //db.close();
})
