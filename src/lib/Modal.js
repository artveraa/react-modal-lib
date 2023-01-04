import React from "react";
import "./Modal.scss";

const Modal = props => {
    if (!props.show) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-container">
                <div className="modal-header">
                    <h2>{props.title}</h2>
                </div>
                <div className="modal-body">
                    <p>{props.children}</p>
                </div>
                <div className="modal-footer">
                    <button onClick={props.onClose}>Close</button>
                </div>
            </div>
        </div>
    )
};

export default Modal;