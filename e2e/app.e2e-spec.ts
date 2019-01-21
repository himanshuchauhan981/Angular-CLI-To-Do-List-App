import { TodoWebAppPage } from './app.po';

describe('todo-web-app App', function() {
  let page: TodoWebAppPage;

  beforeEach(() => {
    page = new TodoWebAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
