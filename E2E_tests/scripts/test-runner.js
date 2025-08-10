const { exec } = require('child_process');
const path = require('path');

const cypressBin = path.join(__dirname, '../node_modules/.bin/cypress');
const command = `"${cypressBin}" run --quiet --parallel --ci-build-id ${
  process.env.GITHUB_RUN_ID || 'local'
}`;

exec(command, (error, stdout) => {
  const errors = stdout.match(/(✖|error:|fail:).*/gi);
  if (errors?.length) {
    console.log(`❌ ${errors.length} error(s):\n${errors.join('\n')}`);
    process.exit(1);
  } else {
    console.log('✅ All tests passed');
  }
});