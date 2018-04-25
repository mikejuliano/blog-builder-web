export class BuilderConfig {
  title;
  configPath;
  elements;

  static DEFAULT = {
    title: null,
    configPath: null,
    elements: []

  };
}

export class ElementConfig {
  type;

  static DEFAULT = {
    type: null
  };
}

