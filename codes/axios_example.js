const axios = require("axios");
await axios.get(`https://api.spoonacular.com/recipes/${1}/information`, {
  params: {
    apiKey: "c195650e68754ae3ad17041e6f2a462d"
  }
});
