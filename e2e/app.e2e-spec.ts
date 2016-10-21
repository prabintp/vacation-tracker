import { VacationTrackerPage } from './app.po';

describe('vacation-tracker App', function() {
  let page: VacationTrackerPage;

  beforeEach(() => {
    page = new VacationTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
