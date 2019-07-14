const { defaultPreset } = require('@vue/cli/lib/options')
const create = require('@vue/cli-test-utils/createTestProject')
const path = require('path')

const createProject = (projectName, customPlugins = {}) =>
  new Promise(async resolve => {
    let preset = { ...defaultPreset }
    preset.plugins['vue-cli-plugin-s3-deploy'] = {}
    preset.plugins = { ...preset.plugins, ...customPlugins }
    const projectsPath = path.join(process.cwd(), '/__tests__/projects')
    const projectPath = path.join(projectsPath, projectName)
    const project = await create(projectName, preset, projectsPath)

    resolve({ project, projectName, projectsPath, projectPath })
  })

module.exports = createProject
