const request = require('superagent');


const getJargon = () => {
  return request
    .get('https://corporatebs-generator.sameerkumar.website/')
    .then(res => {
      console.log(res.body);
    });
};

getJargon();

module.exports = getJargon;
