import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'chaos',
        email: 'usuario@mail.com'
    });

    const {username, email} = formState;

    //event.target.name
    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]: value,//propiedades computaas de los objetos
            //name: value,//si se coloca asi va a crear un nuevo prop con el nombre name
        });
    }


    useEffect(() => {
    //   console.log('useeffect called')
    }, []);
    //cuando el arreglo de dependencias esta vacio es porque solo se quiere disparar el useEffect una unica vez y que sea cuando el componente se renderiza la primera vez
    useEffect(() => {
        // console.log('formstate changed')
    }, [formState]);//cuando el form cambia
    useEffect(() => {
        // console.log('email changed')
    }, [email]);//cuando el form cambia

    return (
        <>
            <h1>Simple Form</h1>
            <hr />

            <input 
                type="text" 
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            {
                (username==='strider2') && <Message />
            }

            <input 
                type="email" 
                className="form-control mt-2"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onInputChange}
            />

        </>
    )
}
