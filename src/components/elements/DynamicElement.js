import React from 'react';
import {BlogImage} from './BlogImage';

export class ElementType {
  static codeBlock = 'codeBlock';
  static list = 'list';
  static image = 'image';
  static paragraph = 'paragraph';
  static headline = 'headline';
  static link = 'link'; // todo
}

export const DynamicElement = ({config, handlers}) => {

  const renderElement = (c) => {
    switch (c.type) {
    case (ElementType.codeBlock):
      break;
    case (ElementType.list):
      break;
    case (ElementType.image):
      return <BlogImage { ...config }/>;
    case (ElementType.paragraph):
      break;
    case (ElementType.headline):
      break;
    case (ElementType.link):
      break;
    }
  };

  return (
    renderElement(config)
  );
};