const mongoose=require('mongoose');

const itemSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    } ,
    image:{
        type:String,
        trim:true,
        required:true
    } ,
  
    desc: {
        type:String,
        trim:true
    },
    type:{
        type:String,
    },
    userItem:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User'// ref m y batate hai objectId(_id) kis model se leni hai...User ke Model(database) se leni h
    }
  
})




let Item=mongoose.model('Item',itemSchema);
module.exports=Item;




