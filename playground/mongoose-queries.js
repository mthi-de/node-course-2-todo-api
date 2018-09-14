const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5b9bc2cb4b0472359017078311';

if(!ObjectID.isValid(id))
{
   return console.log('ID not valid');
}

Todo.findById(id).then((todo) => {
    if(!todo)
    {
        return console.log('Id not found');
    }
    console.log('Todo By Id', todo);
}).catch((err) => {
    console.log(err);
});
