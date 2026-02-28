export class Modal {
  constructor(private rootSelector = '.modal') {}

  async isOpen(page: any) {
    return page.locator(this.rootSelector).isVisible();
  }
}

export default Modal;
