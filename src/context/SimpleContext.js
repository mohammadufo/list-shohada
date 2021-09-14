import {createContext} from 'react';

const SimpleContext = createContext ({
    persons: [],
    person : "",
    handleDeletPerson: () => {},
    handleNameChange: () => {},
    handleNewPerson: () => {},
    handleShowPerson: () => {},
    setPerson: () => {}
})

export default SimpleContext;