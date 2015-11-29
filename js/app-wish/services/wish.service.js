let WishService = function($http, PARSE) {

  let url = PARSE.URL + 'classes/wishes'

  this.getAllWishes = getAllWishes;
  
  function getAllWishes() {
    return $http.get(url, PARSE.CONFIG);
  }

};

WishService.$inject = ['$http', 'PARSE'];

export default WishService;