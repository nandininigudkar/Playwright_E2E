export class Footer {
  constructor(private rootSelector = 'footer') {}

  async isVisible(page: any) {
    return page.locator(this.rootSelector).isVisible();
  }
}

export default Footer;
