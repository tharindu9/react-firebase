import React , {Component} from 'react';
import { Link } from 'react-router-dom';
import App from './App';




class User extends Component {

    constructor(props){
        super(props);
        this.changePage = this.changePage.bind(this);
       this.changePage = this.changePage.bind(this);
    }

    changePage(){
      
    }

    render(){
        return(
            <div className="UserClass"> 
                <h1>I am User</h1>
                <button onClick = {this.changePage}> <Link to = "/"> click  </Link>click me </button> 
            </div>
        )
    }
}

export default User;