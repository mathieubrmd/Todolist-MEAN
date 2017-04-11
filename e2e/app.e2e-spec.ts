import { TodolistMEANPage } from './app.po';

describe('todolist-mean App', () => {
  let page: TodolistMEANPage;

  beforeEach(() => {
    page = new TodolistMEANPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
