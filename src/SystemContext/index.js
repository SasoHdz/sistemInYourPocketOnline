import React from 'react'

const SystemContext = React.createContext();

function SystemProvider(props) {

    /* let items = [
        {name:'JUJUCA', type: 'Restaurant'},
        {name:'La Roca', type: 'Restaurant'},
        {name:'El Mezquite', type: 'Restaurant'},
        {name:'Katakana', type: 'Joyeria'},
        {name:'Cositas', type: 'Comercio'},
        {name:'La Terraza', type: 'Restaurant'},
        {name:'Opalo de Fuego', type: 'Comercio'},
        {name:'Artesanias', type: 'Comercio'},
    ]; */

    const localStorageConfig = localStorage.getItem('CONFIG_V1');
    let parsedConfig;

    if(!localStorageConfig){
        localStorage.setItem('CONFIG_V1', JSON.stringify([]));
        parsedConfig = [];
    } else {
        parsedConfig = JSON.parse(localStorageConfig);
    } 

    let items = parsedConfig;

    const [ openModal, setOpenModal] = React.useState(false);

    return (
        <SystemContext.Provider value={{
            items,
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </SystemContext.Provider>
    );
}


export { SystemContext, SystemProvider};