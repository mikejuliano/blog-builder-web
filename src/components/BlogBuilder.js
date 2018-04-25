import React from 'react';
import {DynamicElement} from './elements/DynamicElement';

export const BlogBuilder = ({config}) => {
  const title = <h1>{ config.title }</h1>;
  const elements = config.elements.map((e, index) => {
    console.log('e', e);
    return <DynamicElement key={ index } config={ e }/>
  });

  return (
    <div>
      { title }
      { elements }
    </div>
  );
};