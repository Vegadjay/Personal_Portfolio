import React from 'react'
import './styles.css'


const Videotext = ({ text }) => {
    return (
        <>
            <video autoplay muted loop>
                <source
                    src="https://mdbootstrap.com/img/video/Sail-Away.mp4"
                    type="video/mp4"
                />
            </video>
            <h2 className='simpletext'>{text}</h2>
        </>
    )
}

export default Videotext