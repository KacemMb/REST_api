import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import router from './Routes/User.route.js';

// use .env file
dotenv.config();

// Get the port from the environment, else use 3000
const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
// connect to the atlas cloud database
mongoose.connect(process.env.MONGO).then(() => {
        console.log('Connected to MongoDB');
    }).catch(() => {
        console.log('Error while DB connecting');
});

app.use('/router', router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});