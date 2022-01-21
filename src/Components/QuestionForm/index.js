import React from 'react';
import { SystemContext } from '../../SystemContext';

import './QuestionForm.css';

function QuestionForm() {

    const {
        addConfig,
        setOpenModal,
    }
    = React.useContext(SystemContext);
    const [ newNameBusiness , setNewNameBusiness ] = React.useState('');
    const [ typeBusiness, setTypeBusiness ] =  React.useState('');

    const onChange = (event) => {
        setNewNameBusiness(event.target.value);
    };

    const onCancel = () => {
        setOpenModal(false);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addConfig(newNameBusiness, typeBusiness);
        setOpenModal(false);
    }

    return(
        <form 
            className="QuestionForm"
            onSubmit = { onSubmit }
        >
            <label>Nombre del negocio :</label>
            <textarea 
                cols="30" 
                rows="10"
                value = {newNameBusiness}
                onChange = { onChange }
            ></textarea>
            <label>Tipo de negocio :</label>
            <select 
                name="business"
                onChange={(event)=>{
                    const selected = event.target.value;
                    setTypeBusiness(selected);
                }}
                >
                <option value=" " >Select Option</option>
                <option value = "Restaurante" >Restaurante</option>
                <option value = "Tienda Abarrotes" >Tienda Abarrotes</option>
                <option value = "Tienda Comercio" >Tienda Comercio</option>
            </select>
            <div className="containerButtons">
                <button 
                    className="cancel"
                    type="button"
                    onClick={ onCancel }
                >
                    Cancelar
                </button>
                <button 
                    className = "acepted"
                    type="submit"
                >
                    Aceptar
                </button>
            </div>
        </form>
    );
}

export { QuestionForm };