import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container>
            <h2>Terms and conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat doloribus neque eum, ipsum dolorem repudiandae. Voluptatem obcaecati soluta delectus laborum et, pariatur ab, minus velit incidunt autem nisi alias voluptatibus.</p>
            <p>Go back to <Link to='/register'>Register</Link> </p>
        </Container>
    );
};

export default Terms;