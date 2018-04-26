import React from 'react';

export const BlogImage = ({url, linksTo}) => {
  return (
    <div>
      <a href={ linksTo }>
        <img src={ url }/>
      </a>
    </div>
  );
};