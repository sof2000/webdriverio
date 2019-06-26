
function Page() {
    this.title = 'Asteria Bank – We Test For Better Software';
  }
  Page.prototype.open = function(path) {
    console.log(path);
    browser.url('/' + path);
  };
  Page.prototype.openNewUrl = function(url) {
    console.log(url);
    browser.url(url);
  };
  
  module.exports = new Page();