import { Search } from '@material-ui/icons';
import React from 'react';
import { Timeline, Tweet } from 'react-twitter-widgets';

function Widgets() {
  return (
    <div className='widgets'>
      <div className='widgets-input'>
        <Search className='widgets-searchIcon' />
        <input placeholder='Search Twitter' type='text' />
      </div>

      <div className='widgets-widgetContainer'>
        <h2>Top Tweets</h2>
        <Tweet tweetId={'1307046632517664771'} />
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'TwitterDev',
          }}
          options={{
            height: '400',
          }}
        />
      </div>
    </div>
  );
}

export default Widgets;
