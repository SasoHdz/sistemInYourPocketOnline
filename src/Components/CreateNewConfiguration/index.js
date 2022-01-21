import React from 'react';
import './CreateNewConfiguration.css';

function CreateNewConfiguration(props) {

    const onClickCreateButton = () => {
      props.setOpenModal(!props.openModal);
    }

    return (
      <button className="createButton"
        onClick={onClickCreateButton}
      >
        +
      </button>
    );
}

export { CreateNewConfiguration };