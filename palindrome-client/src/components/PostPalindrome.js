import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class PostPalindrome extends Component {
  state = {
    name: '',
  };

  palindromeAlert = (data) => {
    if (data.isPalindrome) {
      alert(`${data.text} is palindrome`);
    } else {
      alert(`${data.text} is not palindrome`);
    }
  };

  postPalindromeAPI = async () => {
    const URL = 'http://localhost:5000/palindromes/';
    const { name } = this.state;
    const obj = { name };

    try {
      const response = await fetch(URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj),
      });

      const data = await response.json();
      this.palindromeAlert(data);
    } catch (err) {
      console.log(err);
    }
  };

  onSubmit = async (event) => {
    event.preventDefault();
    try {
      await this.postPalindromeAPI();
      this.setState({ name: '' });
    } catch (err) {
      console.log(err);
    }
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const { name } = this.state;

    return (
      <Fragment>
        <h1 className="large text-primary">Check if it is palindrome</h1>
        <p className="my-1">
          Palindrome is a word, phrase, or sequence that reads the same backwards as
          forwards
        </p>
        <form className="form" onSubmit={(event, name) => this.onSubmit(event, name)}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Type your text here..."
              name="name"
              value={name}
              onChange={(event) => this.onChange(event)}
              required
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Check" />
          <Link to="/get">
            <button className="btn btn-secondary">See all palindromes</button>
          </Link>
        </form>
      </Fragment>
    );
  }
}

export default PostPalindrome;
