class PElement extends HTMLElement {
  constructor() {
    console.info('constructor');
    super();
    this.state = {};
  }

  get template() {
    return '';
  }

  get attrs() {
    let attrs = {}
    for (let i = 0; i < this.attributes.length; i++) {
      attrs[this.attributes[i].nodeName] = this.attributes[i].nodeValue;
    }
    return attrs;
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

