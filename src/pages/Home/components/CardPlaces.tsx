import React from 'react'

interface CardPlacesProps {
    image: string,
    title: string,
    subtitle: string,
    text: string,
    direction: boolean
}

const CardPlaces: React.FunctionComponent<CardPlacesProps> = ({
    image, title, subtitle, text, direction
}) => {
    return (
        <>
            {
                direction ?
                    <div className="card" data-aos="fade-right">
                        <div className="card-image">
                            <img src={image} alt="Placeholder Image" />
                        </div>
                        <div className="card-info">
                            <h2>{title}</h2>
                            <h3>{subtitle}</h3>
                            <p>{text}</p>
                        </div>
                    </div> :
                    <div className="card" data-aos="fade-right">
                        <div className="card-info">
                            <h2>{title}</h2>
                            <h3>{subtitle}</h3>
                            <p>{text}</p>
                        </div>
                        <div className="card-image">
                            <img src={image} alt="Placeholder Image" />
                        </div>
                    </div>
            }
        </>
    )
}

export default CardPlaces