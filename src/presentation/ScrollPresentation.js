import React from 'react'
import styled from 'styled-components'
import {Presentation, ConfigurableSlide} from 'react-scroll-presentation'

// If we want the presentation in a scroll window
const StyledPresentation = styled(Presentation)`
    height: 50vh;

    &::-webkit-scrollbar {
        width: 9px;
    }
      
    &::-webkit-scrollbar-track {
      background: grey;
      border-radius: 5px;
    }
      
    &::-webkit-scrollbar-thumb {
      background-color: lightblue; 
      border-radius: 20px;
      border: 1px solid grey;
    }
`

const FadeOutSlide = styled.div`
    font-family: "Montserrat", Arial, Helvetica, sans-serif;
`


const ScrollPresentation = (props) => {

    return <Presentation fullScreen>
        <ConfigurableSlide fadeOut>
            <FadeOutSlide><h1>Under Development</h1></FadeOutSlide>
        </ConfigurableSlide>
    </Presentation>

}

export default ScrollPresentation;