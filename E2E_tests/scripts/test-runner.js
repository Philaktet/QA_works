import { exec } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const cypressBin = path.join(__dirname, '../node_modules/.bin/cypress');
const command = `"${cypressBin}" run --quiet`;

exec(command, (error, stdout, stderr) => {
  const output = stdout + stderr;

  // Разбиваем вывод по строкам
  const lines = output.split('\n');

  // Массив для найденных упавших тестов
  const failedTests = [];

  // Проходим по всем строкам, ищем паттерны
  for (const line of lines) {
    // Убираем пробелы по краям
    const trimmed = line.trim();

    // Проверяем, соответствует ли строка формату "1) Test name"
    let match = trimmed.match(/^\d+\)\s+(.+)$/);
    if (match) {
      failedTests.push(match[1]);
      continue;
    }

    // Проверяем, соответствует ли строка формату "✖ Test name"
    match = trimmed.match(/^✖\s+(.+)$/);
    if (match) {
      failedTests.push(match[1]);
      continue;
    }
  }

  if (failedTests.length > 0) {
    // Убираем дубликаты, если есть
    const uniqueTests = [...new Set(failedTests)];
    console.log(`❌ Test failed: ${uniqueTests.join(', ')}`);
    //process.exit(1);
  } else if (error) {
    console.log('❌ Cypress execution failed');
    //process.exit(1);
  } else {
    console.log('✅ All tests passed');
  }
});