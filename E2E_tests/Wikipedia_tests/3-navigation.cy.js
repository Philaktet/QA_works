describe('Wikipedia Navigation Test', () => {
  it('Проверяет ссылки в главном меню', () => {
    cy.visit('https://ru.wikipedia.org')
    
    // 1. Проверяем меню навигации
    cy.get('#p-navigation')
      .should('be.visible')
      .within(() => {
        // 2. Проверяем основные пункты меню 
        cy.contains('Заглавная страница')
          .should('exist')
        cy.contains('Содержание')
          .should('exist')
        cy.contains('Избранные статьи')
          .should('exist')
      })
  })
})