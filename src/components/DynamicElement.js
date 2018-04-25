import React from 'react';

export class ElementType {
  static codeBlock = 'codeBlock';
  static list = 'list';
  static image = 'image';
  static paragraph = 'paragraph';
  static headline = 'headline';
  static link = 'link'; // todo
}

export const DynamicElement = ({elementConfig, handlers}) => {
  const renderElement = (c) => {
    switch (c.type) {
    case (ElementType.codeBlock):
      break;
    case (ElementType.list):
      break;
    case (ElementType.image):
      break;
    case (ElementType.paragraph):
      break;
    case (ElementType.headline):
      break;
    case (ElementType.link):
      break;
    }
  };

  return (
    renderElement(elementConfig)
  );
};