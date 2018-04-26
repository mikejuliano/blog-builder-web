import React from 'react';
import {ElementLink} from './links';

export const BlogImage = ({url, linksTo, openInNewTab = false, maxWidth}) => {
  return (
    <div>
      <ElementLink linksTo={ linksTo } openInNewTab={ openInNewTab }>
        <img src={ url } style={ {maxWidth} }/>
      </ElementLink>
    </div>
  );
};