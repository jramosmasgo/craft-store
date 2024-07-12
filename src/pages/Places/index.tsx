import React from 'react'
import Banner from '../../components/shared/Banner';
import CardPlace from './components/CardPlace';
import "./places.css"

const Places: React.FunctionComponent = () => {
    return (
        <>
            <Banner title='Lugares Destacados' />
            <div className='places'>
                <div className="places-content">
                    <CardPlace />
                    <CardPlace />
                    <CardPlace />
                    <CardPlace />
                    <CardPlace />
                    <CardPlace />
                </div>
            </div>
        </>
    )
}

export default Places;