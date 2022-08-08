import PropTypes from 'prop-types';

export const GifItem = ({ title, id, url}) => {
    return (
        <div className="card">
            <img src={ url } alt={ title } />
            <p>{ title }</p>
        </div>
    )
}


GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}

/* Tarea 

1.- Añadir Proptypes
    a.- title obligatorio
    b.- url obligatorio

2.- Evaluar el snapshot
*/