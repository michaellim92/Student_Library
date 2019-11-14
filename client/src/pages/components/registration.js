import React from 'react';
import Popup from 'reactjs-popup';
import PopUpInner from './popup.js';

export default function registration() {
    return(
        <Popup trigger={<button>Register Here!</button>}>
            <PopUpInner />
        </Popup>
    )
}