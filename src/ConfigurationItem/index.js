import React from "react";

import { FiArrowRightCircle } from "react-icons/fi";
import { FiAlignJustify } from "react-icons/fi";
import './ConfigurationsItem.css';


function ConfigurationItem (props)
{
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
            <FiAlignJustify className="menu" />
        </div>
    );
}

export { ConfigurationItem };