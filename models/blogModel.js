const mongoose = require('mongoose');


const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        require:[true,"title is required"]
    },
    description:{
        type:String,
        require:[true,"title is required"]
    },
    image:{
        type:String,
        require:[true,"title is required"]
    },
   
}, {timestamps: true}
);

const blogModel = mongoose.model("Blog",blogSchema);

module.exports = blogModel;