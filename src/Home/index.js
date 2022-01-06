import React from "react";
import { Header } from '../Header';
import { ConfigurationItem } from '../ConfigurationItem';
import { CreateNewConfiguration } from '../CreateNewConfiguration';

import './Home.css';

let items = [
    {name:'JUJUCA', type: 'Restaurant'},
    {name:'La Roca', type: 'Restaurant'},
    {name:'El Mezquite', type: 'Restaurant'},
    {name:'Katakana', type: 'Joyeria'},
    {name:'Cositas', type: 'Comercio'},
    {name:'La Terraza', type: 'Restaurant'},
    {name:'Opalo de Fuego', type: 'Comercio'},
    {name:'Artesanias', type: 'Comercio'},
];

function Home() {
    return (
        <React.Fragment>
            <Header />
            <div className="container-items">
                { items.map( item => (
                    <ConfigurationItem name = {item.name} type={item.type}/>
                ))}
            </div>
            <CreateNewConfiguration />
        </React.Fragment>
    );
}

export { Home };