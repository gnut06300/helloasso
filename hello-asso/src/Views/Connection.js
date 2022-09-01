import React from 'react';
//component
import Login from '../Components/Login';
// import Association from '../Api/Services/Users';
//css
// import './styles/login.css';

const Connection = () => {
    return(
        <>
            <div className='connection mt-5'>
                <h1>Hello login</h1>
                <Login/>
            </div>
        </>
    );
};

export default Connection;