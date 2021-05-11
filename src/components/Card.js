import React from 'react'
import { Container } from 'react-bootstrap'
import CardInfo from './CardInfo'
import style from '../assets/static/style.css'

/**
* @author
* @function Card
**/

const Card = (props) => {
  return(
      <div className= "d-inline-block w-card" onMouseEnter ={(e) => props.click(props.item)} onMouseLeave={(e) => props.click(props.item)} >
            
            <a href={props.item.link} target="_blank" rel="noopener noreferrer" ><img className="w-card-image" src={props.item.imgSrc}></img></a>
            { props.item.selected && <CardInfo title = {props.item.title} subTitle = {props.item.subTitle} link = {props.item.link} /> } 
      </div>
        
   )

 }

export default Card