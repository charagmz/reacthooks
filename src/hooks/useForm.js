import { useState } from "react";

export const useForm = (initialForm = {}) => {
    
    const [formState, setFormState] = useState(initialForm);

    //event.target.name
    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]: value,//propiedades computadas de los objetos
            //name: value,//si se coloca asi va a crear un nuevo prop con el nombre name
        });
    }

    const onResetForm = () => {
        setFormState(initialForm)
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}
