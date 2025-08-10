describe('Wikipedia Smoke Test', () => {
  it('Главная страница открывается', () => {
    // Просто проверяем, что страница загружается
    cy.visit('https://ru.wkipedia.org', { timeout: 10000 }) // добавил ошибку, должно быть wikipedia.org
      .title() // Проверяем title страницы
      .should('include', 'Википедия')
  })
})