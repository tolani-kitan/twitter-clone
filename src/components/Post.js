import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ComponentIsVisible from './componentIsVisible';
import { FavoriteBorder, Repeat, VerifiedUser } from '@material-ui/icons';
import React from 'react';

function Post({ displayName, username, verified, text, id }) {
  const { ref } = ComponentIsVisible(true, id);

  return (
    <div className='post' ref={ref}>
      <div className='post-avatar'>
        <Avatar src='https://source.unsplash.com/random' />
      </div>
      <div className='post-body'>
        <div className='post-header'>
          <div className='post-headerText'>
            <h3>
              {displayName}{' '}
              <span className='post-headerSpecial'>
                {verified && <VerifiedUser className='post-badge' />} @
                {username}
              </span>
            </h3>
          </div>
          <div className='post-headerDescription'>
            <p>{text}</p>
          </div>
        </div>
        <img src='https://source.unsplash.com/random' alt='' />
        <div className='post-footer'>
          <svg viewBox='0 0 24 24' aria-hidden='true' className='svg-image'>
            <g>
              <path d='M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z'></path>
            </g>
          </svg>
          <Repeat fontSize='small' />
          <FavoriteBorder fontSize='small' />
          <svg viewBox='0 0 24 24' aria-hidden='true' className='svg-image'>
            <g>
              <path d='M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z'></path>
              <path d='M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z'></path>
            </g>
          </svg>
        </div>
        <Link to={`/tweets/${id}`} className='tweets-button'>
          Load more Tweets
        </Link>
      </div>
    </div>
  );
}

export default Post;
