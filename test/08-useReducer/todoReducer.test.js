import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe('Pruebas en todoReducer', () => { 

    const initialState = [{
        id: 1,
        description: 'Demo todo',
        done: false
    }];

    test('Debe de regresar el estado inicial', () => { 
        const newState = todoReducer(initialState, {});
        expect(newState).toBe(initialState);
    });

    test('Debe de agregar un todo', () => { 
        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'Todo 2',
                done: false
            }
        }
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
    });

    test('Debe de eliminar un todo', () => { 
        const action = {
            type: '[TODO] Remove Todo',
            payload: 1
        }
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(0);
        // expect(newState).toContain(action.payload);
    });

    test('Debe de realizar el Toggle del todo', () => { 
        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1
        }
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(1);
        expect(newState[0].done).toBeTruthy();
        const newState2 = todoReducer(newState, action);
        expect(newState2.length).toBe(1);
        expect(newState2[0].done).toBeFalsy();
    });

});