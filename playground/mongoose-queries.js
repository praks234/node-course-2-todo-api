const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//TodoId - var id = "5aef6665f7ca59c8a19f4db2";
// var id = "6aef6665f7ca59c8a19f4db212333";

// User // ID
var userId = "5aef6665f7ca59c8a19f4db2";
if (!ObjectID.isValid(userId)) {
    return console.log("Id not valid");
}
// Todo.find({
//     _id: id
// }).then((todos) => {
//     if (!todos.length > 0) {
//         return console.log("No records found");
//     }
//     console.log("Todos: ", todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log("Todo: ", todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log("Id not found");
//     }
//     console.log("Todo by Id: ", todo);
// }).catch((e) => {
//
// });

User.findById(userId).then((user) => {
    if (!user) {
        return console.log("Id not found");
    }
    console.log("User by Id: ", user);
}).catch((e) => {
    console.log(e);
});
