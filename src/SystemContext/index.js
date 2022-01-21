import React from 'react'
import { useLocalStorage } from './useLocalStorage';

const SystemContext = React.createContext();

function SystemProvider(props) {

    const {
        item: configs,
        saveItem,
    } = useLocalStorage('VERSION_V1',[]);

    const [ openModal, setOpenModal] = React.useState(false);

    const addConfig = (nameConfig, typeConfig) => {
        const newConfigs = [...configs];
        newConfigs.push({
            name: nameConfig,
            type: typeConfig
        });
        saveItem(newConfigs);
    };

    return (
        <SystemContext.Provider value={{
            configs,
            openModal,
            setOpenModal,
            addConfig
        }}>
            {props.children}
        </SystemContext.Provider>
    );
}


export { SystemContext, SystemProvider};