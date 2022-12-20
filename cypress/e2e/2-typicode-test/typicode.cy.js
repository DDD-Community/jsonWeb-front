/* eslint-disable */
describe('example to-do app', () => {
  before(() => {
    cy.visit('/typicode');
    cy.fixture('typicode/index.json').as('typicode');
  });
  context('화면 데이터 테스트', () => {
    it('데이터가 정상적으로 노출된다.', () => {
      cy.get('@typicode').then((res) => {
        res.data.forEach((e, i) => {
          cy.get(`.typicode__data--${i}`).should('have.text', res.data[i]);
        });
      });
    });
  });
});
