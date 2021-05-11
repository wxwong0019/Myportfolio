import React from 'react'
import { Container, Row } from 'react-bootstrap'
import {useSpring, animated} from 'react-spring'
/**
* @author
* @function CardInfo
**/

const CardInfo = (props) => {

    const style = useSpring({opacity:1 , from: {opacity:0}})

  return(
        <animated.div style={style}>
            <p className="w-card-title" > {props.title} </p>
            <p className="w-card-subtitle"> {props.subTitle} </p>
            <a href={props.link} target="_blank" rel="noopener noreferrer" >View</a>
        </animated.div>
   )

 }

export default CardInfo