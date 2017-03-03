class PElement extends HTMLElement {
  constructor() {
    console.info('constructor');
    super();
  }

  connectedCallback() {
    console.info('connectedCallback', this);
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

