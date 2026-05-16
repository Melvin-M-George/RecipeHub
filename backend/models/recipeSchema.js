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
        required:true
    },
    converImage:{
        type:String,
        required:true
    }
}, { timestamps: true });

module.exports = mongoose.model("Recipes",recipeScheme);