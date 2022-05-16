import React from 'react';

const MainButton = ({children}) => {
    return (
        <button class="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary  to-primary">{children}</button>
    );
};

export default MainButton;