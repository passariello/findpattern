/*!
 * findpattern <https://github.com/passariello/findpattern>
 *
 * Copyright (c) 2021, Dario Passariello.
 * Licensed under the Apache-2.0 License.
 */

/***********************************************************************/

(function () {

  if (typeof window === 'undefined') {
    global.window = {};
  }

  const pjson = require('./package.json');

  // CREATE ROOT STORE
  window.findpattern = {};

  // FIRST MESSAGE
  console.groupCollapsed( `%c${pjson.name} v${pjson.version}%c`,"color:orange","" );
    console.debug( `%c${pjson.name} v${pjson.version}%c by Dario Passariello started`,"color:orange","" );
    console.debug( `%cType ${pjson.name} in this console to see it`, "color:gray","" );
    console.debug( "%cFor help visit: " + pjson.repository.help, "color:gray","" );
    console.debug( 'name: %c' + pjson.name,"color:orange","" );
    console.debug( 'version: %c' + pjson.version,"color:orange","" );
    console.debug( 'description: %c' + pjson.description,"color:orange","" );
    console.debug( 'license: %c' + pjson.license,"color:orange","" );
    console.debug( 'repository: %c' + pjson.repository.url,"color:orange","" );
    console.debug( 'author: %c' + pjson.author.name,"color:orange","" );
    console.debug( 'email: %c' + pjson.author.email,"color:orange","" );
  console.groupEnd();

  // SCRIPT
  require('./scripts/findpattern.js');
  require('./scripts/palindrome.js');

  // test:
  // console.log( findPattern('abcabc') );
  // console.log( findPattern('cccc') );

})();
