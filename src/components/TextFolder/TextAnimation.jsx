import ArrowImg from '/Arrow/Arrow.svg'
import React, { useEffect } from 'react'
import { arrowMarquee } from './index'
import './style.css'

export const TextAnimation = () => {
    const marqueeContent = [
        { text: "Thankyou For Visit", id: 1 },
        { text: "Visit Again", id: 2 },
        { text: "Contact For Work", id: 3 },
        { text: "Thankyou For Visit", id: 4 },
        { text: "Visit Again", id: 5 },
        { text: "Contact For Work", id: 6 },
        { text: "Thankyou For Visit", id: 7 },
        { text: "Visit Again", id: 8 },
        { text: "Contact For Work", id: 9 },
        { text: "Thankyou For Visit", id: 10 },
        { text: "Visit Again", id: 11 },
        { text: "Contact For Work", id: 12 }
    ];

    useEffect(() => {
        arrowMarquee();
    }, [])

    return (
        <div className="marquee-container">
            <div id="move">
                <div className="marquee">
                    {marqueeContent.map(item => (
                        <React.Fragment key={`a-${item.id}`}>
                            <h1>{item.text}</h1>
                            <img src={ArrowImg} alt="Arrow Img" id='arrowImg' />
                        </React.Fragment>
                    ))}

                    {marqueeContent.map(item => (
                        <React.Fragment key={`b-${item.id}`}>
                            <h1>{item.text}</h1>
                            <img src={ArrowImg} alt="Arrow Img" id='arrowImg' />
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    )
}