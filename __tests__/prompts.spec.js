jest.setTimeout(600000)

const runTests = require('./prompts.helper.js').runTests

test('plugin should invok prompts', async () => {
  await runTests()
})
