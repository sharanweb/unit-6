const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    gender: { type: String, required: false, default: "Male" },
    type: {type:String, required:true}
}, {
    versionKey: false,
    timestamps: true,
});

const User = mongoose.model("user",userSchema);

module.exports = User;