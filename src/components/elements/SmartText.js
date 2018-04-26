import React from 'react';
import {ElementLink} from './links';
import first from 'lodash/first';
import last from 'lodash/last';
import find from 'lodash/find';
import {Validator} from '../../common/Validator';

export const SmartText = ({text, embeddedLinks}) => {
  let results = [];
  Validator.throwIfNil(text, `Missing text`);
  const split = text.split('{{');

  split.forEach((item) => {
    const pieces = item.split('}}');

    if(item.indexOf('}}') > -1) {
      // push the matching embedded link to results
      const id = parseInt(first(pieces));
      const matchingEmbeddedLink = find(embeddedLinks, linkConfig => linkConfig.id === id);
      if(matchingEmbeddedLink) results.push(matchingEmbeddedLink);
    }

    // push the plain text to results
    const plainText = last(pieces);
    results.push({display: plainText, linksTo: null});
  });

  return (
    results.map((linkConfig, index) => (
      <ElementLink
        key={ index }
        text={ linkConfig.display }
        linksTo={ linkConfig.linksTo }
        openInNewTab={ true }
      />)
    )
  );
};