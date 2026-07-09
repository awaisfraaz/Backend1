const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim:true
    },
    userId: {
        type:String ,
        required:true     
    }
});
module.exports = mongoose.model('Person', userSchema);
