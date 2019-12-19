import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router1,Switch } from 'react-router-dom'

export default class Layout extends React.Component {
   constructor(props) {
    super(props);
   
  }
 
  render() {

    console.log(this.props);

    return (
        <div>

        <button onClick={(e)=>this.props.temaDegistir('pembe')}>Renk Değiştir</button>
           
                <section>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        </ul>
                 </section>

              {this.props.children}
        </div>
    

     
    );
  }
}
