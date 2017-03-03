class PElement extends HTMLElement {
  constructor() {
    console.info('constructor');
    super();
    this.shadow = this.attachShadow({
      mode: 'closed'
    });
  }

  get template() {
    return '';
  }

  render() {
    this.shadow.innerHTML = this.template;
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

