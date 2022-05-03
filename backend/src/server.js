const express = require('express');
const app = express(); 
const mongoose = require('mongoose');
const env = require('dotenv');
const cors = require('cors');

env.config();

const port = process.env.PORT || 9000;

// Routes
const authRoutes = require('./routes/auth');


// middleware

app.use(cors());
app.use(express.json());  
app.use('/api', authRoutes);

// mongodb connection

mongoose.connect( 
    'mongodb+srv://ninshad:KSMZRDKmbYCYvxBb@cluster0.ggg3f.mongodb.net/stackroots?retryWrites=true&w=majority',
    {
    
    useNewUrlParser: true,
    useUnifiedTopology: true
    // useCreateIndex: true
}
).then(() => {
    console.log("DB CONNECTED");
});

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
})