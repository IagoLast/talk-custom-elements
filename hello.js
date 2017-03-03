class Hello extends PElement {
  get template() {
    return `
      <h1>Hello ${this.state.name}</h1>
      <p>This are examples of web components written using only ES6.</p>
    `;
  }
}

customElements.define('hello-world', Hello);
