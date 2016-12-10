const{ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');

// const id = '8584bf59cdee1dc117de199d4';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo
//   .find({
//     _id: id
//   })
//   .then((todos) => {
//     console.log('todos', todos);
//   });
//
// Todo
//   .findOne({
//     _id: id
//   })
//   .then((todo) => {
//     console.log('todo', todo);
//   });

// Todo
//   .findById(id)
//   .then((todo) => {
//     console.log('Todo by id', todo);
//   })
//   .catch((e) => console.log(e))
