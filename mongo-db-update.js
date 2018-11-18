


// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err,db) => {
    if(err){
       return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDB server');
    // db.collection('ToDos').findOneAndUpdate({
    //     _id: new ObjectID('5bf11d560954eda030864a57')
    // },{
    //     $set:{
    //         completed: true
    //     }
    // },{
    //     returnOriginal:false
    // }).then((result)=>{
    //     console.log(result);    
    // })
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5bf113490954eda030864861')
    },{
        $set:{
            Name: 'Dien'
        },
        $inc:{
            Age: 1
        }
    },{
        returnOriginal:false
    }).then((result)=>{
        console.log(result);
    })
    //db.close();
});