import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Checkout = () => {
    const course = useLoaderData();
    console.log(course);
    return (
        <div className='row'>
            <div className='col-6 mt-5'>
                <Card className=''>
                    <Card.Img variant="top" src={course.img} className=" p-0 img-fluid " />
                    <div className='  d-flex align-items-center'>
                        <Card.Body >
                            <Card.Title>{course.name}</Card.Title>
                            <Card.Text>
                                {course.details}
                            </Card.Text>
                        </Card.Body>
                    </div>
                </Card>
            </div>
            <div className='col-6 mt-5'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email" type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Card Details</Form.Label>
                        <Form.Control name='card-details' type="text" placeholder="Card Details" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Card Holders Name</Form.Label>
                        <Form.Control name='card-holder-name' type="text" placeholder="Card holder name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Billing Adress</Form.Label>
                        <Form.Control name='address' type="text" placeholder="Billing address" />
                    </Form.Group>
                    <Button className='px-5' variant="primary" type="submit">
                        Check Out
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Checkout;