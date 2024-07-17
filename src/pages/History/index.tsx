import React from 'react'
import "./history.css"
import video from "../../assets/Video1-CochasChico.mp4";
import Banner from '../../components/shared/Banner'

const History: React.FunctionComponent = () => {
    return (
        <div>
            <Banner title='Nuestra Historia' />
            <div className='history-container'>
                <div className='card-video'>
                    <div className='card-video-info' >
                        <h1>Cochas Chico</h1>
                        <p>Cochas Chico, un pintoresco pueblo en los Andes peruanos, tiene una rica historia que se remonta a tiempos precolombinos. Originalmente habitado por comunidades indígenas, la región ha sido testigo de la evolución cultural y social a lo largo de los siglos. Con la llegada de los españoles en el siglo XVI, Cochas Chico, como muchas otras comunidades andinas, experimentó un proceso de mestizaje cultural que dejó huellas en sus tradiciones, arquitectura y vida cotidiana.

                            A lo largo de los años, el pueblo ha mantenido vivas sus costumbres y artesanías, especialmente los 'mates burilados', una técnica ancestral de grabado en calabazas que cuenta historias y leyendas locales. Esta artesanía ha sido un pilar económico y cultural para la comunidad, transmitiéndose de generación en generación.

                            En la actualidad, Cochas Chico es conocido por su dedicación a preservar su herencia cultural y natural, atrayendo a visitantes que buscan una experiencia auténtica y profunda de la vida andina. La comunidad sigue siendo un ejemplo de resiliencia y continuidad cultural en el cambiante paisaje de los Andes peruanos.</p>
                    </div>
                    <div className="video-container">
                        <video controls>
                            <source src={video} type="video/mp4" />
                            Tu navegador no soporta la reproducción de videos.
                        </video>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default History