import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Navigation from '../Shared/Navigation/Navigation';

const Book = () => {
    const { _id } = useParams();
    const { register, handleSubmit } = useForm();
    const { user } = useAuth();
    console.log(user);
    const email = user.email;
    const userName = user.displayName;
    const [service, setService] = useState({});

    useEffect(() => {
        fetch(`https://lit-earth-64704.herokuapp.com/services/${_id}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])
    console.log(service)
    const onSubmit = (data) => {
        data.status = "pending";
        data.name = service.name;
        data.price = service.price;
        data.email = email;
        data.image = service.image;
        data.description = service.description;
        console.log(data);
        fetch("https://lit-earth-64704.herokuapp.com/myOrders", {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data),

        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        console.log(data);
    }

    return (
        <div>
            <Navigation />
            <div className="d-flex mt-5">
                <div className="mx-5">
                    <Card style={{ width: '18rem' }} className="text-center">
                        <Card.Img variant="top" className="px-5" src={`data:image/png;base64,${service.image}`} />
                        <Card.Body style={{ height: '220px' }}>
                            <Card.Title className="text-center">{service.name}</Card.Title>
                            <Card.Text className="text-center">
                                {service.description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <form style={{ margin: "20px" }} onSubmit={handleSubmit(onSubmit)}>
                        <input type="date" {...register("date", { required: true })} style={{ width: '75%', margin: "5px", padding: "10px" }} />
                        <input type="text" {...register("address", { required: true })} style={{ width: '75%', margin: "5px", padding: "10px" }} placeholder="Your Address" />
                        <input type="number" {...register("number", { required: true })} style={{ width: '75%', margin: "5px", padding: "10px" }} placeholder="Your Number" />
                        <Button sx={{ width: '40%', m: 2, mt: 4, mb: 5 }} variant="primary" type="submit">Complete Purchase</Button>
                    </form>
                </div>
            </div>

        </div >
    );
};

export default Book;