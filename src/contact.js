import React from 'react';
import ReactDOM from 'react-dom';
import Users from './user';
import {ThemeContext} from './theme-context'

export default class Contact extends React.Component {
  
  static contextType = ThemeContext;
  constructor(props) {
    super(props);
   
  }
 
  render() {

    
    return (
      <h1>{this.context}</h1>
    );
  }
}
