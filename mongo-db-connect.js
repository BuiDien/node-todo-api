// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err,db) => {
    if(err){
       return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDB server');
    // db.collection('ToDos').insertOne({
    //     text:'Something to do ',
    //     completed: false
    // },(err,result)=>{
    //     if(err){
    //         return console.log('Unable to insert ToDo',err);

    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // })
    db.collection('Users').insertOne({
        _id: 123,
        Name:'Bui Trung Dien',
        Age: 20,
        Location: "Thanh Pho Ho Chi Minh"
    },(err,result)=>{
        if(err){
            return console.log('Unable to insert Users',err);
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    });
    db.close();
});