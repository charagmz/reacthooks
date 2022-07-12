import { useContext } from "react"
import { UserContex } from "./context/UserContext";

export const LoginPage = () => {

    const { user, setUser} = useContext(UserContex);
    // console.log(hola, user);
    return (
        <>
            <h1>LoginPage</h1>
            <hr />

            <pre>
                { JSON.stringify(user, null, 3)}
            </pre>

            <button 
                className="btn btn-primary"
                onClick={() => setUser({
                    id: 123,
                    name: 'Juan',
                    email: 'juan@mail.com'
                })}
            >
                Establecer usuario
            </button>
            
        </>
    )
}
