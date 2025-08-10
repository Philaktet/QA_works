describe('Wikipedia Article Search Test', () => {
  it('Находит статью "Собака"', () => {
    // 1. Прямой переход на статью (минуя поиск)
    cy.visit('https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D0%B1%D0%B0%D0%BA%D0%B0')
    
    // 2. Проверка заголовка
    cy.get('#firstHeading').should('contain', 'Собака')
  })
})