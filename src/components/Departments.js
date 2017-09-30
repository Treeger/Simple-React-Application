import React, { Component } from 'react';
import axios from 'axios';
import Department from './Department';

export default class Departments extends Component {
  constructor (props) {
    super(props)
     this.state = {
       data: null,
       oppened: false
     }
  }

  componentWillMount () {
      this.fetchDepartments();
  }

  fetchDepartments () {
    axios.get('http://localhost:3000/departments/').then((response) => {
      this.setState({
        data: response.data
      })
    })
  }


  renderDepartments () {
    return this.state.data.map((row) =>
    <Department key={row.id} department={row} />
    )
  }

  render () {
    if (!this.state.data) return <span>Loading...</span>
    return (
      <ul className="list-group">
        {this.renderDepartments()}
      </ul>
    )
  }
}
