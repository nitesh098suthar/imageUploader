// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const uploadController = require('./uploadController');
// const cloudinaryConfig = require('./cloudinaryConfig');

// const app = express();
// const PORT = 9000;

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use('/admin', uploadController);

// mongoose.connect('mongodb://localhost:27017/mern-image-upload', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB connected'))
//     .catch(err => console.log(err));

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });




import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import uploadController from './uploadController.js';
import './cloudinaryConfig.js';  // Import to ensure it's initialized

const app = express();
const PORT = 9000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/admin', uploadController);

mongoose.connect('mongodb://localhost:27017/mern-image-upload', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
