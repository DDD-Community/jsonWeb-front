/* eslint-disable */
describe('리뷰 상세 페이지 테스트', () => {
  beforeEach(() => {
    cy.visit('/review/detail/1');
    cy.fixture('review/index.json').as('fixture');
  });
  context('리뷰 상세 화면 데이터 테스트', () => {
    it('리뷰 상세 데이터가 정상적으로 노출된다.', () => {});
  });
});
