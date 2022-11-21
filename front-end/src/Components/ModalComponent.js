import React, { useContext } from 'react';
import BsContext from '../Context/BsContext';
import "../Css/ModalComponent.css"

function Modal(props) {
    const context = useContext(BsContext);
    const { ok, notOk } = context;

    // this component is not full done please dont change


    return (
        <>
            {props.alert &&
                <div className={`modal-container ${props.alert ? "active" : "inactive"}`} >
                    <div className='modal'>
                        <div className="modal-header">
                            <strong >{props.alert.head}</strong>
                        </div>
                        <div className='modal-body'>
                            <span>{props.alert.body}</span>
                        </div>
                        <div className='modal-footer'>
                            <button onClick={ok}>Ok</button>
                            <button onClick={notOk}>Cancel</button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Modal