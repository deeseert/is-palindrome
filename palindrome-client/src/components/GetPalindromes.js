import React, { Component } from 'react';
import SinglePalindrome from './SinglePalindrome';

export default class GetPalindromes extends Component {
  state = {
    messages: [],
  };

  fetchPalindromes = () => {
    
  }
  render() {
    // const { posts, wordCount, frequentWords, filteredPosts } = this.props;
    return (
      <div className="form">
        <h1 className="large text-primary">Welcome to all your Palindromes!</h1>
        {/* {(filteredPosts || posts).map((post) => (
          <SinglePost post={post} key={post.id} />
        ))} */}
      </div>
    );
  }
}
