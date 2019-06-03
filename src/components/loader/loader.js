import React from 'react';

import './loader.css';

const Loader = () => {
    return (
        <div className="loader">
            <div className="lds-css ng-scope">
                <div className="lds-rolling">
                    <div></div>
                </div>
            </div>
        </div>
    );
}

export default Loader;

