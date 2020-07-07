import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('Eurovision exercise app', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Welcome to Eurovision Services!');
  });

  afterEach(async () => {
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
