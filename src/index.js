module.exports = function check(str, bracketsConfig) {
  let strResult = str;
  for (let i=0; i < str.length; i++){
 strResult = strResult.split('()').join('').split('{}').join('').split('[]').join('').split('||').join('');
 strResult = strResult.split('12').join('').split('34').join('').split('56').join('').split('77').join('').split('88').join('');
  }
 return strResult.length == 0;
}


  /*let str = String.fromCodePoint(str)
  var pairs = {
		'}':'{',
		']':'[',
		')':'(',
	};

	var stack = [];

	for(var i = 0; i < str.length; ++i){
		switch(str.charAt(i)){
			case '[': case '{':case '(':
				stack.push(str.charAt(i));
			break;
			case ']': case '}':case ')':
				if(isStackEmpty(stack) || peek(stack) !== pairs[str.charAt(i)]) return false;
				stack.pop();
			break;
			case '|':
				if(isStackEmpty(stack) || peek(stack) !== str.charAt(i)){
					stack.push(str.charAt(i));
				}else{
					stack.pop();
				}
		}
	}

	return isStackEmpty(stack);
}

function isStackEmpty(str){
	return str.length === 0;
}

function peek(str){
	return str[str.length-1];
}*/
