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
                <CardPlaces direction image='https://streetnewshuancayo.wordpress.com/wp-content/uploads/2017/07/huancayo8.jpg'
                    title='Lugares turisticos ' subtitle='Ven y disfruta' text={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut autem amet blanditiis adipisci optio laudantium iure asperiores ad ex quis, saepe, suscipit quia iste, alias quidem esse ducimus voluptas dicta.'} />
                <CardPlaces direction={false} image='https://portal.andina.pe/EDPfotografia3/Thumbnail/2023/01/23/000928074W.jpg'
                    title='Nuestro Productos' subtitle='Conoce mas' text={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut autem amet blanditiis adipisci optio laudantium iure asperiores ad ex quis, saepe, suscipit quia iste, alias quidem esse ducimus voluptas dicta.'} />
                <CardPlaces direction image='https://cde.canaln.pe/peru-video-huancayo-cochas-chico-paraiso-natural-turismo-vivencial-n454949-696x418-1002854.jpg'
                    title='Nuestro Equipo' subtitle='Conocenos' text={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut autem amet blanditiis adipisci optio laudantium iure asperiores ad ex quis, saepe, suscipit quia iste, alias quidem esse ducimus voluptas dicta.'} />
            </div>
        </div>
    )
}

export default Home