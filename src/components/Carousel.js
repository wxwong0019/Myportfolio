import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ileave from '../assets/images/ileave.png'
import myticket from '../assets/images/myticket.png'

import Card from './Card';
import { Container, Row } from 'react-bootstrap';
/**
* @author
* @class Carousel
**/

class Carousel extends Component {
 constructor(props){
     super(props);
     this.state = {
        items: [
            {
                id:0,
                title:"School TimeOff Management",
                subTitle:"A solution for managing School Timeoff",
                imgSrc: ileave,
                link:"https://kachi-ileave.herokuapp.com",
                selected:false
            },
            {
                id:1,
                title:"Ticket Tracker",
                subTitle:"Streamline personal tasks management",
                imgSrc: myticket,
                link:"https://sheltered-lowlands-03459.herokuapp.com/",
                selected:false
            }
        ]
     };
 }
 handleCardClick = (id, card) =>{
     let items = [...this.state.items];
     items[id].selected = items[id].selected ? false : true;

     items.forEach(item => {
         if(item.id !== id){
             item.selected = false;
         }
     })
     this.setState({
         items
     })
 }
 makeItems = (items)=>{
     return items.map(item =>{
         return <Card item = {item} click = {( e=> this.handleCardClick(item.id, e))} key={item.id}/>
     })
 }


 render() {
  return(
   <Container fluid={true}>
       <Row className= "justify-content-around">
           {this.makeItems(this.state.items)}
       </Row>
   </Container>
    )
   }
 }


Carousel.propTypes = {}
export default Carousel