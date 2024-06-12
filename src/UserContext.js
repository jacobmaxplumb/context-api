import { createContext, useContext } from "react"

const user = {
    name: 'jacob',
    age: 33
}

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    <UserContext.Provider value={user}>
        {children}
    </UserContext.Provider>
}