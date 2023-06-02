const express= require('express');
const mongoose= require('mongoose');
const Product= require('./models/productModel');
const app = express()
const { Console, error } = require("console");

require("dotenv").config();
app.use(express.json())

//for the routes 
app.get('/',(req,res)=>{
    res.send('Hello NODE API')

})
app.get('/blog',(req,res)=>{
    res.send('Hello blog')

})

app.post('/product',async(req,res)=>
{
    try{
        const product = await Product.create(req.body)
        res.status(200).json(product);
    } catch(error)
    {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
})

// port and DB config
const DATABASE_CONNECTION = process.env.DATABASE_URL;
const PORT = process.env.PORT || 5000;

// mongoose connection
mongoose
  .connect(DATABASE_CONNECTION, {
    useNewUrlParser: true,
    //useUnifiedTopology: true,
  })
  .then(() =>{


    app.listen(3000,() =>{
        console.log(`connected to Mongo database`)
        console.log(`Node api is running at port 3000`)
        })
        
        
  }).catch((error) =>
   {console.error(error)});