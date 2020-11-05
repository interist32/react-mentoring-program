import React from 'react';

import Overlay from '../Overlay/Overlay';


const Modal = ({ onCloseClick, ...props }) => (
    <>
        <Overlay />
        <div className="c-modal">
            <div className="c-modal-content">
                <div role="close" onClick={onCloseClick} className="c-modal-content__close">✖</div>
                <div className="c-modal-content__body">
                    {props.children}
                </div>
            </div>
        </div>
    </>
);

export default Modal;