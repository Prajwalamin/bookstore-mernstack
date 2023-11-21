import express from "express";
import { PORT, mongoDBURL } from "./config.js"
import mongoose from "mongoose";
import cors from 'cors'
import booksRoute from './routes/booksRoute.js'

const app = express();

// Middleware for parsing request body
app.use(express.json());
app.use(cors()); // Bypassing cors policy


app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send(`Welcome to MERN Stack`)
})

// Calling all the routes
app.use('/books', booksRoute)


mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`)
        })
    })
    .catch((error) => {
        console.log(error); 
    });