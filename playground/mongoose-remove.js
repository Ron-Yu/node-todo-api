const{ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// Todo
//   .remove()
//   .then(result => {
//     console.log(result);
//   });
//
Todo
  .findOneAndRemove({_id: '584d114bb8c52b2002a5fe95'})
  .then(todo => {
    console.log(todo);
  })


Todo
  .findByIdAndRemove('584d114bb8c52b2002a5fe95')
  .then(todo => {
    console.log(todo);
  })
