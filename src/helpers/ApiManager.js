import axios from 'axios'

export default class ApiManager {
  // LocalHost
  // _BASE_URL =
  //   'https://my-json-server.typicode.com/benirvingplt/products/products'

  _BASE_URL =
    'https://fawadazam-dev-ed.my.salesforce.com/services/apexrest/api/Account/'
  GET_API_CALL = ''

  // Products
  //   _GET_PRODUCTS = "products/get";

  async sendGetRequest (_url, _params, _headers) {
    _url = this._BASE_URL
    console.log('API _url', _url)

    if (!_headers) {
      let token =
        '00D2v000002FG62!ARYAQIDLpt1wbJkCZnjYNPEd.RYism6QQ8pCA6WqUQ7OOavHJHyGisVvjd858BcXXZJzi0mvLH3AblI5uy3Am_eYMjpLec98'
      _headers = {
        Authorization: 'Bareer ' + token,
        'Content-Type': 'application/json',
        'Auth-URL': 'https://login.salesforce.com/services/oauth2/authorize',
        'Access-Token-URL':
          'https://login.salesforce.com/services/oauth2/token',
        'Clien-ID':
          '3MVG9G9pzCUSkzZvlVISJSfOL3C_efxY8B0UWS7qZLxXR8rBwZ_fjEhyRoPJ0yRCyBJaIcPocV_cqQzPzKe4H',
        'Client-Secret':
          'FBBBCC5E9AB10E89BD3EB1BAC9F6F44B6156741DDE757E6EA54F53D279A18DB2'
      }
    }

    try {
      let response = await axios.get(_url)

      //   console.log("API call response", response);
      return response
    } catch (error) {
      let err = []
      err.error = error
      err.no_result = true
      console.log('catch error on ', _url, ' call fail', err)
      setTimeout(() => {
        alert('Unable to connect with server')
      }, 400)
      return err
    }
  }

  // getProducts() {
  //   let url = this._GET_PRODUCTS;
  //   return this.sendGetRequest(url);
  // }

  getApiCall () {
    let url = this.GET_API_CALL
    return this.sendGetRequest(url)
  }
}
