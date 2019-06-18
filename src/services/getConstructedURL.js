function getConstructedUrl(apiPath, params){
    
      var queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');

      const url =
      process.env.REACT_APP_API_URL + apiPath + "?api_key=" + process.env.REACT_APP_API_ACCESS_KEY + '&' + queryString;

      return url;
}

export default getConstructedUrl;