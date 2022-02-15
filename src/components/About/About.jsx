import React from 'react'

import './about.css'

export default function About() {
    return (
        <main id='about'>
            <article className='topic'>
                <div className='title'>Our Story</div>
                <div className='dash'></div>
                <div className="content">
                    <div className='info'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div className='img-container'>
                        <img src='https://www.verywellfit.com/thmb/R7M0FlXHQI7EArWaKgRbg6MnGIs=/2002x2002/smart/filters:no_upscale()/cardiovascular-endurance-59f7fc2faad52b00100156aa.jpg' alt='image not found'/>
                    </div>
                </div>
            </article>
            <article className='topic'>
                <div className='title'>Our Goal</div>
                <div className='dash'></div>
                <div className="content">
                    <div className='img-container'>
                        <img src='https://www.verywellfit.com/thmb/R7M0FlXHQI7EArWaKgRbg6MnGIs=/2002x2002/smart/filters:no_upscale()/cardiovascular-endurance-59f7fc2faad52b00100156aa.jpg' alt='image not found'/>
                    </div>
                    <p className='info'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </article>
            <article className='topic'>
                <div className='title'>Our Mission</div>
                <div className='dash'></div>
                <div className="content">
                    <p className='info'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <div className='img-container'>
                        <img src='https://www.verywellfit.com/thmb/R7M0FlXHQI7EArWaKgRbg6MnGIs=/2002x2002/smart/filters:no_upscale()/cardiovascular-endurance-59f7fc2faad52b00100156aa.jpg' alt='image not found'/>
                    </div>
                </div>
            </article>
        </main>
    )
}
