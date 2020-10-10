import React from 'react';



import PostReacts from './PostReacts';
import PostActions from './PostActions';
import PostComments from './PostComments';
import PostHeader from './PostHeader';
import Divider from '../Divider';

const Post = (props) => {
  return (
    <div className="island" >

     
      <div className="content-pad">
        <PostHeader></PostHeader>
        <div className="post-text" >
        {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris \
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in \
                      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla \
                      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in \
                      culpa qui officia deserunt mollit anim id est laborum.'}
        </div>
      </div>

      <img className="content-image" src={require(`../images/landscape.jpg`)}></img>

      <PostReacts></PostReacts>
      <Divider></Divider>
      <PostActions></PostActions>
      <Divider></Divider>

      <PostComments></PostComments>      
    </div>
  );
}

export default Post;
