import { BillingPage } from './app.po';

describe('Billing App', function() {
  let page: BillingPage;

  beforeEach(() => {
    page = new BillingPage();
  });

  it('should display Billing in h1 tag', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Billing');
  });
});
