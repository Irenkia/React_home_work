import React from 'react';
import './btn.css';

const Btn =({onUpdateCounter,sing}) =>{
    return ( 
        <div className="btn" onClick={() => {onUpdateCounter(sing)}}>{sing}</div>
     );
}

export default Btn;