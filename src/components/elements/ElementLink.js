import React from 'react';

export const ElementLink = ({linksTo, text, children, openInNewTab = false}) => {
  return (
    <a href={ linksTo } target={ openInNewTab ? '_blank' : '' }>
      { text || children }
    </a>
  );
};