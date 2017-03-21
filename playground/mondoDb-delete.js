//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to connect Mongo db server');
  }
  console.log('Connected to MongoDb server');

  //delete many

  // db.collection('Todos').deleteMany({text:'have lunch'}).then((result) => {
  //   console.log(result);
  // });

  //delete one

  // db.collection('Todos').deleteOne({text:'have lunch'}).then((result) => {
  //   console.log(result);
  // });

  //find one and delete

  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });


  db.collection('Users').findOneAndDelete({
    _id: new ObjectID("58cf517d6a25450d2307d45e")
  }).then((result) => {
    console.log(result);
  });
  // db.close();
});