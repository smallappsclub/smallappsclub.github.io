module.exports = {
  '*.{js,jsx}': 'yarn lint:js:fix',
  '*.css': 'yarn lint:style:fix',
  '*.{ts,tsx}': [() => 'yarn ts:check', 'yarn lint:js:fix'],
  '*.{json,md,html}': 'yarn prettier:write',
};
