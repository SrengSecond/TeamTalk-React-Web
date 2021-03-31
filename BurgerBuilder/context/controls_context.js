import React from 'react';

const controlContext = React.createContext({
        controls: () => {},
        updateState:() => {}
    });

export default controlContext;