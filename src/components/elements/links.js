import React from 'react';

export const ElementLink = ({linksTo, text, children, openInNewTab = false}) => {
  return linksTo ? (
    <a href={ linksTo } target={ openInNewTab ? '_blank' : '' }>
      { text || children }
    </a>
  ) : <span>{ text || children }</span>;
};
