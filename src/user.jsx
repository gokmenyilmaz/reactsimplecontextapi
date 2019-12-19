import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeContext} from './theme-context'

const Hello = ({name}) => <div>Hello {name}</div>

export default class User extends React.Component {
  i=0;

  // static contextType = ThemeContext;

  constructor(props) {
    super(props);
   
  }
 
  render() {
    return (
      <div>
        <Hello/>
        <h1>Kullanıcı</h1>
        {/* <h1>{this.context}</h1> */}

        <ThemeContext.Consumer>
        {value => <h2>ddeger: {value}</h2>}
      </ThemeContext.Consumer>

     

      </div>
     
    );
  }
}
