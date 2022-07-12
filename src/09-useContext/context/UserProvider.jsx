import { useState } from "react"
import { UserContex } from "./UserContext"

// const user = {
//     id: 123,
//     name: 'Charly',
//     email: 'email@gmail.com'
// };

export const UserProvider = ({children}) => {

    const [user, setUser] = useState();
    

    return (
        // <UserContex.Provider value={{ hola: 'mundo', user }}>
        <UserContex.Provider value={{ user, setUser }}>
            { children }
        </UserContex.Provider>
    )
}
