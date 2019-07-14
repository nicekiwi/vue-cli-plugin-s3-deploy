jest.setTimeout(600000)

const runTests = require('./install.helper.js').runTests

test('plugin should install', async () => {
  await runTests()
})
