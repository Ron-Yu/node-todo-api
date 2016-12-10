const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect to MongoDB server');
  }
  console.log('Connect to MongoSB server');

  // db.collection('Todos').insertOne({
  //   text: 'something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // })

  // db.collection('Users').insertOne({
  //   name: 'Ron',
  //   age: 34,
  //   location: 'Taiwan'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('unable to insert user', err);
  //   }
  //   console.log(result.ops);
  // })

  db.close()
});
