const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect to MongoDB server');
  }
  console.log('Connect to MongoSB server');

  // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
  //   console.log(result);
  // })

  db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
    console.log(result.result);
  })

  // db.close()
});
