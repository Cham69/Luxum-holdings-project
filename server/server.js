const express = require('express');
const bodyParser = require('body-parser');
const dotEnv = require('dotenv');
const mongoose = require('mongoose');

const userRoute = require('./routes/userRoutes.js');
const propertyRoute = require('./routes/propertyRoutes.js');
const app = express();

dotEnv.config();
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))

//Using router files
app.use('/users', userRoute);
app.use('/properties', propertyRoute);

const port = process.env.PORT || 8000;
const DB_URI = process.env.MONGODB_URI;

app.listen(port,  () =>{
    console.log(`Server listens at port ${port}`);
    try{
         mongoose.connect(DB_URI,{
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
            );
        console.log(`Connected with the database`);
    }catch(error){
        console.log(error.message);
    }
    
});