
# THE ABCABC KILLER PATTERN

# findpattern

I am really tired about this s*hit... A lot of assessment for a f*cking job required to make a stupid function ....
thay ask to have the times of repetition of substrings like "ABCABC" ... and the same funtion need to report the length of same chars like 'CCCC'... Please, refuse test or assessment like that... not have any sense... expecially if you looking for a position as font end... Should be a 'creative' position... what is the pourpuse of this test??? ... Know if you are crazy?, stupid?... so... it's my solution for you!

This is the most used test...

[a relative link](https://leetcode.com/problems/repeated-substring-pattern/)

My name is Dario Passariello... you can agree with me or not... but life is short....

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
```

## HOW IT'S WORKS

test it:

```javascript
  // 'abcabc' = 2 groups
  console.log( findPattern('abcabc') );
  
  // cccc = 4 repeated chars
  console.log( findPattern('cccc') );
```
