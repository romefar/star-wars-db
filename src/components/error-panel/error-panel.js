import React from 'react';

import "./error-panel.css";

const ErorrPanel = () => { 
    return  (
        <div className="error-panel">
            <h2>Oops!</h2>
            <span>Something went wrong.</span>
            <span>We are already working on it.</span>
        </div>
    );
}; 

export default ErorrPanel;