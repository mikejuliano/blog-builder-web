import isNil from 'lodash/isNil';
import size from 'lodash/size';
import isArray from 'lodash/isArray';
import compact from 'lodash/compact';
import isUndefined from 'lodash/isUndefined';

export class Validator {
  static throwIfNil(item, msg) {
    return this.throwIf(isNil, item, msg);
  }

  static throwIfUndefined(item, msg) {
    return this.throwIf(isUndefined, item, msg);
  }

  static throwIf(isTrueWhenInvokedWithItem, item, msg) {
    if(isTrueWhenInvokedWithItem(item)) {
      throw new Error(msg);
    }
  }

  static hasValues(items) {
    return items && isArray(items) && size(compact(items)) > 0;
  }
}

