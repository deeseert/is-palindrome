import React from 'react';
import Table from 'react-bootstrap/Table';

const SinglePalindrome = ({ message, index }) => {
  console.log('message from child: ', message);
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            {/* <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th> */}
          </tr>
        </thead>
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
      {/* <h2>{post.title}</h2>
      <p>{post.body}</p>
      <button onClick={() => deletePost(post)}>Delete</button> */}
    </div>
  );
};

export default SinglePalindrome;

// const SinglePost = ({ post, deletePost }) => {
//   return (
//     <div className="post">
//       <h2>{post.title}</h2>
//       <p>{post.body}</p>
//       <button onClick={() => deletePost(post)}>Delete</button>
//     </div>
//   );
// };
