//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to connect Mongo db server');
  }
  console.log('Connected to MongoDb server');

  //
  // db.collection('Todos').find({
  //   _id: new ObjectID('58cf4e556a25450d2307d2d4')}).toArray().then((docs) => {
  //   console.log(docs.length);
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch', err)
  // });



  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos Count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch', err)
  // });

  db.collection('Users').find({name: "Gen"}).toArray().then((result) => {
    console.log(`Users count is : ${result.length}`);
    console.log(JSON.stringify(result, undefined, 2))
  }, (err) => {
    if(err){
      console.log('Unable to find user', err)
    }
  });


  // db.close();
});