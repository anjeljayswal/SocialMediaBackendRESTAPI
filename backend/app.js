import express from 'express'
import mongoose from 'mongoose'
import router from './routes/user-routes';

const app = express();
app.use(express.json());
app.use("/api/user",router) 


mongoose.connect("mongodb+srv://admin:root@cluster0.mnt7n0w.mongodb.net/?retryWrites=true&w=majority")
.then(()=>app.listen(5000)).then(()=> console.log("Connected to data base and listening to localhost 5000 ")
).catch((error)=> console.log(err));

// app.listen(5000);n

// console.log('hilll')