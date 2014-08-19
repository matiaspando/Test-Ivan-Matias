'use strict';


var run = function() {

  console.log('Hola Mundo!!');

};

module.exports.run = run;
if (require.main === module) {
  run();
}
