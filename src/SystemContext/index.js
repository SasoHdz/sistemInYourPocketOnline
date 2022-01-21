import React from 'react'
import { useLocalStorage } from '../useLocalStorage';

const SystemContext = React.createContext();

function SystemProvider(props) {

    const {
        item: items,
        saveItem,
        loading,
    } = useLocalStorage('VERSION_V1',[]);


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