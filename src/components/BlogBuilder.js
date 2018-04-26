import React from 'react';
import {DynamicElement} from './elements/DynamicElement';

export const BlogBuilder = ({config}) => {
  const title = <h1>{ config.title }</h1>;
  const elements = config.elements.map((elementConfig, index) => {
    return <DynamicElement key={ index } config={ elementConfig } style={ config.style }/>
  });

  return (
    <div>
      { title }
      { elements }
    </div>
  );
};