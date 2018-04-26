import React from 'react';
import {Link} from 'react-router-dom';

export const BlogImage = ({url, linksTo, maxWidth}) => {
  return (
    <div>
      <a href={ linksTo }>
        <img src={ url } style={ {maxWidth} }/>
      </a>
    </div>
  );
};