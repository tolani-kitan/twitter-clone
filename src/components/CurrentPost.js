import React, { useEffect, useState } from 'react';
import axios from 'axios';
import rug from 'random-username-generator';
import Post from './Post';
import Comment from './Comments';
import ReplyBox from './ReplyBox';
import { useParams } from 'react-router-dom';
import Feeds from './Feeds';

function CurrentPost() {
  const [comments, SetComments] = useState([]);
  const [post, setPost] = useState([]);

  const params = useParams();

  const getPost = async () => {
    try {
      const post = [];
      const usersPost = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${params.id}`
      );
      const newPost = usersPost.data;
      post.user = (
        await axios.get(
          `https://jsonplaceholder.typicode.com/users/${newPost.userId}`
        )
      ).data;
      post.push(newPost);
      console.log(post);
      setPost(post);
    } catch (error) {
      console.error(error);
    }
  };

  const getComments = async () => {
    try {
      const userComments = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${params.id}/comments`
      );
      SetComments(userComments.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getComments();
    getPost();
  }, []);

  return (
    <Feeds>
      <div className='feed-header'>
        <h2>Tweet</h2>
      </div>
      <div className='tweetBox'>
        <Post
          displayName={post.user.name}
          username={post.user.username}
          verified='true'
          id={post.id}
          text={post.body}
        />
      </div>
      <ReplyBox />
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          displayName={comment.name}
          username={rug.generate()}
          verified='false'
          id={comment.id}
          text={comment.body}
        />
      ))}
    </Feeds>
  );
}

export default CurrentPost;
