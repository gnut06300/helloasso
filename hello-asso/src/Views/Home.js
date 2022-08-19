import React from 'react';
//component
import Formulaire from '../Components/Formulaire';
//css
import './styles/home.css';

const Home = () => {
    return(
        <div>
            <div className='home'>
                <h1>Hello home</h1>
            </div>
            <div>
                <section>
                    <Formulaire/>
                </section>
            </div>
        </div>
    );
};

export default Home;