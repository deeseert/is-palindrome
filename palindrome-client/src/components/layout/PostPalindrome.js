import React, { Component, Fragment } from 'react';
class PostPalindrome extends Component {
  state = {
    name: '',
  };

  postPalindromeAPI = () => {
    const URL = 'http://localhost:5000/api/palindrome/';
    const { name } = this.state;
    const obj = { name };
    fetch(URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(obj),
    })
      .then((resp) => resp.json())
      .then((data) => alert(`The word ${name} is ${data.test}`))
      .catch((error) => {
        console.log(error);
      });
  };

  onSubmit = async (event) => {
    event.preventDefault();
    try {
      await this.postPalindromeAPI();
      this.setState({ name: '' });
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
        <form className="form" onSubmit={(event, name) => this.onSubmit(event, name)}>
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
