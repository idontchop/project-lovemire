import React from 'react'
import {Presentation, ConfigurableSlide } from 'react-scroll-presentation'

import {LoveMirePrincipals} from './presenation/LoveMirePrincipals'
import {LoveMire} from './presenation/LoveMire'
import LoveMireBackDrop from '../images/LoveMireBackDrop.png'

const ScrollPresentation = (props) => {

    return <div style={{maxWidth: '1024px', margin: "auto"}}>
        <Presentation fullScreen>
        <ConfigurableSlide alternateSlideIn={{background: LoveMireBackDrop,
             fullScreen: true, scrollSpeed: 4, scrollViewPort: true}} title="test">
            <LoveMire slide="1" />
            <LoveMire slide="2" />
            <LoveMire slide="3" />
            <LoveMire slide="4" />
        </ConfigurableSlide>
        <ConfigurableSlide springIn title="principals">
            <LoveMirePrincipals slide="2" />
            <LoveMirePrincipals slide="1" />
        </ConfigurableSlide>        
    </Presentation>
    </div>
}

export default ScrollPresentation