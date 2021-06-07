const urlDecode = function(text) {
  let sText = "";
  let obj = {};
  sText = text.split("%20").join(" ").split(/[=&]/);
  for (let i = 0; i < sText.length; i+=2) {
    obj[sText[i]] = sText[i+1];
  }
  return obj;
};
