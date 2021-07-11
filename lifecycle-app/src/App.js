import React from 'react';
import axios from 'axios';
import Form from "./components/Form";
import Header from "./components/Header";
import User from "./components/User";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: '',
      userData: ''
    }
  }


  fetchUser = (username) => {
    axios.get(`https://api.github.com/users/${username}`)
      .then(res => this.setState({
        ...this.state,
        user: "",
        userData: res.data
      }))
      .catch(err => console.log(err))
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      user: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.fetchUser(this.state.user)
  }

  componentDidMount() {
    this.fetchUser('rikaciminieri')
  }


  render() {
    return (
      <div>
        <Header />
        <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit} user={this.state.user} />
        <User userData={this.state.userData} />
      </div>
    )
  }
}

export default App;
