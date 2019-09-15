import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SinglePalindrome from './SinglePalindrome';
import Table from 'react-bootstrap/Table';

export default class GetPalindromes extends Component {
  state = {
    messages: [],
  };

  componentDidMount() {
    this.fetchPalindromes();
  }

  fetchPalindromes = async () => {
    const URL = 'http://localhost:5000/palindromes';
    try {
      const response = await fetch(URL);
      const messages = await response.json();
      this.setState({ messages });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { messages } = this.state;
    return (
      <div>
        {messages.length === 0 ? (
          <div>
            <h1 className="large text-primary">
              no palindrome found in the last 10 minutes. Please, send some
            </h1>
            <div>
              <Link to="/post">
                <button className="btn btn-secondary">
                  Check if it is palindrome :)
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <h1 className="large text-primary">Welcome to all your Palindromes!</h1>
            <Table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Text</th>
                  <th>Is Palindrome?</th>
                </tr>
              </thead>
              <tbody></tbody>
            </Table>
            {messages.map((message, index) => (
              <SinglePalindrome message={message} key={message._id} index={index + 1} />
            ))}
            <Link to="/post">
              <button className="btn btn-primary">Check you palindrome now</button>
            </Link>
          </div>
        )}
      </div>
    );
  }
}
