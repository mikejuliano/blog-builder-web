import {Validator} from './Validator';

export class StringUtils {
  static t(input, paramsList) {
    Validator.throwIfNil(input, 'Missing input string');
    if(!Validator.hasValues(paramsList)) {
      return input;
    }
    paramsList.forEach((param, index) => {
      input = input.replace('{{' + index + '}}', param);
    });
    return input;
  }
}