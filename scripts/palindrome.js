/***********************************************************************/

// MY WAY
window.find.isSameA = ( a,b ) => {
	var first = a.split('').sort().join('');
  var second = b.split('').sort().join('');
	return first === second;
};


/***********************************************************************/

// CHECK IF ARE PALINDROME
window.find.isSameB = ( a,b ) => {
  var re = /[\W_]/g;
  var lowStr = b.toLowerCase().replace(re, '');
  var revIt = lowStr.split('').reverse().join('');
  return a === revIt;
};

