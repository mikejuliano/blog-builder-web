import React from 'react';
import {BlogImage} from './BlogImage';
import {Headline} from './Headline';
import {SmartText} from './SmartText';
import {SmartTextList} from './SmartTextList';

export class ElementType {
  static codeBlock = 'CODE_BLOCK';
  static list = 'LIST';
  static image = 'IMAGE';
  static text = 'TEXT';
  static headline = 'HEADLINE';
}

export const DynamicElement = ({config, handlers, style = {}}) => {

  const renderElement = (c) => {
    switch (c.type) {
    case (ElementType.codeBlock):
      break;
    case (ElementType.list):
      return <SmartTextList { ...config }/>;
    case (ElementType.image):
      return <BlogImage
        maxWidth={ style.maxImageWidth } { ...config }
      />;
    case (ElementType.text):
      return <SmartText { ...config }/>;
    case (ElementType.headline):
      return <Headline { ...config }/>;
    case (ElementType.link):
      break;
    default:
      return null;
    }
  };

  return (
    renderElement(config)
  );
};