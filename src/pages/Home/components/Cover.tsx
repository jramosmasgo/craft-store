import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'

const Cover: React.FunctionComponent = () => {
    return (
        <div className="cover">
            <div className="cover-content">
                <h1>Bienvenido a Cochas Chico</h1>
                <p>¡Descubre la magia oculta, historia, naturaleza y cultura te esperan.</p>
                <a href="#main-content" className="btn">Conocer mas <MdKeyboardArrowRight size={30} /></a>
            </div>
        </div>
    )
}

export default Cover