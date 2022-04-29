import React from 'react'
import styled from 'styled-components'

import Principal1 from '../../images/profile_pic.jpg'
import Principal2 from '../../images/principal-2.jpg'

const Slide = styled.div`
    width: 100%;
    height: 50vh;
    padding: 25px 0;
    background-color: rgba(255, 255, 255,0.5);

    img {
        display: block;
        max-height: 80%;
        max-width: 80%;
        margin: 0 auto;
        -webkit-box-shadow: 0px 0px 14px 9px #707070; 
        box-shadow: 0px 0px 14px 9px #707070;  
        border-radius: 50%;

        @media (max-width: 768px) {
            max-width: 180px;
        }
    }

`

const Bubbble = styled.div`
    padding: 2px 10px;
    height: auto;
    display: inline-block;
    background-color: white;
    border-radius: 25px 25px 25px 0;
    padding: 10px;
    border: 2px rgb(202, 181, 181) solid;
    
`


export const LoveMirePrincipals = (props) => {


    return <>
        {!props.slide && <Slide >{props.children}</Slide>}
        {props?.slide === "1" && <Slide className="container ">
        <div className="row">
        <div className="col-sm-6 sectionBodyInsert col-sm-6"><img className="img-fluid" src={Principal1} /></div>
        
        <div className="col-sm-6 sectionBodyInsert  ">
                <Bubbble>
                <h3>Nathan Dunn</h3>
                <i>"Busy tracking down a ghost event."</i>
                <p>Contact for UI/UX and backend contributing, testing, and investment.</p>
                <p><a href="mailto: nathan@lovemire.com">nathan@lovemire.com</a></p>
                </Bubbble>
            </div>
            </div>
            </Slide>}
  
        {props?.slide === "2" && <Slide className="container">
        <div className="row">
        <div className="col-sm-6 sectionBodyInsert"><img className="img-fluid" src={Principal2} /></div>
        
            <div className="col-sm-6 sectionBodyInsert">
                <Bubbble>
                <h3>David Radford</h3>
                <i>"When I'm not selling, I'm flying."</i>
                <p>Contact for Content Models, Advertising, and Marketing.</p>
                <p><a href="mailto: david@lovemire.com">david@lovemire.com</a></p>                

                
                </Bubbble>
            </div>
        </div>
            </Slide>}    
                            
    </>
}