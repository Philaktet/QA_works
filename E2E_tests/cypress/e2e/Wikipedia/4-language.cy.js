describe('Wikipedia Language Switching Test', () => {
  it('Переключение на английскую версию статьи работает', () => {
    cy.visit('https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D0%B1%D0%B0%D0%BA%D0%B0')
      .get('.interwiki-en a')  
      .invoke('attr', 'href')
      .then((enUrl) => {
             expect(enUrl).to.include('https://en.wikipedia.org/wiki/Dog');        
          cy.origin('https://en.wikipedia.org', { args: { enUrl } }, ({ enUrl }) => {
          cy.visit(enUrl);
          cy.url().should('include', 'https://en.wikipedia.org/wiki/Dog');
          cy.get('h1').should('contain', 'Dog');  // Дополнительная проверка
        });
      });
  });
});