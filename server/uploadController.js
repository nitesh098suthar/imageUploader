// const express = require('express');
// const router = express.Router();
// const cloudinary = require('./cloudinaryConfig');
// const Image = require('./imageModel');
// const upload = require('./uploadMiddleware');

// router.post('/', upload.fields([{ name: 'singleImage' }, { name: 'multipleImages' }]), async (req, res) => {
//     try {
//         const singleImage = req.files.singleImage ? req.files.singleImage[0] : null;
//         const multipleImages = req.files.multipleImages || [];

//         let singleImageUpload = null;
//         if (singleImage) {
//             singleImageUpload = await cloudinary.uploader.upload(singleImage.path);
//         }

//         const multipleImageUploads = [];
//         for (const file of multipleImages) {
//             const result = await cloudinary.uploader.upload(file.path);
//             multipleImageUploads.push(result);
//         }

//         const imageObject = {
//             singleImage: singleImageUpload ? { public_id: singleImageUpload.public_id, secure_url: singleImageUpload.secure_url } : null,
//             multipleImages: multipleImageUploads.map(img => ({ public_id: img.public_id, secure_url: img.secure_url })),
//         };

//         let imageDocument = await Image.findOne({});
//         if (!imageDocument) {
//             imageDocument = new Image({ images: [imageObject] });
//         } else {
//             imageDocument.images.push(imageObject);
//         }

//         await imageDocument.save();
//         res.status(200).json({ message: 'Images uploaded and links stored successfully', image: imageDocument });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

// module.exports = router;



import express from 'express';
import cloudinary from './cloudinaryConfig.js';
import Image from './imageModel.js';
import upload from './uploadMiddleware.js';

const router = express.Router();

router.post('/', upload.fields([{ name: 'singleImage' }, { name: 'multipleImages' }]), async (req, res) => {
    try {
        const singleImage = req.files.singleImage ? req.files.singleImage[0] : null;
        const multipleImages = req.files.multipleImages || [];

        let singleImageUpload = null;
        if (singleImage) {
            singleImageUpload = await cloudinary.uploader.upload(singleImage.path);
        }

        const multipleImageUploads = [];
        for (const file of multipleImages) {
            const result = await cloudinary.uploader.upload(file.path);
            multipleImageUploads.push(result);
        }

        const imageObject = {
            singleImage: singleImageUpload ? { public_id: singleImageUpload.public_id, secure_url: singleImageUpload.secure_url } : null,
            multipleImages: multipleImageUploads.map(img => ({ public_id: img.public_id, secure_url: img.secure_url })),
        };

        let imageDocument = await Image.findOne({});
        if (!imageDocument) {
            imageDocument = new Image({ images: [imageObject] });
        } else {
            imageDocument.images.push(imageObject);
        }

        await imageDocument.save();
        res.status(200).json({ message: 'Images uploaded and links stored successfully', image: imageDocument });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;
