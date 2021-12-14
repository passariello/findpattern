
# THE ABCABC KILLER PATTERN

# findpattern

I am really tired of this ... A lot of assessment for a f* job required to make a stupid function ....
they ask to have the times of repetition of substrings like "ABCABC" ... and the same function need to report the length of same chars like 'CCCC'... Please, refuse test or assessment like that... not have any sense... especially if you looking for a position as front end... Should be a 'creative' position... what is the purpose of this test??? ... Know if you are crazy?, stupid?... so... it's my solution for you!

This is the most used test...

[a relative link](https://leetcode.com/problems/repeated-substring-pattern/)

My name is Dario Passariello... you can agree with me or not... but life is short....

# EXAMPLE

So, I see that some test asking for a solution like this... enjoy!
"The test ask to have count of groups pr count of word of subsequence"

```javascript
const findPattern = ( word ) => {

  let
  replace = word.match( /(.+)(?=.*?\1)/g ),
  pattern = new RegExp( replace , "g"),
  final = word.match( pattern );

  // console.log( replace );
  // console.log( pattern );
  // console.log( final );

  if( final )
      return final.length;
  else if
      return word.length;

};

  // test it: 

  console.log( findPattern('abcabc') ); // -> 2 groups
  console.log( findPattern('cccc') ); // -> 4 chars
  
```

# ANOTHER EXAMPLE

So, I see that some test asking for a solution like this... enjoy!
"The test ask to have the length about on not repeated subsequence"

```javascript
var findPattern = function( word ) {
       
     const count = new Set(word);
     return count.size;
   
};

  // test it: 
  
  console.log( findPattern('abcabc') ); // -> 3
  console.log( findPattern('cccc') ); // -> 1
```


