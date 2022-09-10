const express = require('express');
const bodyParser = require('body-parser');
const dotEnv = require('dotenv');
const mongoose = require('mongoose');

const userRoute = require('./routes/userRoutes.js');
const app = express();

dotEnv.config();
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/users', userRoute);

const port = process.env.PORT || 8000;

app.listen(port,  () =>{
    console.log(`Server listens at port ${port}`);
    try{
         mongoose.connect(
            process.env.MONGODB_URI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
            );
        console.log(`Connected with the database`);
    }catch(error){
        console.log(error.message);
    }
    
});