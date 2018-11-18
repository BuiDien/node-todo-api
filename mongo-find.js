


// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err,db) => {
    if(err){
       return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDB server');
    // db.collection('ToDos').find({
    //     _id : new ObjectID('5bf0d6d9a79679e8555c88c5'),
    //     completed: true
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log('Unable to fetch todos',err);
    // });
    // db.collection('ToDos').count().then((count) => {
    //     console.log(`Todos ${count}`);
    //     // console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log('Unable to fetch todos',err);
    // });
    db.collection('Users').find({Name:'Bui Trung Dien'}).toArray().then((docs)=>{
        console.log('Users');
        console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
        console.log('Unable to fetch data ',err);
    });
    //db.close();
});