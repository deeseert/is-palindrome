import React, { Component, Fragment } from 'react';
const axios = require('axios');
class PostPalindrome extends Component {
  state = {
    name: '',
  };

  postPalindromeAPI = () => {
    const { name } = this.state;
    axios
      .post('http://localhost:5000/api/palindrome/', {
        name,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  onSubmit = async (event) => {
    event.preventDefault();
    try {
      await this.postPalindromeAPI();
    } catch (err) {
      console.log(err);
    }
    console.log('Submitted');
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log('Changed');
  };
  render() {
    const { name } = this.state;

    return (
      <Fragment>
        <h1 className="large text-primary">Check if it is palindrome</h1>
        <p className="my-1">Palindrome is when the word does not change...</p>
        <p className="lead">
          <i className="fas fa-user" /> Create Your Account
        </p>
        <form className="form" onSubmit={(event) => this.onSubmit(event)}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(event) => this.onChange(event)}
              required
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Register" />
        </form>
      </Fragment>
    );
  }
}

export default PostPalindrome;
