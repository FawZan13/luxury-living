import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Button } from 'react-bootstrap';

const AddService = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        // formData.append('email', email);
        formData.append('price', price);
        formData.append('image', image);
        formData.append('description', description);

        fetch('https://lit-earth-64704.herokuapp.com/services', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess('Service added successfully')
                    console.log('Service added successfully')
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    // const { register, handleSubmit, reset } = useForm();
    // const onSubmit = (data) => {
    //     console.log(data);
    //     axios.post('http://localhost:5000/services', data)
    //         .then(res => {
    //             console.log(res);
    //             if (res.data.insertedId) {
    //                 alert('added successfully');
    //                 reset();
    //             }
    //         })
    // }
    return (
        <div>
            <h2 className="mx-5">Add Product</h2>
            <form style={{ margin: "20px" }} onSubmit={handleSubmit}>
                <input label="Name"
                    required
                    onChange={e => setName(e.target.value)}
                    style={{ width: '75%', margin: "5px", padding: "10px" }} placeholder="Name" />
                <input type="number" label="Price" required style={{ width: '75%', margin: "5px", padding: "10px" }} onChange={e => setPrice(e.target.value)} placeholder="Price" />
                <textarea type="text" label="Description" required style={{ width: '75%', margin: "5px", padding: "10px" }} onChange={e => setDescription(e.target.value)} placeholder="Description" />
                {/* <input {...register("img")} style={{ width: '75%', margin: "5px", padding: "10px" }} placeholder="Image URL" /> */}
                <input
                    accept="image/*"
                    type="file"
                    onChange={e => setImage(e.target.files[0])}
                />
                <Button sx={{ width: '40%', m: 2, mt: 4, mb: 5 }} variant="primary" type="submit">Add Product</Button>
            </form>
            {success && <p style={{ color: 'green' }}>{success}</p>}
        </div>
    );
};

export default AddService;