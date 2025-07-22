describe('Wikipedia Smoke Test', () => {
  it('Главная страница открывается', () => {
    // Просто проверяем, что страница загружается
    cy.visit('https://ru.wikipedia.org', { timeout: 10000 })
      .title() // Проверяем title страницы
      .should('include', 'Википедия')
  })
})