import React from 'react';
import {SmartText} from './SmartText';

export const SmartTextList = ({listItems, isOrdered}) => {
  const convertListElements = (listItems) => {
    return listItems.map((item, index) => {
      return <li key={ index }>
        <SmartText
          text={ item.text }
          embeddedLinks={ item.embeddedLinks }
        />
      </li>;
    });
  };

  return isOrdered === true
    ? <ol>{ convertListElements(listItems) }</ol>
    : <ul>{ convertListElements(listItems) }</ul>;
};