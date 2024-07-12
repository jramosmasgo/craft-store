import React from 'react'
import "./shared.css";

interface BannerProps {
    title: string,
}



const Banner: React.FunctionComponent<BannerProps> = ({
    title
}) => {

    return (
        <div className='banner'>
            <div className="banner-content">
                <h1>{title}</h1>
            </div>
        </div>
    )
}

export default Banner