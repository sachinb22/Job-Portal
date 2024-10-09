import mongoose from "mongoose";


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Database connected successfully")
    }catch (error) {
        console.log('Connection failed')
    }
}

export default connectDB