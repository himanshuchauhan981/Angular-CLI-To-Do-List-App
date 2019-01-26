const express = require('express');
const parser = require('body-parser');
const mongodb = require('mongodb');
const mongoose = require('mongoose');

const app = express();
app.use(parser.urlencoded({extended:true}));
app.use(parser.json());

const mongodbURL = 'mongodb://himanshuchauhan:himanshu0018@ds157834.mlab.com:57834/todoapp';
mongoose.connect(mongodbURL,{ useNewUrlParser: true });

//Creating Schema for Database
let todoSchema = mongoose.Schema({
    userData: String
});
datamodel = mongoose.model('todoWork',todoSchema);

//Saving data to database
app.post('/api/storingData',function(request,response){
    data = {userData: request.body.userData};
    var model = new datamodel(data);
    model.save();
});

//Getting data from database
app.get('/api/showData',function(request,response){
    datamodel.find({},function(err,data){
      return response.json({data});
    });
});

//Deleting Data from Database
app.post('/api/deleteData/:data',function(request,response){
   datamodel.remove({userData:request.params.data},function(err,docs){
      if(docs){
         console.log(docs);
      }
   });
   response.status(200);
});

//Creating Servers
app.listen(1234,function(){
   console.log('Server is running at 1234');
});
