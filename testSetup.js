const lnk = require('lnk')
const fs = require('fs-extra')
// Prevent full and unnecessary project creation
process.env.VUE_CLI_TEST = true
// Link ./ to node_modules/vue-cli-plugin-s3-deploy so that require.resolve(vue-cli-plugin-s3-deploy) returns ./
if (!fs.existsSync('./node_modules/vue-cli-plugin-s3-deploy')) {
  try {
    lnk.sync(['./'], './node_modules/vue-cli-plugin-s3-deploy')
  } catch (err) {
    if (err.code !== 'EEXIST') console.error(err)
  }
}
// Create project dir if it doesn't exist
if (!fs.existsSync('./__tests__/projects')) {
  try {
    fs.mkdirSync('./__tests__/projects')
  } catch (err) {
    if (err.code !== 'EEXIST') console.error(err)
  }
}
