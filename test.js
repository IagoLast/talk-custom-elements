var assert = chai.assert;
describe('Hello world component', function() {
  var element;
  describe('state', function() {
    it('name should be empty', function() {
      element = document.createElement('hello-world');
      assert.equal(element.state.name, '');
    });
  });
  describe('view', function() {
    it('default content should be "hello"', function() {
      element = document.createElement('hello-world');
      document.body.appendChild(element);
      assert.equal(element.innerHTML, "<h1> Hello </h1>");
    });
    it('when name is "world" the content is correcly updated', function() {
      document.body.appendChild(element);
      element.setState({
        name: 'world'
      })
      assert.equal(element.innerHTML, "<h1> Hello world</h1>");
    });
  });
  after(function() {
    document.body.removeChild(element);
  });
});
