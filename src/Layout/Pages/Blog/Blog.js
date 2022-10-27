import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Header from '../../../shared/Header/Header';


const Blog = () => {
    return (
        <div>
            <Header></Header>
            <Accordion className='w-75 mx-auto mt-5'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What is CORS?</Accordion.Header>
                    <Accordion.Body>
                        Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Why we use firebase? What other options you have to implement while authentication?</Accordion.Header>
                    <Accordion.Body>
                        Firebase helps you make your app the best it can be with tools for the entire journey. Optimize app performance at launch and beyond to deliver the best experience. Learn more. Customize Your App. Build Fast For Any Device. Build Extraordinary Apps.
                        <br />
                        Password-based authentication. Passwords are the most common methods of authentication. ...
                        Multi-factor authentication. ...
                        Certificate-based authentication. ...
                        Biometric authentication. ...
                        Token-based authentication.

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>How does Private route work?</Accordion.Header>
                    <Accordion.Body>
                        The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated Logged in
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>What is Node? How node work?</Accordion.Header>
                    <Accordion.Body>
                        Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications.
                        <br />
                        Node is completely event-driven. Basically the server consists of one thread processing one event after another. A new request coming in is one kind of event. The server starts processing it and when there is a blocking IO operation, it does not wait until it completes and instead registers a callback function.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;