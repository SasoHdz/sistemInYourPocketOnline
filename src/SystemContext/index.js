import React from 'react'

const SystemContext = React.createContext();

function SystemProvider(props) {

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