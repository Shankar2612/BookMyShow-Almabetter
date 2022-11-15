import React from 'react';

function Modal(props) {
    // this component is udes to ask user before submitting book for confirming the booking details.
    // styling not yet done.
    
    const AStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
        zIndex: 5
    }
    return (
        <div className="container" style={AStyle}>
            {
                <div>
                    <strong>{props.message}</strong>
                    <div className='d-flex justify-between'>
                        <button>Ok</button>
                        <button>Cancel</button>
                    </div>
                </div>    
            }
        </div>
    )
}

export default Modal