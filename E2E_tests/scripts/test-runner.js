const { exec } = require('child_process');
const path = require('path');

const cypressBin = path.join(__dirname, '../node_modules/.bin/cypress');
const command = `"${cypressBin}" run --quiet --parallel --ci-build-id ${process.env.GITHUB_RUN_ID || 'local'}`;

exec(command, (error, stdout) => {
  console.log(stdout.trim()); // Выводим "сырой" вывод Cypress
  process.exit(error ? 1 : 0); // Возвращаем код ошибки
});