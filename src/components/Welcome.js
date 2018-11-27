import  React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => (
    <div>Welcome to our News App. Please <Link to="/signup">Register</Link> or <Link to="/signin">Login</Link> to view news</div>
)

export default Welcome;