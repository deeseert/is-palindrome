import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SinglePalindrome from './SinglePalindrome';
import Table from 'react-bootstrap/Table';
import moment from 'moment';

export default class GetPalindromes extends Component {
  state = {
    messages: [],
  };

  calculateTime = (myArray) => {
    const PARSE_FORMAT = 'M/D/YYYY, H:mm:ss A';
    const twoMinutesAgo = moment().subtract(2, 'minutes');
    myArray.filter((stat) => moment(stat.date, PARSE_FORMAT).isAfter(twoMinutesAgo));
  };

  componentDidMount() {
    this.fetchPalindromes();
  }

  fetchPalindromes = async () => {
    const URL = 'http://localhost:5000/api/palindromes';
    try {
      const response = await fetch(URL);
      const messages = await response.json();
      this.setState({ messages });
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    let test = new Date();
    console.log('All the messages from the DB: ', this.state.messages);

    console.log('moment: ', moment().format());
    console.log('Date(): ', test);
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
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Text</th>
                  <th>Is Palindrome?</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody></tbody>
            </Table>
            {messages.map((message, index) => (
              <SinglePalindrome message={message} key={message._id} index={index + 1} />
            ))}
          </div>
        )}
      </div>
    );
  }
}
