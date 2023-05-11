const express  = require('express')
const cors = require('cors')
const morgan = require('morgan')
const colors = require('colors')
const dotenv = require('dotenv') 
const connectDB = require("./config/db")



//env cofig
dotenv.config();

//routes import
const userRoutes = require('./routes/userRoutes')

//mongodb connection
connectDB(); 

// rest object
const app = express()

//middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use('/api/v1/user',userRoutes);


//POST
const PORT = process.env.PORT || 8080

//listen
app.listen(PORT,()=>{
    console.log(`server running on ${process.env.DEV_MODE} ${PORT}`.bgCyan.white);
})
