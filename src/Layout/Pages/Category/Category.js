import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';


const Category = () => {
    const course = useLoaderData();

    return (
        <div>
            <div className='mt-5 p-4'>
                <Card className=' p-5 h-25 w-100 mx-auto d-flex flex-row'>
                    <Card.Img variant="top" src={course.img} className=" p-0 img-fluid w-50 h-50" />
                    <div className=' ps-5 d-flex align-items-center'>
                        <Card.Body >
                            <Card.Title>{course.name}</Card.Title>
                            <Card.Text>
                                {course.details}
                            </Card.Text>
                            <Link to={`/checkout/${course.id}`} variant="primary">Buy Course</Link>
                        </Card.Body>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Category;