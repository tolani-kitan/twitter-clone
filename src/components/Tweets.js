import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Feeds from './Feeds';
import Post from './Post';

const Tweets = (props) => {
  const [posts, setPosts] = useState([]);
  const params = useParams();

  const getPost = async () => {
    try {
      let post = [];
      const usersPost = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${params.id}`
      );
      const user = usersPost.data;
      post = (
        await axios.get(
          `https://jsonplaceholder.typicode.com/users/${user.userId}/posts`
        )
      ).data;
      setPosts(post);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPost();
  });

  return (
    <Feeds>
      <div className='feed-header'>
        <h2>Home</h2>
      </div>
      {posts.map((post) => (
        <Post
          key={post.id}
          displayName='ttt'
          username='ttt'
          verified='true'
          id={post.id}
          text={post.body}
        />
      ))}
    </Feeds>
  );
};

export default Tweets;
