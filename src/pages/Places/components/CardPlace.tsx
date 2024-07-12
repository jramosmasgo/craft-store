import React from 'react'

const CardPlace: React.FunctionComponent = () => {
    return (
        <div className="tourist-card" data-aos="fade-right">
            <img src="https://www.regionjunin.gob.pe/data/multimedia/1611693693_WhatsApp%20Image%202021-01-11%20at%2016.47.20.jpeg" alt="Imagen del lugar turístico" className="tourist-image" />
            <div className="tourist-info">
                <h2 className="tourist-title">Nombre del Lugar Turístico</h2>
                <p className="tourist-description"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolor reiciendis ipsa quos rerum! Similique molestiae dignissimos eveniet in voluptas! Veniam quod distinctio consectetur vitae similique optio corporis voluptates architecto. </p>
                <button className="visit-button">Como llegar
                </button>
            </div>
        </div>
    )
}

export default CardPlace