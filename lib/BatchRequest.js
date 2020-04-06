const axios = require('axios');
const _ = require('lodash');


class BatchProcess {
  constructor(){
    this.axios = axios;
  }

  setToken(token){
    this.token = token;
  }

  getToken(){
    return this.token.split('\n').join('');
  }

  buildUrls({ templateUrl, ids }){
    return _.map(ids, id =>`${templateUrl.replace('[ID]', id)}&token=${this.getToken()}`);
  }

  async processAll(urls) {
    return Promise.all(_.map(urls, async url => {
      try {
        const response = await this.axios.get(url);
        console.log(`\nGET: ${url}`);
        console.log({
          status: response.status,
          message: response.statusText
        });
        return response.data;
      } catch (error) {
        console.error({
          status: error.response.status,
          message: error.message
        });
      }
    }));
  }
}

module.exports = BatchProcess;
