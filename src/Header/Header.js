import React from 'react';

import HeaderRight from './HeaderRight';
import HeaderMid from './HeaderMid';
import HeaderLeft from './HeaderLeft';

const Header = (props) => {
  return (
    <div class="flex-grid header space-between">
        <HeaderLeft></HeaderLeft>
        <HeaderMid></HeaderMid>
        <HeaderRight></HeaderRight>
    </div>
  );
}

export default Header;
