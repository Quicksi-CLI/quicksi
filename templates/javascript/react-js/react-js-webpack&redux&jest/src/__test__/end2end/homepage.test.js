module.exports = {
  'Quicksi test': browser => {
    browser
      .url('http://localhost:8080')
      .waitForElementVisible('body', 5000)
      .end();
  },
};
