import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div className='jumbotron'>
    <h1>SG Administration</h1>
    <p>The ultra way is defined in barley hay</p>
    <Link to='about' className='btn btn-primary btn-lg'>
      Learn more
    </Link>
  </div>
);

export default HomePage;
