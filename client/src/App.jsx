import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [singleImage, setSingleImage] = useState(null);
    const [multipleImages, setMultipleImages] = useState([]);

    const handleSingleImageChange = (e) => {
        setSingleImage(e.target.files[0]);
    };

    const handleMultipleImagesChange = (e) => {
        setMultipleImages(e.target.files);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        if (singleImage) {
            formData.append('singleImage', singleImage);
        }
        for (const image of multipleImages) {
            formData.append('multipleImages', image);
        }

        try {
            const response = await axios.post('http://localhost:9000/admin', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert(response.data.message);
        } catch (error) {
            console.error(error);
            alert('Error uploading images');
        }
    };

    return (
        <div className="App">
            <h1>Image Upload</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="file" onChange={handleSingleImageChange} />
                </div>
                <div>
                    <input type="file" multiple onChange={handleMultipleImagesChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default App;