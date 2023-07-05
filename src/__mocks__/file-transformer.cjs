/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  process(_sourceText, sourcePath) {
    return { code: `module.exports = ${JSON.stringify(path.relative(path.resolve(__dirname, '..'), sourcePath))};` };
  },
};
