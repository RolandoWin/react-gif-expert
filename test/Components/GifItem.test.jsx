import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en <GifItem />', () => {

    const title = 'Dragon Ball GIF by Toei Animation';
    const url = 'https://media1.giphy.com/media/GRSnxyhJnPsaQy9YLn/giphy.gif?cid=836777ffnqkzd1rx88yrp4exgkp0bhwq5atnuhclxuxfff0k&amp;rid=giphy.gif&amp;ct=g';
    const id = 'GRSnxyhJnPsaQy9YLn';
    
    test('1.- Debe hacer match con el snapshot', () => {
         
        const { container } = render( <GifItem title={title} url={url} id={id} />);
        expect(container).toMatchSnapshot();

    });

    test('2.- Debe mostrar la imagen del url  y el alt indicado', () => {
        
        render( <GifItem title={title} url={url} id={id} />);
        //screen.debug();
        // expect( screen.getByRole('img').src ).toBe( url );
        // expect( screen.getByRole('img').alt ).toBe( title );
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );

    });

    test('3.- Debe mostrar el título en el componente', () => {
        
        render( <GifItem title={title} url={url} id={id} />);
        expect( screen.getByText( title ) ).toBeTruthy();

    });
    
    
    
});