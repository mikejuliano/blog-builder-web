import React from 'react';
import {BlogImage} from './BlogImage';
import {Headline} from './Headline';
import {SmartText} from './SmartText';
import {SmartTextList} from './SmartTextList';

export class ElementType {
  static codeBlock = 'codeBlock';
  static list = 'list';
  static image = 'image';
  static text = 'text';
  static headline = 'headline';
  static link = 'link'; // todo
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