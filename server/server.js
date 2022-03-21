const express = require('express');
const app = express();
const port = process.env.PORT || 9700;
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient
const bodyParser = require('body-parser');
const cors = require('cors');
const mongourl = `mongodb://localhost:27017`;
let dbobj;
let col_name="TV"
let col_mobile="Mobile"
let col_laptop="Laptop"
let col_watch="Watch"


//middleware
//cross origin resource sharing
app.use(cors())

//parse data for post call
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

//health Check

app.get('/',(req,res) => {
    res.status(200).send("Health Ok")
})
//--------------------------------TV Api-------------------------//
//post TV 
app.post('/addProducts',(req,res)=>{
    dbobj.collection(col_name).insert(req.body,(err,result) => {
        if(err) throw err;
        res.status(200).send("Data Added")
    })
});


//get TV 
app.get('/allProducts',(req,res) => {
    dbobj.collection(col_name).find().toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})


//update TV 
app.put('/updateProducts/:_id',(req,res) => {
    let Id = req.params._id;
    dbobj.collection(col_name).update(
        {_id:mongo.ObjectID(Id)},
        {
            $set:{
                screeSize:req.body.screeSize,
                os:req.body.os,
                quality: req.body.quality,
                frameRate: req.body.frameRate,
                price:req.body.price,
                images: req.body.images
            }
        },(err,result) => {
            if(err) throw err;
            res.send("Data Updated")
        }
    )
})

//Delete
app.delete('/deleteProduct/:_id',(req,res) => {
    let Id = mongo.ObjectID(req.params._id);
    dbobj.collection(col_name).remove({_id:Id},(err,result) => {
        if(err) throw err;
        res.send("Data Deleted")
    })
});

//----------------------Mobile Api----------------------------------//

//get Mobile
app.get('/allMobiles',(req,res) => {
    dbobj.collection(col_mobile).find().toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

//post TV 
app.post('/addMobile',(req,res)=>{
    dbobj.collection(col_mobile).insert(req.body,(err,result) => {
        if(err) throw err;
        res.status(200).send("Data Added")
    })
});

//update TV 
app.put('/updateMobile/:_id',(req,res) => {
    let Id = req.params._id;
    dbobj.collection(col_mobile).update(
        {_id:mongo.ObjectID(Id)},
        {
            $set:{
                name:req.body.name,
                os:req.body.os,
                ram: req.body.ram,
                memory: req.body.memory,
                price:req.body.price,
            }
        },(err,result) => {
            if(err) throw err;
            res.send("Data Updated")
        }
    )
})

//Delete
app.delete('/deleteMobile/:_id',(req,res) => {
    let Id = mongo.ObjectID(req.params._id);
    dbobj.collection(col_mobile).remove({_id:Id},(err,result) => {
        if(err) throw err;
        res.send("Data Deleted")
    })
});

//----------------------Laptop Api----------------------------------//

//get Mobile
app.get('/allLaptop',(req,res) => {
    dbobj.collection(col_laptop).find().toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

//post TV 
app.post('/addLaptop',(req,res)=>{
    dbobj.collection(col_laptop).insert(req.body,(err,result) => {
        if(err) throw err;
        res.status(200).send("Data Added")
    })
});

//update TV 
app.put('/updateLaptop/:_id',(req,res) => {
    let Id = req.params._id;
    dbobj.collection(col_laptop).update(
        {_id:mongo.ObjectID(Id)},
        {
            $set:{
                name:req.body.name,
                os:req.body.os,
                ram: req.body.ram,
                memory: req.body.memory,
                price:req.body.price,
            }
        },(err,result) => {
            if(err) throw err;
            res.send("Data Updated")
        }
    )
})

//Delete
app.delete('/deleteLaptop/:_id',(req,res) => {
    let Id = mongo.ObjectID(req.params._id);
    dbobj.collection(col_laptop).remove({_id:Id},(err,result) => {
        if(err) throw err;
        res.send("Data Deleted")
    })
});

//----------------------Watches Api----------------------------------//

//get Mobile
app.get('/allWatches',(req,res) => {
    dbobj.collection(col_watch).find().toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

//post TV 
app.post('/addWatch',(req,res)=>{
    dbobj.collection(col_watch).insert(req.body,(err,result) => {
        if(err) throw err;
        res.status(200).send("Data Added")
    })
});

//update TV 
app.put('/updateWatch/:_id',(req,res) => {
    let Id = req.params._id;
    dbobj.collection(col_watch).update(
        {_id:mongo.ObjectID(Id)},
        {
            $set:{
                name:req.body.name,
                os:req.body.os,
                memory: req.body.memory,
                price:req.body.price,
            }
        },(err,result) => {
            if(err) throw err;
            res.send("Data Updated")
        }
    )
})

app.delete('/deleteWatch/:_id',(req,res) => {
    let Id = mongo.ObjectID(req.params._id);
    dbobj.collection(col_watch).remove({_id:Id},(err,result) => {
        if(err) throw err;
        res.send("Data Deleted")
    })
});



//connecting database to nodejs
MongoClient.connect(mongourl,(err,connection) => {
    if(err) console.log(err);
    dbobj = connection.db('products');
    app.listen(port,(err) => {
        console.log(`Server is running on port ${port}`)
    })
})