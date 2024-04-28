const mongoose = require('mongoose');
const { Schema } = mongoose;

const BusSchema = new Schema({
    Bus_Name:{
        type:String,
        required:true,

        // ref: 'user'
    },
    Bus_Number:{
        type: String,
        required: true,
        unique:true
    },
    Stations:{
        type: String,
        required: true,

    },
    date:{
        type: Date,
        default: Date.now
    },
  });

  const Bus=mongoose.model('bus',BusSchema);
  module.exports=Bus