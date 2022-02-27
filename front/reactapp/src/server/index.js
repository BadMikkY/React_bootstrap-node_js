const express=require("express");
const mongoose=require("mongoose")
const authRouter=require('./authRouter')
const PORT = process.env.PORT ||5000
const app=express()
app.use(express.json())
app.use("/auth",authRouter)


const start=async()=>{
    try{
        await mongoose.connect('mongodb+srv://Egor:e100g200o300r400@cluster0.tjcjw.mongodb.net/autorization?retryWrites=true&w=majority')
        app.listen(PORT,()=>console.log('server is here'))
    }
    catch (e){
        console.log(e);
    }
}

start()