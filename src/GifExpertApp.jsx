import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch' ]);
   
    const onAddCategory = (newCategory) => {
        //console.log(newCategory);
        //console.log('Valorant');
        //setCategories([...categories, 'Valorant' ]);
        //setCategories( cat => [...cat, 'Valorant'] );
        //setCategories( cat => ['Valorant', ...cat] );
        //Validamos que no se duplique el item de las categorias
        let KeyDuplicado = false;
        categories.map( item => {
            if(item.toLowerCase() === newCategory.toLowerCase()){
                KeyDuplicado = true;
            }
        });

        if(KeyDuplicado) return;

        if( categories.includes(newCategory.toLowerCase()) ) return;
        setCategories( [ newCategory, ...categories ] );
    }

    return (
        <>           
            <h1>Gif Expert App</h1>            
            <AddCategory                
                onNewCategory = { value => onAddCategory(value) }
            />           
            {
                categories.map( category => {
                    const lower_category = category.toLowerCase();                   
                    return (<GifGrid 
                                key={ lower_category } 
                                category = { category } 
                            />);
                })
            }            
        </>
    )
}