// require('dotenv').config({})
// const dotenv = require('dotenv');
//  dotenv.config({
//   path:(`./env`) });

import dotenv from "dotenv"
// import connectDB from "./db/index";
import express from "express"
const app =express()
const port =(process.env.PORT||6000);



// dotenv.config({
//     path: './env'
// })

// connectDB()





app.listen(port,()=>{
    console.log(`App is listen on port ${port}`)
})

// (async()=>{
//     try {
//       await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//       app.on("error",(error)=>{
//         console.log("Error:",error)
//         throw error
//       })



//     } catch (error) {
//         console.error("ERROR:",error)
//         throw err
//     }
// })()