import React from 'react';
import Table from 'react-bootstrap/Table';

const SinglePalindrome = ({ message, index }) => {
  return (
    <div>
      <Table className="table">
        <tbody>
          <tr>
            <td>{index}</td>
            <td>{message.text}</td>
            <td>
              {message.isPalindrome ? 'It is palindrome :)' : 'It is NOT palindrome :('}
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default SinglePalindrome;