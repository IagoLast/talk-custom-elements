class HelloWorld extends PElement {
  constructor() {
    console.info('constructor');
    super();
    this.state.name = '';
  }

  get template() {
    return `<h1> Hello ${this.state.name}`;
  }

}

customElements.define('hello-world', HelloWorld);

