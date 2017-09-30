import React, { Component } from 'react'
import { Switch, Route } from 'react-router'
import Placeholder from './Placeholder'
import Employee from './Employee'
import Departments from './Departments'

export default class App extends Component {
  render () {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-2'>
            <Departments />
          </div>
          <div className='col-md-10'>
            <Switch>
              <Route exact path='/' component={Placeholder} />
              <Route path='/employee/:id' component={Employee} />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}
