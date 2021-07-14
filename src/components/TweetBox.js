import { Avatar, Button } from '@material-ui/core';
import React from 'react';

function TweetBox() {
  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox-input'>
          <Avatar src='https://source.unsplash.com/random' />
          <input placeholder="What's happening?" type='text' />
        </div>
        <Button type='submit' className='tweetBox-button'>
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
