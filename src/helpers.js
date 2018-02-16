export function isAllowableChar(c) {
  var asciiCode = c.charCodeAt(0)
  return (asciiCode >= 97 && asciiCode <= 122) || asciiCode === 32
}
