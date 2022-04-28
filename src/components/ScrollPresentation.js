import React from 'react'
import {Presentation, ConfigurableSlide } from 'react-scroll-presentation'

import {LoveMire} from './presenation/LoveMire'
import LoveMireBackDrop from '../images/LoveMireBackDrop.png'

const ScrollPresentation = (props) => {

    return <div style={{maxWidth: '1024px', margin: "auto"}}>
        <Presentation fullScreen>
        <ConfigurableSlide alternateSlideIn={{background: LoveMireBackDrop,
             fullScreen: true, scrollSpeed: 3, scrollViewPort: true}} title="test">
            <LoveMire slide="1" />
            <LoveMire slide="2" />
            <LoveMire slide="3" />
            <LoveMire slide="4" />
        </ConfigurableSlide>
        <ConfigurableSlide springIn title="test">
            <div>Thank you!</div>
        </ConfigurableSlide>        
    </Presentation>
    </div>
}

export default ScrollPresentation