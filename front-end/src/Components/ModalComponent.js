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
                <div className="modal-container" >
                    <div className='modal-body'>
                            <strong >{props.alert.msg}</strong>
                            <button onClick={ok}>Ok</button>
                            <button onClick={notOk}>Cancel</button>
                    </div>
                </div>
            }
        </>
    )
}

export default Modal