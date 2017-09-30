import React, { Component } from 'react'
import axios from 'axios'
export default class Employee extends Component {
  constructor (props) {
    super(props)
    this.state = {
      employee: null,
      loading: true,
      nameValue: '',
      url: ''
    }
  }

  componentWillMount () {
    this.fetchEmployee(this.props.match.params.id)
  }

  componentWillReceiveProps (nextProps) {
    this.fetchEmployee(nextProps.match.params.id)
  }

  fetchEmployee (id) {
    this.setState({loading: true})
    const url = `http://localhost:3000/employees/${id}`
    axios.get(url)
    .then((response) => {
      this.setState({
        employee: response.data,
        loading: false,
        nameValue: response.data.name,
        url:url
      })
    })
  }

  changeNameValue (e) {
    this.setState({nameValue: e.target.value})
  }

  submitNameValue (e) {
    e.preventDefault()
    axios.patch(this.state.url, {
      name: this.state.nameValue
    })
  }

  render () {
    if (this.props.match.path === '/') return <div>Please select Department</div>
    if (this.state.loading) return ''
    return (
      <form onSubmit={this.submitNameValue.bind(this)}>
        <input
          className='form-control'
          type='text'
          value={this.state.nameValue}
          onChange={this.changeNameValue.bind(this)} />
      </form>
    )
  }
}
