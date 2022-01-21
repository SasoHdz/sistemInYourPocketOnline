import React from 'react'
import { useLocalStorage } from './useLocalStorage';

const SystemContext = React.createContext();

function SystemProvider(props) {

    const {
        item: configs,
        saveItem,
    } = useLocalStorage('VERSION_V1',[]);

    const [ openModal, setOpenModal] = React.useState(false);
    const [ openQuestionConfirm , setOpenQuestionConfirm] = React.useState(false);
    const [ configCurrent , setConfigCurrent ] = React.useState(' ');

    const addConfig = (nameConfig, typeConfig) => {
        const newConfigs = [...configs];
        newConfigs.push({
            name: nameConfig,
            type: typeConfig
        });
        saveItem(newConfigs);
    };

    const deleteConfig = (nameConfig) => {
        const newConfigs = [...configs];
        const indexConfig = newConfigs.findIndex( item => item.name === nameConfig);
        newConfigs.splice(indexConfig,1);
        saveItem(newConfigs);
    }

    return (
        <SystemContext.Provider value={{
            configs,
            openModal,
            setOpenModal,
            openQuestionConfirm,
            setOpenQuestionConfirm,
            configCurrent,
            setConfigCurrent,
            addConfig,
            deleteConfig
        }}>
            {props.children}
        </SystemContext.Provider>
    );
}


export { SystemContext, SystemProvider};