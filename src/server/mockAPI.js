const axios = require("axios");



async function getAPI(url) {

const result = await axios.post('https://api.meaningcloud.com/sentiment-2.1',
  {
  url,
  key: "de675db5432ccf4453ba22084c0f57fb",
  lang: "en"
});


return result.data;

}


module.exports = getAPI