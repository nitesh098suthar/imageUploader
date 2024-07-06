// const cloudinary = require('cloudinary').v2;

// cloudinary.config({
//     cloud_name: 'duvgdcfxx',
//     api_key: '865855176546777',
//     api_secret: '2vviBbR4uQ8ok8hnT7xSvXolV6M',
// });

// module.exports = cloudinary;


import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: 'duvgdcfxx',
    api_key: '865855176546777',
    api_secret: '2vviBbR4uQ8ok8hnT7xSvXolV6M',
});

export default cloudinary;
