const mongoose =  require("mongoose");

const connect = () =>{
    return mongoose.connect("mongodb+srv://sharan:sharan@cluster0.mspqf.mongodb.net/test");
}

module.exports = connect;