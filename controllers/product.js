const data = require('../assets/data');

function getProducts(query) {
  var ans;
  if(query)
    ans = data.filter((entry) => entry.name.toLowerCase().includes(query.toLowerCase()));
  else ans = data;
  return ans;
}

module.exports = { getProducts };
