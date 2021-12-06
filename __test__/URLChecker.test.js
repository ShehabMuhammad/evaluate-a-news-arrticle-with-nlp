const { checkForURL } = require("../src/client/js/URLChecker.js");

test("Is it defined and it's a function! ", () => {

expect(typeof(checkForURL)).toBe("function");

});

test(" It returns the right values ", () => {

expect(checkForURL("https://www.google.com/search/")).toBe(true);
expect(checkForURL("https://en.wikipedia.org/search/")).toBe(true);
expect(checkForURL("https://shehabmuhammad.github.io:99/Game-Of-Cards/")).toBe(true);
expect(checkForURL("ftp://www.document.edu")).toBe(true);

expect(checkForURL("htpp333://ads:::asda.orgsdsdfds")).toBe(false);
expect(checkForURL("http://www.jsoooo.com:99:120")).toBe(false);
expect(checkForURL("htpp333://ads:::asda.orgsdsdfds")).toBe(false);

});