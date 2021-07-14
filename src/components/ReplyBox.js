import { Avatar, Button } from '@material-ui/core';
import React from 'react';

function ReplyBox() {
  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox-input'>
          <Avatar src='https://source.unsplash.com/random' />
          <input placeholder='Tweet your reply' type='text' />
        </div>
        <Button type='submit' className='tweetBox-button'>
          Reply
        </Button>
      </form>
    </div>
  );
}

export default ReplyBox;
