import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

/**
* @author
* @function Footer
**/

const Footer = (props) => {
  return(
      <footer className="mt-5">
          <Container fluid={true}>
              <Row className="border-top justify-content-between p-3">
                  <Col className="p-0"  md={3} sm={12}>
                    Wing C. W.
                  </Col>
                  <Col className="p-0 " md={3} sm={12}>
                    This site was made by Wing C. W.
                  </Col>
              </Row>
          </Container>

      </footer>
   )

 }

export default Footer