import React from 'react';
import ReactDOM from 'react-dom';
import Users from './user'
import Header from './header'
import Error from './Error'

import { Route, Link, BrowserRouter,Switch } from 'react-router-dom'
import Contact from './contact';
import Layout from './layout';

import {ThemeContext} from './theme-context'


export default class App extends React.Component {

  state={renk:"gri"};

  constructor(props) {
    super(props);
  }
  
  changeTheme=(renk)=>{

    this.setState({renk:renk})
    console.log("tema değişti");
  }

  render () {

 

    return (
      <ThemeContext.Provider value={this.state.renk}>
        <Layout temaDegistir={key=>this.changeTheme(key)}>
            <Route exact path="/" component={Header} />
            <Route path="/users/:id?" exact component={Users} />
            <Route path="/contact" component={Contact} />
        </Layout>
      </ThemeContext.Provider>
    
    );
  }
}
 
ReactDOM.render(
<BrowserRouter>
  <App />
</BrowserRouter>, 
document.getElementById('root'));

