class Hello extends PElement {
  constructor() {
    super();
    this.state = {
      name: 'Hello',
      counter: 0,
    }
  }
  get template() {
    return `
      <h1>Hello ${this.state.name}</h1>
      <p>You clicked ${this.state.counter} times.</p>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('click', this.onClick);
  }

  onClick() {
    this.state.counter++;
    this.setState(this.state)
  }
}

customElements.define('hello-world', Hello);
