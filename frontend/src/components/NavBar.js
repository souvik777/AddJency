import React,{Component,useState} from 'react';
import {Nav,Navbar,Form,FormControl, NavLink} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {Redirect} from 'react-router-dom/cjs/react-router-dom.min';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../../node_modules/font-awesome/css/font-awesome.min.css';
// import "../css/index.css";

export default class NavBar extends Component{
    
constructor(props){
    super(props);
    this.state={
        username:""
    }
    this.handleClick.bind(this)

}

handleClick(params){
  
  if(params=="sin"){
    return <Redirect to="/signin"/>
    }
    else
    {
      return <Redirect to="/signup"/>
    }
}
    
render()
{
return(
  <div className="bg-img">
    <Navbar className="container" style={{}} bg="transparent" expand="lg" >
        <Navbar.Brand style={{marginLeft:"100px",fontSize:"30px"}}><Link style={{textDecoration:"none",color:"white"}} to="/"><i style={{padding:"10px"}} className="fa fa-cube"/>AddJency</Link></Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
        <Form inline style={{marginRight:"35px"}}>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <i className="fa fa-search" style={{color:"white"}}/>
        </Form>
        <NavLink onClick={this.handleClick()} style={{textDecoration:"none",fontSize:"20px",color: "white"}} >Sign In</NavLink>
        <NavLink onClick={this.handleClick()} style={{textDecoration:"none",fontSize:"20px",color: "white",marginRight:"50px"}} >Sign Up</NavLink>
        </Navbar.Collapse>
    </Navbar>
    </div>
    );
}
}