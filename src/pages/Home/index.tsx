import React from 'react'
import './home.css';
import Cover from './components/Cover';
import CardPlaces from './components/CardPlaces';
import Services from './components/Services';

const Home: React.FunctionComponent = () => {
    return (
        <div>
            <Cover />
            <Services />
            <div id="main-content">
                <CardPlaces direction image='https://scontent.fjau1-1.fna.fbcdn.net/v/t39.30808-6/274022967_309322711179550_6047739459504086582_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHk9VEWJs3mx81kT3WHh0wYLucQ0qLdZYgu5xDSot1liNTAo1tSdqMH4cm9jp3Lp-otkIwXs_PwhbaSOuzh4DcA&_nc_ohc=gmbuFPBt9_wQ7kNvgHjRA6r&_nc_ht=scontent.fjau1-1.fna&oh=00_AYCl7vNQ6-XlA2TKKQbFuHuY0HwCdxY86BTgEbt6Y-5J5A&oe=669CEB3A'
                    title='Lugares turisticos ' subtitle='Parque de los Mates' text={'El Parque de los Mates fue construido en agradecimiento a la labor que desarrollan los pobladores desde hace más de 100 años.Al ingresar podemos ver un gran mural de 10 metros de alto, donde se aprecian en alto relieve a pobladores en pleno proceso de tallado de los mates, realizando tejidos en telares y sembrando el campo con la yunta. El mate burilado es en esencia una fracción de la vida cotidiana de los pobladores de Cochas y cualquier otro habitante del valle del Mantaro'} />
                <CardPlaces direction={false} image='https://portal.andina.pe/EDPfotografia3/Thumbnail/2023/01/23/000928074W.jpg'
                    title='Nuestro Productos' subtitle='Conoce mas' text={'En BuriWeb podemos encontrar diversos productos textiles tejidos con lana de alpaca que podemos adquirir como recordatorio, así como también diversas artesanías, y los famosos Mates Burilados.'} />
                <CardPlaces direction image='https://res.cloudinary.com/musica-reservation/image/upload/v1721184057/WhatsApp_Image_2024-07-16_at_9.27.58_PM_vctbqk.jpg'
                    title='Nuestro Equipo' subtitle='Conocenos' text={'Somos BuriWeb, un grupo de jóvenes universitarios interesados en la cultura e historia de nuestra región, con este emprendimiento, buscamos que personas del país y turistas de distintos países conozcan la cultura, tradiciones y artesanías de Cochas Chico..'} />
            </div>
        </div>
    )
}

export default Home