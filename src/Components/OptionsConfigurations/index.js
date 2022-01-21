import React from "react";
import './OptionsConfigurations.css';

import { SystemContext } from '../../SystemContext';
import { BsFillCaretRightFill } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";

function OptionsConfigurations(props) {

    const { 
        setOpenQuestionConfirm,
        setConfigCurrent,
    } = React.useContext(SystemContext);

    const onDeleteQuestion = () => {
        setOpenQuestionConfirm(true);
        setConfigCurrent(props.name);
        console.log("Abriendo modal question", props.name);
    }

    return(
        <div className="Options-container">
            <ul>
                <li><BsFillCaretRightFill/> Start</li>
                <li><BsPencilSquare/> Edit</li>
                <li 
                    onClick={ onDeleteQuestion } 
                ><BsFillTrashFill/> Delete</li>
            </ul>
        </div>
    );
}

export { OptionsConfigurations };