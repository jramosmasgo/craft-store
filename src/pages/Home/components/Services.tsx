import React from 'react'
import { FaPeopleRoof } from 'react-icons/fa6'
import { GiCampingTent } from 'react-icons/gi'
import { MdSportsSoccer } from 'react-icons/md'
import { TiTree } from 'react-icons/ti'

const Services: React.FunctionComponent = () => {
    return (
        <div className='home-services'>
            <div className="home-services-content">
                <div className='home-services-item' data-aos="zoom-in">
                    <TiTree size={50} />
                    <h2>Ambientes Naturales</h2>
                    <p>Ya sea que busques aventuras al aire libre o un lugar para relajarte y conectar con la naturaleza, Cochas Chico te espera con sus brazos abiertos y su belleza natural intacta.</p>
                </div>
                <div className='home-services-item' data-aos="zoom-in">
                    <FaPeopleRoof size={50} />
                    <h2>Comunidad Increible</h2>
                    <p>En Cochas Chico, la vida se vive en armonía con la naturaleza y se celebra a través de festividades coloridas, música tradicional y danzas folclóricas..</p>
                </div>
                <div className='home-services-item' data-aos="zoom-in">
                    <GiCampingTent size={50} />
                    <h2>Recreos Turisticos</h2>
                    <p>Cada rincón de Cochas Chico promete una experiencia memorable, haciendo de este destino un lugar perfecto para el turismo de aventura y cultural.</p>
                </div>
                <div className='home-services-item' data-aos="zoom-in">
                    <MdSportsSoccer size={50} />
                    <h2>Diversion Sana</h2>
                    <p>En Cochas Chico, cada experiencia está diseñada para proporcionar un disfrute genuino y auténtico, manteniendo siempre un enfoque en la convivencia armoniosa con la naturaleza y la comunidad..</p>
                </div>
            </div>
        </div>
    )
}

export default Services