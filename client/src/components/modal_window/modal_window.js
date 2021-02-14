import React, {useEffect} from "react";
import Modal from 'react-modal';

import "./modal_window.css";


const ModalWindow = ({
                         modalIsOpen, onCLose,
                         pet: {
                             name, breed, desc, age,
                             inoculations, diseases, parasites, photoLocation
                         }
                     }) => {

    useEffect(() => Modal.setAppElement('body'), [])

    return (
        <Modal isOpen={modalIsOpen}
               onRequestClose={onCLose}
               contentLabel="Pet description"
               className="Modal"
               overlayClassName="Overlay">
            <button onClick={onCLose}
                    className="main-btn modal-window__btn"/>
            <div className="row">
                <div className="col-lg-6">
                    <div className="image-boundary_center">
                        <img src={`http://localhost:8000${photoLocation}`}
                             alt="photo"
                             className="modal-window__img"/>
                    </div>
                </div>
                <div className="col-lg-6 col-12">
                    <div className="pet-name">{name}</div>
                    <div className="pet-breed">{breed}</div>
                    <div className="pet-desc">{desc}</div>
                    <ul className="characteristic-list">
                        <li className="characteristic-item">
                            <div className="characteristic-item__title">
                                Возраст: <span className="characteristic-item_value">{age}</span>
                            </div>
                        </li>
                        <li className="characteristic-item">
                            <div className="characteristic-item__title">
                                Прививки: <span className="characteristic-item_value">{inoculations}</span>
                            </div>
                        </li>
                        <li className="characteristic-item">
                            <div className="characteristic-item__title">
                                Болезни: <span className="characteristic-item_value">{diseases}</span>
                            </div>
                        </li>
                        <li className="characteristic-item">
                            <div className="characteristic-item__title">
                                Паразиты: <span className="characteristic-item_value">{parasites}</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </Modal>
    );
};

export default ModalWindow;
