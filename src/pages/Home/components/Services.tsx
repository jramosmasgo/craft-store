import React from 'react'
import { BsPeopleFill } from 'react-icons/bs'
import { FaPeopleRoof } from 'react-icons/fa6'
import { GiCampingTent } from 'react-icons/gi'
import { MdSports, MdSportsSoccer } from 'react-icons/md'
import { TiTree } from 'react-icons/ti'

const Services: React.FunctionComponent = () => {
    return (
        <div className='home-services'>
            <div className="home-services-content">
                <div className='home-services-item' data-aos="zoom-in">
                    <TiTree size={50} />
                    <h2>Ambientes Naturales</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At in provident suscipit.</p>
                </div>
                <div className='home-services-item' data-aos="zoom-in">
                    <FaPeopleRoof size={50} />
                    <h2>Comunidad Increible</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At in provident suscipit.</p>
                </div>
                <div className='home-services-item' data-aos="zoom-in">
                    <GiCampingTent size={50} />
                    <h2>Recreos Turisticos</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At in provident suscipit.</p>
                </div>
                <div className='home-services-item' data-aos="zoom-in">
                    <MdSportsSoccer size={50} />
                    <h2>Diversion Sana</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At in provident suscipit.</p>
                </div>
            </div>
        </div>
    )
}

export default Services