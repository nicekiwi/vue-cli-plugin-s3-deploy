const create = require('./createProject.helper.js')
const path = require('path')

const runTests = () =>
  new Promise(async resolve => {
    const { projectPath } = await create('install')
    const pkg = require(path.join(projectPath, 'package.json'))

    expect(pkg.vue.pluginOptions.s3Deploy).toEqual(
      expect.objectContaining({ uploadConcurrency: expect.any(Number) }))

    expect(pkg.scripts).toEqual(
      expect.objectContaining({ deploy: 'vue-cli-service s3-deploy' }))

    resolve()
  })

module.exports.runTests = runTests
