import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Bookrouter from "./routes/book.routes.js"
import userSignUp from "./routes/user.routes.js" 
import cors from 'cors';


dotenv.config();

const app = express(); 

app.use(cors({ origin: "*" })); 

const PORT = process.env.PORT || 5000;
const URI = process.env.MongoDBURI;

const ConnectDB = async () => {
    try {
        await mongoose.connect(URI);
        console.log('✅ MongoDB connected');
    } catch (error) {
        console.error('❌ MongoDB connection failed:', error);
        process.exit(1); 
    }
};

ConnectDB();

app.use(express.json()); 
app.use('/book', Bookrouter); 
app.use('/user', userSignUp); 

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
