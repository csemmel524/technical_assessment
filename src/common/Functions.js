'use strict';

// Converts camel case string to a sentence case
export const formatCamelCaseString = text => {
  //function found at 
  //https://stackoverflow.com/questions/7225407/convert-camelcasetext-to-sentence-case-text
  function camelCaseToTitle(camelCase) {
    if (!camelCase) {
        return '';
    }
    var pascalCase = camelCase.charAt(0).toUpperCase() + camelCase.substr(1);
    return pascalCase
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')
        .replace(/([a-z])([0-9])/gi, '$1 $2')
        .replace(/([0-9])([a-z])/gi, '$1 $2');
  }
  return camelCaseToTitle(text);
};

// Handles page navigation
export const handleOnPageNavigation = item =>
  this.setState({
    page: item.key
  });
