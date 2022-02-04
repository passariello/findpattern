/*!
 * findpattern <https://github.com/passariello/findpattern>
 *
 * Copyright (c) 2021, Dario Passariello.
 * Licensed under the Apache-2.0 License.
 */

/***********************************************************************/

const findPattern = ( word ) => {

  let
  replace = word.match( /(.+)(?=.*?\1)/g ),
  pattern = new RegExp( replace , "g"),
  final = word.match( pattern );

  // console.log( replace );
  // console.log( pattern );
  // console.log( final );

  if( final ){
      return final.length;
  }else{
      return word.length;
  }

};

/***********************************************************************/

// MY WAY
const isSameA = ( a,b ) => {
	var first = a.split('').sort().join('');
  var second = b.split('').sort().join('');
	return first === second;
};

/***********************************************************************/

// CHECK IF ARE PALINDROME
const isSameB = ( a,b ) => {
  var re = /[\W_]/g;
  var lowStr = b.toLowerCase().replace(re, '');
  var revIt = lowStr.split('').reverse().join('');
  return a === revIt;
};

