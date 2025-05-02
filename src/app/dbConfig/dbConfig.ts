import mongoose from 'mongoose'
export async function connectDB(){


    try {
        await mongoose.connect(process.env.MONGO_URI !);
        console.log("Mongodb connected succsefully")
        
    } catch (error) {
        console.log("connection failed")
        console.log(error)
        
    }  
}