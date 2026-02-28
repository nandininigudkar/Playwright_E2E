export class Navbar {
  constructor(private rootSelector = 'nav') {}

  async isVisible(page: any) {
    return page.locator(this.rootSelector).isVisible();
  }
}

export default Navbar;
