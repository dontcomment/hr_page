import React, { useState } from "react";
import './vacitem.scss';
import Modal from 'react-modal';
import Form from "../form/Form";


export default function VacItem( {name, responsibilities, requirements, conditions, description} ) {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
    setModalIsOpen(true);
    };

    const closeModal = () => {
    setModalIsOpen(false);
    };

    return (
        <div className="vac_item">
            <p>{description}</p>
            <span>Условия:</span>
            <ol>
                {
                    responsibilities.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ol>
            <span>Тебе предстоит:</span>
            <ol>
                {
                    requirements.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ol>
            <span>Эта работа тебе подходит, если:</span>
            <ol>
                {
                    conditions.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ol>
            <button onClick={openModal}>откликнуться</button>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="Modal"
                overlayClassName="Overlay"
                ariaHideApp={false}
            >
                <Form name={name} closeModal={closeModal} />    
            </Modal>    
        </div>
    )
}
