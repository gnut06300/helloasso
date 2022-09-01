import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import AssociationService from '../Api/Services/AssociationService';
//component
// import Association from '../Api/Services/Users';
//css
import './styles/home.css';

export default class Home extends React.Component{
    state = {
        associations: [],
        name: 'artprod'
    }
    componentDidMount(){
        AssociationService.getInfo(this.name).then((response) => {
            this.associations = response.data;
            console.log(response.data);
        });
    }
    render(){
        return(
            <div>
                <div className='home'>
                    <h1>Home</h1>
                    <div>
                        {
                            this.state.associations.map(association => (
                                <div key={association.id}>
                                    <h1>{association.name}</h1>
                                    <p>{association.description}</p>
                                </div>
                            ))
                        }
                    </div>
                    </div>
            </div>
        );
    }
}
