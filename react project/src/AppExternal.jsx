import React from 'react';
import './assets/css/ExternalCss.css';
const AppExternal = () => {
    return (
        <div>
            <div className='main'>
                <h1>This is main page</h1>
            </div>
            <div className='parent'>
                <h1>This is another page</h1>
            </div>
        </div>
    );
};

export default AppExternal;