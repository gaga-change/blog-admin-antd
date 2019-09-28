const { strictEslint } = require('@umijs/fabric');

Object.assign(strictEslint.rules, {
  'no-underscore-dangle': ["error", { "allow": ["_id"] }]
})
module.exports = {
  ...strictEslint,
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
  },
};
