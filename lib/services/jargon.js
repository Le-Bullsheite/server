const request = require('superagent');

const getJargon = () => {
  return request
    .get('https://corporatebs-generator.sameerkumar.website/')
    .then(res => {
      return res.body;
    });
};

module.exports = getJargon;
