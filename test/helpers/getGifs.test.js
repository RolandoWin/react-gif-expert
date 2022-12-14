import { getGifs } from '../../src/helpers/getGifs';

describe('Pruebas en getGifs()', () => {
    
    test('1.- Debe de retornar un arrreglo de gifs', async() => {

        const gifs = await getGifs('Goku');
        //console.log(gifs);
        expect( gifs.length ).toBeGreaterThan( 0 );
        expect( gifs[0] ).toEqual({
            id: expect.any( String ),
            url: expect.any( String ),
            title: expect.any( String ),
        })

    });
    
});