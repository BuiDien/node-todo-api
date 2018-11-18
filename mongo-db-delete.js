


// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err,db) => {
    if(err){
       return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDB server');
    //Delete many
    // db.collection('ToDos').deleteMany({text: 'Do Homework'}).then((result)=>{
    //     console.log(result);
    // });
    //Delete one
    // db.collection('ToDos').deleteOne({
    //     _id: new ObjectID('5bf02860a588f204085ad0ce')
    // }).then((result)=>{
    //     console.log(result);
    // });
    //FindOne And Delete
    // db.collection('ToDos').findOneAndDelete({completed:false}).then((result)=>{
    //     console.log(result);
    // });
    // db.collection('Users').deleteMany({Name:'Bui Trung Dien'}).then((result)=>{
    //     console.log(result);
    // })
    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5bf113a60954eda03086486b')
    }).then((result)=>{
        console.log(result)
    })
    //db.close();
});