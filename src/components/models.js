export class BuilderConfig {
  title;
  style;
  elements;

  static DEFAULT = {title: null, configPath: null, elements: []};
}

export class BuilderStyle {
  maxImageWidth;
}

export class ElementConfig {
  type;
  size;
  text;
  linksTo;
  url;

  static DEFAULT = {type: null};
}

