class Hello extends PElement {

  get template() {
    return `<img width="400" src="${this.attrs.src}" alt="Cute Cat"> `;
  }

}

customElements.define('hello-world', Hello);
