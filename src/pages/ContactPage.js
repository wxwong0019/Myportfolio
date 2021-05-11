import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Content from '../components/Content'
import Hero from '../components/Hero'

/**
* @author
* @function ContactPage
**/

const ContactPage = (props) => {
  return(
    <div>
      <Hero title={props.title} />
      <Content>
        <h5>Linkedin : <a href = "www.linkedin.com/in/wing-7298ff">www.linkedin.com/in/wing-7298ff</a></h5>
        <h5>Email : <a href = "wongwingchit@gmail.com">wongwingchit@gmail.com</a></h5>
        <h5>Github : <a href = "https://github.com/wxwong0019">https://github.com/wxwong0019</a></h5>
      </Content>
      

    </div>
   )

 }

export default ContactPage