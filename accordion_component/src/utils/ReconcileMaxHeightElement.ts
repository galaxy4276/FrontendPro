import React from 'react';

export default class ReconcileMaxHeightElement {

  private readonly element: HTMLElement;

  public constructor(element: React.RefObject<HTMLElement | null>) {
    if (element.current === null) throw Error("element RefObject is null");
    const { current } = element;
    this.element = current;
  }

  public getElement(): HTMLElement {
    return this.element;
  }

  public reconcile(): void {
    const { maxHeight } = this.element.style;
    if (maxHeight === '' || maxHeight === '0' || maxHeight === '0px') {
      this.element.style.maxHeight = this.element.scrollHeight + 'px';
    } else {
      this.element.style.maxHeight = '0';
    }
  }

}
