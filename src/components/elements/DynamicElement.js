import React from 'react';
import {BlogImage} from './BlogImage';
import {Headline} from './Headline';

export class ElementType {
  static codeBlock = 'codeBlock';
  static list = 'list';
  static image = 'image';
  static paragraph = 'paragraph';
  static headline = 'headline';
  static link = 'link'; // todo
}

export const DynamicElement = ({config, handlers, style = {}}) => {

  const renderElement = (c) => {
    switch (c.type) {
    case (ElementType.codeBlock):
      break;
    case (ElementType.list):
      break;
    case (ElementType.image):
      return <BlogImage
        maxWidth={ style.maxImageWidth } { ...config }
      />;
    case (ElementType.paragraph):
      break;
    case (ElementType.headline):
      return <Headline { ...config }/>;
    case (ElementType.link):
      break;
    }
  };

  return (
    renderElement(config)
  );
};