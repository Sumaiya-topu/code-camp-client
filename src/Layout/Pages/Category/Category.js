import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

const Category = () => {
    const course = useLoaderData();

    return (
        <div>
            <Container>
                <div className='d-flex flex-column gap-1 mt-2'>
                    <Button className='border border-dark-50' variant="light"> <FaGithub></FaGithub> Sign In with Github</Button>{' '}
                    <Button className='border border-warning bg-white text-warning'> <FcGoogle></FcGoogle> Sign In with Google</Button>{' '}
                </div>
            </Container>
            <div className='mt-5 p-4'>
                <Card className=' p-5 h-25 w-100 mx-auto d-flex flex-row'>
                    <Card.Img variant="top" src={course.img} className=" p-0 img-fluid w-50 h-50" />
                    <div className=' ps-5 d-flex align-items-center'>
                        <Card.Body >
                            <Card.Title>{course.name}</Card.Title>
                            <Card.Text>
                                {course.details}
                            </Card.Text>
                            <Button variant="primary">Start Learning</Button>
                        </Card.Body>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Category;