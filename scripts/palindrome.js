

// example: findpattern.isSameA = ( 'cat','tac' ) -> true
// example: findpattern.isSameA = ( 'cat','act' ) -> true
// example: findpattern.isSameA = ( 'cat','tar' ) -> false
// or
// example: findpattern.isSameB = ( 'cat','tac' ) -> true
// example: findpattern.isSameB = ( 'cat','act' ) -> true
// example: findpattern.isSameB = ( 'cat','tar' ) -> false

//results are same but way are different

/***********************************************************************/
// MY WAY
// this permit to find if B value case: atc,act,tac,tca,cat,cta are same of A value
window.findpattern.isSameA = ( a,b ) => {
	var first = a.split('').sort().join('');
  var second = b.split('').sort().join('');
	return first === second;
};


/***********************************************************************/

// CHECK IF ARE PALINDROME
// this permit to find if B value case: atc,act,tac,tca,cat,cta are same of A value
window.findpattern.isSameB = ( a,b ) => {
  var re = /[\W_]/g;
  var lowStr = b.toLowerCase().replace(re, '');
  var revIt = lowStr.split('').reverse().join('');
  return a === revIt;
};


