// const MongoClient = require('mongodb').MongoClient;
// Object destructuring
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err)
    //     }
    //     console.log(JSON.stringify(result.ops));
    // });
    db.collection('Users').insertOne({
        name: 'Prashant Singh',
        age: 28,
        location: 'Bangalore'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert user', err)
        }
        console.log(JSON.stringify(result.ops));
    });

    db.close();
})
