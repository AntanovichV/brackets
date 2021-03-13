module.exports = function check(str, bracketsConfig) {
  let strResult = str;
  for (let i=0; i < str.length; i++){
 strResult = strResult.split('()').join('').split('{}').join('').split('[]').join('').split('||').join('');
 strResult = strResult.split('12').join('').split('34').join('').split('56').join('').split('77').join('').split('88').join('');
  }
 return strResult.length == 0;
}
