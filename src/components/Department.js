import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Department extends Component {
  constructor (props) {
    super(props)
    this.state = {
      employees: null
    }
  }

  fetchEmployees () {
    axios.get(`http://localhost:3000/departments/${this.props.department.id}/employees`).then((response) => {
      this.setState({
        employees: response.data
      })
    })
  }

  onClickDepartment = (e) => {
    e.preventDefault()
    if (!this.state.employees) {
      this.fetchEmployees()
    } else {
      this.setState({employees: null})
    }
  }

  renderEmployees () {
    if (this.state.employees) {
      return this.state.employees.map((e) => <li key={e.id}>
        <Link to={{pathname: `/employee/${e.id}`}}>{e.name}</Link>
      </li>)
    }
  }

  render () {
    const { department } = this.props
    return (
      <li
        className='list-group-item'
        key={department.id}>
        <a href='#' onClick={this.onClickDepartment}>
          {department.name}
        </a>
        <ul>{this.renderEmployees()}</ul>
      </li>
    )
  }
}
