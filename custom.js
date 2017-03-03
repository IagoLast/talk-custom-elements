class PElement extends HTMLElement {
  constructor() {
    console.info('constructor');
    super();
    this.state = {};
  }

  get template() {
    return '';
  }

  render() {
    this.innerHTML = this.template;
  }

  setState(newValue) {
    this.state = newValue;
    this.render();
  }

  connectedCallback() {
    console.info('connectedCallback', this);
    this.render();
  }

  disconnectedCallback() {
    console.info('disconnectedCallback');
  }

  attributeChangedCallback(attributeName, oldValue, newValue, namespace) {
    console.info('attributeChangedCallback');
  }

  adoptedCallback() {
    console.info('adoptedCallback');
  }
}

