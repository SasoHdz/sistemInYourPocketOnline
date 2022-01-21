import React from "react";
import  { SystemContext } from '../SystemContext';

import { Header } from '../Header';
import { ConfigurationItem } from '../ConfigurationItem';
import { CreateNewConfiguration } from '../CreateNewConfiguration';
import { Modal } from '../Modal';
import { QuestionForm } from '../QuestionForm';

import './Home.css';

function Home(props) {
    const {
            configs,
            openModal,
            setOpenModal, 
        } = React.useContext(SystemContext);

    return (
        <React.Fragment>
            <Header />
            <div className="container-items">
                { configs.map( item => (
                    <ConfigurationItem 
                        key = {item.name}
                        name = {item.name} 
                        type={item.type}
                    />
                ))}
            </div>
            { !!openModal && (
                <Modal>
                   <QuestionForm />
                </Modal>
            )}
            <CreateNewConfiguration 
                setOpenModal={setOpenModal}
                openModal={openModal}
            />
        </React.Fragment>
    );
}

export { Home };