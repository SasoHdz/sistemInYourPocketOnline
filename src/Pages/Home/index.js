import React from "react";
import  { SystemContext } from '../../SystemContext';

import { Header } from '../../Components/Header';
import { ConfigurationItem } from '../../Components/ConfigurationItem';
import { CreateNewConfiguration } from '../../Components/CreateNewConfiguration';
import { Modal } from '../../Components/Modal';
import { QuestionForm } from '../../Components/QuestionForm';
import { QuestionConfirm } from '../../Components/QuestionConfirm';



import './Home.css';

function Home(props) {
    const {
            configs,
            openModal,
            setOpenModal,
            openQuestionConfirm 
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
            { !!openQuestionConfirm && (
                <Modal>
                   <QuestionConfirm />
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