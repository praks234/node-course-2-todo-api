const express = require('express');
const bodyParser = require('body-parser');

const {ObjectID} = require('mongodb');
var {mongoose} = require('./db/mongoose.js');
var {User} = require('./models/user');
var {Todo} = require('./models/todo');

const app = express();

app.use(bodyParser.json());
app.post("/todos", (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    })
});

app.get("/todos", (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get("/todos/:id", (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        console.log("Id not valid");
        res.status(404).send();
    }
    Todo.findById(id).then((todo) => {
        if(todo){
            res.send(todo);
        }else{
            res.status(404).send();
        }
    }, (e) => {
        res.status(404).send();
    })
});

app.listen(3000, () => {
    console.log("Listening to port 3000");
});

module.exports = {app};
