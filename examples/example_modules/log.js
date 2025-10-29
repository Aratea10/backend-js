"use strict";

console.log("Función log iniciada");

module.exports.log = function (text) {
  console.log(`[MY APP] - ${text}`);
};

module.exports.error = function (text) {
  console.log(`[MY APP] - ERROR - ${text}`);
};

// module.exports = {
//     log
// };
