module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let openBrackets = [];
  let closeBrackets = [];
  let similarBrackets = [];

  for (let i = 0; i < bracketsConfig.length; i++) {
    if (bracketsConfig[i][0] !== bracketsConfig[i][1]) {
      openBrackets.push(bracketsConfig[i][0]);
      closeBrackets.push(bracketsConfig[i][1]);
    } else {
      similarBrackets.push(bracketsConfig[i][0]);
    }
  }

  for (let s = 0; s < str.length; s++) {
    if (openBrackets.includes(str[s])) {
      stack.push(str[s]);
    }
    if (closeBrackets.includes(str[s])) {
      let topElement = stack[stack.length - 1];
      let closeInd = closeBrackets.indexOf(str[s]);
      if (topElement === bracketsConfig[closeInd][0]) {
        stack.pop();
      } else {
        return false;
      }
    }
    if (similarBrackets.includes(str[s])) {
      if (stack.includes(str[s])) {
        stack.pop();
      } else {
        stack.push(str[s]);
      }
    }
  }

  return (stack.length === 0) ? true : false;
}