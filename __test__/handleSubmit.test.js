const { handleSubmit } = require('../src/client/js/formHandler.js');


test(" It's defined & it's a function! ", () => {
expect(typeof(handleSubmit)).toBe("function");
});
