import './App.css';
import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Nav,Navbar, NavbarBrand } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';


/**
* @author
* @class App
**/

class App extends Component {
 
  constructor(props){
    super(props);
    this.state={
      title: "Boi",
      headerLinks: [
        {title: "Home", path:"/"},
        {title: "About", path:"/about"},
        {title: "Contact", path:"/contact"},
      ],
      home: {
        title:"Hello There,",
        subTitle: "My Name is Wing",
        text: "I Am A Full Stack Developer "
      },
      about: {
        title:"About me",
        subTitle: "stuff about myself",
        text: "I am ........"
      },
      contact: {
        title:"Contact me",
       
      },
    }
  }

 render() {
  return(
   <Router>
     <Container className="p-0" fluid={true}>
        <Navbar className="border-bottom" bg="transparent" expand="lg"> 
          <Navbar.Brand>
            WING Personal Site
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-toggle"/>
          <NavbarCollapse id="navbar-toggle">
            <Nav className = "ml-auto">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/about">About</Link>
              <Link className="nav-link" to="/contact">Contact</Link>

              
            </Nav>
          </NavbarCollapse>
        </Navbar>
        <Route exact path="/" >
                <HomePage title = {this.state.home.title} subTitle = {this.state.home.subTitle} text = {this.state.home.text} />
        </Route>
        <Route exact path="/about" >
                <AboutPage title = {this.state.about.title} subTitle = {this.state.about.subTitle} text = {this.state.about.text} />
        </Route>
        <Route exact path="/contact" >
                <ContactPage title = {this.state.contact.title} />
        </Route>
        <Footer/>
     </Container>
   </Router>
    )
   }
 }


export default App;
