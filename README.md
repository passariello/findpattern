
# THE ABCABC KILLER PATTERN

# findpattern

I am really tired of this ... A lot of assessment for a job required to make stupid functions ....
they ask to have the times of repetition of substrings like "ABCABC" ... and the same function need to report the length of same chars like 'CCCC'... Please, refuse test or assessment like that... not have any sense... especially if you looking for a position as front end... Should be a 'creative' position... what is the purpose of this test??? ... Know if you are crazy?, stupid?... so... it's my solution for you!

This is the most used test...

[a relative link](https://leetcode.com/problems/repeated-substring-pattern/)

My name is Dario Passariello... you can agree with me or not... but life is short....

# INSTALL AND USE IT

```js
npm i findpattern

or update:

npm i findpattern@latest

```

in the index (and only there):

```js
import "findpattern"

or

require("findpattern");
```

# EXAMPLE

So, I see that some test asking for a solution like this... enjoy!
"The test ask to have count of groups pr count of word of subsequence"

```javascript
findpattern.group = ( word ) => {

  let
  replace = word.match( /(.+)(?=.*?\1)/g ),
  pattern = new RegExp( replace , "g"),
  final = word.match( pattern );

  if( final ){
    return final.length;
  }else{
    return word.length;
  }

};

  // test it: 
  console.log( findpattern.group('abcabc') ); // -> 2 groups
  console.log( findpattern.group('cccc') ); // -> 4 chars
  
```

# ANOTHER EXAMPLE

So, I see that some test asking for a solution like this... enjoy!
"The test ask to have the length about on not repeated subsequence"

```javascript
findpattern.countGroup = ( word ) => {
       
  const count = new Set(word);
  return count.size;

};

  // test it:
  console.log( findpattern.countGroup('abcabc') ); // -> 3
  console.log( findpattern.countGroup('cccc') ); // -> 1

```

# PALINDROME

Here you another example for palindrome stuff.
I hope that it's help you.

```javascript

// example: findpattern.isSameA = ( 'cat','tac' ) -> true
// example: findpattern.isSameA = ( 'cat','act' ) -> true
// example: findpattern.isSameA = ( 'cat','tar' ) -> false
// or
// example: findpattern.isSameB = ( 'cat','tac' ) -> true
// example: findpattern.isSameB = ( 'cat','act' ) -> true
// example: findpattern.isSameB = ( 'cat','tar' ) -> false

//results are same but way are different

  // MY WAY
  findpattern.isSameA = ( a,b ) => {
    var first = a.split('').sort().join('');
    var second = b.split('').sort().join('');
    return first === second;
  };

  // test it:   
  console.log( "A_true", findpattern.isSameA("cat","tac") );
  console.log( "A_false", findpattern.isSameA("cat","rat") );

/****************************************************/

  // CHECK IF ARE PALINDROME
  findpattern.isSameB = ( a,b ) => {
    var re = /[\W_]/g;
    var lowStr = b.toLowerCase().replace(re, '');
    var revIt = lowStr.split('').reverse().join('');
    return a === revIt;
  };

  // test it:
  console.log( "B_true" , findpattern.isSameB( "cat", "tac") );
  console.log( "B_false" , findpattern.isSameB( "cat", "rat") );

```
