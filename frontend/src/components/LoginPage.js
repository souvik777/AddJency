import React, { Component } from "react";
import "../css/login.css";
class LoginPage extends Component {

    constructor(props){
        super(props);
        this.state={
            username:"",
            password:""
        }
    
        this.myChangeHandler=this.myChangeHandler.bind(this);
        this.mySubmitHandler=this.mySubmitHandler.bind(this);
     }
    myChangeHandler(event)
    {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]:val})
    }
    mySubmitHandler(event)
    {
        if(this.state.username.length>0 && this.state.password.length>0)
        {
    
            this.setState({isLoggedIn:true})
            alert("hello "+this.state.username)
        }
        
    }
    
    render() {
        return (
            <div class="outer">
            <form onSubmit={this.mySubmitHandler}>
                <div className="Model">
                    <h2 className="tag">Login</h2>
                    
                    <input name="username" onChange={this.myChangeHandler} value={this.state.username} type="email" placeholder="Email" />
                    
                    <input name="password" onChange={this.myChangeHandler} type="password" placeholder="Password" />
                    
                    <input type="submit" value="submit" className="bt" />
                    
                    <p className="forgot-password text-right">
                        Forgot <a href="#">password?</a>
                    </p>
                </div>
            </form>
            </div>
        );
    }
}
export default LoginPage;