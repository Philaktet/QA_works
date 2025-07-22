describe('Полный цикл работы со статьей: поиск → чтение → переход → возврат', () => {
  it('Поиск статьи и переход по ссылке', () => {
    // 1. Поиск статьи
    cy.visit('https://ru.wikipedia.org')
    cy.get('#searchInput').type('Собака{enter}')
    
    // 2. Подсветка и клик по первой ссылке
    cy.get('#mw-content-text p a')
      .first()
      .invoke('css', 'outline', '3px solid #00FFFF') // Голубая подсветка
      .click()
    
    // 3. Возврат с небольшой паузой для наглядности
    cy.wait(1000).go('back')
  })
})