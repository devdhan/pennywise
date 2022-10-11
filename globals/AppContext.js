import { createContext, useState } from "react";

const AppContext = createContext();

function AppProvider ({children}) {
    const [userUID, setUserUID] = useState('uyevskjlsnjj');
    const [userEmail, setUserEmail] = useState('danielbolaji99@gmail.com');
    const [userNames, setUserNames] = useState({fname:'daniel',lname:'bolaji'});

    return (
        <AppContext.Provider value={{userUID, userEmail, setUserEmail, userNames, setUserNames}}>
        {children}
    </AppContext.Provider>
    )
}

export {AppContext,AppProvider}