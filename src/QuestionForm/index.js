import React from 'react';

import './QuestionForm.css';

function QuestionForm() {

    const [ newNameBusiness , setNewNameBusiness ] = React.useState('');
    const [ typeBusiness, setTypeBusiness ] =  React.useState('');

    const onChange = (event) => {
        setNewNameBusiness(event.target.value);
        console.log(newNameBusiness);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const newConfiguration = {
            name : newNameBusiness,
            type : typeBusiness,
        };
        
        console.log(newConfiguration);
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
                    console.log(selected);
                }}
                >
                <option value=" " >Select Option</option>
                <option value = "Restaurante" >Restaurante</option>
                <option value = "Tienda Abarrotes" >Tienda Abarrotes</option>
                <option value = "Tienda Comercio" >Tienda Comercio</option>
            </select>
            <div className="containerButtons">
                <button 
                    className = "acepted"
                    type="button"
                >
                    Cancelar
                </button>
                <button 
                    className="cancel"
                    type="submit"
                >
                    Aceptar
                </button>
            </div>
        </form>
    );
}

export { QuestionForm };