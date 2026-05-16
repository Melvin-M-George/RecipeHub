const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const connectDb = require("./config/connectDb.js");


const PORT = process.env.PORT || 3000;
connectDb();

app.use("/recipes",require("./routes/recipeRoutes.js"));

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})