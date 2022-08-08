import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en el hook useFetchGifs', () => {
    
    test('1.- Debe de regresar el estado inicial', () => {
        
        //const { images, isLoading } = useFetchGifs();
        const { result } = renderHook( () => useFetchGifs('One Punch') );
        //console.log( result );
        const { images, isLoading } = result.current;

        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();

    });

    test('2.- Debe de retornar un arreglo de imagenes y el isLoading en false', async() => {
        
        //const { images, isLoading } = useFetchGifs();
        const { result } = renderHook( () => useFetchGifs('One Punch') );
        //console.log( result );
        
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0)
        );

        const { images, isLoading } = result.current;

        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();

    });
    
});