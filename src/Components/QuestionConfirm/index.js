import React from "react";
import './QuestionConfirm.css';

import { SystemContext } from '../../SystemContext';

function QuestionConfirm() {

    const {
        setOpenQuestionConfirm,
        deleteConfig,
        configCurrent,
        setConfigCurrent,
    } = React.useContext(SystemContext);

    const onCancel = () => {
        setOpenQuestionConfirm(false);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        deleteConfig(configCurrent);
        console.log("Borrado", configCurrent);
        setOpenQuestionConfirm(false);
        setConfigCurrent(' ');
    }

    return(
        <form 
            className ='Question-confirm'
            onSubmit = { onSubmit }
        >
            <label>¿Quieres eliminar esta configuración?</label>
            <div className="Question-confirm-buttons">
                <button 
                    className="acepted"
                    type="submit"
                >Confirmar</button>
                <button 
                    className="cancel"
                    type="buttin"
                    onClick={ onCancel }
                >Cancelar</button>
            </div>
        </form>
    );
}

export { QuestionConfirm }
