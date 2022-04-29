import React from 'react'
import styled from 'styled-components'

import Principal1 from '../../images/profile_pic.jpg'
import Principal2 from '../../images/principal-2.jpg'

const Slide = styled.div`
    width: 100%;
    height: 50vh;
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
        border-radius: 50%;
    }

`

const Bubbble = styled.div`
    padding: 2px 10px;
    height: auto;
    max-width: 80%;
    display: inline-block;
    background-color: white;
    border-radius: 25px 25px 25px 0;
    padding: 10px;
    border: 2px rgb(202, 181, 181) solid;
    margin: auto;
`


export const LoveMirePrincipals = (props) => {


    return <>
        {!props.slide && <Slide>{props.children}</Slide>}
        {props?.slide === "1" && <Slide>
        <div  style={{height: '100%'}} className="sectionBodyInsert d-flex flex-grow-1 ">
                <Bubbble>
                <h3>Nathan Dunn</h3>
                <i>"Busy tracking down a ghost event."</i>
                <p>Contact for UI/UX and backend contributing, testing, and investment.</p>
                <p><a href="mailto: nathan@lovemire.com">nathan@lovemire.com</a></p>
                </Bubbble>
            </div>
            <div  style={{height: '100%'}} className="sectionBodyInsert d-flex flex-grow-1 align-items-center justify-content-center"><img className="img-fluid" src={Principal1} /></div>
            </Slide>}
  
        {props?.slide === "2" && <Slide>
        <div  style={{height: '100%'}} className="sectionBodyInsert d-flex flex-grow-1 ">
                <Bubbble>
                <h3>David Radford</h3>
                <i>"When I'm not selling, I'm flying."</i>
                <p>Contact for Content Models, Advertising, and Marketing.</p>
                <p><a href="mailto: david@lovemire.com">david@lovemire.com</a></p>                

                
                </Bubbble>
            </div>
            <div  style={{height: '100%'}} className="sectionBodyInsert d-flex flex-grow-1 align-items-center justify-content-center"><img className="img-fluid" src={Principal2} /></div>
            </Slide>}    
                            
    </>
}