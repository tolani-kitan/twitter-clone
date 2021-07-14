import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Feeds from './Feeds';
import TweetBox from './TweetBox';
import Post from './Post';

const Home = () => {
  const [posts, setPosts] = useState([]);

  const getPost = async () => {
    try {
      const posts = [];
      await Promise.all(
        [...Array(10).keys()].map(async (i) => {
          const usersPosts = await axios.get(
            `https://jsonplaceholder.typicode.com/posts?userId=${i + 1}`
          );
          const post = usersPosts.data[0];
          post.user = (
            await axios.get(
              `https://jsonplaceholder.typicode.com/users/${post.userId}`
            )
          ).data;
          posts.push(post);
        })
      );
      setPosts(posts);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <Feeds>
      <div className='feed-header'>
        <h2>Home</h2>
      </div>
      <TweetBox />
      {posts.map((post) => (
        <Post
          key={post.id}
          displayName={post.user.name}
          username={post.user.username}
          verified='true'
          id={post.id}
          text={post.body}
        />
      ))}
    </Feeds>
  );
};

export default Home;
