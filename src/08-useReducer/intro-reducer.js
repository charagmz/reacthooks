// console.log('Hola MUndo')

const initialState = [{
    id: 1,
    todo: 'Tarea 1',
    done: false,
}];

const todoReducer = ( state = initialState, action = {}) => {

    if (action.type==='[TODO] add todo') {
        return [...state, action.payload];
    }


    return state;
}

//No se debe de modificar/mutar el state manualmente
// todos.push({
//     id: 2,
//     todo: 'Tarea 2',
//     done: false,
// })


let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Tarea 2',
    done: false,
};

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
}

console.log(todos);
todos = todoReducer(todos, addTodoAction);

console.log(todos);
