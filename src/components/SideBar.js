import React from 'react';
import SidebarItems from './SidebarItems';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from '@material-ui/core';

function Sidebar() {
  return (
    <div className='sidebar'>
      <TwitterIcon className='sidebar-twitterIcon' />
      <SidebarItems Icon={HomeIcon} text='Home' active={true} />
      <SidebarItems Icon={SearchIcon} text='Explore' />
      <SidebarItems Icon={NotificationsNoneIcon} text='Notifications' />
      <SidebarItems Icon={MailOutlineIcon} text='Messages' />
      <SidebarItems Icon={BookmarkBorderIcon} text='Bookmarks' />
      <SidebarItems Icon={ListAltIcon} text='Lists' />
      <SidebarItems Icon={PermIdentityIcon} text='Profile' />
      <SidebarItems Icon={MoreHorizIcon} text='More' />

      <Button variant='outlined' className='sidebar-tweet' fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
