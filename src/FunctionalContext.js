import React from 'react';

export const Functional = React.createContext();

export const FunctionalProvider = (props) => {
    let value = 70;
    return ( 
        <Functional.Provider value={value}>
            {props.children}
        </Functional.Provider>
     );
}
