import React from 'react';
import {render} from "react-dom";
import {Modal} from "./lib";
import {useState} from "react";

const App = () => {
const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <button onClick={() => setShowModal(true)}>Show modal</button>
            <Modal title='Titre de la modale' onClose={() => setShowModal(false)} show={showModal}>
                <p>
                    description de la modale
                </p>
            </Modal>
        </div>
    );

}

render(<App/>, document.getElementById("root"));
