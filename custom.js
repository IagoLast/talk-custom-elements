class PElement extends HTMLElement {
  constructor() {
    console.info('constructor');
    super();
    this.state = {
      name: 'World',
    };
  }

  get template() {
    return '';
  }

  render() {
    this.innerHTML = this.template;
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

