describe('Wikipedia Search Test', () => {
  it('Находит статью "Собака" через поиск', () => {
    // 1. Открываем главную страницу
    cy.visit('https://ru.wikipedia.org')

    // 2. Вводим запрос в поиск и нажимаем Enter
    cy.get('#searchInput')
      .type('Собака{enter}')

    // 3. Ждем загрузки результатов поиска
    cy.get('.searchresults', { timeout: 10000 })
      .should('exist')

    // 4. Кликаем по первой найденной статье
    cy.get('.mw-search-result-heading a')
      .first()
      .click()

    // 5. Проверяем заголовок статьи
    cy.get('#firstHeading')
      .should('contain', 'Собака')
  })
})