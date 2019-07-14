const path = require('path')
const create = require('./createProject.helper.js')

const runTests = () =>
  new Promise(async resolve => {
    const { project, projectPath } = await create('prompts')

    

    await project.run(`vue-cli-service build`)

    

    resolve()
  })

module.exports.runTests = runTests

// const { project, projectPath } = await create('invoke')
//     const pkg = require(path.join(projectPath, 'package.json'))

//     await project.run(`vue-cli-service s3-deploy`)

//     // //   Ensure build successfully outputted files
//     // expect(pkg.vue.pluginOptions.s3Deploy).toBe('{"uploadConcurrency": 5}')
//     // expect(pkg.scripts.deploy).toBe('vue-cli-service s3-deploy')

//     resolve()
