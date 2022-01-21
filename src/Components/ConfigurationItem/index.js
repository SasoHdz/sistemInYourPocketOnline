import React from "react";

import { FiArrowRightCircle } from "react-icons/fi";
import { FiAlignJustify } from "react-icons/fi";
import { OptionsConfigurations } from '../OptionsConfigurations';

import './ConfigurationsItem.css';


function ConfigurationItem (props)
{

    const [ openOptionsItem, setOpenOptionsItem] = React.useState(false);

    const onOpenSentings = () => {
        setOpenOptionsItem(!openOptionsItem);
    }

    return (
        <div className="Item">
            <div className="Item-container">
                <FiArrowRightCircle className="start"/>
                <label>
                    {props.type}
                </label>
            </div>
            <p>
                {props.name}
            </p>
            <FiAlignJustify 
                className="menu"
                onClick={ onOpenSentings } 
            />
            { !!openOptionsItem && (
                <OptionsConfigurations 
                    className="Item-sentings"
                    name = {props.name}
                />
            )}
        </div>
    );
}

export { ConfigurationItem };