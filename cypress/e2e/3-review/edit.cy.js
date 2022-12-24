/* eslint-disable */
describe('리뷰 edit 페이지 테스트', () => {
  beforeEach(() => {
    cy.visit('/review/edit');
    cy.fixture('review/index.json').as('fixture');
  });
  context('화면 데이터 테스트', () => {
    it('데이터가 정상적으로 노출된다.', () => {
      cy.get('@fixture').then((res) => {
        res.evaluation.forEach((e, i) => {
          cy.get(`.chips--item__${i + 1}`).should(
            'have.text',
            res.evaluation[i]
          );
        });
      });
      cy.get('.review--select__theme').should('not.be.null');
      cy.get('.review--select__theme > option').should(
        'have.length.at.least',
        0
      );
    });
    context('form 기능 테스트', () => {
      it('데이터 입력 및 등록 버튼 누를 시 정상적으로 응답해야 한다.', () => {
        cy.get('.review--select__theme').click();
        cy.wait(300);
        cy.get('.review--select__theme > ul > li:nth-child(3)').click();
        cy.get('.review .chips--item__2').click();
        cy.get(
          'section.review--form  > div:nth-child(2) > div > button:nth-child(3)'
        ).click();
        cy.get(
          'section.review--form > div:nth-child(4) > div > button:nth-child(4)'
        ).click();
        cy.get('section.review--form > div > textarea').click();
        cy.get('section.review--form > div > textarea').type(
          '안녕하세요 테스트입니다'
        );
        cy.get('section.review--form > div > p').should(
          'have.text',
          '12 / 240'
        );
        cy.get('.review--form > .review--form__submit').click();
      });
    });
  });
});
