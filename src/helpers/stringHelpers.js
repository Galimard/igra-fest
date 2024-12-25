export const urlWrap = (text) => {  
  const urlRegex = /(https:\/\/\S+?)(\s|$)/g;
  const updatedText = text && text.replace(urlRegex, '<a href="$1">$1</a>$2');
  return updatedText;
}