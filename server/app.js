const express = require('express');
const parser = require('body-parser');
const mongodb = require('mongodb');
const mongoose = require('mongoose');

const app = express();
app.use(parser.urlencoded({extended:true}));
app.use(parser.json());

const mongodbURL = 'mongodb://himanshuchauhan:himanshu0018@ds157834.mlab.com:57834/todoapp';
mongoose.connect(mongodbURL,{ useNewUrlParser: true });
let todoSchema = mongoose.Schema({
    userData: String
});
datamodel = mongoose.model('todoWork',todoSchema);

app.post('/api/storingData',function(request,response){
    data = {userData: request.body.userData};
    var model = new datamodel(data);
    model.save();


});

app.listen(1234,function(){
   console.log('Server is running at 1234');
});
