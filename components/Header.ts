export class Header {
  // Example header component methods
  constructor(private rootSelector = 'header') {}

  async isVisible(page: any) {
    return page.locator(this.rootSelector).isVisible();
  }
}

export default Header;
