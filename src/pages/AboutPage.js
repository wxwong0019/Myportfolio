import React from 'react'
import Content from '../components/Content'
import Hero from '../components/Hero'

/**
* @author
* @function AboutPage
**/

const AboutPage = (props) => {
  return(
    <div>
        <Hero title={props.title} />
        <Content>
          <p>Hi my name is Wing. I’m a software engineer and a mechanical engineer. I’m just wrapped up my training at Bethel School of technology and I’m excited to combine my problem solving experience and working with my new expertise in Java and JavaScript to a new opportunity as a developer. The more I learn, the more I enjoy working with coding because of how it has a faster paced designing and testing cycle compared to designing a physical product. After that, I had an opportunity to design a web application for a highschool and it currently has around 20 active users. I am excited to continue innovating, and be at the forefront of driving technological advances.  
</p>  
        </Content>
    </div>
   )

 }

export default AboutPage