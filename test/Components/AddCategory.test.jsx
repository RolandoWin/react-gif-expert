import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en <AddCategory />', () => {

    const inputValue = 'Goku';
    
    test('1.- Debe cambiar el valor de la caja de texto', () => {
        //Sujeto de prueba
        render( <AddCategory onNewCategory={ () => {} } /> );
        
        const input = screen.getByRole('textbox');
        fireEvent.input( input, { target: { value: inputValue } } );
        expect( input.value ).toBe( inputValue );
        //screen.debug();

    });

    test('2.- Debe de llamar onNewCategory si el input tiene un valor', () => {
        
        //TODO: ????
        //Sujeto de prueba
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } /> );
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        //Disparamos el evento
        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );
        //screen.debug();
        expect( input.value ).toBe('');
        //evaluo que la función haya sido llamada
        expect( onNewCategory ).toHaveBeenCalled();
        //evaluo que solo haya sido llamado solo una vez
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        //evaluo que haya sido llamado con el valor de nuestro inputvalue
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );

    });

    test('3.- No debe llamar al evento onNewCategory si el input esta vació', () => {
        
        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategory={ onNewCategory } /> );
        
        const form = screen.getByRole('form');
        //Disparamos el evento
        fireEvent.submit( form );
        
        //evaluo que no haya sido llamado el evento por estar vacio el input
        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled();

    });
    
});