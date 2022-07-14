import {fireEvent, render, screen} from '@testing-library/react'
import { UserContext } from '../../src/09-useContext/context/UserContext';
import { LoginPage } from '../../src/09-useContext/LoginPage';

describe('Pruebas en <LoginPage />', () => {

    const user = {
        id: 123,
        name: 'Juan',
        email: 'juan@mail.com'
    }

    test('Debe de mostrar el componente sin el usuario', () => {
        render(
            <UserContext.Provider value={{ user: null }}>
                <LoginPage />
            </UserContext.Provider>
        );
        // screen.debug();
        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null');
    });

    test('Debe de mostrar el componente con el usuario', () => {
        render(
            <UserContext.Provider value={{ user }}>
                <LoginPage />
            </UserContext.Provider>
        );
        // screen.debug();
        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toContain(user.name);
        expect(preTag.innerHTML).toContain(`${user.id}`);
    });

    test('Debe de llamar el setUser cuando se hace click en el boton', () => {
        const setUserMock = jest.fn();

        render(
            <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
                <LoginPage />
            </UserContext.Provider>
        );
        // screen.debug();
        const buttonElement = screen.getByRole('button', {name: 'Establecer usuario'});
        fireEvent.click(buttonElement);
        // console.log(buttonElement);
        expect(setUserMock).toHaveBeenCalledWith(user);

    });
});