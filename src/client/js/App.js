import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//import NoMatch404 from './components/NoMatch404.js'
import Nav from './components/Nav.js'
import Companies from './components/CompanyListings.js'
import Jobs from './components/JobListings.js'
import Login from './components/LoginForm.js'
import Register from './components/RegisterForm.js'

const DynamicRoute = (props) => {
  const styleObj = {padding: '3rem', fontSize: '6vw', color: '#0E6655'}
  return <h2 style={styleObj}>Dynamic Route: <u>{props.match.params.routeVal}</u></h2>
}

const DemoComponent = () => {
  const styleObj = {padding: '3rem', fontSize: '6vw', color: 'slateblue'}
  return <h2 style={styleObj}>Demo Route U</h2>
}

const NoMatch404 = () => {
  const styleObj = {padding: '3rem', fontSize: '6vw', color: 'indianred'}
  return <h2 style={styleObj}>No Match - 404</h2>
}

class App extends React.Component {
  render (){
    return <div>
      <Nav />
      <Switch>

        <Route path='/ex/:routeVal' component={DynamicRoute}/>
        <Route path='/demo' component={DemoComponent}/>
        <Route path='/jobs' component={Jobs}/>
        <Route path='/companies' component={Companies}/>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>


        <Route component={NoMatch404}/>

      </Switch>
    </div>
  }
}

ReactDOM.render(<BrowserRouter>
  <App/>
</BrowserRouter>, document.getElementById('app-container'));
