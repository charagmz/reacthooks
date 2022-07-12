import PropTypes from 'prop-types';
import { useForm } from "../hooks/useForm";


export const TodoAdd = ({onNewTodo}) => {

    const {onInputChange, onResetForm, description} = useForm({
        description: ''
    });

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (description.trim().length <= 1) return;
        const newTodo = {
            id: new Date().getTime(),
            description: description.trim(),
            done: false,
        } 
        onNewTodo(newTodo);
        onResetForm('');
    }

    return (
        <form onSubmit={ onFormSubmit }>
            {/* TodoAdd onNewTodo( newTodo ) */}
            {/* {id: new Date()..., description: '', done: false} */}
            <input 
                type="text"
                placeholder="Que hay que hacer?"
                className="form-control"
                name="description"
                value={description}
                onChange={onInputChange}
            />

            <button 
                type="submit"
                className="btn btn-outline-primary mt-1"
            >
                Agregar
            </button>
        </form>
    )
}


TodoAdd.propTypes = {
    onNewTodo: PropTypes.func.isRequired
}