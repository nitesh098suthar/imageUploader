// const mongoose = require('mongoose');

// const imageSchema = new mongoose.Schema({
//     images: [{
//         singleImage: {
//             public_id: String,
//             secure_url: String,
//         },
//         multipleImages: [{
//             public_id: String,
//             secure_url: String,
//         }],
//     }],
// });

// module.exports = mongoose.model('Image', imageSchema);



import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
    images: [{
        singleImage: {
            public_id: String,
            secure_url: String,
        },
        multipleImages: [{
            public_id: String,
            secure_url: String,
        }],
    }],
});

const Image = mongoose.model('Image', imageSchema);

export default Image;
