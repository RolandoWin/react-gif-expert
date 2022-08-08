import { PropTypes } from 'prop-types';
import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        //console.log( target.value );
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1 ) return;
        //console.log(inputValue);
        // setCategories(...inputValue
        //setCategories( categories => [ inputValue, ...categories] );
        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

    return (
        <>
            <form onSubmit = { (event) => onSubmit(event) } aria-label="form">
                <input 
                    type="text" 
                    placeholder="Buscar Gifs" 
                    value={inputValue}
                    onChange={ (event) => onInputChange(event) }
                />
            </form>
        </>
    )
};

//Hacemos que onNewCategory sea obligatorio
AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}
