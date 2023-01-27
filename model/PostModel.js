const mongoose = require("mongoose")


let PostSchema = mongoose.Schema({
    title: {
        type : String,
        required : true
    },
    body : {
        type : String,
        required : true
    }

})


module.exports = mongoose.model("post",PostSchema)