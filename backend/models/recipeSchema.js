const mongoose = require("mongoose");

const recipeScheme = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    ingredients:{
        type:String,
        required:true
    },
    instructions:{
        type:String,
        required:true
    },
    time:{
        type:String,
    },
    converImage:{
        type:String,
    }
}, { timestamps: true });

module.exports = mongoose.model("Recipes",recipeScheme);