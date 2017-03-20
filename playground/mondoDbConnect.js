//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// //Example of Destructuring in Es6
//
// var user = {name: 'Peppy', age: 4};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to connect Mongo db server');
  }
  console.log('Connected to MongoDb server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to Do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //       return console.log('Unable to insert todo', err)
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2))
  // });

  // db.collection('Users').insertOne({
  //   name: 'Pri',
  //   age: 30,
  //   location: 'william st Melbourne'
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert document to Users', err);
  //   }
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
  // });

  db.close();
});