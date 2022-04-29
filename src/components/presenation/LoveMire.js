import React from 'react'
import styled from 'styled-components'

import LoveMire1 from '../../images/lovemire-1.png'
import LoveMire2 from '../../images/lovemire-2.png'

const Slide = styled.div`
    width: 100%;
    height: 25vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255,0.5);

    img {
        display: block;
        max-height: 80%;
        width: auto;
        -webkit-box-shadow: 0px 0px 14px 9px #707070; 
        box-shadow: 0px 0px 14px 9px #707070;  
    }

`

const Bubbble = styled.div`
    padding: 2px 10px;
    height: auto;
    display: inline-block;
    background-color: white;
    border-radius: 10px;
    border: 2px rgb(202, 181, 181) solid;
    margin: auto;
`


export const LoveMire = (props) => {


    return <>
        {!props.slide && <Slide>{props.children}</Slide>}
        {props?.slide === "1" && <Slide>
            <div style={{height: '100%'}} className="sectionBody d-flex justify-content-center align-items-stretch flex-column">
                <h1>Project: Lovemire</h1>
                <h4>Production name: Flirvy</h4>
            </div>
            </Slide>}
        {props?.slide === "2" && <Slide>
            <div  style={{height: '100%', maxWidth: '60%'}}  className="sectionBodyInsert d-flex flex-grow-1 ">
                <Bubbble>
                <h3>A Free Dating/Social App</h3>
                <ul>
                <li><p>Combines a dating app with media browsing social app.</p></li>
                <li><p>Members receive incentives for posts and recent posts reveal higher in searches like a social app.</p></li>
                <li><p>Posts are browsable based on possible matches, like a dating app.</p></li>
                <li><p>Encourages worldwide online dating.</p></li>
                </ul>
                </Bubbble>
            </div>
            
            </Slide>}    
        {props?.slide === "3" && <Slide>
        <div  style={{height: '100%'}} className="sectionBodyInsert d-flex flex-grow-1 ">
                <Bubbble>
                <h3>Request a Test Account!</h3>
                <ul>
                    <li>Content Testers</li>
                    <li>Investors</li>
                </ul>
                </Bubbble>
            </div>
            <div  style={{height: '100%'}} className="sectionBodyInsert d-flex flex-grow-1 align-items-center justify-content-center"><img className="img-fluid" src={LoveMire2} /></div>
            </Slide>}    
        {props?.slide === "4" && <Slide>
            <div  style={{height: '100%'}} className="sectionBody d-flex justify-content-center align-items-stretch flex-column">
                <h1>Target Public Beta: </h1>
                <h4>Winter 2022</h4>
                <div style={{left: '50%', transform: 'translateX(-50%)',
                    position: 'absolute', bottom: '10px',
                    cursor: 'pointer'}}>
                <h5 className="inkfree" 
                    style={{display: "inline-block", 
                    margin: "0 25px"}}>Current Principals</h5>
                <div className="scroll-down"></div>
                </div>
            </div>
            </Slide>}                              
    </>
}