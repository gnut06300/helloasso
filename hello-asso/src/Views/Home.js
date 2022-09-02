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
        AssociationService.getInfo(this.state.name)
        .then(res => {
            this.state.associations = res.data;
            console.log(this.state.associations);
        }).catch(err => {
            console.log(err);
        });
    }
    // {
    //     this.state.associations.map(association => (
    //         <div key={association.id}>
    //             <h1>{association.name}</h1>
    //             <p>{association.description}</p>
    //         </div>
    //     ))
    // }

render() {
    return(
        <div>
            <div className='home'>

                <img className='banner' src="https://cdn.helloasso.com/img/photos/croppedimage-f14ba18cac1b4d769886f10cdec8e683.png" alt="banner"/>
                <h1 className='titre'>Hello ArtProd</h1>
                <section className='description'>Art Prod : le promoteur de l’expression culturelle contemporaine sous toutes ses formes :<br/>• musiques actuelles et émergentes<br/>• spectacle vivant<br/>• nouvelles tendances artistiques, visuelles, décoratives et médiatiques<br/>• production d’événements et d’œuvres artistiques</section>
                {/* <div><iframe id="haWidget" allowtransparency="true" scrolling="auto" src="https://www.helloasso.com/associations/artprod/adhesions/membre-actif/widget" style="width: 100%; height: 750px; border: none;" onload="window.scroll(0, this.offsetTop)"></iframe></div> */}
                {/* <section>
                    <Formulaire/>
                </section> */}

            </div>
        </div>
    );
}
}
