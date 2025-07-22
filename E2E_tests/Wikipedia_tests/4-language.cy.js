describe('Wikipedia: Переключение языковой версии', () => {
  it('Переход с русской на английскую версию статьи', () => {
    // 1. Открываем русскую версию статьи
    cy.visit('https://ru.wikipedia.org/wiki/Собака')
    
    // 2. Находим и проверяем ссылку на английскую версию
    cy.get('.interwiki-en a')
      .should('have.attr', 'href')
      .and('include', 'en.wikipedia.org/wiki/Dog')
      
    // 3. Переходим на английскую версию с проверкой
    cy.get('.interwiki-en a').click()
    cy.origin('https://en.wikipedia.org', () => {
      cy.url().should('include', '/wiki/Dog')
      cy.get('#firstHeading').should('contain', 'Dog')
    })
  })
})